"""
🏢 DataWarehouse - Données structurées et optimisées pour l'analytics BTP
"""

import pandas as pd
import numpy as np
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, DateTime, Float, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.mysql import DECIMAL, TIMESTAMP
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any
from loguru import logger

from config.database import DolibarrDatabaseConfig
from .data_lake import DataLake

Base = declarative_base()

# Modèles DataWarehouse optimisés pour l'analytics BTP
class DimDate(Base):
    """Dimension Date pour analytics temporelles"""
    __tablename__ = 'dim_date'
    
    date_key = Column(Integer, primary_key=True)
    full_date = Column(DateTime)
    year = Column(Integer)
    quarter = Column(Integer)
    month = Column(Integer)
    month_name = Column(String(20))
    week = Column(Integer)
    day = Column(Integer)
    day_name = Column(String(20))
    is_weekend = Column(Boolean)
    is_holiday = Column(Boolean)

class DimCustomer(Base):
    """Dimension Client BTP"""
    __tablename__ = 'dim_customer'
    
    customer_key = Column(Integer, primary_key=True)
    customer_id = Column(Integer)  # ID Dolibarr
    company_name = Column(String(255))
    client_code = Column(String(50))
    city = Column(String(100))
    postal_code = Column(String(10))
    customer_type = Column(String(50))
    creation_date = Column(DateTime)
    is_active = Column(Boolean)

class DimProject(Base):
    """Dimension Projet/Chantier BTP"""
    __tablename__ = 'dim_project'
    
    project_key = Column(Integer, primary_key=True)
    project_id = Column(Integer)  # ID Dolibarr
    project_ref = Column(String(100))
    title = Column(String(255))
    customer_key = Column(Integer)
    status = Column(String(50))
    budget_amount = Column(DECIMAL(15, 2))
    start_date = Column(DateTime)
    end_date = Column(DateTime)

class DimTechnician(Base):
    """Dimension Technicien BTP"""
    __tablename__ = 'dim_technician'
    
    technician_key = Column(Integer, primary_key=True)
    user_id = Column(Integer)  # ID Dolibarr
    lastname = Column(String(100))
    firstname = Column(String(100))
    speciality = Column(String(100))
    hire_date = Column(DateTime)
    is_active = Column(Boolean)

class FactTickets(Base):
    """Table de faits - Tickets/Interventions BTP"""
    __tablename__ = 'fact_tickets'
    
    ticket_key = Column(Integer, primary_key=True)
    ticket_id = Column(Integer)  # ID Dolibarr
    date_key = Column(Integer)
    customer_key = Column(Integer)
    project_key = Column(Integer)
    technician_key = Column(Integer)
    
    # Métriques
    creation_date = Column(DateTime)
    close_date = Column(DateTime)
    resolution_hours = Column(Float)
    estimated_duration = Column(Float)
    actual_duration = Column(Float)
    intervention_cost = Column(DECIMAL(10, 2))
    customer_satisfaction = Column(Integer)
    
    # Dimensions
    status = Column(String(50))
    priority = Column(String(50))
    intervention_type = Column(String(100))
    category = Column(String(100))

class FactStock(Base):
    """Table de faits - Mouvements Stock BTP"""
    __tablename__ = 'fact_stock'
    
    movement_key = Column(Integer, primary_key=True)
    movement_id = Column(Integer)  # ID Dolibarr
    date_key = Column(Integer)
    product_key = Column(Integer)
    warehouse_key = Column(Integer)
    
    # Métriques
    quantity = Column(Float)
    unit_price = Column(DECIMAL(10, 2))
    total_value = Column(DECIMAL(15, 2))
    movement_date = Column(DateTime)
    
    # Dimensions
    movement_type = Column(String(50))
    product_ref = Column(String(100))
    product_name = Column(String(255))

