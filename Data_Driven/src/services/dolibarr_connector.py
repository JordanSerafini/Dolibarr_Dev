"""
🔌 Connecteur Dolibarr - Extraction des données depuis la base Dolibarr
"""

import pandas as pd
import pymysql
from sqlalchemy import create_engine, text
from typing import Dict, List, Optional, Any
from datetime import datetime, timedelta
from loguru import logger

from config.database import DolibarrDatabaseConfig, DOLIBARR_BTP_TABLES

class DolibarrConnector:
    """Connecteur pour extraire les données de Dolibarr"""
    
    def __init__(self):
        self.config = DolibarrDatabaseConfig.get_production_config()
        self.engine = create_engine(self.config.connection_string)
        logger.info(f"Connexion Dolibarr initialisée: {self.config.host}:{self.config.port}")
    
    def test_connection(self) -> bool:
        """Test la connexion à la base Dolibarr"""
        try:
            with self.engine.connect() as conn:
                result = conn.execute(text("SELECT VERSION()"))
                version = result.fetchone()[0]
                logger.success(f"Connexion réussie - MySQL {version}")
                return True
        except Exception as e:
            logger.error(f"Erreur connexion Dolibarr: {e}")
            return False
    
    def extract_tickets_data(self, days_back: int = 30) -> pd.DataFrame:
        """Extrait les données tickets/interventions BTP"""
        query = f"""
        SELECT 
            t.rowid as ticket_id,
            t.ref as ticket_ref,
            t.track_id,
            t.fk_soc as company_id,
            t.fk_project as project_id,
            t.fk_user_create as created_by,
            t.fk_user_assign as assigned_to,
            t.subject,
            t.message,
            t.fk_statut as status,
            t.type_code,
            t.category_code,
            t.severity_code,
            t.datec as created_date,
            t.date_read,
            t.date_close,
            t.progress,
            
            -- Données société
            s.nom as company_name,
            s.code_client,
            s.ville as city,
            s.cp as postal_code,
            
            -- Données projet
            p.title as project_title,
            p.ref as project_ref,
            
            -- Données utilisateur créateur
            u1.lastname as creator_lastname,
            u1.firstname as creator_firstname,
            
            -- Données utilisateur assigné
            u2.lastname as assigned_lastname,
            u2.firstname as assigned_firstname,
            
            -- Extrafields (champs personnalisés BTP)
            te.intervention_type,
            te.material_needed,
            te.estimated_duration,
            te.actual_duration,
            te.intervention_cost,
            te.customer_satisfaction
            
        FROM {DOLIBARR_BTP_TABLES['tickets']} t
        LEFT JOIN {DOLIBARR_BTP_TABLES['societe']} s ON t.fk_soc = s.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['projet']} p ON t.fk_project = p.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['user']} u1 ON t.fk_user_create = u1.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['user']} u2 ON t.fk_user_assign = u2.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['ticket_extrafields']} te ON t.rowid = te.fk_object
        WHERE t.datec >= DATE_SUB(NOW(), INTERVAL {days_back} DAY)
        ORDER BY t.datec DESC
        """
        
        logger.info(f"Extraction tickets BTP des {days_back} derniers jours...")
        df = pd.read_sql(query, self.engine)
        logger.success(f"✅ {len(df)} tickets extraits")
        return df
    
    def extract_projects_data(self) -> pd.DataFrame:
        """Extrait les données projets/chantiers BTP"""
        query = f"""
        SELECT 
            p.rowid as project_id,
            p.ref as project_ref,
            p.title,
            p.description,
            p.fk_soc as company_id,
            p.dateo as start_date,
            p.datee as end_date,
            p.fk_statut as status,
            p.budget_amount,
            p.usage_bill_time,
            p.usage_organize_event,
            
            -- Société
            s.nom as company_name,
            s.ville as city,
            
            -- Tâches associées
            COUNT(pt.rowid) as total_tasks,
            SUM(pt.planned_workload) as total_planned_hours,
            SUM(pt.duration_effective) as total_actual_hours,
            AVG(pt.progress) as avg_progress
            
        FROM {DOLIBARR_BTP_TABLES['projet']} p
        LEFT JOIN {DOLIBARR_BTP_TABLES['societe']} s ON p.fk_soc = s.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['projet_task']} pt ON p.rowid = pt.fk_projet
        WHERE p.entity = 1
        GROUP BY p.rowid
        ORDER BY p.datec DESC
        """
        
        logger.info("Extraction projets/chantiers BTP...")
        df = pd.read_sql(query, self.engine)
        logger.success(f"✅ {len(df)} projets extraits")
        return df
    
    def extract_stock_movements(self, days_back: int = 30) -> pd.DataFrame:
        """Extrait les mouvements de stock matériel BTP"""
        query = f"""
        SELECT 
            sm.rowid as movement_id,
            sm.fk_product as product_id,
            sm.fk_entrepot as warehouse_id,
            sm.type_mouvement as movement_type,
            sm.value as quantity,
            sm.price as unit_price,
            sm.datem as movement_date,
            sm.label as description,
            
            -- Données produit
            pr.ref as product_ref,
            pr.label as product_name,
            pr.description as product_description,
            pr.price as product_price,
            pr.weight,
            pr.length,
            pr.width,
            pr.height,
            
            -- Données entrepôt
            e.ref as warehouse_ref,
            e.label as warehouse_name,
            e.lieu as warehouse_location
            
        FROM {DOLIBARR_BTP_TABLES['stock_mouvement']} sm
        LEFT JOIN {DOLIBARR_BTP_TABLES['product']} pr ON sm.fk_product = pr.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['entrepot']} e ON sm.fk_entrepot = e.rowid
        WHERE sm.datem >= DATE_SUB(NOW(), INTERVAL {days_back} DAY)
        ORDER BY sm.datem DESC
        """
        
        logger.info(f"Extraction mouvements stock des {days_back} derniers jours...")
        df = pd.read_sql(query, self.engine)
        logger.success(f"✅ {len(df)} mouvements extraits")
        return df
    
    def extract_interventions_history(self) -> pd.DataFrame:
        """Extrait l'historique complet des interventions"""
        query = f"""
        SELECT 
            ac.id as intervention_id,
            ac.ref as intervention_ref,
            ac.label as subject,
            ac.note as description,
            ac.datep as planned_date,
            ac.datef as actual_date,
            ac.durationp as planned_duration,
            ac.durationa as actual_duration,
            ac.fk_contact as contact_id,
            ac.fk_project as project_id,
            ac.fk_user_author as created_by,
            ac.fk_user_action as assigned_to,
            ac.code as action_code,
            ac.percent as completion_percent,
            
            -- Contact/Société
            sp.lastname as contact_lastname,
            sp.firstname as contact_firstname,
            s.nom as company_name,
            
            -- Projet
            p.title as project_title,
            
            -- Utilisateurs
            u1.lastname as creator_lastname,
            u2.lastname as technician_lastname
            
        FROM {DOLIBARR_BTP_TABLES['actioncomm']} ac
        LEFT JOIN {DOLIBARR_BTP_TABLES['socpeople']} sp ON ac.fk_contact = sp.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['societe']} s ON sp.fk_soc = s.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['projet']} p ON ac.fk_project = p.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['user']} u1 ON ac.fk_user_author = u1.rowid
        LEFT JOIN {DOLIBARR_BTP_TABLES['user']} u2 ON ac.fk_user_action = u2.rowid
        WHERE ac.code IN ('AC_INT_BTP', 'AC_MAINTENANCE', 'AC_REPAIR', 'AC_DIAGNOSTIC')
        ORDER BY ac.datep DESC
        """
        
        logger.info("Extraction historique interventions...")
        df = pd.read_sql(query, self.engine)
        logger.success(f"✅ {len(df)} interventions extraites")
        return df
    
    def get_table_info(self, table_name: str) -> Dict[str, Any]:
        """Récupère les informations sur une table"""
        query = f"DESCRIBE {table_name}"
        try:
            df = pd.read_sql(query, self.engine)
            return {
                'columns': df.to_dict('records'),
                'count': self.get_table_count(table_name)
            }
        except Exception as e:
            logger.error(f"Erreur info table {table_name}: {e}")
            return {}
    
    def get_table_count(self, table_name: str) -> int:
        """Compte les enregistrements d'une table"""
        query = f"SELECT COUNT(*) as count FROM {table_name}"
        try:
            result = pd.read_sql(query, self.engine)
            return result.iloc[0]['count']
        except:
            return 0
    
    def close(self):
        """Ferme la connexion"""
        if hasattr(self, 'engine'):
            self.engine.dispose()
            logger.info("Connexion Dolibarr fermée")