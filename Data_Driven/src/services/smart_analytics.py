"""
🧠 Smart Analytics - Intelligence Artificielle et Machine Learning pour Dolibarr BTP
"""

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor, IsolationForest
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import tensorflow as tf
from tensorflow import keras
from datetime import datetime, timedelta
import pickle
import json
from typing import Dict, List, Optional, Any, Tuple
from loguru import logger

from .data_warehouse import DataWarehouse

class SmartAnalytics:
    """Système d'analytics intelligent pour Dolibarr BTP"""
    
    def __init__(self):
        self.warehouse = DataWarehouse()
        self.models_path = "models/"
        self.predictions_cache = {}
        self.cache_ttl = timedelta(hours=1)
        self.setup_models_directory()
        logger.info("🧠 Smart Analytics initialisé")
    
    def setup_models_directory(self):
        """Crée le répertoire des modèles"""
        from pathlib import Path
        Path(self.models_path).mkdir(exist_ok=True)

    @staticmethod
    def _parse_iso_datetime(value: Optional[str]) -> Optional[datetime]:
        """Parse une date ISO 8601 et retourne un datetime ou None."""
        if not value:
            return None
        normalized = value.replace("Z", "+00:00")
        try:
            return datetime.fromisoformat(normalized)
        except ValueError:
            logger.warning(f"Date ISO invalide pour le modele: {value}")
            return None

    def _store_prediction_cache(self, cache_key: str, result: Dict[str, Any], trained_at: Optional[str]) -> None:
        """Stocke le resultat d'une prediction en cache avec limite de taille."""
        self.predictions_cache[cache_key] = {
            "result": result,
            "model_trained_at": trained_at,
            "cached_at": datetime.now().isoformat()
        }
        if len(self.predictions_cache) > 500:
            oldest_key = next(iter(self.predictions_cache))
            if oldest_key != cache_key:
                self.predictions_cache.pop(oldest_key, None)

    @staticmethod
    def _calculate_percentage_change(current_value: float, previous_value: float) -> Optional[float]:
        """Calcule une variation percentuelle en controlant les divisions par zero."""
        if pd.isna(current_value) or pd.isna(previous_value):
            return None
        if abs(previous_value) < 1e-6:
            return None
        change = (current_value - previous_value) / previous_value * 100
        return round(change, 1)
    
    def predict_intervention_duration(self, ticket_data: Dict[str, Any]) -> Dict[str, Any]:
        """Predite la duree d'intervention basee sur l'historique"""
        try:
            model_path = f"{self.models_path}duration_prediction_model.pkl"
            model_info = self._load_or_train_duration_model(model_path)

            if not model_info:
                logger.warning("Impossible de charger/entrainer le modele de duree")
                return {"predicted_duration": ticket_data.get("estimated_duration", 4), "confidence": 0.1}

            cache_key = json.dumps(ticket_data, sort_keys=True, default=str)
            cached_result = self.predictions_cache.get(cache_key)
            if cached_result:
                cached_at = self._parse_iso_datetime(cached_result.get("cached_at"))
                if (
                    cached_result.get("model_trained_at") == model_info.get("trained_at")
                    and cached_at
                    and datetime.now() - cached_at <= self.cache_ttl
                ):
                    logger.info("Prediction duree renvoyee depuis le cache")
                    return cached_result["result"]
                if cached_at and datetime.now() - cached_at > self.cache_ttl:
                    self.predictions_cache.pop(cache_key, None)

            new_data = {
                'intervention_type_encoded': 0,
                'category_encoded': 0,
                'priority_encoded': 0,
                'estimated_duration': ticket_data.get('estimated_duration', 4),
                'city_encoded': 0,
                'budget_amount': ticket_data.get('budget_amount', 0)
            }

            encoders = model_info['encoders']
            if ticket_data.get('intervention_type') in encoders['intervention_type'].classes_:
                new_data['intervention_type_encoded'] = encoders['intervention_type'].transform([ticket_data['intervention_type']])[0]
            if ticket_data.get('category') in encoders['category'].classes_:
                new_data['category_encoded'] = encoders['category'].transform([ticket_data['category']])[0]
            if ticket_data.get('priority') in encoders['priority'].classes_:
                new_data['priority_encoded'] = encoders['priority'].transform([ticket_data['priority']])[0]
            if ticket_data.get('city') in encoders['city'].classes_:
                new_data['city_encoded'] = encoders['city'].transform([ticket_data['city']])[0]

            X_new = pd.DataFrame([new_data])
            predicted_duration = model_info['model'].predict(X_new)[0]

            trained_at_value = model_info.get('trained_at', '')
            logger.success(f"Prediction duree: {predicted_duration:.1f}h (modele du {trained_at_value[:10]})")

            trained_at_dt = self._parse_iso_datetime(model_info.get('trained_at'))
            model_age_days = (datetime.now() - trained_at_dt).days if trained_at_dt else 0

            result = {
                "predicted_duration": round(predicted_duration, 1),
                "confidence": round(model_info.get('confidence', 0.1), 2),
                "model_performance": model_info.get('performance', {}),
                "model_age_days": model_age_days,
                "training_data_size": model_info.get('training_data_size')
            }

            self._store_prediction_cache(cache_key, result, model_info.get('trained_at'))

            return result

        except Exception as e:
            logger.error(f"Erreur prediction duree: {e}")
            return {"predicted_duration": ticket_data.get("estimated_duration", 4), "confidence": 0.1}

    def _load_or_train_duration_model(self, model_path: str, max_age_days: int = 7) -> Optional[Dict[str, Any]]:
        """Charge un modèle existant ou en entraîne un nouveau si nécessaire"""
        from pathlib import Path
        
        # Vérifier si modèle existe et est récent
        if Path(model_path).exists():
            try:
                with open(model_path, 'rb') as f:
                    model_info = pickle.load(f)

                trained_date = self._parse_iso_datetime(model_info.get('trained_at'))
                if trained_date:
                    age_days = (datetime.now() - trained_date).days
                    if age_days <= max_age_days:
                        logger.info(f"Modele duree charge (age: {age_days}j)")
                        return model_info
                    logger.info(f"Modele duree obsolete ({age_days}j), reentrainement...")
                else:
                    logger.info("Date d'entrainement du modele indisponible, reentrainement...")

            except Exception as e:
                logger.warning(f"Erreur chargement modèle: {e}, réentraînement...")
        
        # Entraîner nouveau modèle
        return self._train_duration_model(model_path)
    
    def _train_duration_model(self, model_path: str) -> Optional[Dict[str, Any]]:
        """Entraîne un nouveau modèle de prédiction de durée"""
        try:
            session = self.warehouse.Session()
            
            query = """
            SELECT 
                ft.intervention_type,
                ft.category,
                ft.priority,
                ft.estimated_duration,
                ft.actual_duration,
                dc.city,
                dp.budget_amount
            FROM fact_tickets ft
            LEFT JOIN dim_customer dc ON ft.customer_key = dc.customer_key
            LEFT JOIN dim_project dp ON ft.project_key = dp.project_key
            WHERE ft.actual_duration > 0 AND ft.actual_duration < 100
            """
            
            df = pd.read_sql(query, self.warehouse.engine)
            session.close()
            
            if len(df) < 10:
                logger.warning("Pas assez de données pour entraîner le modèle")
                return None
            
            # Préparation des features
            le_type = LabelEncoder()
            le_category = LabelEncoder()
            le_priority = LabelEncoder()
            le_city = LabelEncoder()
            
            df['intervention_type_encoded'] = le_type.fit_transform(df['intervention_type'].fillna('unknown'))
            df['category_encoded'] = le_category.fit_transform(df['category'].fillna('unknown'))
            df['priority_encoded'] = le_priority.fit_transform(df['priority'].fillna('normal'))
            df['city_encoded'] = le_city.fit_transform(df['city'].fillna('unknown'))
            
            features = ['intervention_type_encoded', 'category_encoded', 'priority_encoded', 
                       'estimated_duration', 'city_encoded', 'budget_amount']
            
            X = df[features].fillna(0)
            y = df['actual_duration']
            
            # Entraînement modèle
            model = RandomForestRegressor(n_estimators=100, random_state=42)
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
            model.fit(X_train, y_train)
            
            # Évaluation
            y_pred = model.predict(X_test)
            mae = mean_absolute_error(y_test, y_pred)
            r2 = r2_score(y_test, y_pred)
            confidence = max(0.1, min(0.9, 1 - mae / np.mean(y)))
            
            # Sauvegarde du modèle
            model_info = {
                'model': model,
                'encoders': {
                    'intervention_type': le_type,
                    'category': le_category,
                    'priority': le_priority,
                    'city': le_city
                },
                'performance': {'mae': round(mae, 2), 'r2': round(r2, 2)},
                'confidence': confidence,
                'training_data_size': len(df),
                'trained_at': datetime.now().isoformat()
            }
            
            with open(model_path, 'wb') as f:
                pickle.dump(model_info, f)
            
            logger.success(f"✅ Modèle durée entraîné: MAE={mae:.2f}, R²={r2:.2f}, {len(df)} échantillons")
            return model_info
            
        except Exception as e:
            logger.error(f"Erreur entraînement modèle: {e}")
            return None
    
    def detect_anomalies_interventions(self) -> Dict[str, Any]:
        """Détecte les anomalies dans les interventions BTP"""
        try:
            session = self.warehouse.Session()
            
            query = """
            SELECT 
                ticket_id,
                resolution_hours,
                intervention_cost,
                customer_satisfaction,
                estimated_duration,
                actual_duration
            FROM fact_tickets
            WHERE actual_duration > 0 AND resolution_hours > 0
            """
            
            df = pd.read_sql(query, self.warehouse.engine)
            session.close()
            
            if len(df) < 20:
                logger.warning("Pas assez de données pour détection d'anomalies")
                return {"anomalies": [], "total_analyzed": 0}
            
            # Préparer les features pour détection d'anomalies
            features = ['resolution_hours', 'intervention_cost', 'actual_duration']
            X = df[features].fillna(df[features].median())
            
            # Normalisation
            scaler = StandardScaler()
            X_scaled = scaler.fit_transform(X)
            
            # Modèle de détection d'anomalies
            isolation_forest = IsolationForest(
                contamination=0.1,  # 10% d'anomalies attendues
                random_state=42
            )
            
            anomaly_labels = isolation_forest.fit_predict(X_scaled)
            
            # Identifier les anomalies
            df['is_anomaly'] = anomaly_labels == -1
            anomalies = df[df['is_anomaly']].copy()
            
            # Analyser les types d'anomalies
            anomaly_analysis = []
            for _, row in anomalies.iterrows():
                analysis = {
                    "ticket_id": int(row['ticket_id']),
                    "anomaly_reasons": []
                }
                
                # Durée anormalement longue
                if row['resolution_hours'] > df['resolution_hours'].quantile(0.95):
                    analysis["anomaly_reasons"].append("Durée résolution excessive")
                
                # Coût anormalement élevé
                if row['intervention_cost'] > df['intervention_cost'].quantile(0.95):
                    analysis["anomaly_reasons"].append("Coût intervention élevé")
                
                # Écart important estimation/réalité
                if abs(row['actual_duration'] - row['estimated_duration']) > row['estimated_duration'] * 0.5:
                    analysis["anomaly_reasons"].append("Écart important estimation/réalité")
                
                # Satisfaction client faible
                if row['customer_satisfaction'] < 3:
                    analysis["anomaly_reasons"].append("Satisfaction client faible")
                
                anomaly_analysis.append(analysis)
            
            logger.success(f"✅ Détection anomalies: {len(anomalies)} anomalies sur {len(df)} interventions")
            
            return {
                "anomalies": anomaly_analysis,
                "total_analyzed": len(df),
                "anomaly_rate": round(len(anomalies) / len(df) * 100, 1),
                "statistics": {
                    "avg_resolution_hours": round(df['resolution_hours'].mean(), 1),
                    "avg_cost": round(df['intervention_cost'].mean(), 2),
                    "avg_satisfaction": round(df['customer_satisfaction'].mean(), 1)
                }
            }
            
        except Exception as e:
            logger.error(f"Erreur détection anomalies: {e}")
            return {"anomalies": [], "total_analyzed": 0}
    
    def customer_segmentation(self) -> Dict[str, Any]:
        """Segmentation intelligente des clients BTP"""
        try:
            session = self.warehouse.Session()
            
            query = """
            SELECT 
                dc.customer_id,
                dc.company_name,
                dc.city,
                COUNT(ft.ticket_id) as total_tickets,
                AVG(ft.resolution_hours) as avg_resolution_time,
                AVG(ft.customer_satisfaction) as avg_satisfaction,
                SUM(ft.intervention_cost) as total_cost,
                AVG(ft.intervention_cost) as avg_cost_per_ticket
            FROM dim_customer dc
            LEFT JOIN fact_tickets ft ON dc.customer_key = ft.customer_key
            GROUP BY dc.customer_key, dc.customer_id, dc.company_name, dc.city
            HAVING total_tickets > 0
            """
            
            df = pd.read_sql(query, self.warehouse.engine)
            session.close()
            
            if len(df) < 5:
                logger.warning("Pas assez de clients pour segmentation")
                return {"segments": [], "total_customers": 0}
            
            # Préparer features pour clustering
            features = ['total_tickets', 'avg_resolution_time', 'avg_satisfaction', 'total_cost']
            X = df[features].fillna(0)
            
            # Normalisation
            scaler = StandardScaler()
            X_scaled = scaler.fit_transform(X)
            
            # Clustering K-means
            n_clusters = min(5, len(df))  # Max 5 segments
            kmeans = KMeans(n_clusters=n_clusters, random_state=42)
            df['segment'] = kmeans.fit_predict(X_scaled)
            
            # Analyser les segments
            segments_analysis = []
            for segment_id in range(n_clusters):
                segment_data = df[df['segment'] == segment_id]
                
                segment_profile = {
                    "segment_id": int(segment_id),
                    "name": self._name_segment(segment_data),
                    "customer_count": len(segment_data),
                    "characteristics": {
                        "avg_tickets": round(segment_data['total_tickets'].mean(), 1),
                        "avg_resolution_time": round(segment_data['avg_resolution_time'].mean(), 1),
                        "avg_satisfaction": round(segment_data['avg_satisfaction'].mean(), 1),
                        "avg_total_cost": round(segment_data['total_cost'].mean(), 2)
                    },
                    "customers": segment_data[['customer_id', 'company_name', 'city']].to_dict('records')
                }
                
                segments_analysis.append(segment_profile)
            
            # Sauvegarder modèle de segmentation
            segmentation_model = {
                'kmeans': kmeans,
                'scaler': scaler,
                'features': features,
                'created_at': datetime.now().isoformat()
            }
            
            with open(f"{self.models_path}customer_segmentation_model.pkl", 'wb') as f:
                pickle.dump(segmentation_model, f)
            
            logger.success(f"✅ Segmentation clients: {n_clusters} segments pour {len(df)} clients")
            
            return {
                "segments": segments_analysis,
                "total_customers": len(df),
                "total_segments": n_clusters
            }
            
        except Exception as e:
            logger.error(f"Erreur segmentation clients: {e}")
            return {"segments": [], "total_customers": 0}
    
    def _name_segment(self, segment_data: pd.DataFrame) -> str:
        """Donne un nom descriptif au segment"""
        avg_tickets = segment_data['total_tickets'].mean()
        avg_cost = segment_data['total_cost'].mean()
        avg_satisfaction = segment_data['avg_satisfaction'].mean()
        
        if avg_cost > segment_data['total_cost'].quantile(0.75):
            return "Clients Premium"
        elif avg_tickets > segment_data['total_tickets'].quantile(0.75):
            return "Clients Fréquents"
        elif avg_satisfaction < 3.5:
            return "Clients à Risque"
        elif avg_tickets < 3:
            return "Nouveaux Clients"
        else:
            return "Clients Standard"
    
    def predict_stock_needs(self, horizon_days: int = 30) -> Dict[str, Any]:
        """Prédit les besoins en stock/matériel BTP"""
        try:
            session = self.warehouse.Session()
            
            query = """
            SELECT 
                product_ref,
                product_name,
                movement_date,
                quantity,
                movement_type
            FROM fact_stock
            WHERE movement_date >= DATE_SUB(NOW(), INTERVAL 90 DAY)
            ORDER BY product_ref, movement_date
            """
            
            df = pd.read_sql(query, self.warehouse.engine)
            session.close()
            
            if len(df) < 50:
                logger.warning("Pas assez de données stock pour prédiction")
                return {"predictions": [], "total_products": 0}
            
            predictions = []
            
            # Analyser par produit
            for product_ref in df['product_ref'].unique():
                product_data = df[df['product_ref'] == product_ref].copy()
                
                if len(product_data) < 10:
                    continue
                
                # Calculer consommation quotidienne
                product_data['date'] = pd.to_datetime(product_data['movement_date'])
                product_data = product_data.sort_values('date')
                
                # Agrégation par jour
                daily_consumption = product_data.groupby('date')['quantity'].sum().abs()
                
                if len(daily_consumption) < 7:
                    continue
                
                # Prédiction simple basée sur moyenne mobile
                recent_avg = daily_consumption.tail(7).mean()
                predicted_need = recent_avg * horizon_days
                
                # Calcul de la saisonnalité (basique)
                if len(daily_consumption) > 30:
                    seasonal_factor = daily_consumption.tail(7).mean() / daily_consumption.mean()
                    predicted_need *= seasonal_factor
                
                # Stock actuel (approximatif)
                current_stock = product_data[product_data['movement_type'] == 'stock_in']['quantity'].sum() - \
                               product_data[product_data['movement_type'] == 'stock_out']['quantity'].sum()
                
                prediction = {
                    "product_ref": product_ref,
                    "product_name": product_data['product_name'].iloc[0],
                    "current_stock_estimate": max(0, current_stock),
                    "predicted_consumption": round(predicted_need, 1),
                    "recommended_order": max(0, round(predicted_need - current_stock, 1)),
                    "urgency": "high" if predicted_need > current_stock else "low",
                    "daily_avg_consumption": round(recent_avg, 2)
                }
                
                predictions.append(prediction)
            
            # Trier par urgence
            predictions.sort(key=lambda x: x['recommended_order'], reverse=True)
            
            logger.success(f"✅ Prédiction stock: {len(predictions)} produits analysés")
            
            return {
                "predictions": predictions[:20],  # Top 20
                "total_products": len(predictions),
                "horizon_days": horizon_days,
                "high_priority_items": len([p for p in predictions if p['urgency'] == 'high'])
            }
            
        except Exception as e:
            logger.error(f"Erreur prédiction stock: {e}")
            return {"predictions": [], "total_products": 0}
    
    def generate_performance_insights(self) -> Dict[str, Any]:
        """Génère des insights de performance BTP"""
        try:
            session = self.warehouse.Session()
            
            # Requête insights généraux
            query = """
            SELECT 
                DATE(ft.creation_date) as date,
                COUNT(*) as daily_tickets,
                AVG(ft.resolution_hours) as avg_resolution,
                AVG(ft.customer_satisfaction) as avg_satisfaction,
                SUM(ft.intervention_cost) as daily_revenue
            FROM fact_tickets ft
            WHERE ft.creation_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)
            GROUP BY DATE(ft.creation_date)
            ORDER BY date DESC
            """
            
            df = pd.read_sql(query, self.warehouse.engine)
            session.close()
            
            if len(df) < 7:
                logger.warning("Pas assez de données pour insights performance")
                return {"insights": [], "trends": {}}
            
            # Calcul des tendances
            df['date'] = pd.to_datetime(df['date'])
            df = df.sort_values('date')
            
            insights = []
            
            # Tendance tickets
            tickets_trend = np.polyfit(range(len(df)), df['daily_tickets'], 1)[0]
            if tickets_trend > 0.1:
                insights.append({
                    "type": "trend",
                    "category": "tickets",
                    "message": f"Augmentation du nombre de tickets (+{tickets_trend:.1f}/jour)",
                    "severity": "warning" if tickets_trend > 1 else "info"
                })
            elif tickets_trend < -0.1:
                insights.append({
                    "type": "trend", 
                    "category": "tickets",
                    "message": f"Diminution du nombre de tickets ({tickets_trend:.1f}/jour)",
                    "severity": "positive"
                })
            
            # Tendance résolution
            resolution_trend = np.polyfit(range(len(df)), df['avg_resolution'], 1)[0]
            if resolution_trend > 0.1:
                insights.append({
                    "type": "trend",
                    "category": "performance", 
                    "message": f"Temps de résolution en hausse (+{resolution_trend:.1f}h/jour)",
                    "severity": "warning"
                })
            
            # Tendance satisfaction
            satisfaction_trend = np.polyfit(range(len(df)), df['avg_satisfaction'], 1)[0]
            if satisfaction_trend < -0.05:
                insights.append({
                    "type": "trend",
                    "category": "satisfaction",
                    "message": f"Satisfaction client en baisse ({satisfaction_trend:.2f}/jour)",
                    "severity": "critical"
                })
            
            # KPIs actuels vs précédents
            current_week = df.tail(7)
            previous_week = df.iloc[-14:-7] if len(df) >= 14 else df.head(7)
            
            kpi_comparison: Dict[str, Optional[float]] = {}
            kpi_columns = {
                "tickets_change": "daily_tickets",
                "resolution_change": "avg_resolution",
                "satisfaction_change": "avg_satisfaction",
                "revenue_change": "daily_revenue"
            }

            for kpi_name, column in kpi_columns.items():
                change = self._calculate_percentage_change(
                    current_week[column].mean(),
                    previous_week[column].mean()
                )
                kpi_comparison[kpi_name] = change

            for kpi, change in kpi_comparison.items():
                if change is None:
                    continue
                if abs(change) > 10:
                    direction = "hausse" if change > 0 else "baisse"
                    severity = "positive" if (change > 0 and kpi in ['satisfaction_change', 'revenue_change']) or \
                                      (change < 0 and kpi in ['tickets_change', 'resolution_change']) else "warning"

                    insights.append({
                        "type": "kpi_change",
                        "category": kpi.replace('_change', ''),
                        "message": f"{kpi.replace('_change', '').title()} en {direction} de {abs(change):.1f}%",
                        "severity": severity
                    })

            logger.success(f"✅ Insights performance générés: {len(insights)} insights")
            
            return {
                "insights": insights,
                "trends": {
                    "tickets_per_day": tickets_trend,
                    "resolution_time": resolution_trend,
                    "satisfaction": satisfaction_trend
                },
                "kpi_changes": kpi_comparison,
                "period_analyzed": len(df)
            }
            
        except Exception as e:
            logger.error(f"Erreur génération insights: {e}")
            return {"insights": [], "trends": {}}
    
    def run_full_analysis(self) -> Dict[str, Any]:
        """Lance une analyse complète du système BTP"""
        logger.info("🚀 Démarrage analyse complète Smart Analytics")
        
        start_time = datetime.now()
        
        results = {
            "analysis_date": start_time.isoformat(),
            "modules": {}
        }
        
        try:
            # 1. Détection d'anomalies
            logger.info("🔍 Analyse des anomalies...")
            results["modules"]["anomaly_detection"] = self.detect_anomalies_interventions()
            
            # 2. Segmentation clients
            logger.info("👥 Segmentation des clients...")
            results["modules"]["customer_segmentation"] = self.customer_segmentation()
            
            # 3. Prédiction stock
            logger.info("📦 Prédiction besoins stock...")
            results["modules"]["stock_prediction"] = self.predict_stock_needs()
            
            # 4. Insights performance
            logger.info("📊 Génération insights performance...")
            results["modules"]["performance_insights"] = self.generate_performance_insights()
            
            duration = datetime.now() - start_time
            results["execution_time_seconds"] = duration.total_seconds()
            
            # Sauvegarde résultats
            analysis_date = start_time.strftime("%Y-%m-%d_%H-%M")
            with open(f"analytics_results_{analysis_date}.json", 'w', encoding='utf-8') as f:
                json.dump(results, f, indent=2, ensure_ascii=False, default=str)
            
            logger.success(f"✅ Analyse complète terminée en {duration.total_seconds():.1f}s")
            
            return results
            
        except Exception as e:
            logger.error(f"❌ Erreur analyse complète: {e}")
            results["error"] = str(e)
            return results
    
    def close(self):
        """Ferme les connexions"""
        if hasattr(self, 'warehouse'):
            self.warehouse.close()
            logger.info("Smart Analytics fermé")