"""
🕐 Scheduler automatique pour le système Data-Driven Dolibarr BTP
Orchestre les tâches d'extraction, transformation et analyse
"""

import schedule
import time
import subprocess
import sys
import os
from datetime import datetime
from loguru import logger
from pathlib import Path

# Configuration des logs pour le scheduler
logger.remove()
logger.add(
    sys.stdout,
    format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>SCHEDULER</cyan> - <level>{message}</level>",
    level="INFO"
)
logger.add(
    "logs/scheduler_{time:YYYY-MM-DD}.log",
    rotation="1 day",
    retention="30 days",
    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | SCHEDULER - {message}",
    level="DEBUG"
)

class DolibarrDataScheduler:
    """Planificateur des tâches Data-Driven"""
    
    def __init__(self):
        self.base_dir = Path(__file__).parent.parent
        self.python_path = sys.executable
        self.main_script = self.base_dir / "src" / "main.py"
        
        logger.info(f"🕐 Scheduler initialisé - Base: {self.base_dir}")
    
    def run_command(self, command: str, description: str = ""):
        """Exécute une commande du système Data-Driven"""
        full_command = f"{self.python_path} {self.main_script} {command}"
        
        try:
            logger.info(f"🚀 Démarrage: {description or command}")
            
            # Changer vers le répertoire du projet
            os.chdir(self.base_dir)
            
            # Exécuter la commande
            result = subprocess.run(
                full_command.split(),
                capture_output=True,
                text=True,
                timeout=3600  # Timeout 1h
            )
            
            if result.returncode == 0:
                logger.success(f"✅ {description or command} terminé avec succès")
                if result.stdout:
                    logger.debug(f"Output: {result.stdout[:500]}")
            else:
                logger.error(f"❌ {description or command} échoué (code: {result.returncode})")
                if result.stderr:
                    logger.error(f"Erreur: {result.stderr[:500]}")
                    
        except subprocess.TimeoutExpired:
            logger.error(f"⏰ Timeout {description or command} (> 1h)")
        except Exception as e:
            logger.error(f"💥 Exception {description or command}: {e}")
    
    def daily_extraction(self):
        """Extraction quotidienne des données"""
        self.run_command("extract", "Extraction quotidienne DataLake")
    
    def hourly_analytics(self):
        """Analytics légers toutes les heures"""
        self.run_command("analytics --module insights", "Analytics insights horaires")
    
    def weekly_warehouse_refresh(self):
        """Refresh complet DataWarehouse hebdomadaire"""
        self.run_command("warehouse", "Refresh DataWarehouse hebdomadaire")
    
    def weekly_full_analytics(self):
        """Analytics complets hebdomadaires"""
        self.run_command("analytics", "Analytics complets hebdomadaires")
    
    def weekly_pipeline(self):
        """Pipeline complet hebdomadaire"""
        self.run_command("pipeline", "Pipeline complet hebdomadaire")
    
    def monthly_cleanup(self):
        """Nettoyage mensuel"""
        self.run_command("cleanup --days 90", "Nettoyage mensuel (90j)")
    
    def quality_check(self):
        """Vérification qualité bi-quotidienne"""
        self.run_command("quality --days 7", "Contrôle qualité (7j)")
    
    def setup_schedule(self):
        """Configure la planification des tâches"""
        
        # ⏰ QUOTIDIEN
        schedule.every().day.at("06:00").do(
            self.daily_extraction
        ).tag('daily', 'extraction')
        
        schedule.every().day.at("12:00").do(
            self.quality_check
        ).tag('daily', 'quality')
        
        schedule.every().day.at("18:00").do(
            self.quality_check
        ).tag('daily', 'quality')
        
        # ⏰ HORAIRE (heures ouvrables)
        for hour in [9, 11, 14, 16]:
            schedule.every().day.at(f"{hour:02d}:00").do(
                self.hourly_analytics
            ).tag('hourly', 'analytics')
        
        # ⏰ HEBDOMADAIRE
        schedule.every().sunday.at("02:00").do(
            self.weekly_pipeline
        ).tag('weekly', 'pipeline')
        
        schedule.every().wednesday.at("22:00").do(
            self.weekly_warehouse_refresh
        ).tag('weekly', 'warehouse')
        
        schedule.every().saturday.at("20:00").do(
            self.weekly_full_analytics
        ).tag('weekly', 'analytics')
        
        # ⏰ MENSUEL
        # Note: schedule ne supporte pas directement le mensuel, 
        # on utilisera une vérification du jour
        schedule.every().day.at("03:00").do(
            self._monthly_tasks_check
        ).tag('monthly', 'cleanup')
        
        logger.info("📅 Planning configuré:")
        logger.info("  • Quotidien: Extraction (6h), Qualité (12h, 18h)")
        logger.info("  • Horaire: Analytics (9h, 11h, 14h, 16h)")
        logger.info("  • Hebdomadaire: Pipeline (Dim 2h), Warehouse (Mer 22h), Analytics (Sam 20h)")
        logger.info("  • Mensuel: Cleanup (1er du mois 3h)")
    
    def _monthly_tasks_check(self):
        """Vérifie si on doit exécuter les tâches mensuelles"""
        today = datetime.now()
        if today.day == 1:  # Premier du mois
            logger.info("📅 Premier du mois - Exécution tâches mensuelles")
            self.monthly_cleanup()
    
    def run_forever(self):
        """Lance le scheduler en mode continu"""
        logger.info("🚀 Démarrage scheduler Data-Driven en mode continu...")
        
        # Vérification initiale
        self.run_command("status", "Vérification statut initial")
        
        logger.info("⏳ En attente des tâches planifiées...")
        logger.info("📋 Prochaines tâches:")
        
        # Afficher les 5 prochaines tâches
        jobs = schedule.get_jobs()[:5]
        for i, job in enumerate(jobs, 1):
            logger.info(f"  {i}. {job.next_run} - {job.job_func.__name__}")
        
        try:
            while True:
                schedule.run_pending()
                time.sleep(60)  # Vérification chaque minute
                
        except KeyboardInterrupt:
            logger.info("🛑 Arrêt scheduler demandé")
        except Exception as e:
            logger.error(f"💥 Erreur scheduler: {e}")
    
    def run_once(self, task_type: str = "status"):
        """Exécute une tâche unique"""
        task_map = {
            "status": ("status", "Vérification statut"),
            "extract": ("extract", "Extraction unique"),
            "warehouse": ("warehouse", "Chargement DataWarehouse"),
            "analytics": ("analytics", "Analytics complets"),
            "pipeline": ("pipeline", "Pipeline complet"),
            "quality": ("quality", "Contrôle qualité"),
            "cleanup": ("cleanup", "Nettoyage")
        }
        
        if task_type in task_map:
            command, description = task_map[task_type]
            self.run_command(command, description)
        else:
            logger.error(f"❌ Tâche inconnue: {task_type}")
            logger.info(f"✅ Tâches disponibles: {list(task_map.keys())}")

