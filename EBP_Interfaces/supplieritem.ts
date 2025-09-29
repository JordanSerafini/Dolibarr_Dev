/**
 * Interface pour la table SupplierItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SupplierItem {
  /** UseEcotax - boolean */
  UseEcotax: boolean;

  /** CurrencyPublicPurchasePrice - numeric */
  CurrencyPublicPurchasePrice: number;

  /** CurrencyDiscountAmount - numeric */
  CurrencyDiscountAmount: number;

  /** Id - uuid */
  Id: string;

  /** SupplierId - text */
  SupplierId: string;

  /** MainSupplier - boolean */
  MainSupplier: boolean;

  /** PurchaseOrderMinimumQuantity - numeric */
  PurchaseOrderMinimumQuantity: number;

  /** PurchaseOrderMultipleQuantity - numeric */
  PurchaseOrderMultipleQuantity: number;

  /** SalePurchaseConversionRate - numeric */
  SalePurchaseConversionRate: number;

  /** PublicPurchasePrice - numeric */
  PublicPurchasePrice: number;

  /** DiscountRate - numeric */
  DiscountRate: number;

  /** DiscountAmount - numeric */
  DiscountAmount: number;

  /** NetPurchasePrice - numeric */
  NetPurchasePrice: number;

  /** DeliveryDelay - integer */
  DeliveryDelay: number;

  /** PriceModifiedDate - timestamp without time zone */
  PriceModifiedDate: Date | string;

  /** SetItemPurchasePriceWithNetPurchasePrice - boolean */
  SetItemPurchasePriceWithNetPurchasePrice: boolean;

  /** DiscountRateOnAdvisedSalePrice - numeric */
  DiscountRateOnAdvisedSalePrice: number;

  /** DiscountAmountOnAdvisedSalePrice - numeric */
  DiscountAmountOnAdvisedSalePrice: number;

  /** IsPurchasePriceLinkedToAdvisedSalePrice - boolean */
  IsPurchasePriceLinkedToAdvisedSalePrice: boolean;

  /** CurrencyNetPurchasePrice - numeric */
  CurrencyNetPurchasePrice: number;

  /** PurchaseUnitId - text (nullable) */
  PurchaseUnitId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ReferenceId - uuid (nullable) */
  ReferenceId?: string;

  /** EcotaxId - text (nullable) */
  EcotaxId?: string;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** Caption - text (nullable) */
  Caption?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** SupplierPriceType - smallint */
  SupplierPriceType: number;

  /** MainSubContractor - boolean */
  MainSubContractor: boolean;

}

