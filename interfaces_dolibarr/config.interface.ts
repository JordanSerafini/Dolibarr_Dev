/**
 * Interfaces TypeScript pour les tables de configuration Dolibarr (tables llx_c_*)
 * Tables: llx_c_accounting_category-accounting, llx_c_accounting_report-accounting, llx_c_actioncomm, llx_c_action_trigger, llx_c_asset_disposal_type-asset, ... (64 tables total)
 */

// Table llx_c_accounting_category
export interface CAccountingCategory {
  entity: number;
  fk_report: number;
  code: string;
  label: string;
  range_account: string;
  sens: number;
  category_type: number;
  formula: string;
  position?: number;
  fk_country?: number;
  active?: number;
}

// Table llx_c_accounting_report
export interface CAccountingReport {
  entity: number;
  code: string;
  label: string;
  fk_country?: number;
  active?: number;
}

// Table llx_c_action_trigger
export interface CActionTrigger {
  elementtype: string;
  code: string;
  contexts?: string;
  label: string;
  description?: string;
  rang?: number;
}

// Table llx_c_actioncomm
export interface CActioncomm {
  code: string;
  type: string;
  libelle: string;
  module?: string;
  active: number;
  todo?: number;
  color?: string;
  picto?: string;
  position: number;
}

// Table llx_c_asset_disposal_type
export interface CAssetDisposalType {
  entity: number;
  code: string;
  label: string;
  active: number;
}

// Table llx_c_availability
export interface CAvailability {
  code: string;
  label: string;
  type_duration?: string;
  qty?: number;
  active: number;
  position: number;
}

// Table llx_c_barcode_type
export interface CBarcodeType {
  code: string;
  entity: number;
  libelle: string;
  coder: string;
  example: string;
}

// Table llx_c_chargesociales
export interface CChargesociales {
  libelle?: string;
  deductible: number;
  active: number;
  code: string;
  accountancy_code?: string;
  fk_pays: number;
  module?: string;
}

// Table llx_c_civility
export interface CCivility {
  code: string;
  label?: string;
  active: number;
  module?: string;
}

// Table llx_c_country
export interface CCountry {
  code: string;
  code_iso?: string;
  numeric_code?: string;
  label: string;
  eec: number;
  active: number;
  favorite: number;
}

// Table llx_c_currencies
export interface CCurrencies {
  label: string;
  unicode?: string;
  active: number;
}

// Table llx_c_departements
export interface CDepartements {
  code_departement: string;
  fk_region?: number;
  cheflieu?: string;
  tncc?: number;
  ncc?: string;
  nom?: string;
  active: number;
}

// Table llx_c_ecotaxe
export interface CEcotaxe {
  code: string;
  label?: string;
  price?: number;
  organization?: string;
  fk_pays: number;
  active: number;
}

// Table llx_c_effectif
export interface CEffectif {
  code: string;
  libelle?: string;
  active: number;
  module?: string;
}

// Table llx_c_email_senderprofile
export interface CEmailSenderprofile {
  entity: number;
  private: number;
  date_creation?: string;
  tms?: string;
  label?: string;
  email: string;
  signature?: string;
  position?: number;
  active: number;
}

// Table llx_c_email_templates
export interface CEmailTemplates {
  entity: number;
  module?: string;
  type_template?: string;
  private: number;
  fk_user?: number;
  datec?: string;
  tms?: string;
  label?: string;
  position?: number;
  defaultfortype?: number;
  enabled?: string;
  active: number;
  email_from?: string;
  email_to?: string;
  email_tocc?: string;
  email_tobcc?: string;
  topic?: string;
  joinfiles?: string;
  content?: string;
  content_lines?: string;
}

// Table IF
export interface If {
  label: string;
  entity: number;
  active: number;
}

// Table IF
export interface If {
  fk_c_exp_tax_cat: number;
  range_ik: number;
  entity: number;
  active: number;
}

// Table llx_c_field_list
export interface CFieldList {
  tms?: string;
  element: string;
  entity: number;
  name: string;
  alias: string;
  title: string;
  align?: string;
  sort: number;
  search: number;
  visible: number;
  enabled?: string;
  rang?: number;
}

