# 🏗️ DOLIBARR DATA-DRIVEN SYSTEM

Système intelligent d'analyse des données BTP basé sur **DataLake**, **DataWarehouse** et **Smart Analytics** avec IA/ML.

## 🏛️ Architecture

```
📊 Dolibarr MySQL  →  🏞️ DataLake  →  🏢 DataWarehouse  →  🧠 Smart Analytics
     (Source)         (Stockage)      (Structuré)        (IA/ML Insights)
```

### Composants

- **🔌 Dolibarr Connector**: Extraction données depuis tables Dolibarr BTP
- **🏞️ DataLake**: Stockage données brutes (Parquet/CSV/JSON) avec qualité
- **🏢 DataWarehouse**: Modèle dimensionnel optimisé pour analytics
- **🧠 Smart Analytics**: ML/IA pour prédictions et détection d'anomalies

## 🚀 Installation

```bash
# 1. Cloner et installer dépendances
cd Data_Driven
pip install -r requirements.txt

# 2. Configuration base de données
cp .env.example .env
# Éditer .env avec vos paramètres MySQL

# 3. Test connexion
python src/main.py extract --test-connection
```

## 📊 Utilisation

### Commandes Principales

```bash
# Pipeline complet (Recommandé)
python src/main.py pipeline

# Étapes individuelles
python src/main.py extract        # Extraction DataLake
python src/main.py warehouse      # Chargement DataWarehouse  
python src/main.py analytics      # Smart Analytics & ML

# Utilitaires
python src/main.py status         # Statut système
python src/main.py quality        # Rapport qualité données
python src/main.py cleanup        # Nettoyage anciennes données
```

### Analytics Spécifiques

```bash
# Modules d'analyse ciblés
python src/main.py analytics --module anomalies      # Détection anomalies
python src/main.py analytics --module segmentation   # Segmentation clients
python src/main.py analytics --module prediction     # Prédiction stock
python src/main.py analytics --module insights       # Insights performance
```

## 🏗️ Données Extraites

### Tables Dolibarr BTP
- **Tickets**: `llx_ticket` + extrafields (interventions BTP)
- **Projets**: `llx_projet` + tâches (chantiers)
- **Stock**: `llx_stock_mouvement` + produits (matériel)
- **Interventions**: `llx_actioncomm` (historique)
- **Clients**: `llx_societe` + contacts
- **Factures**: `llx_facture` + lignes

### Modèle DataWarehouse

**Dimensions:**
- `dim_date`: Calendrier complet
- `dim_customer`: Clients BTP
- `dim_project`: Projets/Chantiers
- `dim_technician`: Techniciens

**Faits:**
- `fact_tickets`: Tickets/Interventions avec métriques
- `fact_stock`: Mouvements stock avec valorisation

## 🧠 Fonctionnalités IA

### 1. Prédiction Durée Intervention
```python
# Prédit la durée basée sur historique
prediction = smart_analytics.predict_intervention_duration({
    "intervention_type": "maintenance",
    "estimated_duration": 4,
    "city": "Paris"
})
# → {"predicted_duration": 4.2, "confidence": 0.85}
```

### 2. Détection Anomalies
- Interventions anormalement longues
- Coûts aberrants  
- Écarts estimation/réalité
- Satisfaction client faible

### 3. Segmentation Clients
- Clients Premium (haut CA)
- Clients Fréquents (volume tickets)
- Clients à Risque (satisfaction faible)
- Nouveaux Clients

### 4. Prédiction Stock
- Consommation prévisionnelle
- Recommandations commandes
- Alertes rupture stock

## 📈 Rapports & KPIs

### Vues Analytiques Créées
- `v_tickets_monthly`: Performance mensuelle
- `v_technician_performance`: Performance techniciens
- `v_active_projects`: Projets en cours avec budget

### Métriques Surveillées
- Temps moyen résolution tickets
- Satisfaction client (1-5)
- Taux d'anomalies interventions
- Évolution coûts/budget projets
- Rotation stock matériel

## 🔄 Automatisation

### Cron Jobs Recommandés

```bash
# Extraction quotidienne (6h du matin)
0 6 * * * cd /path/to/Data_Driven && python src/main.py extract

# Pipeline complet (dimanche 2h)  
0 2 * * 0 cd /path/to/Data_Driven && python src/main.py pipeline

# Nettoyage mensuel
0 3 1 * * cd /path/to/Data_Driven && python src/main.py cleanup --days 90
```

## 🔧 Configuration

### Variables Environnement (.env)
```bash
# Base Dolibarr
DOLIBARR_DB_HOST=localhost
DOLIBARR_DB_NAME=dolibarr
DOLIBARR_DB_USER=dolibarr_user

# DataWarehouse  
WAREHOUSE_DB_NAME=dolibarr_warehouse
WAREHOUSE_DB_USER=warehouse_user

# Analytics
ML_MODEL_RETENTION_DAYS=90
ANALYTICS_CACHE_HOURS=6
```

## 📊 Monitoring

### Logs
- `logs/dolibarr_data_driven_YYYY-MM-DD.log`: Logs quotidiens
- Rotation automatique (30 jours rétention)

### Métriques Qualité
- Score qualité global (0-100)
- Pourcentage valeurs manquantes
- Détection doublons
- Cohérence données

## 🔍 Troubleshooting

```bash
# Test connexions
python src/main.py extract --test-connection

# Statut complet système
python src/main.py status

# Reconstruction warehouse si corruption
python src/main.py warehouse --full-rebuild

# Rapport qualité détaillé
python src/main.py quality --days 30
```

## 🚀 Développement

### Structure Projet
```
src/
├── services/
│   ├── dolibarr_connector.py    # Extraction Dolibarr
│   ├── data_lake.py             # Gestion DataLake
│   ├── data_warehouse.py        # ETL DataWarehouse
│   └── smart_analytics.py       # IA/ML Analytics
├── models/                      # Modèles ML sauvegardés
├── config/
│   └── database.py              # Configuration BDD
└── main.py                      # CLI principal
```

### Ajout Nouvelles Analyses
1. Créer méthode dans `SmartAnalytics`
2. Ajouter dans `run_full_analysis()`
3. Optionnel: nouvelle commande CLI

---

**🏗️ Dolibarr BTP Data-Driven System v1.0.0**  
*Analytics intelligent pour optimiser les interventions BTP*