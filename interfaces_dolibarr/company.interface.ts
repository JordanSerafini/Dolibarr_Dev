/**
 * Interfaces TypeScript pour les tables de sociétés/entreprises Dolibarr
 * Tables: llx_societe_account, llx_societe_commerciaux, llx_societe_contacts, llx_societe_extrafields, llx_societe_perentity-multicompany, ... (12 tables total)
 */

// Table llx_societe_account
export interface SocieteAccount {
  entity?: number;
  login: string;
  pass_encoding?: string;
  pass_crypted?: string;
  pass_temp?: string;
  fk_soc?: number;
  fk_website?: number;
  site: string;
  key_account?: string;
  note_private?: string;
  date_last_login?: string;
  date_previous_login?: string;
  date_last_reset_password?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status?: number;
}

// Table llx_societe_commerciaux
export interface SocieteCommerciaux {
  fk_soc?: number;
  fk_user?: number;
  fk_c_type_contact_code: string;
  import_key?: string;
}

// Table llx_societe_contacts
export interface SocieteContacts {
  entity: number;
  date_creation: string;
  fk_soc: number;
  fk_c_type_contact: number;
  fk_socpeople: number;
  tms?: string;
}

// Table llx_societe_extrafields
export interface SocieteExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_societe_perentity
export interface SocietePerentity {
  fk_soc?: number;
  entity: number;
  accountancy_code_customer_general?: string;
  accountancy_code_customer?: string;
  accountancy_code_supplier_general?: string;
  accountancy_code_supplier?: string;
  accountancy_code_sell?: string;
  accountancy_code_buy?: string;
  vat_reverse_charge?: number;
}

// Table llx_societe_prices
export interface SocietePrices {
  fk_soc?: number;
  tms?: string;
  datec?: string;
  fk_user_author?: number;
  price_level?: number;
}

// Table llx_societe_remise
export interface SocieteRemise {
  entity: number;
  fk_soc: number;
  tms?: string;
  datec?: string;
  fk_user_author?: number;
  remise_client: number;
  note?: string;
}

// Table llx_societe_remise_except
export interface SocieteRemiseExcept {
  entity: number;
  fk_soc: number;
  discount_type: number;
  datec?: string;
  amount_ht: number;
  amount_tva: number;
  amount_ttc: number;
  tva_tx: number;
  fk_user: number;
  fk_facture_line?: number;
  fk_facture?: number;
  fk_facture_source?: number;
  fk_invoice_supplier_line?: number;
  fk_invoice_supplier?: number;
  fk_invoice_supplier_source?: number;
  description: string;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_amount_ht: number;
  multicurrency_amount_tva: number;
  multicurrency_amount_ttc: number;
}

// Table llx_societe_remise_supplier
export interface SocieteRemiseSupplier {
  entity: number;
  fk_soc: number;
  tms?: string;
  datec?: string;
  fk_user_author?: number;
  remise_supplier: number;
  note?: string;
}

// Table llx_societe_rib
export interface SocieteRib {
  entity: number;
  type: string;
  label?: string;
  fk_soc: number;
  datec?: string;
  tms?: string;
  bank?: string;
  code_banque?: string;
  code_guichet?: string;
  number?: string;
  bic?: string;
  bic_intermediate?: string;
  iban_prefix?: string;
  domiciliation?: string;
  proprio?: string;
  owner_address?: string;
  default_rib: number;
  state_id?: number;
  fk_country?: number;
  currency_code?: string;
  model_pdf?: string;
  last_main_doc?: string;
  rum?: string;
  date_rum?: string;
  frstrecur?: string;
  last_four?: string;
  card_type?: string;
  cvn?: string;
  exp_date_month?: number;
  exp_date_year?: number;
  country_code?: string;
  approved?: number;
  email?: string;
  ending_date?: string;
  max_total_amount_of_all_payments?: number;
  preapproval_key?: string;
  starting_date?: string;
  total_amount_of_all_payments?: number;
  stripe_card_ref?: string;
  stripe_account?: string;
  ext_payment_site?: string;
  extraparams?: string;
  date_signature?: string;
  online_sign_ip?: string;
  online_sign_name?: string;
  comment?: string;
  ipaddress?: string;
  status: number;
  import_key?: string;
}

// Table llx_socpeople
export interface Socpeople {
  datec?: string;
  tms?: string;
  fk_soc?: number;
  entity: number;
  ref_ext?: string;
  name_alias?: string;
  fk_parent?: number;
  civility?: string;
  lastname?: string;
  firstname?: string;
  address?: string;
  zip?: string;
  town?: string;
  fk_departement?: number;
  fk_pays?: number;
  geolat?: number;
  geolong?: number;
  geopoint?: number;
  georesultcode?: string;
  birthday?: string;
  poste?: string;
  phone?: string;
  phone_perso?: string;
  phone_mobile?: string;
  fax?: string;
  url?: string;
  email?: string;
  socialnetworks?: string;
  photo?: string;
  no_email: number;
  priv: number;
  fk_prospectlevel?: string;
  fk_stcommcontact: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
  note_private?: string;
  note_public?: string;
  default_lang?: string;
  canvas?: string;
  import_key?: string;
  statut: number;
  ip?: string;
}

// Table llx_socpeople_extrafields
export interface SocpeopleExtrafields {
  tms?: string;
  fk_object: number;
}
