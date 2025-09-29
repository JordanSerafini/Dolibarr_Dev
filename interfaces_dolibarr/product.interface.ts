/**
 * Interfaces TypeScript pour les tables de produits Dolibarr
 * Tables: llx_product_association, llx_product_attribute_combination2val-variants, llx_product_attribute_combination_price_level-variants, llx_product_attribute_combination-variants, llx_product_attribute_extrafields-variants, ... (27 tables total)
 */

// Table llx_product_association
export interface ProductAssociation {
  fk_product_pere: number;
  fk_product_fils: number;
  qty?: number;
  incdec?: number;
  rang?: number;
}

// Table llx_product_attribute
export interface ProductAttribute {
  ref: string;
  ref_ext?: string;
  label: string;
  position: number;
  entity: number;
}

// Table llx_product_attribute_combination
export interface ProductAttributeCombination {
  fk_product_parent: number;
  fk_product_child: number;
  variation_price: number;
  variation_price_percentage?: number;
  variation_weight: number;
  variation_ref_ext?: string;
  entity: number;
}

// Table llx_product_attribute_combination2val
export interface ProductAttributeCombination2val {
  fk_prod_combination: number;
  fk_prod_attr: number;
  fk_prod_attr_val: number;
}

// Table llx_product_attribute_combination_price_level
export interface ProductAttributeCombinationPriceLevel {
  fk_product_attribute_combination: number;
  fk_price_level: number;
  variation_price: number;
  variation_price_percentage?: number;
}

// Table llx_product_attribute_extrafields
export interface ProductAttributeExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_attribute_value
export interface ProductAttributeValue {
  fk_product_attribute: number;
  ref: string;
  value: string;
  entity: number;
  position: number;
}

// Table llx_product_attribute_value_extrafields
export interface ProductAttributeValueExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_batch
export interface ProductBatch {
  tms?: string;
  fk_product_stock: number;
  eatby?: string;
  sellby?: string;
  batch: string;
  qty: number;
}

// Table llx_product_customer_price
export interface ProductCustomerPrice {
  entity: number;
  datec?: string;
  tms?: string;
  fk_product: number;
  fk_soc: number;
  ref_customer?: string;
  price?: number;
  price_ttc?: number;
  price_min?: number;
  price_min_ttc?: number;
  price_base_type?: string;
  tva_tx?: number;
  recuperableonly: number;
  localtax1_tx?: number;
  localtax1_type: string;
  localtax2_tx?: number;
  localtax2_type: string;
  fk_user?: number;
  price_label?: string;
  import_key?: string;
}

// Table llx_product_customer_price_extrafields
export interface ProductCustomerPriceExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_customer_price_log
export interface ProductCustomerPriceLog {
  entity: number;
  datec?: string;
  fk_product: number;
  fk_soc: number;
  ref_customer?: string;
  price?: number;
  price_ttc?: number;
  price_min?: number;
  price_min_ttc?: number;
  price_base_type?: string;
  tva_tx?: number;
  recuperableonly: number;
  localtax1_tx?: number;
  localtax1_type: string;
  localtax2_tx?: number;
  localtax2_type: string;
  fk_user?: number;
  price_label?: string;
}

// Table llx_product_extrafields
export interface ProductExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_fournisseur_price
export interface ProductFournisseurPrice {
  entity: number;
  datec?: string;
  tms?: string;
  fk_product?: number;
  fk_soc?: number;
  ref_fourn?: string;
  desc_fourn?: string;
  fk_availability?: number;
  price?: number;
  quantity?: number;
  remise_percent: number;
  remise: number;
  unitprice?: number;
  charges?: number;
  default_vat_code?: string;
  barcode?: string;
  fk_barcode_type?: number;
  tva_tx: number;
  localtax1_tx?: number;
  localtax1_type: string;
  localtax2_tx?: number;
  localtax2_type: string;
  info_bits: number;
  fk_user?: number;
  fk_supplier_price_expression?: number;
  delivery_time_days?: number;
  supplier_reputation?: string;
  packaging?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_unitprice?: number;
  multicurrency_price?: number;
  import_key?: string;
  status?: number;
}

// Table llx_product_fournisseur_price_extrafields
export interface ProductFournisseurPriceExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_fournisseur_price_log
export interface ProductFournisseurPriceLog {
  datec?: string;
  fk_product_fournisseur: number;
  price?: number;
  quantity?: number;
  fk_user?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_unitprice?: number;
  multicurrency_price?: number;
}

// Table llx_product_lang
export interface ProductLang {
  fk_product: number;
  lang: string;
  label: string;
  description?: string;
  note?: string;
}

// Table llx_product_lot
export interface ProductLot {
  entity?: number;
  fk_product: number;
  batch?: string;
  note_public?: string;
  note_private?: string;
  eatby?: string;
  sellby?: string;
  eol_date?: string;
  manufacturing_date?: string;
  scrapping_date?: string;
  qc_frequency?: number;
  lifetime?: number;
  barcode?: string;
  fk_barcode_type?: number;
  model_pdf?: string;
  last_main_doc?: string;
  datec?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_product_lot_extrafields
export interface ProductLotExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_perentity
export interface ProductPerentity {
  fk_product?: number;
  entity: number;
  accountancy_code_sell?: string;
  accountancy_code_sell_intra?: string;
  accountancy_code_sell_export?: string;
  accountancy_code_buy?: string;
  accountancy_code_buy_intra?: string;
  accountancy_code_buy_export?: string;
  pmp?: number;
}

// Table llx_product_price
export interface ProductPrice {
  entity: number;
  tms?: string;
  fk_product: number;
  date_price: string;
  price_level?: number;
  price?: number;
  price_ttc?: number;
  price_min?: number;
  price_min_ttc?: number;
  price_base_type?: string;
  tva_tx: number;
  recuperableonly: number;
  localtax1_tx?: number;
  localtax1_type: string;
  localtax2_tx?: number;
  localtax2_type: string;
  fk_user_author?: number;
  price_label?: string;
  tosell?: number;
  price_by_qty: number;
  fk_price_expression?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_price?: number;
  multicurrency_price_ttc?: number;
}

// Table llx_product_price_by_qty
export interface ProductPriceByQty {
  fk_product_price: number;
  price?: number;
  price_base_type?: string;
  quantity?: number;
  remise_percent: number;
  remise: number;
  unitprice?: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_multicurrency?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_price?: number;
  multicurrency_price_ttc?: number;
  tms?: string;
}

// Table llx_product_price_extrafields
export interface ProductPriceExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_product_pricerules
export interface ProductPricerules {
  level: number;
  fk_level: number;
  var_percent: number;
  var_min_percent: number;
}

// Table llx_product_stock
export interface ProductStock {
  tms?: string;
  fk_product: number;
  fk_entrepot: number;
  reel?: number;
}

// Table llx_product_thirdparty
export interface ProductThirdparty {
  fk_product: number;
  fk_soc: number;
  fk_product_thirdparty_relation_type: number;
  date_start?: string;
  date_end?: string;
  fk_project?: number;
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

// Table llx_product_warehouse_properties
export interface ProductWarehouseProperties {
  tms?: string;
  fk_product: number;
  fk_entrepot: number;
  seuil_stock_alerte?: number;
  desiredstock?: number;
}
