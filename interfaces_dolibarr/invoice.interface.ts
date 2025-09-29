/**
 * Interfaces TypeScript pour les tables de facturation Dolibarr
 * Tables: llx_facture_extrafields, llx_facture_fourn_det_extrafields, llx_facture_fourn_det_rec_extrafields, llx_facture_fourn_det_rec, llx_facture_fourn_det, ... (11 tables total)
 */

// Table llx_facture_extrafields
export interface FactureExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facture_fourn
export interface FactureFourn {
  ref: string;
  ref_supplier: string;
  entity: number;
  ref_ext?: string;
  type: number;
  subtype?: number;
  fk_soc: number;
  datec?: string;
  datef?: string;
  date_pointoftax?: string;
  date_valid?: string;
  tms?: string;
  date_closing?: string;
  libelle?: string;
  paye: number;
  amount: number;
  remise?: number;
  close_code?: string;
  close_missing_amount?: number;
  close_note?: string;
  vat_reverse_charge?: number;
  tva?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  revenuestamp?: number;
  total_ht?: number;
  total_ttc?: number;
  fk_statut: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_closing?: number;
  fk_fac_rec_source?: number;
  fk_facture_source?: number;
  fk_projet?: number;
  fk_account?: number;
  fk_cond_reglement?: number;
  fk_mode_reglement?: number;
  date_lim_reglement?: string;
  note_private?: string;
  note_public?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  fk_transport_mode?: number;
  model_pdf?: string;
  last_main_doc?: string;
  import_key?: string;
  extraparams?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_facture_fourn_det
export interface FactureFournDet {
  fk_facture_fourn: number;
  fk_parent_line?: number;
  fk_product?: number;
  ref?: string;
  label?: string;
  description?: string;
  pu_ht?: number;
  pu_ttc?: number;
  qty?: number;
  remise_percent?: number;
  fk_remise_except?: number;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  total_ht?: number;
  tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  product_type?: number;
  date_start?: string;
  date_end?: string;
  info_bits?: number;
  fk_code_ventilation: number;
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

// Table llx_facture_fourn_det_extrafields
export interface FactureFournDetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facture_fourn_det_rec
export interface FactureFournDetRec {
  fk_facture_fourn: number;
  fk_parent_line?: number;
  fk_product?: number;
  ref?: string;
  label?: string;
  description?: string;
  pu_ht?: number;
  pu_ttc?: number;
  qty?: number;
  remise_percent?: number;
  fk_remise_except?: number;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  total_ht?: number;
  total_tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  product_type?: number;
  date_start?: number;
  date_end?: number;
  info_bits?: number;
  special_code?: number;
  rang?: number;
  fk_unit?: number;
  import_key?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_facture_fourn_det_rec_extrafields
export interface FactureFournDetRecExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facture_fourn_extrafields
export interface FactureFournExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facture_fourn_rec
export interface FactureFournRec {
  titre: string;
  ref_supplier: string;
  entity: number;
  subtype?: number;
  fk_soc: number;
  datec?: string;
  tms?: string;
  suspended?: number;
  libelle?: string;
  amount: number;
  remise?: number;
  localtax1?: number;
  localtax2?: number;
  total_ht?: number;
  total_tva?: number;
  total_ttc?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_projet?: number;
  fk_account?: number;
  fk_cond_reglement?: number;
  fk_mode_reglement?: number;
  date_lim_reglement?: string;
  note_private?: string;
  note_public?: string;
  modelpdf?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  usenewprice?: number;
  frequency?: number;
  unit_frequency?: string;
  date_when?: string;
  date_last_gen?: string;
  nb_gen_done?: number;
  nb_gen_max?: number;
  auto_validate?: number;
  generate_pdf?: number;
}

// Table llx_facture_fourn_rec_extrafields
export interface FactureFournRecExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facture_rec
export interface FactureRec {
  titre: string;
  entity: number;
  subtype?: number;
  fk_soc: number;
  datec?: string;
  tms?: string;
  suspended?: number;
  amount: number;
  remise?: number;
  remise_percent?: number;
  remise_absolue?: number;
  vat_src_code?: string;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  revenuestamp?: number;
  total_ht?: number;
  total_ttc?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_projet?: number;
  fk_cond_reglement: number;
  fk_mode_reglement?: number;
  date_lim_reglement?: string;
  fk_account?: number;
  fk_societe_rib?: number;
  note_private?: string;
  note_public?: string;
  modelpdf?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  usenewprice?: number;
  frequency?: number;
  unit_frequency?: string;
  date_when?: string;
  date_last_gen?: string;
  nb_gen_done?: number;
  nb_gen_max?: number;
  auto_validate?: number;
  generate_pdf?: number;
}

// Table llx_facture_rec_extrafields
export interface FactureRecExtrafields {
  tms?: string;
  fk_object: number;
}
