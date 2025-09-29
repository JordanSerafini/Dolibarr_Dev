/**
 * Interfaces TypeScript pour les tables de commandes Dolibarr
 * Tables: llx_commandedet_extrafields, llx_commandedet, llx_commande_extrafields, llx_commande_fournisseurdet_extrafields, llx_commande_fournisseurdet, ... (8 tables total)
 */

// Table llx_commande_extrafields
export interface CommandeExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_commande_fournisseur
export interface CommandeFournisseur {
  ref: string;
  entity: number;
  ref_ext?: string;
  ref_supplier?: string;
  fk_soc: number;
  fk_projet?: number;
  tms?: string;
  date_creation?: string;
  date_valid?: string;
  date_approve?: string;
  date_approve2?: string;
  date_commande?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_approve?: number;
  fk_user_approve2?: number;
  source: number;
  fk_statut?: number;
  billed?: number;
  amount_ht?: number;
  remise_percent?: number;
  remise?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  total_ht?: number;
  total_ttc?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  date_livraison?: string;
  fk_account?: number;
  fk_cond_reglement?: number;
  fk_mode_reglement?: number;
  fk_input_method?: number;
  fk_incoterms?: number;
  location_incoterms?: string;
  import_key?: string;
  extraparams?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_commande_fournisseur_extrafields
export interface CommandeFournisseurExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_commande_fournisseur_log
export interface CommandeFournisseurLog {
  tms?: string;
  datelog: string;
  fk_commande: number;
  fk_statut: number;
  fk_user: number;
  comment?: string;
}

// Table llx_commande_fournisseurdet
export interface CommandeFournisseurdet {
  fk_commande: number;
  fk_parent_line?: number;
  fk_product?: number;
  ref?: string;
  label?: string;
  description?: string;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty?: number;
  remise_percent?: number;
  remise?: number;
  subprice?: number;
  subprice_ttc?: number;
  total_ht?: number;
  total_tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  product_type?: number;
  date_start?: string;
  date_end?: string;
  info_bits?: number;
  special_code?: number;
  rang?: number;
  fk_unit?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_commande_fournisseurdet_extrafields
export interface CommandeFournisseurdetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_commandedet
export interface Commandedet {
  fk_commande: number;
  fk_parent_line?: number;
  fk_product?: number;
  label?: string;
  description?: string;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty?: number;
  remise_percent?: number;
  remise?: number;
  fk_remise_except?: number;
  price?: number;
  subprice?: number;
  subprice_ttc?: number;
  total_ht?: number;
  total_tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  product_type?: number;
  date_start?: string;
  date_end?: string;
  info_bits?: number;
  buy_price_ht?: number;
  fk_product_fournisseur_price?: number;
  special_code?: number;
  rang?: number;
  fk_unit?: number;
  import_key?: string;
  ref_ext?: string;
  fk_commandefourndet?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_commandedet_extrafields
export interface CommandedetExtrafields {
  tms?: string;
  fk_object: number;
}
