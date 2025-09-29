/**
 * Index central pour toutes les interfaces TypeScript Dolibarr
 *
 * Permet d'importer facilement toutes les interfaces depuis un point central :
 * import { Product, Societe, Facture } from './interfaces';
 */

// Comptabilité - 8 interfaces
export * from './accounting.interface';

// Actions/Événements - 4 interfaces
export * from './action.interface';

// Actifs/Immobilisations - 9 interfaces
export * from './asset.interface';

// Gestion bancaire - 6 interfaces
export * from './bank.interface';

// Catégorisation - 22 interfaces
export * from './category.interface';

// Sociétés/Contacts - 12 interfaces
export * from './company.interface';

// Configuration système - 64 interfaces
export * from './config.interface';

// Contrats - 2 interfaces
export * from './contract.interface';

// Gestion électronique de contenu - 4 interfaces
export * from './document.interface';

// Ressources humaines - 11 interfaces
export * from './hrm.interface';

// Facturation - 11 interfaces
export * from './invoice.interface';

// Adhérents/Membres - 5 interfaces
export * from './member.interface';

// Tables diverses - 165 interfaces
export * from './miscellaneous.interface';

// Commandes - 8 interfaces
export * from './order.interface';

// Paiements - 11 interfaces
export * from './payment.interface';

// Produits - 27 interfaces
export * from './product.interface';

// Projets/Tâches - 4 interfaces
export * from './project.interface';

// Stocks/Entrepôts - 11 interfaces
export * from './stock.interface';

// Utilisateurs - 11 interfaces
export * from './user.interface';

/**
 * Types utilitaires pour l'ensemble de l'API Dolibarr
 */

// Type union de toutes les entités principales
export type DolibarrEntity =
  | 'product' | 'company' | 'invoice' | 'order' | 'payment'
  | 'user' | 'project' | 'stock' | 'category' | 'document'
  | 'hrm' | 'asset' | 'member' | 'action' | 'bank' | 'contract';

// Type pour les identifiants d'entité Dolibarr
export type DolibarrId = number;

// Type pour les timestamps Dolibarr
export type DolibarrTimestamp = string;

// Type pour les statuts génériques
export type DolibarrStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Type pour les entités multi-company
export type DolibarrEntityId = number;