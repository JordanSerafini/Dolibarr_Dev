"""
🧪 Tests du système Data-Driven Dolibarr BTP
"""

import pytest
import pandas as pd
import numpy as np
from unittest.mock import Mock, patch
import sys
import os

# Ajouter le répertoire parent au path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from src.services.dolibarr_connector import DolibarrConnector
from src.services.data_lake import DataLake
from src.services.data_warehouse import DataWarehouse
from src.services.smart_analytics import SmartAnalytics
from config.database import DolibarrDatabaseConfig

class TestDolibarrConnector:
    """Tests du connecteur Dolibarr"""
    
    def test_config_creation(self):
        """Test création configuration"""
        config = DolibarrDatabaseConfig.get_production_config()
        assert config.host is not None
        assert config.port == 3306
        assert config.database is not None
    
    @patch('src.services.dolibarr_connector.create_engine')
    def test_connector_initialization(self, mock_engine):
        """Test initialisation connecteur"""
        connector = DolibarrConnector()
        assert connector.config is not None
        mock_engine.assert_called_once()

class TestDataLake:
    """Tests du DataLake"""
    
    def test_data_quality_assessment(self):
        """Test évaluation qualité données"""
        # Données test
        df = pd.DataFrame({
            'col1': [1, 2, np.nan, 4, 5],
            'col2': ['a', 'b', 'c', 'd', 'e'],
            'col3': [1.1, 2.2, 3.3, np.nan, 5.5]
        })
        
        data_lake = DataLake()
        quality = data_lake.assess_data_quality(df)
        
        assert 'total_rows' in quality
        assert 'missing_values_percent' in quality
        assert 'overall_score' in quality
        assert quality['total_rows'] == 5
        assert quality['overall_score'] >= 0
        assert quality['overall_score'] <= 100
    
    def test_data_cleaning_tickets(self):
        """Test nettoyage données tickets"""
        # Données tickets test
        df = pd.DataFrame({
            'ticket_id': [1, 2, 3],
            'created_date': ['2024-01-01', '2024-01-02', None],
            'date_close': ['2024-01-02', None, '2024-01-04'],
            'status': [0, 1, 2]
        })
        
        data_lake = DataLake()
        df_clean = data_lake._clean_tickets_data(df)
        
        assert 'resolution_hours' in df_clean.columns
        assert 'status_label' in df_clean.columns
        assert df_clean['status_label'].iloc[0] == 'Nouveau'

class TestDataWarehouse:
    """Tests du DataWarehouse"""
    
    @patch('src.services.data_warehouse.create_engine')
    def test_warehouse_initialization(self, mock_engine):
        """Test initialisation DataWarehouse"""
        warehouse = DataWarehouse()
        assert warehouse.config is not None
        mock_engine.assert_called_once()
    
    def test_warehouse_models(self):
        """Test modèles DataWarehouse"""
        from src.services.data_warehouse import DimDate, DimCustomer, FactTickets
        
        # Vérifier que les modèles ont les bonnes colonnes
        assert hasattr(DimDate, 'date_key')
        assert hasattr(DimDate, 'full_date')
        assert hasattr(DimCustomer, 'customer_key')
        assert hasattr(DimCustomer, 'company_name')
        assert hasattr(FactTickets, 'ticket_key')
        assert hasattr(FactTickets, 'resolution_hours')

class TestSmartAnalytics:
    """Tests Smart Analytics"""
    
    @patch('src.services.smart_analytics.DataWarehouse')
    def test_analytics_initialization(self, mock_warehouse):
        """Test initialisation Smart Analytics"""
        analytics = SmartAnalytics()
        assert analytics.warehouse is not None
        assert analytics.models_path == "models/"
    
    def test_segment_naming(self):
        """Test nommage des segments clients"""
        analytics = SmartAnalytics()
        
        # Segment Premium (coût élevé)
        segment_premium = pd.DataFrame({
            'total_tickets': [5, 6, 7],
            'total_cost': [10000, 12000, 15000],
            'avg_satisfaction': [4.5, 4.2, 4.8]
        })
        name = analytics._name_segment(segment_premium)
        assert name == "Clients Premium"
        
        # Segment Fréquents (beaucoup de tickets)
        segment_frequent = pd.DataFrame({
            'total_tickets': [15, 18, 20],
            'total_cost': [5000, 6000, 7000],
            'avg_satisfaction': [4.0, 4.1, 3.9]
        })
        name = analytics._name_segment(segment_frequent)
        assert name == "Clients Fréquents"

class TestIntegration:
    """Tests d'intégration"""
    
    def test_data_flow_simulation(self):
        """Simulation flux de données complet"""
        # Simuler des données Dolibarr
        mock_tickets = pd.DataFrame({
            'ticket_id': [1, 2, 3],
            'company_id': [101, 102, 103],
            'created_date': pd.to_datetime(['2024-01-01', '2024-01-02', '2024-01-03']),
            'resolution_hours': [2.5, 4.0, 1.5],
            'intervention_cost': [250, 400, 150],
            'customer_satisfaction': [4, 5, 3]
        })
        
        # Test qualité
        data_lake = DataLake()
        quality = data_lake.assess_data_quality(mock_tickets)
        
        assert quality['total_rows'] == 3
        assert quality['missing_values_percent'] == 0  # Pas de valeurs manquantes
        assert quality['overall_score'] == 100  # Score parfait
    
    def test_ml_pipeline_simulation(self):
        """Simulation pipeline ML"""
        # Données d'entraînement simulées
        training_data = pd.DataFrame({
            'intervention_type_encoded': [0, 1, 0, 1, 0],
            'category_encoded': [0, 0, 1, 1, 0],
            'priority_encoded': [0, 1, 0, 1, 2],
            'estimated_duration': [2, 4, 3, 5, 1],
            'city_encoded': [0, 1, 0, 1, 2],
            'budget_amount': [1000, 2000, 1500, 3000, 500],
            'actual_duration': [2.1, 4.2, 3.1, 5.5, 1.2]
        })
        
        # Simuler entraînement modèle
        from sklearn.ensemble import RandomForestRegressor
        from sklearn.model_selection import train_test_split
        
        features = ['intervention_type_encoded', 'category_encoded', 'priority_encoded', 
                   'estimated_duration', 'city_encoded', 'budget_amount']
        X = training_data[features]
        y = training_data['actual_duration']
        
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        model = RandomForestRegressor(n_estimators=10, random_state=42)
        model.fit(X_train, y_train)
        
        # Test prédiction
        if len(X_test) > 0:
            predictions = model.predict(X_test)
            assert len(predictions) == len(X_test)
            assert all(pred > 0 for pred in predictions)  # Durées positives

def test_requirements_imports():
    """Test que toutes les dépendances principales sont importables"""
    try:
        import pandas
        import numpy  
        import sklearn
        import sqlalchemy
        import click
        import loguru
        assert True
    except ImportError as e:
        pytest.fail(f"Dépendance manquante: {e}")

if __name__ == "__main__":
    # Exécution des tests
    pytest.main([__file__, "-v"])