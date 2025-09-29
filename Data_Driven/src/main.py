"""
🚀 DOLIBARR DATA-DRIVEN SYSTEM - Point d'entrée principal
Architecture: DataLake -> DataWarehouse -> Smart Analytics
"""

import click
from datetime import datetime
from loguru import logger
import sys
import os

# Configuration des logs
logger.remove()
logger.add(
    sys.stdout,
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
    level="INFO"
)
logger.add(
    "logs/dolibarr_data_driven_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="30 days",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
    level="DEBUG"
)

# Imports services
from services.dolibarr_connector import DolibarrConnector
from services.data_lake import DataLake
from services.data_warehouse import DataWarehouse
from services.smart_analytics import SmartAnalytics

@click.group()
@click.version_option(version="1.0.0")
def cli():
    """🏗️ Système Data-Driven Dolibarr BTP
    
    Architecture complète: DataLake → DataWarehouse → Smart Analytics
    """
    logger.info("🚀 Dolibarr Data-Driven System v1.0.0")

@cli.command()
@click.option('--test-connection', is_flag=True, help='Test uniquement la connexion')
def extract(test_connection):
    """📥 Extraction des données depuis Dolibarr vers DataLake"""
    logger.info("🔄 Démarrage extraction DataLake...")
    
    try:
        # Test connexion si demandé
        if test_connection:
            connector = DolibarrConnector()
            if connector.test_connection():
                logger.success("✅ Connexion Dolibarr OK")
                return
            else:
                logger.error("❌ Échec connexion Dolibarr")
                sys.exit(1)
        
        # Extraction complète
        data_lake = DataLake()
        extraction_info = data_lake.extract_and_store_daily()
        
        # Rapport extraction
        total_records = sum(d.get('count', 0) for d in extraction_info.get('datasets', {}).values())
        logger.success(f"✅ Extraction terminée: {total_records} enregistrements")
        
        # Rapport qualité
        quality_report = data_lake.generate_quality_report()
        logger.info(f"📊 Score qualité global: {quality_report.get('overall_quality_score', 0)}/100")
        
    except Exception as e:
        logger.error(f"❌ Erreur extraction: {e}")
        sys.exit(1)

@cli.command()
@click.option('--full-rebuild', is_flag=True, help='Reconstruction complète du warehouse')
def warehouse(full_rebuild):
    """🏢 Chargement DataWarehouse depuis DataLake"""
    logger.info("🔄 Démarrage chargement DataWarehouse...")
    
    try:
        dw = DataWarehouse()
        
        if full_rebuild:
            logger.info("🔄 Reconstruction complète du DataWarehouse...")
            # Ici on pourrait ajouter la logique de drop/recreate tables
        
        # ETL complet
        stats = dw.full_etl_process()
        
        # Création des vues analytiques
        dw.create_analytical_views()
        
        logger.success(f"✅ DataWarehouse chargé: {stats}")
        
    except Exception as e:
        logger.error(f"❌ Erreur DataWarehouse: {e}")
        sys.exit(1)

@cli.command()
@click.option('--module', type=click.Choice(['anomalies', 'segmentation', 'prediction', 'insights', 'all']), 
              default='all', help='Module d\'analyse à exécuter')
def analytics(module):
    """🧠 Exécution Smart Analytics et Machine Learning"""
    logger.info(f"🔄 Démarrage Smart Analytics - Module: {module}")
    
    try:
        smart_analytics = SmartAnalytics()
        
        if module == 'all':
            # Analyse complète
            results = smart_analytics.run_full_analysis()
            logger.info("📊 Résultats analyse complète:")
            
            for module_name, module_results in results.get('modules', {}).items():
                logger.info(f"  • {module_name}: {len(module_results.get('anomalies', module_results.get('segments', module_results.get('predictions', module_results.get('insights', [])))))} résultats")
        
        elif module == 'anomalies':
            results = smart_analytics.detect_anomalies_interventions()
            logger.info(f"🔍 Détection anomalies: {len(results.get('anomalies', []))} anomalies détectées")
        
        elif module == 'segmentation':
            results = smart_analytics.customer_segmentation()
            logger.info(f"👥 Segmentation: {len(results.get('segments', []))} segments créés")
        
        elif module == 'prediction':
            results = smart_analytics.predict_stock_needs()
            logger.info(f"📦 Prédiction stock: {len(results.get('predictions', []))} produits analysés")
        
        elif module == 'insights':
            results = smart_analytics.generate_performance_insights()
            logger.info(f"📊 Insights: {len(results.get('insights', []))} insights générés")
        
        logger.success("✅ Analyse terminée")
        
    except Exception as e:
        logger.error(f"❌ Erreur Smart Analytics: {e}")
        sys.exit(1)

