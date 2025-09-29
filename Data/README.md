# 📊 Données de Test Dolibarr - BTP Électricité

**Jeu de données réalistes pour développement frontend Dolibarr**

---

## 🎯 **Vue d'Ensemble**

Ce dossier contient un jeu de données complet et cohérent pour une entreprise d'électricité BTP, compatible avec les interfaces TypeScript Dolibarr. Les données sont organisées pour refléter un environnement professionnel réaliste avec :

- **10 sociétés** (clients BTP majeurs + fournisseurs électriques)
- **10 produits électriques** avec références, prix, stocks
- **6 utilisateurs** (équipe complète avec rôles différenciés)
- **5 factures** avec lignes détaillées
- **3 entrepôts** + stocks répartis
- **4 projets/chantiers** en cours

---

## 📁 **Structure des Fichiers**

| Fichier | Entités | Description | Relations |
|---------|---------|-------------|-----------|
| `societes.json` | 10 sociétés | Clients BTP + Fournisseurs électriques | Base pour factures/projets |
| `produits.json` | 10 produits | Catalogue électrique réaliste | Stocks + lignes factures |
| `utilisateurs.json` | 6 utilisateurs | Équipe entreprise complète | Créateurs/responsables |
| `factures.json` | 5 factures | Documents commerciaux | → sociétés, projets |
| `lignes_factures.json` | 12 lignes | Détail des factures | → factures, produits |
| `entrepots.json` | 3 entrepôts | Dépôts et stocks mobiles | → stocks |
| `stocks.json` | 26 stocks | Répartition par entrepôt/produit | → produits, entrepôts |
| `projets.json` | 4 projets | Chantiers BTP en cours | → sociétés, factures |

---

## 🏢 **Contexte Métier**

### **Entreprise : Électricité BTP Services**
- **Secteur** : Électricité industrielle et tertiaire
- **Localisation** : Lyon (69) - Zone d'activité Corbas
- **Effectif** : 6 personnes (Direction + Chefs + Électriciens + Admin)
- **Activité** : Installation, maintenance, dépannage électrique

### **Clients Types**
- **Grands groupes BTP** : Bouygues, Vinci, Eiffage
- **Bailleurs sociaux** : Habitat Social du Rhône
- **PME locales** : Électricité Moderne
- **Organismes publics** : Promotelec Services

### **Fournisseurs**
- **Fabricants** : Schneider Electric, Legrand, Hager
- **Grossistes** : Rexel France (livraisons quotidiennes)

---

## 📊 **Données Détaillées**

### **👥 Équipe (utilisateurs.json)**

| Nom | Rôle | Login | Responsabilités |
|-----|------|-------|----------------|
| **Jean-Pierre Martin** | Directeur | `admin` | Direction générale, gros contrats |
| **Michel Dubois** | Chef de chantier | `m.dubois` | Encadrement technique, planning |
| **Sophie Bernard** | Resp. Administrative | `s.bernard` | Facturation, fournisseurs, paie |
| **Antoine Moreau** | Électricien | `a.moreau` | Domotique, alarmes, intervention |
| **Ludovic Petit** | Électricien Senior | `l.petit` | Formation interne, chantiers complexes |
| **Carmen Garcia** | Assistante Commerciale | `c.garcia` | Devis, commandes, relances clients |

### **🏭 Clients Principaux (societes.json)**

| Société | Type | CA Annuel | Spécialité |
|---------|------|-----------|------------|
| **Bouygues Construction** | Client | 300K€ | Bureaux, bâtiments neufs |
| **Vinci Energies** | Client | 450K€ | Industrie, haute tension |
| **Eiffage Construction** | Client | 280K€ | Infrastructure, éclairage public |
| **Habitat Social Rhône** | Client | 200K€ | Logement social, rénovation |
| **SARL Électricité Moderne** | Client | 80K€ | Résidentiel, petits travaux |

### **⚡ Catalogue Produits (produits.json)**

