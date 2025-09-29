/**
 * Interfaces TypeScript pour les tables d'actifs/immobilisations Dolibarr
 * Tables: llx_asset_accountancy_codes_economic-asset, llx_asset_accountancy_codes_fiscal-asset, llx_asset-asset, llx_asset_depreciation-asset, llx_asset_depreciation_options_economic-asset, ... (9 tables total)
 */

// Table llx_asset
export interface Asset {
  ref: string;
  entity: number;
  label?: string;
  fk_asset_model?: number;
  reversal_amount_ht?: number;
  acquisition_value_ht?: number;
  recovered_vat?: number;
  reversal_date?: string;
  date_acquisition: string;
  date_start: string;
  qty: number;
  acquisition_type: number;
  asset_type: number;
  not_depreciated?: string;
  disposal_date?: string;
  disposal_amount_ht?: number;
  fk_disposal_type?: number;
  disposal_depreciated?: string;
  disposal_subject_to_vat?: string;
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

// Table llx_asset_accountancy_codes_economic
export interface AssetAccountancyCodesEconomic {
  fk_asset?: number;
  fk_asset_model?: number;
  asset?: string;
  depreciation_asset?: string;
  depreciation_expense?: string;
  value_asset_sold?: string;
  receivable_on_assignment?: string;
  proceeds_from_sales?: string;
  vat_collected?: string;
  vat_deductible?: string;
  tms?: string;
  fk_user_modif?: number;
}

// Table llx_asset_accountancy_codes_fiscal
export interface AssetAccountancyCodesFiscal {
  fk_asset?: number;
  fk_asset_model?: number;
  accelerated_depreciation?: string;
  endowment_accelerated_depreciation?: string;
  provision_accelerated_depreciation?: string;
  tms?: string;
  fk_user_modif?: number;
}

// Table llx_asset_depreciation
export interface AssetDepreciation {
  fk_asset: number;
  depreciation_mode: string;
  ref: string;
  depreciation_date: string;
  depreciation_ht: number;
  cumulative_depreciation_ht: number;
  accountancy_code_debit?: string;
  accountancy_code_credit?: string;
  tms?: string;
  fk_user_modif?: number;
}

// Table llx_asset_depreciation_options_economic
export interface AssetDepreciationOptionsEconomic {
  fk_asset?: number;
  fk_asset_model?: number;
  depreciation_type: number;
  accelerated_depreciation_option?: string;
  degressive_coefficient?: number;
  duration: number;
  duration_type: number;
  amount_base_depreciation_ht?: number;
  amount_base_deductible_ht?: number;
  total_amount_last_depreciation_ht?: number;
  tms?: string;
  fk_user_modif?: number;
}

// Table llx_asset_depreciation_options_fiscal
export interface AssetDepreciationOptionsFiscal {
  fk_asset?: number;
  fk_asset_model?: number;
  depreciation_type: number;
  degressive_coefficient?: number;
  duration: number;
  duration_type: number;
  amount_base_depreciation_ht?: number;
  amount_base_deductible_ht?: number;
  total_amount_last_depreciation_ht?: number;
  tms?: string;
  fk_user_modif?: number;
}

// Table llx_asset_extrafields
export interface AssetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_asset_model
export interface AssetModel {
  entity: number;
  ref: string;
  ref_ext?: string;
  label: string;
  asset_type: number;
  fk_pays?: number;
  note_public?: string;
  note_private?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  import_key?: string;
  status: number;
}

// Table llx_asset_model_extrafields
export interface AssetModelExtrafields {
  tms?: string;
  fk_object: number;
}
