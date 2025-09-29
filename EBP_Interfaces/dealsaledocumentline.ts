/**
 * Interface pour la table DealSaleDocumentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealSaleDocumentLine {
  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

  /** PricesDecimalNumber - smallint */
  PricesDecimalNumber: number;

  /** PurchasePrice - numeric */
  PurchasePrice: number;

  /** Quantity - numeric */
  Quantity: number;

  /** GrossInterestBase - numeric */
  GrossInterestBase: number;

  /** Id - uuid */
  Id: string;

  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** DocumentId - uuid */
  DocumentId: string;

  /** RealQuantity - numeric */
  RealQuantity: number;

  /** SumRealQuantityServiceComponents - numeric */
  SumRealQuantityServiceComponents: number;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ParentLineId - uuid (nullable) */
  ParentLineId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NetInterestAmount - numeric (nullable) */
  NetInterestAmount?: number;

  /** GrossInterestAmount - numeric (nullable) */
  GrossInterestAmount?: number;

  /** InterestAmount - numeric (nullable) */
  InterestAmount?: number;

  /** AmountVatExcluded - numeric (nullable) */
  AmountVatExcluded?: number;

  /** NetAmountVatExcludedWithDiscount - numeric (nullable) */
  NetAmountVatExcludedWithDiscount?: number;

  /** NetAmountVatIncludedWithDiscount - numeric (nullable) */
  NetAmountVatIncludedWithDiscount?: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** DocumentLineId - uuid (nullable) */
  DocumentLineId?: string;

  /** TechnicalDescriptionClear - text (nullable) */
  TechnicalDescriptionClear?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

}

