/**
 * Interfaces TypeScript pour les tables de contrats Dolibarr
 * Tables: llx_contrat_extrafields, llx_contrat
 */

// Table llx_contrat
export interface Contrat {
  ref?: string;
  ref_customer?: string;
  ref_supplier?: string;
  ref_ext?: string;
  entity: number;
  tms?: string;
  datec?: string;
  date_contrat?: string;
  statut?: number;
  fin_validite?: string;
  date_cloture?: string;
  fk_soc: number;
  fk_projet?: number;
  fk_commercial_signature?: number;
  fk_commercial_suivi?: number;
  fk_user_author: number;
  fk_user_modif?: number;
  fk_user_cloture?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  revenuestamp?: number;
  total_ht?: number;
  total_ttc?: number;
  denormalized_lower_planned_end_date?: string;
  signed_status?: number;
  online_sign_ip?: string;
  online_sign_name?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  import_key?: string;
  extraparams?: string;
}

// Table llx_contrat_extrafields
export interface ContratExtrafields {
  tms?: string;
  fk_object: number;
}
