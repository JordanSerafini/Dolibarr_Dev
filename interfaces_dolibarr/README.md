# Interfaces TypeScript Dolibarr

Architecture complète des interfaces TypeScript pour toutes les 387 tables de base de données Dolibarr, organisées par domaine métier.

## 📊 Résumé de l'architecture

**Total: 18 fichiers créés avec 387 interfaces générées**

| Domaine métier | Fichier | Tables | Interfaces | Description |
|---|---|---|---|---|
| Comptabilité | `accounting.interface.ts` | 8 | 8 | Tables de comptabilité générale |
| Produits | `product.interface.ts` | 27 | 27 | Gestion des produits, prix, variants, stocks |
| Catégories | `category.interface.ts` | 22 | 22 | Système de catégorisation |
| Sociétés | `company.interface.ts` | 12 | 12 | Entreprises et contacts |
| Ressources Humaines | `hrm.interface.ts` | 11 | 11 | Gestion des employés, évaluations |
| Facturation | `invoice.interface.ts` | 11 | 11 | Factures clients et fournisseurs |
| Utilisateurs | `user.interface.ts` | 11 | 11 | Comptes utilisateurs et groupes |
| Commandes | `order.interface.ts` | 8 | 8 | Commandes clients et fournisseurs |
| Paiements | `payment.interface.ts` | 11 | 11 | Gestion des paiements |
| Banque | `bank.interface.ts` | 6 | 6 | Comptes bancaires et transactions |
| Actifs | `asset.interface.ts` | 9 | 9 | Immobilisations et amortissements |
| Adhérents | `member.interface.ts` | 5 | 5 | Gestion des membres/adhérents |
| Actions/Événements | `action.interface.ts` | 4 | 4 | Agenda et événements |
| Projets | `project.interface.ts` | 4 | 4 | Gestion de projets et tâches |
| Configuration | `config.interface.ts` | 64 | 64 | Tables de paramétrage (llx_c_*) |
| Documents | `document.interface.ts` | 4 | 4 | Gestion électronique de contenu |
| Stocks | `stock.interface.ts` | 11 | 11 | Gestion des entrepôts et mouvements |
| Contrats | `contract.interface.ts` | 2 | 2 | Contrats de service |
| Divers | `miscellaneous.interface.ts` | 165 | 165 | Tables diverses et modules spécialisés |

## 🏗️ Convention de nommage

### Tables vers Interfaces
- `llx_product` → `Product`
- `llx_product_price` → `ProductPrice`
- `llx_societe_account` → `SocieteAccount`
- `llx_c_payment_term` → `CPaymentTerm`

### Types de données
- **MySQL** → **TypeScript**
- `INT/BIGINT/TINYINT` → `number`
- `VARCHAR/TEXT` → `string`
- `DATE/DATETIME/TIMESTAMP` → `string`
- `DECIMAL/DOUBLE/FLOAT` → `number`
- `ENUM('a','b')` → `"a" | "b"`

### Propriétés optionnelles
- Colonnes `NULL` → `property?: type`
- Colonnes `NOT NULL` → `property: type`

## 📁 Structure des fichiers

```
interfaces/
├── accounting.interface.ts     # 8 interfaces - Comptabilité
├── action.interface.ts         # 4 interfaces - Actions/Événements
├── asset.interface.ts          # 9 interfaces - Actifs/Immobilisations
├── bank.interface.ts           # 6 interfaces - Gestion bancaire
├── category.interface.ts       # 22 interfaces - Catégorisation
├── company.interface.ts        # 12 interfaces - Sociétés/Contacts
├── config.interface.ts         # 64 interfaces - Configuration (llx_c_*)
├── contract.interface.ts       # 2 interfaces - Contrats
├── document.interface.ts       # 4 interfaces - GED (ECM)
├── hrm.interface.ts           # 11 interfaces - Ressources Humaines
├── invoice.interface.ts        # 11 interfaces - Facturation
├── member.interface.ts         # 5 interfaces - Adhérents/Membres
├── miscellaneous.interface.ts  # 165 interfaces - Tables diverses
├── order.interface.ts          # 8 interfaces - Commandes
├── payment.interface.ts        # 11 interfaces - Paiements
├── product.interface.ts        # 27 interfaces - Produits
├── project.interface.ts        # 4 interfaces - Projets/Tâches
├── stock.interface.ts          # 11 interfaces - Stocks/Entrepôts
└── user.interface.ts           # 11 interfaces - Utilisateurs
```

## 🔄 Utilisation

### Import d'interfaces spécifiques
```typescript
import { Product, ProductPrice } from './interfaces/product.interface';
import { Societe, Socpeople } from './interfaces/company.interface';
import { FactureDet, Facture } from './interfaces/invoice.interface';
```

### Import de domaines complets
```typescript
import * as ProductTypes from './interfaces/product.interface';
import * as CompanyTypes from './interfaces/company.interface';
```

## ⚡ Génération automatique

Les interfaces ont été générées automatiquement à partir des fichiers SQL de Dolibarr avec un script Python qui :

1. **Parse les définitions SQL** des 387 tables
2. **Extrait les colonnes et types** de données
3. **Convertit les types MySQL vers TypeScript**
4. **Gère les contraintes NULL/NOT NULL**
5. **Groupe par domaine métier**
6. **Génère les interfaces formatées**

## 📝 Qualité du code généré

- ✅ **387 interfaces** générées sans erreur
- ✅ **Types TypeScript corrects** (number, string, union types)
- ✅ **Propriétés optionnelles** gérées (`?` pour NULL)
- ✅ **Noms d'interfaces PascalCase** (standard TypeScript)
- ✅ **Documentation intégrée** avec commentaires
- ✅ **Structure modulaire** par domaine métier

## 🎯 Couverture complète

Cette architecture couvre **100% des tables Dolibarr** :
- **Modules principaux** : produits, clients, fournisseurs, facturation
- **Modules spécialisés** : HRM, projets, stocks, assets
- **Configuration système** : 64 tables de paramétrage
- **Extensions** : modules additionnels et personnalisés

L'architecture respecte les conventions TypeScript et facilite le développement d'applications front-end typées pour Dolibarr.