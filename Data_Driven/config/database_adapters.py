"""
🗄️ Adaptateurs pour différents SGBD
Flexibilité MySQL, PostgreSQL, SQLite
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, List
from sqlalchemy import text

class DatabaseAdapter(ABC):
    """Interface pour les adaptateurs de base de données"""
    
    @abstractmethod
    def get_date_sub_function(self, date_expr: str, interval_value: int, interval_unit: str) -> str:
        """Fonction de soustraction de date spécifique au SGBD"""
        pass
    
    @abstractmethod
    def get_now_function(self) -> str:
        """Fonction NOW() spécifique au SGBD"""
        pass
    
    @abstractmethod
    def get_limit_clause(self, limit: int, offset: int = 0) -> str:
        """Clause LIMIT spécifique au SGBD"""
        pass
    
    @abstractmethod
    def get_connection_string_template(self) -> str:
        """Template de connexion pour le SGBD"""
        pass
    
    @abstractmethod
    def adapt_create_view_sql(self, view_sql: str) -> str:
        """Adapte le SQL de création de vue si nécessaire"""
        pass

class MySQLAdapter(DatabaseAdapter):
    """Adaptateur pour MySQL/MariaDB"""
    
    def get_date_sub_function(self, date_expr: str, interval_value: int, interval_unit: str) -> str:
        unit_map = {
            'DAY': 'DAY',
            'HOUR': 'HOUR', 
            'MINUTE': 'MINUTE',
            'MONTH': 'MONTH',
            'YEAR': 'YEAR'
        }
        unit = unit_map.get(interval_unit.upper(), 'DAY')
        return f"DATE_SUB({date_expr}, INTERVAL {interval_value} {unit})"
    
    def get_now_function(self) -> str:
        return "NOW()"
    
    def get_limit_clause(self, limit: int, offset: int = 0) -> str:
        if offset > 0:
            return f"LIMIT {offset}, {limit}"
        return f"LIMIT {limit}"
    
    def get_connection_string_template(self) -> str:
        return "mysql+pymysql://{username}:{password}@{host}:{port}/{database}?charset={charset}"
    
    def adapt_create_view_sql(self, view_sql: str) -> str:
        # MySQL supporte CREATE OR REPLACE VIEW
        return view_sql

class PostgreSQLAdapter(DatabaseAdapter):
    """Adaptateur pour PostgreSQL"""
    
    def get_date_sub_function(self, date_expr: str, interval_value: int, interval_unit: str) -> str:
        unit_map = {
            'DAY': 'days',
            'HOUR': 'hours',
            'MINUTE': 'minutes', 
            'MONTH': 'months',
            'YEAR': 'years'
        }
        unit = unit_map.get(interval_unit.upper(), 'days')
        return f"({date_expr} - INTERVAL '{interval_value} {unit}')"
    
    def get_now_function(self) -> str:
        return "CURRENT_TIMESTAMP"
    
    def get_limit_clause(self, limit: int, offset: int = 0) -> str:
        if offset > 0:
            return f"LIMIT {limit} OFFSET {offset}"
        return f"LIMIT {limit}"
    
    def get_connection_string_template(self) -> str:
        return "postgresql+psycopg2://{username}:{password}@{host}:{port}/{database}"
    
    def adapt_create_view_sql(self, view_sql: str) -> str:
        # PostgreSQL ne supporte pas CREATE OR REPLACE VIEW directement
        # Il faut DROP puis CREATE
        if "CREATE OR REPLACE VIEW" in view_sql:
            view_name = self._extract_view_name(view_sql)
            drop_sql = f"DROP VIEW IF EXISTS {view_name};"
            create_sql = view_sql.replace("CREATE OR REPLACE VIEW", "CREATE VIEW")
            return f"{drop_sql}\n{create_sql}"
        return view_sql
    
    def _extract_view_name(self, view_sql: str) -> str:
        """Extrait le nom de la vue du SQL"""
        import re
        match = re.search(r'CREATE (?:OR REPLACE )?VIEW\s+(\w+)', view_sql, re.IGNORECASE)
        return match.group(1) if match else "unknown_view"

class SQLiteAdapter(DatabaseAdapter):
    """Adaptateur pour SQLite"""
    
    def get_date_sub_function(self, date_expr: str, interval_value: int, interval_unit: str) -> str:
        unit_map = {
            'DAY': 'days',
            'HOUR': 'hours',
            'MINUTE': 'minutes',
            'MONTH': 'months', 
            'YEAR': 'years'
        }
        unit = unit_map.get(interval_unit.upper(), 'days')
        if unit in ['days', 'hours', 'minutes']:
            return f"datetime({date_expr}, '-{interval_value} {unit}')"
        else:
            # SQLite ne supporte pas months/years directement
            return f"date({date_expr}, '-{interval_value} {unit}')"
    
    def get_now_function(self) -> str:
        return "datetime('now')"
    
    def get_limit_clause(self, limit: int, offset: int = 0) -> str:
        if offset > 0:
            return f"LIMIT {limit} OFFSET {offset}"
        return f"LIMIT {limit}"
    
    def get_connection_string_template(self) -> str:
        return "sqlite:///{database}"
    
    def adapt_create_view_sql(self, view_sql: str) -> str:
        # SQLite supporte CREATE VIEW mais pas CREATE OR REPLACE
        if "CREATE OR REPLACE VIEW" in view_sql:
            view_name = self._extract_view_name(view_sql)
            drop_sql = f"DROP VIEW IF EXISTS {view_name};"
            create_sql = view_sql.replace("CREATE OR REPLACE VIEW", "CREATE VIEW")
            return f"{drop_sql}\n{create_sql}"
        return view_sql
    
    def _extract_view_name(self, view_sql: str) -> str:
        """Extrait le nom de la vue du SQL"""
        import re
        match = re.search(r'CREATE (?:OR REPLACE )?VIEW\s+(\w+)', view_sql, re.IGNORECASE)
        return match.group(1) if match else "unknown_view"

class DatabaseAdapterFactory:
    """Factory pour créer les adaptateurs selon le SGBD"""
    
    _adapters = {
        'mysql': MySQLAdapter,
        'mariadb': MySQLAdapter,
        'postgresql': PostgreSQLAdapter,
        'postgres': PostgreSQLAdapter,
        'sqlite': SQLiteAdapter
    }
    
    @classmethod
    def create_adapter(cls, db_type: str) -> DatabaseAdapter:
        """Crée un adaptateur pour le type de base donné"""
        db_type_lower = db_type.lower()
        
        if db_type_lower in cls._adapters:
            return cls._adapters[db_type_lower]()
        else:
            # Par défaut MySQL
            return MySQLAdapter()
    
    @classmethod
    def get_supported_databases(cls) -> List[str]:
        """Retourne la liste des SGBD supportés"""
        return list(cls._adapters.keys())

def adapt_query_for_database(query: str, db_adapter: DatabaseAdapter) -> str:
    """Adapte une requête SQL pour un SGBD spécifique"""
    adapted_query = query
    
    # Remplacer DATE_SUB(NOW(), INTERVAL X DAY)
    import re
    date_sub_pattern = r"DATE_SUB\(NOW\(\),\s*INTERVAL\s+(\d+)\s+(\w+)\)"
    
    def replace_date_sub(match):
        interval_value = int(match.group(1))
        interval_unit = match.group(2)
        now_func = db_adapter.get_now_function()
        return db_adapter.get_date_sub_function(now_func, interval_value, interval_unit)
    
    adapted_query = re.sub(date_sub_pattern, replace_date_sub, adapted_query, flags=re.IGNORECASE)
    
    # Remplacer NOW() si nécessaire
    if "NOW()" in adapted_query and db_adapter.get_now_function() != "NOW()":
        adapted_query = adapted_query.replace("NOW()", db_adapter.get_now_function())
    
    return adapted_query