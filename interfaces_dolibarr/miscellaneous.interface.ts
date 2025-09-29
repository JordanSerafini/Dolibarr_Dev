/**
 * Interfaces TypeScript pour les tables diverses de Dolibarr
 * Tables: 165 tables diverses
 */

// Table llx_accounting_account
export interface AccountingAccount {
  entity: number;
  datec?: string;
  tms?: string;
  fk_pcg_version: string;
  account_number: string;
  account_parent?: number;
  label: string;
  labelshort?: string;
  fk_accounting_category?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  active: number;
  reconcilable: number;
  extraparams?: string;
}

// Table llx_accounting_bookkeeping
export interface AccountingBookkeeping {
  entity: number;
  piece_num: number;
  doc_date: string;
  doc_type: string;
  doc_ref: string;
  fk_doc: number;
  fk_docdet: number;
  thirdparty_code?: string;
  subledger_account?: string;
  subledger_label?: string;
  numero_compte: string;
  label_compte: string;
  label_operation?: string;
  debit: number;
  credit: number;
  montant?: number;
  sens?: string;
  multicurrency_amount?: number;
  multicurrency_code?: string;
  lettering_code?: string;
  date_lettering?: string;
  date_lim_reglement?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  date_creation?: string;
  tms?: string;
  fk_user?: number;
  code_journal: string;
  journal_label?: string;
  date_validated?: string;
  date_export?: string;
  extraparams?: string;
}

// Table llx_accounting_bookkeeping_tmp
export interface AccountingBookkeepingTmp {
  entity: number;
  doc_date: string;
  doc_type: string;
  doc_ref: string;
  fk_doc: number;
  fk_docdet: number;
  thirdparty_code?: string;
  subledger_account?: string;
  subledger_label?: string;
  numero_compte?: string;
  label_compte: string;
  label_operation?: string;
  debit: number;
  credit: number;
  montant: number;
  sens?: string;
  multicurrency_amount?: number;
  multicurrency_code?: string;
  lettering_code?: string;
  date_lettering?: string;
  date_lim_reglement?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  date_creation?: string;
  tms?: string;
  fk_user?: number;
  code_journal: string;
  journal_label?: string;
  piece_num: number;
  date_validated?: string;
  extraparams?: string;
}

// Table llx_accounting_category_account
export interface AccountingCategoryAccount {
  fk_accounting_category?: number;
  fk_accounting_account?: number;
}

// Table llx_accounting_fiscalyear
export interface AccountingFiscalyear {
  label: string;
  date_start?: string;
  date_end?: string;
  statut: number;
  entity: number;
  datec: string;
  tms?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
}

// Table llx_accounting_groups_account
export interface AccountingGroupsAccount {
  fk_accounting_account: number;
  fk_c_accounting_category: number;
}

// Table llx_accounting_journal
export interface AccountingJournal {
  entity: number;
  code: string;
  label: string;
  nature: number;
  active?: number;
}

// Table llx_accounting_system
export interface AccountingSystem {
  fk_country?: number;
  pcg_version: string;
  label: string;
  active?: number;
  date_creation?: string;
  fk_user_author?: number;
}

// Table llx_blockedlog
export interface Blockedlog {
  entity: number;
  date_creation?: string;
  tms?: string;
  action?: string;
  amounts: number;
  element?: string;
  fk_user?: number;
  user_fullname?: string;
  fk_object?: number;
  ref_object?: string;
  date_object?: string;
  signature: string;
  signature_line: string;
  object_data?: string;
  object_version?: string;
  certified?: number;
}

// Table llx_blockedlog_authority
export interface BlockedlogAuthority {
  blockchain: string;
  signature: string;
  tms?: string;
}

// Table llx_bom_bom
export interface BomBom {
  entity: number;
  ref: string;
  bomtype?: number;
  label?: string;
  fk_product?: number;
  description?: string;
  note_public?: string;
  note_private?: string;
  fk_warehouse?: number;
  qty?: number;
  efficiency?: number;
  duration?: number;
  date_creation: string;
  date_valid?: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  model_pdf?: string;
  last_main_doc?: string;
  status: number;
}

// Table llx_bom_bom_extrafields
export interface BomBomExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bom_bomline
export interface BomBomline {
  fk_bom: number;
  fk_product: number;
  fk_bom_child?: number;
  tms?: string;
  description?: string;
  qty: number;
  qty_frozen?: number;
  disable_stock_change?: number;
  efficiency: number;
  fk_unit?: number;
  position: number;
  fk_default_workstation?: number;
}

// Table llx_bom_bomline_extrafields
export interface BomBomlineExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bookcal_availabilities
export interface BookcalAvailabilities {
  label?: string;
  description?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  last_main_doc?: string;
  model_pdf?: string;
  status: number;
  start: string;
  end: string;
  duration: number;
  startHour: number;
  endHour: number;
  fk_bookcal_calendar: number;
}

// Table llx_bookcal_availabilities_extrafields
export interface BookcalAvailabilitiesExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bookcal_calendar
export interface BookcalCalendar {
  entity: number;
  ref: string;
  label?: string;
  fk_soc?: number;
  fk_project?: number;
  description?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status: number;
  type: number;
  visibility: number;
}

// Table llx_bookcal_calendar_extrafields
export interface BookcalCalendarExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_bookmark
export interface Bookmark {
  fk_user: number;
  dateb?: string;
  url?: string;
  target?: string;
  title?: string;
  favicon?: string;
  position?: number;
  entity: number;
}

// Table llx_bordereau_cheque
export interface BordereauCheque {
  ref: string;
  label?: string;
  ref_ext?: string;
  type?: string;
  datec: string;
  date_bordereau?: string;
  amount: number;
  nbcheque: number;
  fk_bank_account?: number;
  fk_user_author?: number;
  statut: number;
  tms?: string;
  note?: string;
  entity: number;
}

// Table llx_boxes
export interface Boxes {
  entity: number;
  box_id: number;
  position: number;
  box_order: string;
  fk_user: number;
  maxline?: number;
  params?: string;
}

// Table llx_boxes_def
export interface BoxesDef {
  entity: number;
  fk_user: number;
  tms?: string;
}

