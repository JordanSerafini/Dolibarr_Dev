/**
 * Interfaces TypeScript pour les tables de catégories Dolibarr
 * Tables: llx_categorie_account, llx_categorie_actioncomm, llx_categorie_contact, llx_categorie_fichinter-fichinter, llx_categorie_fournisseur, ... (22 tables total)
 */

// Table llx_categorie_account
export interface CategorieAccount {
  fk_categorie: number;
  fk_account: number;
}

// Table llx_categorie_actioncomm
export interface CategorieActioncomm {
  fk_categorie: number;
  fk_actioncomm: number;
}

// Table llx_categorie_contact
export interface CategorieContact {
  fk_categorie: number;
  fk_socpeople: number;
}

// Table llx_categorie_fichinter
export interface CategorieFichinter {
  fk_categorie: number;
  fk_fichinter: number;
}

// Table llx_categorie_fournisseur
export interface CategorieFournisseur {
  fk_categorie: number;
  fk_soc: number;
}

// Table llx_categorie_invoice
export interface CategorieInvoice {
  fk_categorie: number;
  fk_invoice: number;
}

// Table llx_categorie_knowledgemanagement
export interface CategorieKnowledgemanagement {
  fk_categorie: number;
  fk_knowledgemanagement: number;
}

// Table llx_categorie_lang
export interface CategorieLang {
  fk_category: number;
  lang: string;
  label: string;
  description?: string;
}

// Table llx_categorie_member
export interface CategorieMember {
  fk_categorie: number;
  fk_member: number;
}

// Table llx_categorie_order
export interface CategorieOrder {
  fk_categorie: number;
  fk_order: number;
}

// Table llx_categorie_product
export interface CategorieProduct {
  fk_categorie: number;
  fk_product: number;
}

// Table llx_categorie_project
export interface CategorieProject {
  fk_categorie: number;
  fk_project: number;
}

// Table llx_categorie_societe
export interface CategorieSociete {
  fk_categorie: number;
  fk_soc: number;
}

// Table llx_categorie_supplier_invoice
export interface CategorieSupplierInvoice {
  fk_categorie: number;
  fk_supplier_invoice: number;
}

// Table llx_categorie_supplier_order
export interface CategorieSupplierOrder {
  fk_categorie: number;
  fk_supplier_order: number;
}

// Table llx_categorie_ticket
export interface CategorieTicket {
  fk_categorie: number;
  fk_ticket: number;
}

// Table llx_categorie_user
export interface CategorieUser {
  fk_categorie: number;
  fk_user: number;
}

// Table llx_categorie_warehouse
export interface CategorieWarehouse {
  fk_categorie: number;
  fk_warehouse: number;
}

// Table llx_categorie_website_page
export interface CategorieWebsitePage {
  fk_categorie: number;
  fk_website_page: number;
}

// Table llx_categories_extrafields
export interface CategoriesExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_category_bank
export interface CategoryBank {
  label?: string;
  entity: number;
}

// Table llx_category_bankline
export interface CategoryBankline {
  lineid: number;
  fk_categ: number;
}
