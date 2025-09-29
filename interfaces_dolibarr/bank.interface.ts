/**
 * Interfaces TypeScript pour les tables bancaires Dolibarr
 * Tables: llx_bank_account_extrafields, llx_bank_account, llx_bank_extrafields, llx_bank_import-bank, llx_bank, ... (6 tables total)
 */

// Table llx_bank
export interface Bank {
  datec?: string;
  tms?: string;
  datev?: string;
  dateo?: string;
  amount: number;
  amount_main_currency?: number;
  label?: string;
  fk_account?: number;
  fk_user_author?: number;
  fk_user_rappro?: number;
  fk_type?: string;
  num_releve?: string;
  num_chq?: string;
  numero_compte?: string;
  rappro?: number;
  note?: string;
  fk_bordereau?: number;
  position?: number;
  banque?: string;
  emetteur?: string;
  author?: string;
  origin_id?: number;
  origin_type?: string;
  import_key?: string;
}

// Table llx_bank_account
export interface BankAccount {
  datec?: string;
  tms?: string;
  ref: string;
  label: string;
  entity: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  bank?: string;
  code_banque?: string;
  code_guichet?: string;
  number?: string;
  cle_rib?: string;
  bic?: string;
  bic_intermediate?: string;
  iban_prefix?: string;
  country_iban?: string;
  cle_iban?: string;
  domiciliation?: string;
  pti_in_ctti?: number;
  state_id?: number;
  fk_pays: number;
  proprio?: string;
  owner_address?: string;
  owner_zip?: string;
  owner_town?: string;
  owner_country_id?: number;
  courant: number;
  clos: number;
  rappro?: number;
  url?: string;
  account_number?: string;
  fk_accountancy_journal?: number;
  currency_code: string;
  min_allowed?: number;
  min_desired?: number;
  comment?: string;
  note_public?: string;
  model_pdf?: string;
  import_key?: string;
  extraparams?: string;
  ics?: string;
  ics_transfer?: string;
}

// Table llx_bank_account_extrafields
export interface BankAccountExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bank_extrafields
export interface BankExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bank_import
export interface BankImport {
  id_account: number;
  record_type?: string;
  label: string;
  record_type_origin: string;
  label_origin: string;
  comment?: string;
  note?: string;
  bdate?: string;
  vdate?: string;
  date_scraped?: string;
  original_amount?: number;
  original_currency?: string;
  amount_debit: number;
  amount_credit: number;
  deleted_date?: string;
  fk_duplicate_of?: number;
  status: number;
  datec: string;
  tms?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  import_key?: string;
  datas: string;
}

// Table llx_bank_url
export interface BankUrl {
  fk_bank?: number;
  url_id?: number;
  url?: string;
  label?: string;
  type: string;
}