| Réf. | Produit | Prix HT | Stock Total | Famille |
|------|---------|---------|-------------|----------|
| `CABLH07V-U-2.5` | Câble H07V-U 2,5mm² | 89,50€ | 907 m | Câbles |
| `DISJ-C20-1P+N` | Disjoncteur C20 1P+N | 28,90€ | 323 u | Protection |
| `PRISE-2PT-16A` | Prise 2P+T 16A | 12,50€ | 510 u | Appareillage |
| `TABLEAU-4RANG-52MOD` | Tableau 4R 52M | 145,20€ | 31 u | Tableaux |
| `SPOT-LED-12W-4000K` | Spot LED 12W | 35,60€ | 117 u | Éclairage |

### **📋 Projets Actifs (projets.json)**

| Projet | Client | Budget | Période | Statut |
|--------|--------|--------|---------|--------|
| **Tour Défense** | Bouygues | 45K€ | Août-Sept 2024 | En cours |
| **Usine Vinci** | Vinci | 125K€ | Août-Déc 2024 | En cours |
| **Résidence Tilleuls** | HSR | 85K€ | Sept 2024-Mars 2025 | En cours |
| **ZAC Vélizy** | Eiffage | 32K€ | Sept-Déc 2024 | En cours |

---

## 🔗 **Relations & Cohérence**

### **Intégrité Référentielle**
```
Factures → Sociétés (fk_soc)
Lignes Factures → Factures (fk_facture) + Produits (fk_product)
Stocks → Produits (fk_product) + Entrepôts (fk_entrepot)
Projets → Sociétés (fk_soc)
Utilisateurs → Entreprise (entity=1)
```

### **Logique Métier Respectée**
- **Stocks cohérents** : répartition realistic entre entrepôts
- **Factures équilibrées** : totaux HT/TTC corrects
- **Projets liés** : factures associées aux bons projets
- **Utilisateurs actifs** : connexions récentes, rôles appropriés

---

## 💻 **Utilisation Frontend**

### **Import Simple**
```javascript
// Import des données par entité
import societes from './Data/societes.json';
import produits from './Data/produits.json';
import factures from './Data/factures.json';
import utilisateurs from './Data/utilisateurs.json';

// Utilisation directe
const clientsList = societes.filter(s => s.client === 1);
const stockTotal = stocks.reduce((sum, stock) => sum + stock.reel, 0);
```

### **Simulation API**
```javascript
// Mock d'API Dolibarr
const mockAPI = {
  getSocietes: () => Promise.resolve(societes),
  getProducts: () => Promise.resolve(produits),
  getInvoices: () => Promise.resolve(factures),
  getUsers: () => Promise.resolve(utilisateurs),

  // Relations
  getInvoiceLines: (fk_facture) =>
    lignes_factures.filter(l => l.fk_facture === fk_facture),
  getProductStock: (fk_product) =>
    stocks.filter(s => s.fk_product === fk_product)
};
```

### **Tests Unitaires**
```javascript
describe('Dolibarr Data Integrity', () => {
  test('All invoices have valid company references', () => {
    const companyIds = societes.map(s => s.rowid);
    factures.forEach(f => {
      expect(companyIds).toContain(f.fk_soc);
    });
  });

  test('Stock quantities are positive', () => {
    stocks.forEach(s => {
      expect(s.reel).toBeGreaterThanOrEqual(0);
    });
  });
});
```

---

## ⚠️ **Notes Importantes**

### **🔒 Sécurité**
- Mots de passe : hachés bcrypt (non fonctionnels)
- Clés API : exemples non utilisables en production
- Données : fictives mais réalistes (SIRET générés)

### **📅 Temporalité**
- Base temporelle : **2024** (créations/modifications récentes)
- Factures : **Août-Septembre 2024**
- Connexions utilisateurs : **derniers jours**

### **🔧 Personnalisation**
- **Références produits** : codes-barres cohérents
- **Adresses** : région Lyon (69) pour cohérence
- **Montants** : ordre de grandeur BTP réel
- **Statuts** : workflows Dolibarr respectés

---

## 🚀 **Extensions Possibles**

Pour enrichir le jeu de données :

1. **Commandes clients/fournisseurs**
2. **Mouvements de stock détaillés**
3. **Planning et congés utilisateurs**
4. **Contacts société (socpeople)**
5. **Paiements et règlements**
6. **Catégories produits**
7. **Tâches projet détaillées**

---

**📧 Contact Données :** data-test@electrique-btp.fr
**📅 Dernière MAJ :** 29 septembre 2024
**📋 Version :** 1.0
**✅ Statut :** Prêt pour développement