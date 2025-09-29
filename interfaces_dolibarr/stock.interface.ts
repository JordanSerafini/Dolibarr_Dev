/**
 * Interfaces TypeScript pour les tables de gestion des stocks Dolibarr
 * Tables: llx_entrepot_extrafields, llx_entrepot, llx_inventorydet-stock, llx_inventory_extrafields-stock, llx_inventory-stock, ... (11 tables total)
 */

// Table llx_entrepot
export interface Entrepot {
  ref: string;
  datec?: string;
  tms?: string;
  entity: number;
  fk_project?: number;
  description?: string;
  lieu?: string;
  address?: string;
  zip?: string;
  town?: string;
  fk_departement?: number;
  fk_pays?: number;
  phone?: string;
  fax?: string;
  barcode?: string;
  fk_barcode_type?: number;
  warehouse_usage?: number;
  statut?: number;
  fk_user_author?: number;
  model_pdf?: string;
  import_key?: string;
  fk_parent?: number;
}

// Table llx_entrepot_extrafields
export interface EntrepotExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_inventory
export interface Inventory {
  entity?: number;
  ref?: string;
  date_creation?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_warehouse?: number;
  fk_product?: number;
  categories_product?: string;
  status?: number;
  title: string;
  date_inventory?: string;
  date_validation?: string;
}

// Table llx_inventory_extrafields
export interface InventoryExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_inventorydet
export interface Inventorydet {
  datec?: string;
  tms?: string;
  fk_inventory?: number;
  fk_warehouse?: number;
  fk_product?: number;
  batch?: string;
  qty_stock?: number;
  qty_view?: number;
  qty_regulated?: number;
  pmp_real?: number;
  pmp_expected?: number;
  fk_movement?: number;
}

// Table llx_stock_mouvement
export interface StockMouvement {
  tms?: string;
  datem?: string;
  fk_product: number;
  batch?: string;
  eatby?: string;
  sellby?: string;
  fk_entrepot: number;
  value?: number;
  price?: number;
  type_mouvement?: number;
  fk_user_author?: number;
  label?: string;
  inventorycode?: string;
  fk_project?: number;
  fk_origin?: number;
  origintype?: string;
  model_pdf?: string;
  fk_projet: number;
}

// Table llx_stock_mouvement_extrafields
export interface StockMouvementExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_stocktransfer_stocktransfer
export interface StocktransferStocktransfer {
  entity: number;
  ref: string;
  label?: string;
  fk_soc?: number;
  fk_project?: number;
  fk_warehouse_source?: number;
  fk_warehouse_destination?: number;
  description?: string;
  note_public?: string;
  note_private?: string;
  tms?: string;
  date_creation: string;
  date_prevue_depart?: string;
  date_reelle_depart?: string;
  date_prevue_arrivee?: string;
  date_reelle_arrivee?: string;
  lead_time_for_warning?: number;
  fk_user_creat: number;
  fk_user_modif?: number;
  model_pdf?: string;
  last_main_doc?: string;
  status: number;
  fk_incoterms?: number;
  location_incoterms?: string;
}

// Table llx_stocktransfer_stocktransfer_extrafields
export interface StocktransferStocktransferExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_stocktransfer_stocktransferline
export interface StocktransferStocktransferline {
  amount?: number;
  qty?: number;
  fk_warehouse_source: number;
  fk_warehouse_destination: number;
  fk_stocktransfer: number;
  fk_product: number;
  batch?: string;
  pmp?: number;
  rang?: number;
  fk_parent_line?: number;
}

// Table llx_stocktransfer_stocktransferline_extrafields
export interface StocktransferStocktransferlineExtrafields {
  tms?: string;
  fk_object: number;
}