// Table llx_budget
export interface Budget {
  entity: number;
  label: string;
  status?: number;
  note?: string;
  date_start?: string;
  date_end?: string;
  datec?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_budget_lines
export interface BudgetLines {
  fk_budget: number;
  fk_project_ids: string;
  amount: number;
  datec?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_categorie
export interface Categorie {
  entity: number;
  fk_parent: number;
  label: string;
  ref_ext?: string;
  type: number;
  description?: string;
  color?: string;
  position?: number;
  fk_soc?: number;
  visible: number;
  date_creation?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_chargesociales
export interface Chargesociales {
  ref?: string;
  date_ech: string;
  libelle: string;
  entity: number;
  tms?: string;
  date_creation?: string;
  date_valid?: string;
  fk_user?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_type: number;
  fk_account?: number;
  fk_mode_reglement?: number;
  amount: number;
  paye: number;
  periode?: string;
  fk_projet?: number;
  note_private?: string;
  note_public?: string;
}

// Table llx_commande
export interface Commande {
  ref: string;
  entity: number;
  ref_ext?: string;
  ref_client?: string;
  fk_soc: number;
  fk_projet?: number;
  tms?: string;
  date_creation?: string;
  date_valid?: string;
  date_cloture?: string;
  date_commande?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_cloture?: number;
  source?: number;
  fk_statut?: number;
  amount_ht?: number;
  remise_percent?: number;
  remise_absolue?: number;
  remise?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  revenuestamp?: number;
  total_ht?: number;
  total_ttc?: number;
  signed_status?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  module_source?: string;
  pos_source?: string;
  facture?: number;
  fk_account?: number;
  fk_currency?: string;
  fk_cond_reglement?: number;
  deposit_percent?: string;
  fk_mode_reglement?: number;
  date_livraison?: string;
  fk_shipping_method?: number;
  fk_warehouse?: number;
  fk_availability?: number;
  fk_input_reason?: number;
  fk_delivery_address?: number;
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

// Table llx_comment
export interface Comment {
  datec?: string;
  tms?: string;
  description: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_element?: number;
  element_type?: string;
  entity?: number;
}

// Table llx_const
export interface Const {
  name: string;
  entity: number;
  value: string;
  type?: string;
  visible: number;
  note?: string;
  tms?: string;
}

// Table llx_contratdet
export interface Contratdet {
  tms?: string;
  fk_contrat: number;
  fk_product?: number;
  statut?: number;
  label?: string;
  description?: string;
  fk_remise_except?: number;
  date_commande?: string;
  date_ouverture_prevue?: string;
  date_ouverture?: string;
  date_fin_validite?: string;
  date_cloture?: string;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty: number;
  remise_percent?: number;
  subprice?: number;
  subprice_ttc?: number;
  price_ht?: number;
  remise?: number;
  total_ht?: number;
  total_tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  product_type?: number;
  info_bits?: number;
  rang?: number;
  buy_price_ht?: number;
  fk_product_fournisseur_price?: number;
  fk_user_author: number;
  fk_user_ouverture?: number;
  fk_user_cloture?: number;
  commentaire?: string;
  fk_unit?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_contratdet_extrafields
export interface ContratdetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_cronjob
export interface Cronjob {
  tms?: string;
  datec?: string;
  jobtype: string;
  label: string;
  command?: string;
  classesname?: string;
  objectname?: string;
  methodename?: string;
  params?: string;
  md5params?: string;
  module_name?: string;
  priority?: number;
  datelastrun?: string;
  datenextrun?: string;
  datestart?: string;
  dateend?: string;
  datelastresult?: string;
  lastresult?: string;
  lastoutput?: string;
  unitfrequency: string;
  frequency: number;
  maxrun: number;
  nbrun?: number;
  autodelete?: number;
  status: number;
  processing: number;
  pid?: number;
  test?: string;
  fk_user_author?: number;
  fk_user_mod?: number;
  fk_mailing?: number;
  note?: string;
  libname?: string;
  email_alert?: string;
  entity?: number;
}

// Table llx_default_values
export interface DefaultValues {
  entity: number;
  type?: string;
  user_id: number;
  page?: string;
  param?: string;
  value?: string;
}

// Table llx_delivery
export interface Delivery {
  tms?: string;
  ref: string;
  entity: number;
  fk_soc: number;
  ref_ext?: string;
  ref_customer?: string;
  date_creation?: string;
  fk_user_author?: number;
  date_valid?: string;
  fk_user_valid?: number;
  date_delivery?: string;
  fk_address?: number;
  fk_statut?: number;
  total_ht?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  extraparams?: string;
}

// Table llx_delivery_extrafields
export interface DeliveryExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_deliverydet
export interface Deliverydet {
  fk_delivery?: number;
  fk_origin_line?: number;
  fk_product?: number;
  description?: string;
  qty?: number;
  subprice?: number;
  subprice_ttc?: number;
  total_ht?: number;
  rang?: number;
}

// Table llx_deliverydet_extrafields
export interface DeliverydetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_deplacement
export interface Deplacement {
  ref: string;
  entity: number;
  datec: string;
  tms?: string;
  dated?: string;
  fk_user: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  type: string;
  fk_statut: number;
  km?: number;
  fk_soc?: number;
  fk_projet?: number;
  note_private?: string;
  note_public?: string;
  extraparams?: string;
}

// Table llx_document_model
export interface DocumentModel {
  nom?: string;
  entity: number;
  type: string;
  libelle?: string;
  description?: string;
}

// Table llx_don
export interface Don {
  ref: string;
  entity: number;
  tms?: string;
  fk_statut: number;
  datedon?: string;
  amount?: number;
  fk_payment?: number;
  paid: number;
  fk_soc?: number;
  firstname?: string;
  lastname?: string;
  societe?: string;
  address?: string;
  zip?: string;
  town?: string;
  country?: string;
  fk_country: number;
  email?: string;
  phone?: string;
  phone_mobile?: string;
  public: number;
  fk_projet?: number;
  datec?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  date_valid?: string;
  fk_user_valid?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  extraparams?: string;
}

// Table llx_don_extrafields
export interface DonExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_element_categorie
export interface ElementCategorie {
  fk_categorie: number;
  fk_element: number;
}

// Table llx_element_contact
export interface ElementContact {
  datecreate?: string;
  statut?: number;
  element_id: number;
  fk_c_type_contact: number;
  fk_socpeople: number;
}

// Table llx_element_element
export interface ElementElement {
  fk_source: number;
  sourcetype: string;
  fk_target: number;
  targettype: string;
  relationtype?: string;
}

// Table llx_element_resources
export interface ElementResources {
  element_id?: number;
  element_type?: string;
  resource_id?: number;
  resource_type?: string;
  busy?: number;
  mandatory?: number;
  duree?: number;
  fk_user_create?: number;
  tms?: string;
}

// Table llx_element_time
export interface ElementTime {
  ref_ext?: string;
  fk_element: number;
  elementtype: string;
  element_date?: string;
  element_datehour?: string;
  element_date_withhour?: number;
  element_duration?: number;
  fk_product?: number;
  fk_user?: number;
  thm?: number;
  invoice_id?: number;
  invoice_line_id?: number;
  intervention_id?: number;
  intervention_line_id?: number;
  datec?: string;
  tms?: string;
  note?: string;
}

// Table llx_emailcollector_emailcollector
export interface EmailcollectorEmailcollector {
  entity: number;
  ref: string;
  label?: string;
  description?: string;
  host?: string;
  port?: string;
  hostcharset?: string;
  imap_encryption?: string;
  norsh?: number;
  login?: string;
  acces_type?: number;
  oauth_service?: string;
  password?: string;
  source_directory: string;
  target_directory?: string;
  maxemailpercollect?: number;
  datelastresult?: string;
  codelastresult?: string;
  lastresult?: string;
  datelastok?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  position: number;
  status: number;
}

// Table llx_emailcollector_emailcollectoraction
export interface EmailcollectorEmailcollectoraction {
  fk_emailcollector: number;
  type: string;
  actionparam?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  position?: number;
  status: number;
}

// Table llx_emailcollector_emailcollectorfilter
export interface EmailcollectorEmailcollectorfilter {
  fk_emailcollector: number;
  type: string;
  rulevalue?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status: number;
}

// Table llx_establishment
export interface Establishment {
  entity: number;
  ref?: string;
  label: string;
  name?: string;
  address?: string;
  zip?: string;
  town?: string;
  fk_state?: number;
  fk_country?: number;
  profid1?: string;
  profid2?: string;
  profid3?: string;
  phone?: string;
  fk_user_author: number;
  fk_user_mod?: number;
  datec: string;
  tms: string;
  status?: number;
}

// Table llx_event_element
export interface EventElement {
  fk_source: number;
  fk_target: number;
  targettype: string;
}

// Table llx_eventorganization_conferenceorboothattendee
export interface EventorganizationConferenceorboothattendee {
  ref: string;
  fk_soc?: number;
  fk_actioncomm?: number;
  fk_project: number;
  fk_invoice?: number;
  email?: string;
  email_company?: string;
  firstname?: string;
  lastname?: string;
  date_subscription?: string;
  amount?: number;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  last_main_doc?: string;
  ip?: string;
  model_pdf?: string;
  status: number;
}

// Table llx_eventorganization_conferenceorboothattendee_extrafields
export interface EventorganizationConferenceorboothattendeeExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_events
export interface Events {
  tms?: string;
  type: string;
  entity: number;
  prefix_session?: string;
  dateevent?: string;
  fk_user?: number;
  description: string;
  ip: string;
  user_agent?: string;
  fk_object?: number;
  authentication_method?: string;
  fk_oauth_token?: number;
}

// Table llx_expedition
export interface Expedition {
  tms?: string;
  ref: string;
  entity: number;
  fk_soc: number;
  fk_projet?: number;
  ref_ext?: string;
  ref_customer?: string;
  date_creation?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  date_valid?: string;
  fk_user_valid?: number;
  date_delivery?: string;
  date_expedition?: string;
  fk_address?: number;
  fk_shipping_method?: number;
  tracking_number?: string;
  fk_statut?: number;
  billed?: number;
  height?: number;
  width?: number;
  size_units?: number;
  size?: number;
  weight_units?: number;
  weight?: number;
  signed_status?: number;
  online_sign_ip?: string;
  online_sign_name?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  import_key?: string;
  extraparams?: string;
}

// Table llx_expedition_extrafields
export interface ExpeditionExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_expedition_package
export interface ExpeditionPackage {
  fk_expedition: number;
  description?: string;
  value?: number;
  fk_package_type?: number;
  height?: number;
  width?: number;
  size?: number;
  size_units?: number;
  weight?: number;
  weight_units?: number;
  dangerous_goods?: string;
  tail_lift?: number;
  rang?: number;
}

// Table llx_expeditiondet
export interface Expeditiondet {
  fk_expedition: number;
  fk_element?: number;
  fk_elementdet?: number;
  element_type: string;
  fk_product?: number;
  qty?: number;
  fk_unit?: number;
  fk_entrepot?: number;
  rang?: number;
}

// Table llx_expeditiondet_batch
export interface ExpeditiondetBatch {
  fk_expeditiondet: number;
  eatby?: string;
  sellby?: string;
  batch?: string;
  qty: number;
  fk_origin_stock: number;
  fk_warehouse?: number;
}

// Table llx_expeditiondet_extrafields
export interface ExpeditiondetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_expensereport
export interface Expensereport {
  ref: string;
  entity: number;
  ref_number_int?: number;
  ref_ext?: number;
  total_ht?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  total_ttc?: number;
  date_debut: string;
  date_fin: string;
  date_create: string;
  date_valid?: string;
  date_approve?: string;
  date_refuse?: string;
  date_cancel?: string;
  tms?: string;
  fk_user_author: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_validator?: number;
  fk_user_approve?: number;
  fk_user_refuse?: number;
  fk_user_cancel?: number;
  fk_statut: number;
  fk_c_paiement?: number;
  paid: number;
  note_public?: string;
  note_private?: string;
  detail_refuse?: string;
  detail_cancel?: string;
  integration_compta?: number;
  fk_bank_account?: number;
  model_pdf?: string;
  last_main_doc?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  import_key?: string;
  extraparams?: string;
}

// Table llx_expensereport_det
export interface ExpensereportDet {
  fk_expensereport: number;
  docnumber?: string;
  fk_c_type_fees: number;
  fk_c_exp_tax_cat?: number;
  fk_projet?: number;
  comments: string;
  product_type?: number;
  qty: number;
  subprice: number;
  subprice_ttc?: number;
  value_unit: number;
  remise_percent?: number;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  total_ht: number;
  total_tva: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc: number;
  date: string;
  info_bits?: number;
  special_code?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  fk_facture?: number;
  fk_ecm_files?: number;
  fk_code_ventilation?: number;
  rang?: number;
  import_key?: string;
  rule_warning_message?: string;
}

// Table llx_expensereport_extrafields
export interface ExpensereportExtrafields {
  tms?: string;
  fk_object: number;
}

// Table IF
export interface If {
  datec?: string;
  tms?: string;
  fk_c_exp_tax_cat: number;
  fk_range: number;
  coef: number;
  ikoffset: number;
  active?: number;
}

// Table llx_expensereport_rules
export interface ExpensereportRules {
  datec?: string;
  tms?: string;
  dates: string;
  datee: string;
  amount: number;
  restrictive: number;
  fk_user?: number;
  fk_usergroup?: number;
  fk_c_type_fees: number;
  code_expense_rules_type: string;
  is_for_all?: number;
  entity?: number;
}

// Table llx_export_model
export interface ExportModel {
  entity?: number;
  fk_user: number;
  label: string;
  type: string;
  field: string;
  filter?: string;
}

// Table llx_extrafields
export interface Extrafields {
  name: string;
  entity: number;
  elementtype: string;
  label: string;
  type?: string;
  size?: string;
  fieldcomputed?: string;
  fielddefault?: string;
  fieldrequired?: number;
  perms?: string;
  enabled?: string;
  module?: string;
  pos?: number;
  alwayseditable?: number;
  param?: string;
  list?: string;
  printable?: number;
  totalizable?: string;
  langs?: string;
  help?: string;
  css?: string;
  cssview?: string;
  csslist?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  datec?: string;
  tms?: string;
}

// Table llx_facture
export interface Facture {
  ref: string;
  entity: number;
  ref_ext?: string;
  ref_client?: string;
  type: number;
  subtype?: number;
  fk_soc: number;
  datec?: string;
  datef?: string;
  date_pointoftax?: string;
  date_valid?: string;
  tms?: string;
  date_closing?: string;
  paye: number;
  remise_percent?: number;
  remise_absolue?: number;
  remise?: number;
  close_code?: string;
  close_missing_amount?: number;
  close_note?: string;
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
  module_source?: string;
  pos_source?: string;
  fk_fac_rec_source?: number;
  fk_facture_source?: number;
  fk_projet?: number;
  increment?: string;
  fk_account?: number;
  fk_currency?: string;
  fk_cond_reglement: number;
  fk_mode_reglement?: number;
  date_lim_reglement?: string;
  payment_reference?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  fk_transport_mode?: number;
  prorata_discount?: number;
  situation_counter?: number;
  situation_final?: number;
  retained_warranty?: number;
  retained_warranty_date_limit?: string;
  retained_warranty_fk_cond_reglement?: number;
  import_key?: string;
  extraparams?: string;
  is_also_delivery_note: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_facturedet
export interface Facturedet {
  fk_facture: number;
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
  subprice?: number;
  subprice_ttc?: number;
  price?: number;
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
  batch?: string;
  fk_warehouse?: number;
  special_code?: number;
  rang?: number;
  fk_contract_line?: number;
  fk_unit?: number;
  import_key?: string;
  fk_code_ventilation: number;
  situation_percent?: number;
  fk_prev_id?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  ref_ext?: string;
}

// Table llx_facturedet_extrafields
export interface FacturedetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_facturedet_rec
export interface FacturedetRec {
  fk_facture: number;
  fk_parent_line?: number;
  fk_product?: number;
  product_type?: number;
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
  subprice: number;
  subprice_ttc?: number;
  price?: number;
  total_ht?: number;
  total_tva?: number;
  total_localtax1?: number;
  total_localtax2?: number;
  total_ttc?: number;
  date_start_fill?: number;
  date_end_fill?: number;
  info_bits?: number;
  buy_price_ht?: number;
  fk_product_fournisseur_price?: number;
  special_code?: number;
  rang?: number;
  fk_contract_line?: number;
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

// Table llx_facturedet_rec_extrafields
export interface FacturedetRecExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_fichinter
export interface Fichinter {
  fk_soc: number;
  fk_projet?: number;
  fk_contrat?: number;
  ref: string;
  ref_ext?: string;
  ref_client?: string;
  entity: number;
  tms?: string;
  datec?: string;
  date_valid?: string;
  datei?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_statut?: number;
  dateo?: string;
  datee?: string;
  datet?: string;
  duree?: number;
  description?: string;
  signed_status?: number;
  online_sign_ip?: string;
  online_sign_name?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  extraparams?: string;
}

// Table llx_fichinter_extrafields
export interface FichinterExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_fichinter_rec
export interface FichinterRec {
  title: string;
  entity: number;
  fk_soc?: number;
  datec?: string;
  fk_contrat?: number;
  fk_user_author?: number;
  fk_projet?: number;
  duree?: number;
  description?: string;
  modelpdf?: string;
  note_private?: string;
  note_public?: string;
  frequency?: number;
  unit_frequency?: string;
  date_when?: string;
  date_last_gen?: string;
  nb_gen_done?: number;
  nb_gen_max?: number;
  auto_validate?: number;
  status?: number;
}

// Table llx_fichinterdet
export interface Fichinterdet {
  fk_fichinter?: number;
  fk_parent_line?: number;
  date?: string;
  description?: string;
  duree?: number;
  rang?: number;
}

// Table llx_fichinterdet_extrafields
export interface FichinterdetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_fichinterdet_rec
export interface FichinterdetRec {
  fk_fichinter: number;
  date?: string;
  description?: string;
  duree?: number;
  rang?: number;
  total_ht?: number;
  subprice?: number;
  subprice_ttc?: number;
  fk_parent_line?: number;
  fk_product?: number;
  label?: string;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty?: number;
  remise_percent?: number;
  fk_remise_except?: number;
  price?: number;
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
  fk_code_ventilation: number;
  special_code?: number;
  fk_unit?: number;
  import_key?: string;
}

// Table llx_holiday
export interface Holiday {
  ref: string;
  ref_ext?: string;
  entity: number;
  fk_user: number;
  fk_user_create?: number;
  fk_user_modif?: number;
  fk_type: number;
  date_create: string;
  description: string;
  date_debut: string;
  date_fin: string;
  halfday?: number;
  nb_open_day?: number;
  statut: number;
  fk_validator: number;
  date_valid?: string;
  fk_user_valid?: number;
  date_approval?: string;
  fk_user_approve?: number;
  date_refuse?: string;
  fk_user_refuse?: number;
  date_cancel?: string;
  fk_user_cancel?: number;
  detail_refuse?: string;
  note_private?: string;
  note_public?: string;
  tms?: string;
  import_key?: string;
  extraparams?: string;
}

// Table llx_holiday_config
export interface HolidayConfig {
  name: string;
  value?: string;
}

// Table llx_holiday_extrafields
export interface HolidayExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_holiday_logs
export interface HolidayLogs {
  date_action: string;
  fk_user_action: number;
  fk_user_update: number;
  fk_type: number;
  type_action: string;
  prev_solde: string;
  new_solde: string;
}

// Table llx_holiday_users
export interface HolidayUsers {
  fk_user: number;
  fk_type: number;
  nb_holiday: number;
}

// Table llx_import_model
export interface ImportModel {
  entity: number;
  fk_user: number;
  label: string;
  type: string;
  field: string;
}

// Table llx_intracommreport
export interface Intracommreport {
  ref: string;
  entity: number;
  type_declaration?: string;
  periods?: string;
  mode?: string;
  content_xml?: string;
  type_export?: string;
  datec?: string;
  tms?: string;
}

// Table llx_knowledgemanagement_knowledgerecord
export interface KnowledgemanagementKnowledgerecord {
  entity: number;
  ref: string;
  date_creation: string;
  tms?: string;
  last_main_doc?: string;
  lang?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  model_pdf?: string;
  question: string;
  answer?: string;
  url?: string;
  fk_ticket?: number;
  fk_c_ticket_category?: number;
  status: number;
}

// Table llx_knowledgemanagement_knowledgerecord_extrafields
export interface KnowledgemanagementKnowledgerecordExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_links
export interface Links {
  entity: number;
  datea: string;
  url: string;
  label: string;
  objecttype: string;
  objectid: number;
}

// Table llx_loan
export interface Loan {
  entity: number;
  datec?: string;
  tms?: string;
  label: string;
  fk_bank?: number;
  capital: number;
  insurance_amount?: number;
  datestart?: string;
  dateend?: string;
  nbterm?: number;
  rate: number;
  note_private?: string;
  note_public?: string;
  capital_position?: number;
  date_position?: string;
  paid: number;
  accountancy_account_capital?: string;
  accountancy_account_insurance?: string;
  accountancy_account_interest?: string;
  fk_projet?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  active: number;
}

// Table llx_loan_schedule
export interface LoanSchedule {
  fk_loan?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount_capital?: number;
  amount_insurance?: number;
  amount_interest?: number;
  fk_typepayment: number;
  num_payment?: string;
  note_private?: string;
  note_public?: string;
  fk_bank: number;
  fk_payment_loan?: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_localtax
export interface Localtax {
  entity: number;
  localtaxtype?: number;
  tms?: string;
  datep?: string;
  datev?: string;
  amount?: number;
  label?: string;
  note?: string;
  fk_bank?: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_mailing
export interface Mailing {
  messtype?: string;
  titre?: string;
  entity: number;
  sujet?: string;
  body?: string;
  bgcolor?: string;
  bgimage?: string;
  evenunsubscribe?: number;
  cible?: string;
  nbemail?: number;
  email_from?: string;
  name_from?: string;
  email_replyto?: string;
  email_errorsto?: string;
  tag?: string;
  date_creat?: string;
  date_valid?: string;
  date_appro?: string;
  date_envoi?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_appro?: number;
  extraparams?: string;
  joined_file1?: string;
  joined_file2?: string;
  joined_file3?: string;
  joined_file4?: string;
  statut?: number;
  note_private?: string;
  note_public?: string;
}

// Table llx_mailing_advtarget
export interface MailingAdvtarget {
  name: string;
  entity: number;
  fk_element: number;
  type_element: string;
  filtervalue?: string;
  fk_user_author: number;
  datec: string;
  fk_user_mod: number;
  tms: string;
}

// Table llx_mailing_cibles
export interface MailingCibles {
  fk_mailing: number;
  fk_contact: number;
  lastname?: string;
  firstname?: string;
  email: string;
  other?: string;
  statut: number;
  source_url?: string;
  source_id?: number;
  source_type?: string;
  date_envoi?: string;
  tms?: string;
  error_text?: string;
}

// Table llx_mailing_unsubscribe
export interface MailingUnsubscribe {
  entity: number;
  email?: string;
  unsubscribegroup?: string;
  ip?: string;
  date_creat?: string;
  tms?: string;
}

// Table llx_menu
export interface Menu {
  menu_handler: string;
  entity: number;
  module?: string;
  type: string;
  mainmenu: string;
  leftmenu?: string;
  fk_menu: number;
  fk_mainmenu?: string;
  fk_leftmenu?: string;
  position: number;
  url: string;
  target?: string;
  prefix?: string;
  langs?: string;
  level?: number;
  perms?: string;
  enabled?: string;
  usertype: number;
  tms?: string;
}

// Table llx_mrp_mo
export interface MrpMo {
  entity: number;
  ref: string;
  mrptype?: number;
  label?: string;
  qty: number;
  fk_warehouse?: number;
  fk_soc?: number;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  date_valid?: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  model_pdf?: string;
  status: number;
  fk_product: number;
  date_start_planned?: string;
  date_end_planned?: string;
  fk_bom?: number;
  fk_project?: number;
  last_main_doc?: string;
  fk_parent_line?: number;
}

// Table llx_mrp_mo_extrafields
export interface MrpMoExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_mrp_production
export interface MrpProduction {
  fk_mo: number;
  origin_id?: number;
  origin_type?: string;
  position: number;
  fk_product: number;
  fk_warehouse?: number;
  qty: number;
  qty_frozen?: number;
  disable_stock_change?: number;
  batch?: string;
  role?: string;
  fk_mrp_production?: number;
  fk_stock_movement?: number;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  fk_default_workstation?: number;
  fk_unit?: number;
}

// Table llx_mrp_production_extrafields
export interface MrpProductionExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_multicurrency
export interface Multicurrency {
  date_create?: string;
  code?: string;
  name?: string;
  entity?: number;
  fk_user?: number;
  tms?: string;
}

// Table llx_multicurrency_rate
export interface MulticurrencyRate {
  date_sync?: string;
  rate: number;
  rate_indirect?: number;
  fk_multicurrency: number;
  entity?: number;
  tms?: string;
}

// Table llx_notify
export interface Notify {
  tms?: string;
  daten?: string;
  fk_action: number;
  fk_soc?: number;
  fk_contact?: number;
  fk_user?: number;
  type?: string;
  type_target?: string;
  objet_type: string;
  objet_id: number;
  email?: string;
}

// Table llx_notify_def
export interface NotifyDef {
  entity?: number;
  tms?: string;
  datec?: string;
  fk_action: number;
  fk_soc?: number;
  fk_contact?: number;
  fk_user?: number;
  email?: string;
  threshold?: number;
  context?: string;
  type?: string;
}

// Table llx_notify_def_object
export interface NotifyDefObject {
  entity: number;
  objet_type?: string;
  objet_id: number;
  type_notif?: string;
  date_notif?: string;
  user_id?: number;
  moreparam?: string;
}

// Table llx_oauth_state
export interface OauthState {
  service?: string;
  state?: string;
  fk_user?: number;
  fk_adherent?: number;
  entity?: number;
}

// Table llx_oauth_token
export interface OauthToken {
  token?: string;
  tokenstring?: string;
  state?: string;
  fk_soc?: number;
  fk_user?: number;
  fk_adherent?: number;
  restricted_ips?: string;
  datec?: string;
  tms?: string;
  entity?: number;
}

// Table llx_object_lang
export interface ObjectLang {
  fk_object: number;
  type_object: string;
  property: string;
  lang: string;
  value?: string;
}

// Table llx_onlinesignature
export interface Onlinesignature {
  entity: number;
  object_type: string;
  object_id: number;
  datec: string;
  tms?: string;
  name: string;
  ip?: string;
  pathoffile?: string;
}

// Table llx_opensurvey_comments
export interface OpensurveyComments {
  id_sondage: string;
  comment: string;
  tms?: string;
  usercomment?: string;
  date_creation: string;
  ip?: string;
}

// Table llx_opensurvey_formquestions
export interface OpensurveyFormquestions {
  id_sondage?: string;
  question?: string;
  available_answers?: string;
}

// Table llx_opensurvey_sondage
export interface OpensurveySondage {
  entity: number;
  commentaires?: string;
  mail_admin?: string;
  nom_admin?: string;
  fk_user_creat: number;
  titre: string;
  date_fin?: string;
  status?: number;
  format: string;
  mailsonde: number;
  allow_comments: number;
  allow_spy: number;
  tms?: string;
  sujet?: string;
}

// Table llx_opensurvey_user_formanswers
export interface OpensurveyUserFormanswers {
  fk_user_survey: number;
  fk_question: number;
  reponses?: string;
}

// Table llx_opensurvey_user_studs
export interface OpensurveyUserStuds {
  nom: string;
  id_sondage: string;
  reponses: string;
  tms?: string;
  date_creation: string;
  ip?: string;
}

// Table llx_overwrite_trans
export interface OverwriteTrans {
  entity: number;
  lang?: string;
  transkey?: string;
  transvalue?: string;
}

// Table llx_partnership
export interface Partnership {
  entity: number;
  ref: string;
  status: number;
  fk_type: number;
  fk_soc?: number;
  fk_member?: number;
  email_partnership?: string;
  date_partnership_start: string;
  date_partnership_end?: string;
  reason_decline_or_cancel?: string;
  date_creation: string;
  fk_user_creat?: number;
  tms?: string;
  fk_user_modif?: number;
  note_private?: string;
  note_public?: string;
  last_main_doc?: string;
  url_to_check?: string;
  count_last_url_check_error?: number;
  last_check_backlink?: string;
  ip?: string;
  model_pdf?: string;
}

// Table llx_partnership_extrafields
export interface PartnershipExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_paymentexpensereport_expensereport
export interface PaymentexpensereportExpensereport {
  fk_payment?: number;
  fk_expensereport?: number;
  amount?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_amount?: number;
}

// Table llx_pos_cash_fence
export interface PosCashFence {
  entity: number;
  ref?: string;
  label?: string;
  opening?: number;
  cash?: number;
  card?: number;
  cheque?: number;
  status?: number;
  date_creation: string;
  date_valid?: string;
  day_close?: number;
  month_close?: number;
  year_close?: number;
  posmodule?: string;
  posnumber?: string;
  fk_user_creat?: number;
  fk_user_valid?: number;
  tms?: string;
}

// Table llx_pos_cash_fence_extrafields
export interface PosCashFenceExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_prelevement
export interface Prelevement {
  fk_facture?: number;
  fk_facture_fourn?: number;
  fk_salary?: number;
  fk_prelevement_lignes: number;
}

// Table llx_prelevement_bons
export interface PrelevementBons {
  type?: string;
  ref?: string;
  entity: number;
  datec?: string;
  amount?: number;
  statut?: number;
  credite?: number;
  note?: string;
  date_trans?: string;
  method_trans?: number;
  fk_user_trans?: number;
  date_credit?: string;
  fk_user_credit?: number;
  fk_bank_account?: number;
}

// Table llx_prelevement_demande
export interface PrelevementDemande {
  entity: number;
  fk_facture?: number;
  fk_facture_fourn?: number;
  fk_salary?: number;
  sourcetype?: string;
  amount: number;
  date_demande: string;
  traite: number;
  date_traite?: string;
  fk_prelevement_bons?: number;
  fk_user_demande: number;
  fk_societe_rib?: number;
  code_banque?: string;
  code_guichet?: string;
  number?: string;
  cle_rib?: string;
  type?: string;
  ext_payment_id?: string;
  ext_payment_site?: string;
}

// Table llx_prelevement_lignes
export interface PrelevementLignes {
  fk_prelevement_bons?: number;
  fk_soc: number;
  fk_user?: number;
  statut?: number;
  client_nom?: string;
  amount?: number;
  code_banque?: string;
  code_guichet?: string;
  number?: string;
  cle_rib?: string;
  note?: string;
  tms?: string;
}

// Table llx_prelevement_rejet
export interface PrelevementRejet {
  fk_prelevement_lignes?: number;
  date_rejet?: string;
  motif?: number;
  date_creation?: string;
  fk_user_creation?: number;
  note?: string;
  afacturer?: number;
  fk_facture?: number;
}

// Table llx_printing
export interface Printing {
  tms?: string;
  datec?: string;
  printer_name: string;
  printer_location: string;
  printer_id: string;
  copy: number;
  module: string;
  driver: string;
  userid?: number;
}

// Table llx_product
export interface Product {
  ref: string;
  entity: number;
  ref_ext?: string;
  datec?: string;
  tms?: string;
  fk_parent?: number;
  label: string;
  description?: string;
  note_public?: string;
  note?: string;
  customcode?: string;
  fk_country?: number;
  fk_state?: number;
  price?: number;
  price_ttc?: number;
  price_min?: number;
  price_min_ttc?: number;
  price_base_type?: string;
  price_label?: string;
  cost_price?: number;
  tva_tx?: number;
  recuperableonly: number;
  localtax1_tx?: number;
  localtax1_type: string;
  localtax2_tx?: number;
  localtax2_type: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  tosell?: number;
  tobuy?: number;
  tobatch: number;
  sell_or_eat_by_mandatory: number;
  batch_mask?: string;
  fk_product_type?: number;
  duration?: string;
  seuil_stock_alerte?: number;
  url?: string;
  barcode?: string;
  fk_barcode_type?: number;
  accountancy_code_sell?: string;
  accountancy_code_sell_intra?: string;
  accountancy_code_sell_export?: string;
  accountancy_code_buy?: string;
  accountancy_code_buy_intra?: string;
  accountancy_code_buy_export?: string;
  partnumber?: string;
  net_measure?: number;
  net_measure_units?: number;
  weight?: number;
  weight_units?: number;
  length?: number;
  length_units?: number;
  width?: number;
  width_units?: number;
  height?: number;
  height_units?: number;
  surface?: number;
  surface_units?: number;
  volume?: number;
  volume_units?: number;
  stockable_product: number;
  stock?: number;
  pmp: number;
  fifo?: number;
  lifo?: number;
  fk_default_warehouse?: number;
  fk_default_bom?: number;
  fk_default_workstation?: number;
  canvas?: string;
  finished?: number;
  lifetime?: number;
  qc_frequency?: number;
  hidden?: number;
  model_pdf?: string;
  fk_price_expression?: number;
  desiredstock?: number;
  fk_unit?: number;
  price_autogen?: number;
  fk_project?: number;
  mandatory_period?: number;
  last_main_doc?: string;
}

// Table llx_propal
export interface Propal {
  ref: string;
  entity: number;
  ref_ext?: string;
  ref_client?: string;
  fk_soc?: number;
  fk_projet?: number;
  tms?: string;
  datec?: string;
  datep?: string;
  fin_validite?: string;
  date_valid?: string;
  date_signature?: string;
  date_cloture?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_signature?: number;
  fk_user_cloture?: number;
  fk_statut: number;
  price?: number;
  remise_percent?: number;
  remise_absolue?: number;
  remise?: number;
  total_ht?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  total_ttc?: number;
  fk_account?: number;
  fk_currency?: string;
  fk_cond_reglement?: number;
  deposit_percent?: string;
  fk_mode_reglement?: number;
  online_sign_ip?: string;
  online_sign_name?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  model_pdf_pos_sign?: string;
  last_main_doc?: string;
  date_livraison?: string;
  fk_shipping_method?: number;
  fk_warehouse?: number;
  fk_availability?: number;
  fk_input_reason?: number;
  fk_incoterms?: number;
  location_incoterms?: string;
  import_key?: string;
  extraparams?: string;
  fk_delivery_address?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_propal_extrafields
export interface PropalExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_propal_merge_pdf_product
export interface PropalMergePdfProduct {
  fk_product: number;
  file_name: string;
  lang?: string;
  fk_user_author?: number;
  fk_user_mod: number;
  datec: string;
  tms?: string;
}

// Table llx_propaldet
export interface Propaldet {
  fk_propal: number;
  fk_parent_line?: number;
  fk_product?: number;
  label?: string;
  description?: string;
  fk_remise_except?: number;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty?: number;
  remise_percent?: number;
  remise?: number;
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
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_propaldet_extrafields
export interface PropaldetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_reception
export interface Reception {
  tms?: string;
  ref: string;
  entity: number;
  fk_soc: number;
  fk_projet?: number;
  ref_ext?: string;
  ref_supplier?: string;
  date_creation?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  date_valid?: string;
  fk_user_valid?: number;
  date_delivery?: string;
  date_reception?: string;
  fk_shipping_method?: number;
  tracking_number?: string;
  fk_statut?: number;
  billed?: number;
  height?: number;
  width?: number;
  size_units?: number;
  size?: number;
  weight_units?: number;
  weight?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  import_key?: string;
  extraparams?: string;
}

// Table llx_reception_extrafields
export interface ReceptionExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_receptiondet_batch
export interface ReceptiondetBatch {
  fk_reception?: number;
  fk_element?: number;
  fk_elementdet?: number;
  element_type: string;
  fk_product?: number;
  qty?: number;
  fk_entrepot?: number;
  fk_projet?: number;
  comment?: string;
  batch?: string;
  eatby?: string;
  sellby?: string;
  status?: number;
  fk_user?: number;
  datec?: string;
  tms?: string;
  cost_price?: number;
}

// Table llx_receptiondet_batch_extrafields
export interface ReceptiondetBatchExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_recruitment_recruitmentcandidature
export interface RecruitmentRecruitmentcandidature {
  entity: number;
  ref: string;
  fk_recruitmentjobposition?: number;
  description?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_user?: number;
  model_pdf?: string;
  status: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  date_birth?: string;
  remuneration_requested?: number;
  remuneration_proposed?: number;
  email_date?: string;
  fk_recruitment_origin?: number;
  ip?: string;
}

// Table llx_recruitment_recruitmentcandidature_extrafields
export interface RecruitmentRecruitmentcandidatureExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_recruitment_recruitmentjobposition
export interface RecruitmentRecruitmentjobposition {
  ref: string;
  entity: number;
  label: string;
  qty: number;
  fk_soc?: number;
  fk_project?: number;
  fk_user_recruiter?: number;
  email_recruiter?: string;
  fk_user_supervisor?: number;
  fk_establishment?: number;
  date_planned?: string;
  remuneration_suggested?: string;
  description?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  last_main_doc?: string;
  model_pdf?: string;
  status: number;
}

// Table llx_recruitment_recruitmentjobposition_extrafields
export interface RecruitmentRecruitmentjobpositionExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_resource
export interface Resource {
  entity: number;
  ref?: string;
  asset_number?: string;
  description?: string;
  fk_code_type_resource?: string;
  address?: string;
  zip?: string;
  town?: string;
  photo_filename?: string;
  max_users?: number;
  phone?: string;
  email?: string;
  url?: string;
  datec?: string;
  date_valid?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_statut: number;
  note_public?: string;
  note_private?: string;
  import_key?: string;
  extraparams?: string;
  fk_country?: number;
  fk_state?: number;
  tms?: string;
}

// Table llx_resource_extrafields
export interface ResourceExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_rights_def
export interface RightsDef {
  id: number;
  entity: number;
  libelle?: string;
  module?: string;
  module_origin?: string;
  module_position: number;
  family_position: number;
  perms?: string;
  subperms?: string;
  type?: string;
  bydefault?: number;
  enabled?: string;
}

// Table llx_salary
export interface Salary {
  ref?: string;
  ref_ext?: string;
  tms?: string;
  datec?: string;
  fk_user: number;
  datep?: string;
  datev?: string;
  salary?: number;
  amount: number;
  fk_projet?: number;
  fk_typepayment: number;
  num_payment?: string;
  label?: string;
  datesp?: string;
  dateep?: string;
  entity: number;
  note?: string;
  note_public?: string;
  fk_bank?: number;
  paye: number;
  fk_account?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
}

// Table llx_salary_extrafields
export interface SalaryExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_session
export interface Session {
  session_variable?: string;
  last_accessed: string;
  fk_user: number;
  remote_ip?: string;
  user_agent?: string;
}

// Table llx_societe
export interface Societe {
  nom?: string;
  name_alias?: string;
  entity: number;
  ref_ext?: string;
  statut?: number;
  parent?: number;
  status?: number;
  code_client?: string;
  code_fournisseur?: string;
  tp_payment_reference?: string;
  accountancy_code_customer_general?: string;
  code_compta?: string;
  accountancy_code_supplier_general?: string;
  code_compta_fournisseur?: string;
  address?: string;
  zip?: string;
  town?: string;
  fk_departement?: number;
  fk_pays?: number;
  geolat?: number;
  geolong?: number;
  geopoint?: number;
  georesultcode?: string;
  phone?: string;
  phone_mobile?: string;
  fax?: string;
  url?: string;
  email?: string;
  fk_account?: number;
  socialnetworks?: string;
  fk_effectif?: number;
  fk_typent?: number;
  fk_forme_juridique?: number;
  fk_currency?: string;
  siren?: string;
  siret?: string;
  ape?: string;
  idprof4?: string;
  idprof5?: string;
  idprof6?: string;
  tva_intra?: string;
  capital?: number;
  fk_stcomm: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  prefix_comm?: string;
  client?: number;
  fournisseur?: number;
  supplier_account?: string;
  fk_prospectlevel?: string;
  fk_incoterms?: number;
  location_incoterms?: string;
  customer_bad?: number;
  customer_rate?: number;
  supplier_rate?: number;
  remise_client?: number;
  remise_supplier?: number;
  mode_reglement?: number;
  cond_reglement?: number;
  deposit_percent?: string;
  transport_mode?: number;
  mode_reglement_supplier?: number;
  cond_reglement_supplier?: number;
  transport_mode_supplier?: number;
  fk_shipping_method?: number;
  tva_assuj?: number;
  vat_reverse_charge?: number;
  localtax1_assuj?: number;
  localtax1_value?: number;
  localtax2_assuj?: number;
  localtax2_value?: number;
  barcode?: string;
  fk_barcode_type?: number;
  price_level?: number;
  outstanding_limit?: number;
  order_min_amount?: number;
  supplier_order_min_amount?: number;
  default_lang?: string;
  logo?: string;
  logo_squarred?: string;
  canvas?: string;
  fk_warehouse?: number;
  webservices_url?: string;
  accountancy_code_sell?: string;
  accountancy_code_buy?: string;
  tms?: string;
  datec?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  ip?: string;
}

// Table llx_subscription
export interface Subscription {
  tms?: string;
  datec?: string;
  fk_adherent?: number;
  fk_type?: number;
  dateadh?: string;
  datef?: string;
  subscription?: number;
  fk_bank?: number;
  fk_user_creat?: number;
  fk_user_valid?: number;
  note?: string;
}

// Table llx_supplier_proposal
export interface SupplierProposal {
  ref: string;
  entity: number;
  ref_ext?: string;
  fk_soc?: number;
  fk_projet?: number;
  tms?: string;
  datec?: string;
  date_valid?: string;
  date_cloture?: string;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_user_cloture?: number;
  fk_statut: number;
  price?: number;
  remise_percent?: number;
  remise_absolue?: number;
  remise?: number;
  total_ht?: number;
  total_tva?: number;
  localtax1?: number;
  localtax2?: number;
  total_ttc?: number;
  fk_account?: number;
  fk_currency?: string;
  fk_cond_reglement?: number;
  fk_mode_reglement?: number;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  last_main_doc?: string;
  date_livraison?: string;
  fk_shipping_method?: number;
  extraparams?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
}

// Table llx_supplier_proposal_extrafields
export interface SupplierProposalExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_supplier_proposaldet
export interface SupplierProposaldet {
  fk_supplier_proposal: number;
  fk_parent_line?: number;
  fk_product?: number;
  label?: string;
  description?: string;
  fk_remise_except?: number;
  tva_tx?: number;
  localtax1_tx?: number;
  localtax1_type?: string;
  localtax2_tx?: number;
  localtax2_type?: string;
  qty?: number;
  remise_percent?: number;
  remise?: number;
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
  ref_fourn?: string;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_subprice?: number;
  multicurrency_subprice_ttc?: number;
  multicurrency_total_ht?: number;
  multicurrency_total_tva?: number;
  multicurrency_total_ttc?: number;
  fk_unit?: number;
}

// Table llx_supplier_proposaldet_extrafields
export interface SupplierProposaldetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_takepos_floor_tables
export interface TakeposFloorTables {
  entity: number;
  label?: string;
  leftpos?: number;
  toppos?: number;
  floor?: number;
}

// Table llx_ticket
export interface Ticket {
  entity?: number;
  ref: string;
  track_id: string;
  fk_soc?: number;
  fk_project?: number;
  fk_contract?: number;
  origin_email?: string;
  origin_replyto?: string;
  origin_references?: string;
  fk_user_create?: number;
  fk_user_assign?: number;
  subject?: string;
  message?: string;
  fk_statut?: number;
  resolution?: number;
  progress?: number;
  timing?: string;
  type_code?: string;
  category_code?: string;
  severity_code?: string;
  datec?: string;
  date_read?: string;
  date_last_msg_sent?: string;
  date_close?: string;
  notify_tiers_at_create?: number;
  email_msgid?: string;
  email_date?: string;
  ip?: string;
  tms?: string;
  model_pdf?: string;
  last_main_doc?: string;
  extraparams?: string;
  barcode?: string;
  fk_barcode_type?: number;
}

// Table llx_ticket_extrafields
export interface TicketExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_tva
export interface Tva {
  tms?: string;
  datec?: string;
  datep?: string;
  datev?: string;
  amount: number;
  fk_typepayment?: number;
  num_payment?: string;
  label?: string;
  entity: number;
  note?: string;
  paye: number;
  fk_account?: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_user
export interface User {
  entity: number;
  ref_employee?: string;
  ref_ext?: string;
  admin?: number;
  employee?: number;
  fk_establishment?: number;
  datec?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  login: string;
  pass_encoding?: string;
  pass?: string;
  pass_crypted?: string;
  pass_temp?: string;
  gender?: string;
  civility?: string;
  lastname?: string;
  firstname?: string;
  address?: string;
  zip?: string;
  town?: string;
  fk_state?: number;
  fk_country?: number;
  birth?: string;
  birth_place?: string;
  job?: string;
  office_phone?: string;
  office_fax?: string;
  user_mobile?: string;
  personal_mobile?: string;
  email?: string;
  personal_email?: string;
  email_oauth2?: string;
  signature?: string;
  socialnetworks?: string;
  fk_soc?: number;
  fk_socpeople?: number;
  fk_member?: number;
  fk_user?: number;
  fk_user_expense_validator?: number;
  fk_user_holiday_validator?: number;
  national_registration_number?: string;
  idpers1?: string;
  idpers2?: string;
  idpers3?: string;
  note_public?: string;
  note_private?: string;
  model_pdf?: string;
  last_main_doc?: string;
  datelastlogin?: string;
  datepreviouslogin?: string;
  datelastpassvalidation?: string;
  datestartvalidity?: string;
  dateendvalidity?: string;
  flagdelsessionsbefore?: string;
  iplastlogin?: string;
  ippreviouslogin?: string;
  ldap_sid?: string;
  openid?: string;
  statut?: number;
  photo?: string;
  lang?: string;
  color?: string;
  barcode?: string;
  fk_barcode_type?: number;
  accountancy_code_user_general?: string;
  accountancy_code?: string;
  nb_holiday?: number;
  thm?: number;
  tjm?: number;
  salary?: number;
  salaryextra?: number;
  dateemployment?: string;
  dateemploymentend?: string;
  weeklyhours?: number;
  default_range?: number;
  default_c_exp_tax_cat?: number;
  fk_warehouse?: number;
}

// Table llx_webhook_target
export interface WebhookTarget {
  ref: string;
  label?: string;
  description?: string;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status: number;
  url: string;
  connection_method?: string;
  connection_data?: string;
  trigger_codes?: string;
  trigger_stack?: string;
}

// Table llx_website
export interface Website {
  type_container: string;
  entity: number;
  ref: string;
  description?: string;
  maincolor?: string;
  maincolorbis?: string;
  lang?: string;
  otherlang?: string;
  status?: number;
  fk_default_home?: number;
  use_manifest?: number;
  virtualhost?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  date_creation?: string;
  position?: number;
  lastaccess?: string;
  lastpageid?: number;
  pageviews_previous_month?: number;
  pageviews_month?: number;
  pageviews_total?: number;
  tms?: string;
  name_template?: string;
}

// Table llx_website_extrafields
export interface WebsiteExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_website_page
export interface WebsitePage {
  fk_website: number;
  type_container: string;
  pageurl: string;
  aliasalt?: string;
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  lang?: string;
  fk_page?: number;
  allowed_in_frames?: number;
  htmlheader?: string;
  content?: string;
  status?: number;
  grabbed_from?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  author_alias?: string;
  date_creation?: string;
  tms?: string;
  object_type?: string;
  fk_object?: string;
}

// Table llx_workstation_workstation
export interface WorkstationWorkstation {
  ref: string;
  label?: string;
  type?: string;
  note_public?: string;
  entity?: number;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status: number;
  nb_operators_required?: number;
  thm_operator_estimated?: number;
  thm_machine_estimated?: number;
}

// Table llx_workstation_workstation_resource
export interface WorkstationWorkstationResource {
  tms?: string;
  fk_resource?: number;
  fk_workstation?: number;
}

// Table llx_workstation_workstation_usergroup
export interface WorkstationWorkstationUsergroup {
  tms?: string;
  fk_usergroup?: number;
  fk_workstation?: number;
}

// Table llx_zapier_hook
export interface ZapierHook {
  entity: number;
  url?: string;
  event?: string;
  module?: string;
  action?: string;
  status?: number;
  date_creation: string;
  fk_user: number;
  tms?: string;
}
