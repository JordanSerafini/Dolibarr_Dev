# Synthèse Audit Interfaces & Documentation

## Constatations Clés
- **Doublons d'interfaces** : `interfaces_dolibarr/accounting.interface.ts` et `interfaces_dolibarr/miscellaneous.interface.ts` exposent les mêmes types (`AccountingAccount`, `AccountingBookkeeping`, etc.), provoquant des collisions lors de l'import via `interfaces_dolibarr/index.ts`.
- **Clés primaires manquantes** : Les entités principales comme `Product`, `Facture`, `Societe` ou `Actioncomm` n'exposent pas leur `rowid`, rendant les typings incomplets et incompatibles avec l'usage réel des objets Dolibarr.
- **Mauvaise cartographie des types** : Certains champs numériques sont déclarés `number` alors que la base Dolibarr utilise des `VARCHAR` (ex. `piece_num`), ce qui induira des erreurs de validation côté TypeScript.
- **Organisation incohérente** : Les fichiers métiers (ex. `product.interface.ts`, `invoice.interface.ts`) ne contiennent que des tables secondaires tandis que les tables cœur restent dans `miscellaneous.interface.ts`, contredisant la structure promise par la documentation.
- **Documentation obsolète** : `interfaces_dolibarr/README.md` et `interfaces_dolibarr/SUMMARY.md` annoncent 18 fichiers et 395 interfaces uniques, alors que l'arbre actuel contient 19 fichiers pour 385 interfaces distinctes. `structure-plan.md` cite des fichiers inexistants.
- **Erreurs mineures dans l'audit** : Typo « Formation utilisateurs massiveqr » à `AUDIT-MIGRATION-EBP-DOLIBARR.md` qui nuit à la crédibilité du livrable.

## Recommandations
1. **Déduplication** : Supprimer les doublons ou scinder `miscellaneous.interface.ts` pour éviter les conflits de noms.
2. **Compléter les schémas** : Réintroduire les colonnes clés (`rowid`, `fk_user_*`, etc.) et corriger les types (`string` vs `number`) en s'appuyant sur le schéma SQL Dolibarr.
3. **Réorganiser par domaine** : Répartir les tables principales dans les fichiers métiers appropriés pour respecter le découpage annoncé (produits, factures, sociétés, etc.).
4. **Actualiser la doc** : Mettre à jour README, SUMMARY, structure-plan et l'index pour refléter l'état réel (fichiers existants, nombres exacts, modules couverts).
5. **Relecture audit** : Corriger les coquilles et harmoniser les chiffres (ex. `interfaces` vs `entités`) afin d'aligner l'audit sur les données réelles.

## Prochaines Étapes Proposées
- **Cartographie automatique contrôlée** : Régénérer les interfaces via un script en validant chaque table contre le schéma MySQL Dolibarr.
- **Jeu de tests TypeScript** : Ajouter une compilation de test (ex. `tsc --noEmit`) pour détecter les collisions ou incohérences typées dès la CI.
- **Validation fonctionnelle** : Faire relire la nouvelle documentation par l’équipe métier pour confirmer que la structure proposée répond aux besoins de migration.
- **Mise à jour planning** : Ajuster `AUDIT-MIGRATION-EBP-DOLIBARR.md` en intégrant les corrections de termes et les métriques réelles avant diffusion.

_Statut : Analyse réalisée le 29/09/2025._
