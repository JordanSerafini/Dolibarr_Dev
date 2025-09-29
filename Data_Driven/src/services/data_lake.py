"""
🏞️ DataLake - Stockage et gestion des données brutes Dolibarr BTP
"""

import pandas as pd
import numpy as np
import json
import pickle
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Any, Union
from loguru import logger
import pyjanitor  # Pour le nettoyage des données

from .dolibarr_connector import DolibarrConnector

class DataLake:
    """Gestionnaire du DataLake pour les données brutes Dolibarr BTP"""
    
    def __init__(self, base_path: str = "data/lake"):
        self.base_path = Path(base_path)
        self.setup_directories()
        self.dolibarr = DolibarrConnector()
        logger.info(f"DataLake initialisé: {self.base_path}")
    
    def setup_directories(self):
        """Crée la structure du DataLake"""
        directories = [
            "raw/tickets",
            "raw/projects", 
            "raw/stock",
            "raw/interventions",
            "raw/financial",
            "processed/daily",
            "processed/weekly", 
            "processed/monthly",
            "metadata",
            "quality_reports"
        ]
        
        for directory in directories:
            (self.base_path / directory).mkdir(parents=True, exist_ok=True)
        
        logger.info("Structure DataLake créée")
    
    def extract_and_store_daily(self) -> Dict[str, Any]:
        """Extraction quotidienne et stockage des données"""
        today = datetime.now().strftime("%Y-%m-%d")
        extraction_info = {
            "date": today,
            "timestamp": datetime.now().isoformat(),
            "datasets": {}
        }
        
        logger.info(f"🚀 Extraction quotidienne du {today}")
        
        try:
            # 1. Tickets et interventions
            tickets_df = self.dolibarr.extract_tickets_data(days_back=1)
            tickets_path = self.store_raw_data(tickets_df, "tickets", f"tickets_{today}")
            extraction_info["datasets"]["tickets"] = {
                "count": len(tickets_df),
                "path": str(tickets_path),
                "quality_score": self.assess_data_quality(tickets_df)
            }
            
            # 2. Projets/Chantiers
            projects_df = self.dolibarr.extract_projects_data()
            projects_path = self.store_raw_data(projects_df, "projects", f"projects_{today}")
            extraction_info["datasets"]["projects"] = {
                "count": len(projects_df),
                "path": str(projects_path),
                "quality_score": self.assess_data_quality(projects_df)
            }
            
            # 3. Mouvements stock
            stock_df = self.dolibarr.extract_stock_movements(days_back=1)
            stock_path = self.store_raw_data(stock_df, "stock", f"stock_{today}")
            extraction_info["datasets"]["stock"] = {
                "count": len(stock_df),
                "path": str(stock_path),
                "quality_score": self.assess_data_quality(stock_df)
            }
            
            # 4. Historique interventions
            interventions_df = self.dolibarr.extract_interventions_history()
            interventions_path = self.store_raw_data(interventions_df, "interventions", f"interventions_{today}")
            extraction_info["datasets"]["interventions"] = {
                "count": len(interventions_df),
                "path": str(interventions_path),
                "quality_score": self.assess_data_quality(interventions_df)
            }
            
            # Sauvegarde métadonnées
            self.store_metadata(extraction_info, f"extraction_{today}")
            
            logger.success(f"✅ Extraction quotidienne terminée - {sum(d['count'] for d in extraction_info['datasets'].values())} enregistrements")
            
        except Exception as e:
            logger.error(f"❌ Erreur extraction quotidienne: {e}")
            extraction_info["error"] = str(e)
        
        return extraction_info
    
    def store_raw_data(self, df: pd.DataFrame, category: str, filename: str) -> Path:
        """Stocke les données brutes dans le DataLake"""
        # Stockage en multiple formats pour flexibilité
        base_path = self.base_path / "raw" / category
        
        # Format Parquet (optimal pour analytics)
        parquet_path = base_path / f"{filename}.parquet"
        df.to_parquet(parquet_path, compression='snappy', index=False)
        
        # Format CSV (lisible humain)
        csv_path = base_path / f"{filename}.csv"
        df.to_csv(csv_path, index=False, encoding='utf-8')
        
        # Format JSON (APIs)
        json_path = base_path / f"{filename}.json"
        df.to_json(json_path, orient='records', date_format='iso', indent=2)
        
        logger.info(f"📁 Données stockées: {len(df)} lignes -> {parquet_path}")
        return parquet_path
    
    def assess_data_quality(self, df: pd.DataFrame) -> Dict[str, Any]:
        """Évalue la qualité des données"""
        total_cells = df.shape[0] * df.shape[1]
        missing_cells = df.isnull().sum().sum()
        
        quality_report = {
            "total_rows": len(df),
            "total_columns": len(df.columns),
            "missing_values_count": int(missing_cells),
            "missing_values_percent": round((missing_cells / total_cells) * 100, 2) if total_cells > 0 else 0,
            "duplicate_rows": int(df.duplicated().sum()),
            "columns_with_nulls": df.isnull().any().sum(),
            "data_types": df.dtypes.to_dict(),
            "memory_usage_mb": round(df.memory_usage(deep=True).sum() / 1024 / 1024, 2)
        }
        
        # Score qualité global (0-100)
        score = 100
        score -= min(quality_report["missing_values_percent"], 30)  # -30 max pour valeurs manquantes
        score -= min(quality_report["duplicate_rows"] / len(df) * 100, 20)  # -20 max pour doublons
        
        quality_report["overall_score"] = max(0, round(score))
        
        return quality_report
    
    def clean_and_standardize(self, df: pd.DataFrame, dataset_type: str) -> pd.DataFrame:
        """Nettoie et standardise les données selon le type"""
        logger.info(f"🧹 Nettoyage dataset {dataset_type}")
        
        # Nettoyage général
        df_clean = (df
                   .clean_names()  # Standardise les noms de colonnes
                   .remove_empty()  # Supprime lignes/colonnes vides
                   .fill_direction()  # Remplit valeurs manquantes par propagation
                   )
        
        # Nettoyage spécifique par type
        if dataset_type == "tickets":
            df_clean = self._clean_tickets_data(df_clean)
        elif dataset_type == "projects":
            df_clean = self._clean_projects_data(df_clean)
        elif dataset_type == "stock":
            df_clean = self._clean_stock_data(df_clean)
        elif dataset_type == "interventions":
            df_clean = self._clean_interventions_data(df_clean)
        
        logger.success(f"✅ Nettoyage terminé: {len(df)} -> {len(df_clean)} lignes")
        return df_clean
    
    def _clean_tickets_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Nettoyage spécifique tickets BTP"""
        if 'created_date' in df.columns:
            df['created_date'] = pd.to_datetime(df['created_date'], errors='coerce')
        
        if 'date_close' in df.columns:
            df['date_close'] = pd.to_datetime(df['date_close'], errors='coerce')
        
        # Calcul durée résolution
        if 'created_date' in df.columns and 'date_close' in df.columns:
            df['resolution_hours'] = (df['date_close'] - df['created_date']).dt.total_seconds() / 3600
        
        # Standardisation statuts
        if 'status' in df.columns:
            status_mapping = {0: 'Nouveau', 1: 'En cours', 2: 'Résolu', 3: 'Fermé'}
            df['status_label'] = df['status'].map(status_mapping)
        
        return df
    
    def _clean_projects_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Nettoyage spécifique projets BTP"""
        if 'start_date' in df.columns:
            df['start_date'] = pd.to_datetime(df['start_date'], errors='coerce')
        
        if 'end_date' in df.columns:
            df['end_date'] = pd.to_datetime(df['end_date'], errors='coerce')
        
        # Calcul durée projet
        if 'start_date' in df.columns and 'end_date' in df.columns:
            df['project_duration_days'] = (df['end_date'] - df['start_date']).dt.days
        
        # Normalisation budget
        if 'budget_amount' in df.columns:
            df['budget_amount'] = pd.to_numeric(df['budget_amount'], errors='coerce')
        
        return df
    
    def _clean_stock_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Nettoyage spécifique stock/matériel"""
        if 'movement_date' in df.columns:
            df['movement_date'] = pd.to_datetime(df['movement_date'], errors='coerce')
        
        if 'quantity' in df.columns:
            df['quantity'] = pd.to_numeric(df['quantity'], errors='coerce')
        
        if 'unit_price' in df.columns:
            df['unit_price'] = pd.to_numeric(df['unit_price'], errors='coerce')
            df['total_value'] = df['quantity'] * df['unit_price']
        
        return df
    
    def _clean_interventions_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """Nettoyage spécifique interventions"""
        if 'planned_date' in df.columns:
            df['planned_date'] = pd.to_datetime(df['planned_date'], errors='coerce')
        
        if 'actual_date' in df.columns:
            df['actual_date'] = pd.to_datetime(df['actual_date'], errors='coerce')
        
        # Calcul écart planifié/réel
        if 'planned_duration' in df.columns and 'actual_duration' in df.columns:
            df['planned_duration'] = pd.to_numeric(df['planned_duration'], errors='coerce')
            df['actual_duration'] = pd.to_numeric(df['actual_duration'], errors='coerce')
            df['duration_variance_percent'] = ((df['actual_duration'] - df['planned_duration']) / df['planned_duration'] * 100).round(2)
        
        return df
    
    def store_metadata(self, metadata: Dict[str, Any], filename: str):
        """Stocke les métadonnées d'extraction"""
        metadata_path = self.base_path / "metadata" / f"{filename}.json"
        with open(metadata_path, 'w', encoding='utf-8') as f:
            json.dump(metadata, f, indent=2, ensure_ascii=False, default=str)
        
        logger.info(f"📋 Métadonnées sauvegardées: {metadata_path}")
    
    def get_dataset(self, category: str, filename: str, format: str = "parquet") -> pd.DataFrame:
        """Récupère un dataset du DataLake"""
        file_path = self.base_path / "raw" / category / f"{filename}.{format}"
        
        if not file_path.exists():
            raise FileNotFoundError(f"Dataset non trouvé: {file_path}")
        
        if format == "parquet":
            return pd.read_parquet(file_path)
        elif format == "csv":
            return pd.read_csv(file_path)
        elif format == "json":
            return pd.read_json(file_path)
        else:
            raise ValueError(f"Format non supporté: {format}")
    
    def list_datasets(self, category: Optional[str] = None) -> Dict[str, List[str]]:
        """Liste les datasets disponibles"""
        datasets = {}
        
        if category:
            categories = [category]
        else:
            categories = ["tickets", "projects", "stock", "interventions", "financial"]
        
        for cat in categories:
            cat_path = self.base_path / "raw" / cat
            if cat_path.exists():
                datasets[cat] = [f.stem for f in cat_path.glob("*.parquet")]
        
        return datasets
    
    def generate_quality_report(self, period_days: int = 7) -> Dict[str, Any]:
        """Génère un rapport qualité des données"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=period_days)
        
        report = {
            "period": f"{start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}",
            "generated_at": datetime.now().isoformat(),
            "datasets_analyzed": 0,
            "total_records": 0,
            "quality_scores": {},
            "issues_found": []
        }
        
        # Analyse qualité par dataset
        for category in ["tickets", "projects", "stock", "interventions"]:
            datasets = self.list_datasets(category)
            if category in datasets:
                for dataset_name in datasets[category]:
                    try:
                        df = self.get_dataset(category, dataset_name)
                        quality = self.assess_data_quality(df)
                        
                        report["datasets_analyzed"] += 1
                        report["total_records"] += len(df)
                        report["quality_scores"][f"{category}_{dataset_name}"] = quality["overall_score"]
                        
                        # Identification des problèmes
                        if quality["overall_score"] < 80:
                            report["issues_found"].append({
                                "dataset": f"{category}_{dataset_name}",
                                "issue": "Low quality score",
                                "score": quality["overall_score"],
                                "details": quality
                            })
                            
                    except Exception as e:
                        logger.warning(f"Erreur analyse qualité {category}/{dataset_name}: {e}")
        
        # Calcul score global
        if report["quality_scores"]:
            report["overall_quality_score"] = round(
                sum(report["quality_scores"].values()) / len(report["quality_scores"])
            )
        else:
            report["overall_quality_score"] = 0
        
        # Sauvegarde rapport
        report_date = datetime.now().strftime("%Y-%m-%d")
        self.store_metadata(report, f"quality_report_{report_date}")
        
        logger.info(f"📊 Rapport qualité généré - Score global: {report['overall_quality_score']}/100")
        return report
    
    def cleanup_old_data(self, days_to_keep: int = 90):
        """Nettoie les anciennes données du DataLake"""
        cutoff_date = datetime.now() - timedelta(days=days_to_keep)
        deleted_files = 0
        
        for category_path in (self.base_path / "raw").iterdir():
            if category_path.is_dir():
                for file_path in category_path.iterdir():
                    if file_path.stat().st_mtime < cutoff_date.timestamp():
                        file_path.unlink()
                        deleted_files += 1
        
        logger.info(f"🗑️ Nettoyage DataLake: {deleted_files} fichiers supprimés (> {days_to_keep} jours)")
        return deleted_files