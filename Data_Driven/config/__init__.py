"""
Configuration du système Data-Driven
"""

from .database import DolibarrDatabaseConfig, DatabaseConfig, DOLIBARR_BTP_TABLES

__all__ = [
    'DolibarrDatabaseConfig',
    'DatabaseConfig', 
    'DOLIBARR_BTP_TABLES'
]