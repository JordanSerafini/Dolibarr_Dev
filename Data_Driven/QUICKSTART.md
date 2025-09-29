# 🚀 DÉMARRAGE RAPIDE - Dolibarr Data-Driven System

Guide pour démarrer rapidement avec le système Data-Driven BTP.

## ✅ Pré-requis

- **Python 3.8+** installé
- **MySQL/MariaDB** avec base Dolibarr accessible
- **Accès réseau** à la base de données Dolibarr

## 🏃‍♂️ Installation Express (5 minutes)

### 1. Installation des dépendances

```bash
cd Data_Driven
pip install -r requirements.txt
```

### 2. Configuration rapide

```bash
# Copier le template de configuration
cp .env.example .env

# Éditer avec vos paramètres (remplacer les valeurs)
notepad .env  # Windows
nano .env     # Linux/Mac
```

**Configuration minimale requise dans `.env`:**
```bash
DOLIBARR_DB_HOST=localhost          # IP de votre serveur Dolibarr
DOLIBARR_DB_NAME=dolibarr           # Nom base Dolibarr
DOLIBARR_DB_USER=votre_user         # Utilisateur MySQL
DOLIBARR_DB_PASSWORD=votre_password # Mot de passe
```

### 3. Test connexion

```bash
python src/main.py extract --test-connection
```

✅ **Si OK** : `Connexion réussie - MySQL X.X.X`  
❌ **Si erreur** : Vérifier paramètres dans `.env`

## 🎯 Premier Pipeline (2 minutes)

```bash
# Exécution pipeline complet
python src/main.py pipeline
```

**Ce qui se passe:**
1. **Extraction** → Récupère données Dolibarr → DataLake
2. **Transformation** → Nettoie et structure → DataWarehouse  
3. **Analytics** → IA/ML → Insights & Prédictions

## 📊 Premiers Résultats

### Vérifier le statut
```bash
python src/main.py status
```

### Consulter la qualité des données
```bash
python src/main.py quality --days 7
```

### Analytics ciblés
```bash
# Détection anomalies interventions
python src/main.py analytics --module anomalies

# Segmentation clients intelligente
python src/main.py analytics --module segmentation

# Prédiction besoins stock
python src/main.py analytics --module prediction
```

## 📁 Où trouver les résultats ?

```
data/lake/           # Données brutes extraites
├── raw/tickets/     # Tickets BTP
├── raw/projects/    # Projets/Chantiers  
├── raw/stock/       # Mouvements stock
└── metadata/        # Rapports qualité

logs/                # Logs détaillés
models/              # Modèles ML sauvegardés
analytics_results_*  # Résultats JSON des analyses
```

## 🕐 Automatisation

### Scheduler intégré
```bash
# Démarrer le scheduler automatique
python scripts/scheduler.py daemon
```

**Planning automatique:**
- **Quotidien 6h** : Extraction nouvelles données
- **Quotidien 12h/18h** : Contrôles qualité
- **Horaire** (9h, 11h, 14h, 16h) : Analytics légers
- **Dimanche 2h** : Pipeline complet
- **1er du mois 3h** : Nettoyage données anciennes

### Tâche unique
```bash
# Exécuter une seule fois
python scripts/scheduler.py once --task extract
python scripts/scheduler.py once --task analytics
```

## 🐳 Déploiement Docker (optionnel)

```bash
# Démarrer avec Docker Compose
docker-compose up -d

# Voir les logs
docker-compose logs -f data-driven-app
```

## 🧪 Tests

```bash
# Exécuter les tests
python -m pytest tests/ -v

# Test spécifique
python tests/test_system.py
```

## 🔧 Commandes Utiles

```bash
# Aide complète
python src/main.py --help

# Reconstruction DataWarehouse
python src/main.py warehouse --full-rebuild

# Nettoyage données > 30 jours
python src/main.py cleanup --days 30

# Analytics complets avec tous modules
python src/main.py analytics --module all
```

## 🆘 Dépannage Express

### Problème connexion MySQL
```bash
# Vérifier paramètres
python src/main.py extract --test-connection

# Erreurs communes:
# - Host incorrect → Vérifier DOLIBARR_DB_HOST
# - Permissions → Vérifier DOLIBARR_DB_USER/PASSWORD  
# - Port → Ajouter DOLIBARR_DB_PORT=3306 si nécessaire
```

### Pas de données extraites
```bash
# Vérifier tables Dolibarr
python -c "
from src.services.dolibarr_connector import DolibarrConnector
conn = DolibarrConnector()
print(conn.get_table_count('llx_ticket'))
"
```

### Erreurs dépendances
```bash
# Réinstaller proprement
pip uninstall -r requirements.txt -y
pip install -r requirements.txt
```

## 📈 Prochaines Étapes

1. **Configurer scheduler** pour automatisation
2. **Personnaliser analyses** selon vos besoins BTP
3. **Intégrer dashboard** (Streamlit/Grafana)
4. **Alertes** sur anomalies critiques
5. **API REST** pour intégration tiers

---

🏗️ **Système opérationnel en moins de 10 minutes !**  
*Pour aide avancée : consulter `README.md`*