// Table llx_c_format_cards
export interface CFormatCards {
  code: string;
  name: string;
  paper_size: string;
  orientation: string;
  metric: string;
  leftmargin: number;
  topmargin: number;
  nx: number;
  ny: number;
  spacex: number;
  spacey: number;
  width: number;
  height: number;
  font_size: number;
  custom_x: number;
  custom_y: number;
  active: number;
}

// Table llx_c_forme_juridique
export interface CFormeJuridique {
  code: number;
  fk_pays: number;
  libelle?: string;
  isvatexempted: number;
  active: number;
  module?: string;
  position: number;
}

// Table llx_c_holiday_types
export interface CHolidayTypes {
  entity: number;
  code: string;
  label: string;
  affect: number;
  delay: number;
  newbymonth: number;
  fk_country?: number;
  block_if_negative: number;
  sortorder?: number;
  active?: number;
}

// Table llx_c_hrm_department
export interface CHrmDepartment {
  pos: number;
  code: string;
  label?: string;
  active: number;
}

// Table llx_c_hrm_function
export interface CHrmFunction {
  pos: number;
  code: string;
  label?: string;
  c_level: number;
  active: number;
}

// Table llx_c_hrm_public_holiday
export interface CHrmPublicHoliday {
  entity: number;
  fk_country?: number;
  fk_departement?: number;
  code?: string;
  dayrule?: string;
  day?: number;
  month?: number;
  year?: number;
  active?: number;
}

// Table llx_c_incoterms
export interface CIncoterms {
  code: string;
  label?: string;
  libelle: string;
  active: number;
}

// Table llx_c_input_method
export interface CInputMethod {
  code?: string;
  libelle?: string;
  active: number;
  module?: string;
}

// Table llx_c_input_reason
export interface CInputReason {
  code?: string;
  label?: string;
  active: number;
  module?: string;
}

// Table llx_c_invoice_subtype
export interface CInvoiceSubtype {
  entity: number;
  fk_country: number;
  code: string;
  label?: string;
  active: number;
}

// Table llx_c_lead_status
export interface CLeadStatus {
  code?: string;
  label?: string;
  position?: number;
  percent?: number;
  active: number;
}

// Table llx_c_paiement
export interface CPaiement {
  entity: number;
  code: string;
  libelle?: string;
  type?: number;
  active: number;
  accountancy_code?: string;
  module?: string;
  position: number;
}

// Table llx_c_paper_format
export interface CPaperFormat {
  code: string;
  label: string;
  width?: number;
  height?: number;
  unit: string;
  active: number;
  module?: string;
}

// Table llx_c_partnership_type
export interface CPartnershipType {
  entity: number;
  code: string;
  label: string;
  keyword?: string;
  active: number;
}

// Table llx_c_payment_term
export interface CPaymentTerm {
  entity: number;
  code?: string;
  sortorder?: number;
  active?: number;
  libelle?: string;
  libelle_facture?: string;
  type_cdr?: number;
  nbjour?: number;
  decalage?: number;
  deposit_percent?: string;
  module?: string;
  position: number;
}

// Table llx_c_price_expression
export interface CPriceExpression {
  title: string;
  expression: string;
}

// Table llx_c_price_global_variable
export interface CPriceGlobalVariable {
  code: string;
  description?: string;
  value?: number;
}

// Table llx_c_price_global_variable_updater
export interface CPriceGlobalVariableUpdater {
  type: number;
  description?: string;
  parameters?: string;
  fk_variable: number;
  update_interval?: number;
  next_update?: number;
  last_status?: string;
}

// Table llx_c_product_nature
export interface CProductNature {
  code: number;
  label?: string;
  active: number;
}

// Table llx_c_product_thirdparty_relation_type
export interface CProductThirdpartyRelationType {
  code: string;
  label?: string;
  active: number;
}

// Table llx_c_productbatch_qcstatus
export interface CProductbatchQcstatus {
  entity: number;
  code: string;
  label: string;
  active: number;
}

// Table llx_c_propalst
export interface CPropalst {
  code: string;
  label?: string;
  sortorder?: number;
  active: number;
}

// Table llx_c_prospectcontactlevel
export interface CProspectcontactlevel {
  label?: string;
  sortorder?: number;
  active: number;
  module?: string;
}