class DataWarehouse:
    """Gestionnaire du DataWarehouse BTP analytique"""
    
    def __init__(self):
        self.config = DolibarrDatabaseConfig.get_warehouse_config()
        self.engine = create_engine(self.config.connection_string)
        self.Session = sessionmaker(bind=self.engine)
        self.data_lake = DataLake()
        
        logger.info(f"DataWarehouse initialisé: {self.config.host}:{self.config.port}")
        self.create_tables()
    
    def create_tables(self):
        """Crée les tables du DataWarehouse"""
        try:
            Base.metadata.create_all(self.engine)
            logger.success("✅ Tables DataWarehouse créées")
        except Exception as e:
            logger.error(f"Erreur création tables: {e}")
    
    def populate_dimension_date(self, start_year: int = 2020, end_year: int = 2030):
        """Peuple la dimension Date"""
        session = self.Session()
        
        try:
            # Vérifier si déjà peuplée
            existing_count = session.query(DimDate).count()
            if existing_count > 0:
                logger.info(f"Dimension Date déjà peuplée ({existing_count} enregistrements)")
                return
            
            dates_data = []
            current_date = datetime(start_year, 1, 1)
            end_date = datetime(end_year, 12, 31)
            
            while current_date <= end_date:
                date_key = int(current_date.strftime("%Y%m%d"))
                
                dates_data.append(DimDate(
                    date_key=date_key,
                    full_date=current_date,
                    year=current_date.year,
                    quarter=(current_date.month - 1) // 3 + 1,
                    month=current_date.month,
                    month_name=current_date.strftime("%B"),
                    week=current_date.isocalendar()[1],
                    day=current_date.day,
                    day_name=current_date.strftime("%A"),
                    is_weekend=current_date.weekday() >= 5,
                    is_holiday=False  # À enrichir avec calendrier jours fériés
                ))
                
                current_date += timedelta(days=1)
                
                # Commit par batch pour performance
                if len(dates_data) >= 1000:
                    session.add_all(dates_data)
                    session.commit()
                    dates_data = []
            
            # Commit final
            if dates_data:
                session.add_all(dates_data)
                session.commit()
            
            total_records = session.query(DimDate).count()
            logger.success(f"✅ Dimension Date peuplée: {total_records} enregistrements")
            
        except Exception as e:
            session.rollback()
            logger.error(f"Erreur peuplement dimension Date: {e}")
        finally:
            session.close()
    
    def load_customers_dimension(self):
        """Charge la dimension Clients depuis le DataLake"""
        session = self.Session()
        
        try:
            # Récupérer les données clients depuis les projets
            datasets = self.data_lake.list_datasets("projects")
            if not datasets.get("projects"):
                logger.warning("Aucun dataset projet trouvé")
                return
            
            # Prendre le dataset le plus récent
            latest_dataset = sorted(datasets["projects"])[-1]
            projects_df = self.data_lake.get_dataset("projects", latest_dataset)
            
            # Extraire les clients uniques
            customers_data = projects_df[['company_id', 'company_name', 'city']].drop_duplicates()
            customers_data = customers_data.dropna(subset=['company_id'])
            
            # Insérer/Mettre à jour la dimension
            for _, row in customers_data.iterrows():
                existing_customer = session.query(DimCustomer).filter_by(
                    customer_id=row['company_id']
                ).first()
                
                if not existing_customer:
                    customer = DimCustomer(
                        customer_id=int(row['company_id']),
                        company_name=row.get('company_name', ''),
                        city=row.get('city', ''),
                        customer_type='BTP',
                        creation_date=datetime.now(),
                        is_active=True
                    )
                    session.add(customer)
            
            session.commit()
            customer_count = session.query(DimCustomer).count()
            logger.success(f"✅ Dimension Clients chargée: {customer_count} clients")
            
        except Exception as e:
            session.rollback()
            logger.error(f"Erreur chargement dimension Clients: {e}")
        finally:
            session.close()
    
    def load_projects_dimension(self):
        """Charge la dimension Projets depuis le DataLake"""
        session = self.Session()
        
        try:
            datasets = self.data_lake.list_datasets("projects")
            if not datasets.get("projects"):
                logger.warning("Aucun dataset projet trouvé")
                return
            
            latest_dataset = sorted(datasets["projects"])[-1]
            projects_df = self.data_lake.get_dataset("projects", latest_dataset)
            
            for _, row in projects_df.iterrows():
                existing_project = session.query(DimProject).filter_by(
                    project_id=row['project_id']
                ).first()
                
                if not existing_project:
                    # Récupérer customer_key
                    customer_key = None
                    if pd.notna(row.get('company_id')):
                        customer = session.query(DimCustomer).filter_by(
                            customer_id=int(row['company_id'])
                        ).first()
                        if customer:
                            customer_key = customer.customer_key
                    
                    project = DimProject(
                        project_id=int(row['project_id']),
                        project_ref=row.get('project_ref', ''),
                        title=row.get('title', ''),
                        customer_key=customer_key,
                        status=row.get('status', ''),
                        budget_amount=row.get('budget_amount', 0),
                        start_date=pd.to_datetime(row.get('start_date'), errors='coerce'),
                        end_date=pd.to_datetime(row.get('end_date'), errors='coerce')
                    )
                    session.add(project)
            
            session.commit()
            project_count = session.query(DimProject).count()
            logger.success(f"✅ Dimension Projets chargée: {project_count} projets")
            
        except Exception as e:
            session.rollback()
            logger.error(f"Erreur chargement dimension Projets: {e}")
        finally:
            session.close()
    
    def load_tickets_facts(self):
        """Charge les faits Tickets depuis le DataLake"""
        session = self.Session()
        
        try:
            datasets = self.data_lake.list_datasets("tickets")
            if not datasets.get("tickets"):
                logger.warning("Aucun dataset tickets trouvé")
                return
            
            latest_dataset = sorted(datasets["tickets"])[-1]
            tickets_df = self.data_lake.get_dataset("tickets", latest_dataset)
            
            # Nettoyer et enrichir les données
            tickets_df = self.data_lake.clean_and_standardize(tickets_df, "tickets")
            
            for _, row in tickets_df.iterrows():
                existing_ticket = session.query(FactTickets).filter_by(
                    ticket_id=row['ticket_id']
                ).first()
                
                if not existing_ticket:
                    # Récupérer les clés des dimensions
                    date_key = None
                    if pd.notna(row.get('created_date')):
                        date_obj = pd.to_datetime(row['created_date'])
                        date_key = int(date_obj.strftime("%Y%m%d"))
                    
                    customer_key = None
                    if pd.notna(row.get('company_id')):
                        customer = session.query(DimCustomer).filter_by(
                            customer_id=int(row['company_id'])
                        ).first()
                        if customer:
                            customer_key = customer.customer_key
                    
                    project_key = None
                    if pd.notna(row.get('project_id')):
                        project = session.query(DimProject).filter_by(
                            project_id=int(row['project_id'])
                        ).first()
                        if project:
                            project_key = project.project_key
                    
                    ticket_fact = FactTickets(
                        ticket_id=int(row['ticket_id']),
                        date_key=date_key,
                        customer_key=customer_key,
                        project_key=project_key,
                        creation_date=pd.to_datetime(row.get('created_date'), errors='coerce'),
                        close_date=pd.to_datetime(row.get('date_close'), errors='coerce'),
                        resolution_hours=row.get('resolution_hours', 0),
                        estimated_duration=row.get('estimated_duration', 0),
                        actual_duration=row.get('actual_duration', 0),
                        intervention_cost=row.get('intervention_cost', 0),
                        customer_satisfaction=row.get('customer_satisfaction', 0),
                        status=row.get('status_label', ''),
                        priority=row.get('severity_code', ''),
                        intervention_type=row.get('intervention_type', ''),
                        category=row.get('category_code', '')
                    )
                    session.add(ticket_fact)
            
            session.commit()
            tickets_count = session.query(FactTickets).count()
            logger.success(f"✅ Faits Tickets chargés: {tickets_count} tickets")
            
        except Exception as e:
            session.rollback()
            logger.error(f"Erreur chargement faits Tickets: {e}")
        finally:
            session.close()
    
    def load_stock_facts(self):
        """Charge les faits Stock depuis le DataLake"""
        session = self.Session()
        
        try:
            datasets = self.data_lake.list_datasets("stock")
            if not datasets.get("stock"):
                logger.warning("Aucun dataset stock trouvé")
                return
            
            latest_dataset = sorted(datasets["stock"])[-1]
            stock_df = self.data_lake.get_dataset("stock", latest_dataset)
            
            stock_df = self.data_lake.clean_and_standardize(stock_df, "stock")
            
            for _, row in stock_df.iterrows():
                existing_movement = session.query(FactStock).filter_by(
                    movement_id=row['movement_id']
                ).first()
                
                if not existing_movement:
                    date_key = None
                    if pd.notna(row.get('movement_date')):
                        date_obj = pd.to_datetime(row['movement_date'])
                        date_key = int(date_obj.strftime("%Y%m%d"))
                    
                    stock_fact = FactStock(
                        movement_id=int(row['movement_id']),
                        date_key=date_key,
                        quantity=row.get('quantity', 0),
                        unit_price=row.get('unit_price', 0),
                        total_value=row.get('total_value', 0),
                        movement_date=pd.to_datetime(row.get('movement_date'), errors='coerce'),
                        movement_type=row.get('movement_type', ''),
                        product_ref=row.get('product_ref', ''),
                        product_name=row.get('product_name', '')
                    )
                    session.add(stock_fact)
            
            session.commit()
            stock_count = session.query(FactStock).count()
            logger.success(f"✅ Faits Stock chargés: {stock_count} mouvements")
            
        except Exception as e:
            session.rollback()
            logger.error(f"Erreur chargement faits Stock: {e}")
        finally:
            session.close()
    
    def full_etl_process(self):
        """Processus ETL complet DataLake -> DataWarehouse"""
        logger.info("🚀 Démarrage processus ETL complet")
        
        start_time = datetime.now()
        
        try:
            # 1. Peuplement dimensions de base
            self.populate_dimension_date()
            
            # 2. Chargement dimensions business
            self.load_customers_dimension()
            self.load_projects_dimension()
            
            # 3. Chargement tables de faits
            self.load_tickets_facts()
            self.load_stock_facts()
            
            # 4. Statistiques finales
            stats = self.get_warehouse_stats()
            
            duration = datetime.now() - start_time
            logger.success(f"✅ ETL terminé en {duration.total_seconds():.1f}s")
            logger.info(f"📊 Stats DataWarehouse: {stats}")
            
            return stats
            
        except Exception as e:
            logger.error(f"❌ Erreur processus ETL: {e}")
            raise
    
    def get_warehouse_stats(self) -> Dict[str, int]:
        """Statistiques du DataWarehouse"""
        session = self.Session()
        
        try:
            stats = {
                "dim_date": session.query(DimDate).count(),
                "dim_customer": session.query(DimCustomer).count(),
                "dim_project": session.query(DimProject).count(),
                "fact_tickets": session.query(FactTickets).count(),
                "fact_stock": session.query(FactStock).count()
            }
            
            return stats
            
        except Exception as e:
            logger.error(f"Erreur stats DataWarehouse: {e}")
            return {}
        finally:
            session.close()
    
    def create_analytical_views(self):
        """Crée des vues analytiques pour le reporting"""
        views_sql = [
            # Vue tickets par mois
            """
            CREATE OR REPLACE VIEW v_tickets_monthly AS
            SELECT 
                d.year,
                d.month,
                d.month_name,
                COUNT(*) as ticket_count,
                AVG(f.resolution_hours) as avg_resolution_hours,
                AVG(f.customer_satisfaction) as avg_satisfaction,
                SUM(f.intervention_cost) as total_cost
            FROM fact_tickets f
            JOIN dim_date d ON f.date_key = d.date_key
            WHERE f.creation_date IS NOT NULL
            GROUP BY d.year, d.month, d.month_name
            ORDER BY d.year, d.month
            """,
            
            # Vue performance par technicien
            """
            CREATE OR REPLACE VIEW v_technician_performance AS
            SELECT 
                t.firstname,
                t.lastname,
                COUNT(*) as total_interventions,
                AVG(f.resolution_hours) as avg_resolution_time,
                AVG(f.customer_satisfaction) as avg_satisfaction,
                SUM(f.intervention_cost) as total_revenue
            FROM fact_tickets f
            JOIN dim_technician t ON f.technician_key = t.technician_key
            WHERE f.close_date IS NOT NULL
            GROUP BY t.technician_key, t.firstname, t.lastname
            ORDER BY total_interventions DESC
            """,
            
            # Vue projets actifs
            """
            CREATE OR REPLACE VIEW v_active_projects AS
            SELECT 
                p.project_ref,
                p.title,
                c.company_name,
                p.budget_amount,
                COUNT(f.ticket_id) as total_tickets,
                AVG(f.resolution_hours) as avg_resolution_time,
                SUM(f.intervention_cost) as actual_cost,
                (SUM(f.intervention_cost) / p.budget_amount * 100) as budget_usage_percent
            FROM dim_project p
            JOIN dim_customer c ON p.customer_key = c.customer_key
            LEFT JOIN fact_tickets f ON p.project_key = f.project_key
            WHERE p.status = 'Active'
            GROUP BY p.project_key, p.project_ref, p.title, c.company_name, p.budget_amount
            ORDER BY budget_usage_percent DESC
            """
        ]
        
        try:
            with self.engine.connect() as conn:
                for view_sql in views_sql:
                    conn.execute(view_sql)
                    
            logger.success("✅ Vues analytiques créées")
            
        except Exception as e:
            logger.error(f"Erreur création vues: {e}")
    
    def close(self):
        """Ferme les connexions"""
        if hasattr(self, 'engine'):
            self.engine.dispose()
            logger.info("Connexions DataWarehouse fermées")