def main():
    """Point d'entrée du scheduler"""
    import argparse
    
    parser = argparse.ArgumentParser(description="🕐 Scheduler Data-Driven Dolibarr BTP")
    parser.add_argument(
        "mode", 
        choices=["daemon", "once", "setup"],
        help="Mode d'exécution"
    )
    parser.add_argument(
        "--task",
        choices=["status", "extract", "warehouse", "analytics", "pipeline", "quality", "cleanup"],
        default="status",
        help="Tâche à exécuter en mode 'once'"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Affiche la planification sans exécuter"
    )
    
    args = parser.parse_args()
    
    # Créer répertoires nécessaires
    os.makedirs("logs", exist_ok=True)
    
    scheduler = DolibarrDataScheduler()
    
    if args.mode == "setup":
        scheduler.setup_schedule()
        logger.info("📅 Configuration terminée")
        
        if args.dry_run:
            logger.info("🔍 Aperçu planification (dry-run):")
            for job in schedule.get_jobs():
                logger.info(f"  • {job.next_run} - {job.job_func.__name__} [{', '.join(job.tags)}]")
        
    elif args.mode == "daemon":
        scheduler.setup_schedule()
        scheduler.run_forever()
        
    elif args.mode == "once":
        scheduler.run_once(args.task)

if __name__ == "__main__":
    main()