"""
🗄️ Configuration des connexions aux bases de données Dolibarr
"""

import os
from typing import Dict, Any
from dataclasses import dataclass
from dotenv import load_dotenv

load_dotenv()

@dataclass
class DatabaseConfig:
    """Configuration pour une base de données"""
    host: str
    port: int
    database: str
    username: str
    password: str
    charset: str = 'utf8mb4'
    
    @property
    def connection_string(self) -> str:
        """String de connexion MySQL"""
        return f"mysql+pymysql://{self.username}:{self.password}@{self.host}:{self.port}/{self.database}?charset={self.charset}"

class DolibarrDatabaseConfig:
    """Configuration des bases de données Dolibarr"""
    
    @staticmethod
    def get_production_config() -> DatabaseConfig:
        """Configuration base de données Dolibarr production"""
        return DatabaseConfig(
            host=os.getenv('DOLIBARR_DB_HOST', 'localhost'),
            port=int(os.getenv('DOLIBARR_DB_PORT', 3306)),
            database=os.getenv('DOLIBARR_DB_NAME', 'dolibarr'),
            username=os.getenv('DOLIBARR_DB_USER', 'dolibarr'),
            password=os.getenv('DOLIBARR_DB_PASSWORD', '')
        )
    
    @staticmethod
    def get_warehouse_config() -> DatabaseConfig:
        """Configuration base de données DataWarehouse"""
        return DatabaseConfig(
            host=os.getenv('WAREHOUSE_DB_HOST', 'localhost'),
            port=int(os.getenv('WAREHOUSE_DB_PORT', 3306)),
            database=os.getenv('WAREHOUSE_DB_NAME', 'dolibarr_warehouse'),
            username=os.getenv('WAREHOUSE_DB_USER', 'warehouse'),
            password=os.getenv('WAREHOUSE_DB_PASSWORD', '')
        )

# Tables importantes Dolibarr BTP
DOLIBARR_BTP_TABLES = {
    # Tickets et interventions
    'tickets': 'llx_ticket',
    'ticket_extrafields': 'llx_ticket_extrafields',
    'actioncomm': 'llx_actioncomm',  # Historique interventions
    
    # Projets et chantiers
    'projet': 'llx_projet',
    'projet_task': 'llx_projet_task',
    'projet_task_time': 'llx_projet_task_time',
    
    # Produits et stock
    'product': 'llx_product',
    'product_stock': 'llx_product_stock',
    'stock_mouvement': 'llx_stock_mouvement',
    'entrepot': 'llx_entrepot',
    
    # Clients et sociétés
    'societe': 'llx_societe',
    'socpeople': 'llx_socpeople',  # Contacts
    
    # Factures et commandes
    'facture': 'llx_facture',
    'facturedet': 'llx_facturedet',
    'commande': 'llx_commande',
    'commandedet': 'llx_commandedet',
    
    # Utilisateurs et permissions
    'user': 'llx_user',
    'usergroup': 'llx_usergroup',
    'usergroup_user': 'llx_usergroup_user',
    
    # Modules spécifiques BTP
    'resource': 'llx_resource',  # Ressources (véhicules, matériel)
    'element_contact': 'llx_element_contact',  # Liaisons contacts
    'categorie': 'llx_categorie',  # Catégories
}