# Plan de structure des interfaces Dolibarr

## Groupes identifiés par analyse des tables :

### 1. Configuration & Constantes (64 tables llx_c_*)
- **config.interface.ts** - Tables de configuration système

### 2. Produits & Catalogue (27 tables llx_product_*)
- **product.interface.ts** - Produits, prix, attributs, stocks

### 3. Catégories (19 tables llx_categorie_*)
- **category.interface.ts** - Système de catégorisation

### 4. Ressources Humaines (11 tables llx_hrm_*)
- **hrm.interface.ts** - Gestion RH, évaluations, compétences

### 5. Facturation (11 tables llx_facture_*)
- **invoice.interface.ts** - Factures clients et fournisseurs

### 6. Sociétés & Contacts (10 tables llx_societe_*)
- **company.interface.ts** - Tiers, contacts, RIB

### 7. Comptabilité (8 tables llx_accounting_*)
- **accounting.interface.ts** - Comptabilité, journaux, plans

### 8. Immobilisations (8 tables llx_asset_*)
- **asset.interface.ts** - Gestion des actifs

### 9. Utilisateurs & Droits (7 tables llx_user_*)
- **user.interface.ts** - Utilisateurs, groupes, droits

### 10. Paiements (6 tables llx_payment_*)
- **payment.interface.ts** - Moyens et transactions de paiement

### 11. Commandes (6 tables llx_commande_*)
- **order.interface.ts** - Commandes clients et fournisseurs

### 12. Banque (5 tables llx_bank_*)
- **bank.interface.ts** - Comptes bancaires, opérations

### 13. Adhérents (4 tables llx_adherent_*)
- **member.interface.ts** - Gestion des adhérents

### 14. Actions & Événements (4 tables llx_actioncomm_*)
- **action.interface.ts** - Agenda, événements, communications

### 15. Projets & Tâches (2 tables llx_projet_*)
- **project.interface.ts** - Projets et tâches

### 16. Autres domaines métier :
- **document.interface.ts** - ECM, fichiers, stockage
- **workflow.interface.ts** - Processus métier
- **stock.interface.ts** - Gestion des stocks
- **shipping.interface.ts** - Expéditions, livraisons
- **contract.interface.ts** - Contrats et interventions
- **survey.interface.ts** - Sondages et enquêtes
- **recruitment.interface.ts** - Recrutement
- **miscellaneous.interface.ts** - Tables diverses non groupées