@cli.command()
@click.option('--days', default=7, help='Période d\'analyse en jours')
def quality(days):
    """📋 Rapport qualité des données"""
    logger.info(f"📊 Génération rapport qualité ({days} jours)...")
    
    try:
        data_lake = DataLake()
        report = data_lake.generate_quality_report(period_days=days)
        
        logger.info("📊 Rapport Qualité:")
        logger.info(f"  • Datasets analysés: {report.get('datasets_analyzed', 0)}")
        logger.info(f"  • Total enregistrements: {report.get('total_records', 0):,}")
        logger.info(f"  • Score qualité global: {report.get('overall_quality_score', 0)}/100")
        logger.info(f"  • Problèmes détectés: {len(report.get('issues_found', []))}")
        
        # Détail des problèmes
        for issue in report.get('issues_found', []):
            logger.warning(f"    ⚠️ {issue['dataset']}: {issue['issue']} (score: {issue['score']})")
        
        logger.success("✅ Rapport qualité généré")
        
    except Exception as e:
        logger.error(f"❌ Erreur rapport qualité: {e}")
        sys.exit(1)

@cli.command()
def pipeline():
    """🔄 Pipeline complet: Extract → Warehouse → Analytics"""
    logger.info("🚀 Démarrage pipeline complet Data-Driven...")
    
    start_time = datetime.now()
    
    try:
        # 1. Extraction DataLake
        logger.info("1️⃣ Extraction vers DataLake...")
        data_lake = DataLake()
        extraction_info = data_lake.extract_and_store_daily()
        
        # 2. Chargement DataWarehouse
        logger.info("2️⃣ Chargement DataWarehouse...")
        dw = DataWarehouse()
        warehouse_stats = dw.full_etl_process()
        
        # 3. Analytics & ML
        logger.info("3️⃣ Smart Analytics...")
        smart_analytics = SmartAnalytics()
        analytics_results = smart_analytics.run_full_analysis()
        
        # 4. Rapport final
        duration = datetime.now() - start_time
        
        logger.success("✅ Pipeline complet terminé!")
        logger.info(f"⏱️ Durée totale: {duration.total_seconds():.1f}s")
        logger.info("📊 Résumé:")
        
        # Extraction
        total_extracted = sum(d.get('count', 0) for d in extraction_info.get('datasets', {}).values())
        logger.info(f"  • Extraction: {total_extracted} enregistrements")
        
        # Warehouse
        total_warehouse = sum(warehouse_stats.values()) if warehouse_stats else 0
        logger.info(f"  • DataWarehouse: {total_warehouse} enregistrements")
        
        # Analytics
        total_insights = len(analytics_results.get('modules', {}).get('performance_insights', {}).get('insights', []))
        logger.info(f"  • Smart Analytics: {total_insights} insights générés")
        
    except Exception as e:
        logger.error(f"❌ Erreur pipeline: {e}")
        sys.exit(1)

@cli.command()
@click.option('--days', default=90, help='Jours de données à conserver')
def cleanup(days):
    """🗑️ Nettoyage des anciennes données"""
    logger.info(f"🗑️ Nettoyage données > {days} jours...")
    
    try:
        data_lake = DataLake()
        deleted_files = data_lake.cleanup_old_data(days_to_keep=days)
        
        logger.success(f"✅ Nettoyage terminé: {deleted_files} fichiers supprimés")
        
    except Exception as e:
        logger.error(f"❌ Erreur nettoyage: {e}")
        sys.exit(1)

@cli.command()
def status():
    """📊 Statut global du système"""
    logger.info("📊 Vérification statut système...")
    
    try:
        # Test connexion Dolibarr
        connector = DolibarrConnector()
        dolibarr_ok = connector.test_connection()
        
        # Statut DataLake
        data_lake = DataLake()
        datasets = data_lake.list_datasets()
        total_datasets = sum(len(files) for files in datasets.values())
        
        # Statut DataWarehouse
        dw = DataWarehouse()
        warehouse_stats = dw.get_warehouse_stats()
        
        logger.info("🏗️ Statut Système Data-Driven:")
        logger.info(f"  • Connexion Dolibarr: {'✅ OK' if dolibarr_ok else '❌ ERREUR'}")
        logger.info(f"  • DataLake: {total_datasets} datasets disponibles")
        logger.info(f"  • DataWarehouse: {sum(warehouse_stats.values()) if warehouse_stats else 0} enregistrements")
        
        # Détail par catégorie
        logger.info("📁 Datasets DataLake:")
        for category, files in datasets.items():
            logger.info(f"    • {category}: {len(files)} fichiers")
        
        logger.info("🏢 Tables DataWarehouse:")
        for table, count in warehouse_stats.items():
            logger.info(f"    • {table}: {count:,} enregistrements")
        
    except Exception as e:
        logger.error(f"❌ Erreur statut: {e}")
        sys.exit(1)

if __name__ == '__main__':
    # Créer répertoire logs
    os.makedirs('logs', exist_ok=True)
    os.makedirs('models', exist_ok=True)
    os.makedirs('data/lake', exist_ok=True)
    
    cli()