// Table llx_c_prospectlevel
export interface CProspectlevel {
  label?: string;
  sortorder?: number;
  active: number;
  module?: string;
}

// Table llx_c_recruitment_origin
export interface CRecruitmentOrigin {
  code: string;
  label: string;
  active: number;
}

// Table llx_c_regions
export interface CRegions {
  code_region: number;
  fk_pays: number;
  cheflieu?: string;
  tncc?: number;
  nom?: string;
  active: number;
}

// Table llx_c_revenuestamp
export interface CRevenuestamp {
  fk_pays: number;
  taux: number;
  revenuestamp_type: string;
  note?: string;
  active: number;
  accountancy_code_sell?: string;
  accountancy_code_buy?: string;
}

// Table llx_c_shipment_mode
export interface CShipmentMode {
  entity: number;
  tms?: string;
  code: string;
  libelle: string;
  description?: string;
  tracking?: string;
  active?: number;
  module?: string;
}

// Table llx_c_shipment_package_type
export interface CShipmentPackageType {
  label: string;
  description?: string;
  active: number;
  entity: number;
}

// Table llx_c_socialnetworks
export interface CSocialnetworks {
  entity: number;
  code?: string;
  label?: string;
  url?: string;
  icon?: string;
  active: number;
}

// Table llx_c_stcomm
export interface CStcomm {
  code: string;
  libelle?: string;
  picto?: string;
  sortorder?: number;
  active: number;
}

// Table llx_c_stcommcontact
export interface CStcommcontact {
  code: string;
  libelle?: string;
  picto?: string;
  active: number;
}

// Table llx_c_ticket_category
export interface CTicketCategory {
  entity?: number;
  code: string;
  label: string;
  public?: number;
  use_default?: number;
  fk_parent: number;
  force_severity?: string;
  description?: string;
  pos: number;
  active?: number;
}

// Table llx_c_ticket_resolution
export interface CTicketResolution {
  entity?: number;
  code: string;
  pos: string;
  label: string;
  active?: number;
  use_default?: number;
  description?: string;
}

// Table llx_c_ticket_severity
export interface CTicketSeverity {
  entity?: number;
  code: string;
  pos: string;
  label: string;
  color?: string;
  active?: number;
  use_default?: number;
  description?: string;
}

// Table llx_c_ticket_type
export interface CTicketType {
  entity?: number;
  code: string;
  pos: string;
  label: string;
  active?: number;
  use_default?: number;
  description?: string;
}

// Table llx_c_transport_mode
export interface CTransportMode {
  entity: number;
  code: string;
  label: string;
  active: number;
}

// Table llx_c_tva
export interface CTva {
  entity: number;
  fk_pays: number;
  fk_department_buyer?: number;
  type_vat: number;
  taux: number;
  localtax1: string;
  localtax1_type: string;
  localtax2: string;
  localtax2_type: string;
  use_default?: number;
  recuperableonly: number;
  note?: string;
  active: number;
  accountancy_code_sell?: string;
  accountancy_code_buy?: string;
}

// Table llx_c_type_contact
export interface CTypeContact {
  element: string;
  source: string;
  code: string;
  libelle: string;
  active: number;
  module?: string;
  position: number;
}

// Table llx_c_type_container
export interface CTypeContainer {
  code: string;
  entity: number;
  label: string;
  module?: string;
  typecontainer?: string;
  position?: number;
  active: number;
}

// Table llx_c_type_fees
export interface CTypeFees {
  code: string;
  label?: string;
  type?: number;
  accountancy_code?: string;
  active: number;
  module?: string;
  position: number;
}

// Table llx_c_type_resource
export interface CTypeResource {
  code: string;
  label: string;
  active: number;
}

// Table llx_c_typent
export interface CTypent {
  code: string;
  libelle?: string;
  fk_country?: number;
  active: number;
  module?: string;
  position: number;
}

// Table llx_c_units
export interface CUnits {
  code?: string;
  sortorder?: number;
  scale?: number;
  label?: string;
  short_label?: string;
  unit_type?: string;
  active: number;
}

// Table llx_c_ziptown
export interface CZiptown {
  code?: string;
  fk_county?: number;
  fk_pays: number;
  zip: string;
  town: string;
  town_up?: string;
  active: number;
}
