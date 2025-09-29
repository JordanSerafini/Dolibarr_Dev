/**
 * Interface pour la table Vat
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Vat {
  /** Id - uuid */
  Id: string;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

  /** Rate - numeric */
  Rate: number;

  /** RERate - numeric */
  RERate: number;

  /** TerritorialityDefaultRate - boolean */
  TerritorialityDefaultRate: boolean;

  /** Inactive - boolean */
  Inactive: boolean;

  /** Npr - boolean */
  Npr: boolean;

  /** SellingCollectionVatAccount - text (nullable) */
  SellingCollectionVatAccount?: string;

  /** SellingDebitVatAccount - text (nullable) */
  SellingDebitVatAccount?: string;

  /** SellingGoodsAccount - text (nullable) */
  SellingGoodsAccount?: string;

  /** SellingServicesAccount - text (nullable) */
  SellingServicesAccount?: string;

  /** SellingShippingAccount - text (nullable) */
  SellingShippingAccount?: string;

  /** SellingEcotaxAccount - text (nullable) */
  SellingEcotaxAccount?: string;

  /** PurchaseCollectionVatAccount - text (nullable) */
  PurchaseCollectionVatAccount?: string;

  /** PurchaseDebitVatAccount - text (nullable) */
  PurchaseDebitVatAccount?: string;

  /** PurchaseGoodsAccount - text (nullable) */
  PurchaseGoodsAccount?: string;

  /** PurchaseServicesAccount - text (nullable) */
  PurchaseServicesAccount?: string;

  /** PurchaseShippingAccount - text (nullable) */
  PurchaseShippingAccount?: string;

  /** REAccount - text (nullable) */
  REAccount?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** PurchaseEcotaxAccount - text (nullable) */
  PurchaseEcotaxAccount?: string;

  /** SellingEcotaxFurnitureAccount - text (nullable) */
  SellingEcotaxFurnitureAccount?: string;

  /** PurchaseEcotaxFurnitureAccount - text (nullable) */
  PurchaseEcotaxFurnitureAccount?: string;

  /** SellingInvoicingChargesAccount - text (nullable) */
  SellingInvoicingChargesAccount?: string;

  /** PurchaseInvoicingChargesAccount - text (nullable) */
  PurchaseInvoicingChargesAccount?: string;

  /** GoodsReverseChargeAccount - text (nullable) */
  GoodsReverseChargeAccount?: string;

  /** ServicesReverseChargeAccount - text (nullable) */
  ServicesReverseChargeAccount?: string;

  /** SubContractorCollectionVatAccount - text (nullable) */
  SubContractorCollectionVatAccount?: string;

  /** SubContractorDebitVatAccount - text (nullable) */
  SubContractorDebitVatAccount?: string;

  /** SubContractorGoodsAccount - text (nullable) */
  SubContractorGoodsAccount?: string;

  /** SubContractorServicesAccount - text (nullable) */
  SubContractorServicesAccount?: string;

  /** SubContractorShippingAccount - text (nullable) */
  SubContractorShippingAccount?: string;

  /** SubContractorInvoicingChargesAccount - text (nullable) */
  SubContractorInvoicingChargesAccount?: string;

  /** SubContractorEcotaxAccount - text (nullable) */
  SubContractorEcotaxAccount?: string;

  /** SubContractorEcotaxFurnitureAccount - text (nullable) */
  SubContractorEcotaxFurnitureAccount?: string;

  /** GoodsReverseChargeSubContractorAccount - text (nullable) */
  GoodsReverseChargeSubContractorAccount?: string;

  /** ServicesReverseChargeSubContractorAccount - text (nullable) */
  ServicesReverseChargeSubContractorAccount?: string;

  /** TaxableBaseAccount - text (nullable) */
  TaxableBaseAccount?: string;

  /** NonTaxableBaseAccount - text (nullable) */
  NonTaxableBaseAccount?: string;

  /** DeterminedItemNatureRate - numeric (nullable) */
  DeterminedItemNatureRate?: number;

  /** UndeterminedItemNatureRate - numeric (nullable) */
  UndeterminedItemNatureRate?: number;

}

