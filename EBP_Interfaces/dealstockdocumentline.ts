/**
 * Interface pour la table DealStockDocumentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealStockDocumentLine {
  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** DocumentId - uuid */
  DocumentId: string;

  /** Id - uuid */
  Id: string;

  /** Quantity - numeric */
  Quantity: number;

  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

  /** PricesDecimalNumber - smallint */
  PricesDecimalNumber: number;

  /** Amount - numeric */
  Amount: number;

  /** IncludedAmount - numeric */
  IncludedAmount: number;

  /** IncludeAmountInCost - boolean */
  IncludeAmountInCost: boolean;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** TargetStorehouseId - uuid (nullable) */
  TargetStorehouseId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ParentLineId - uuid (nullable) */
  ParentLineId?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DocumentLineId - uuid (nullable) */
  DocumentLineId?: string;

  /** TechnicalDescriptionClear - text (nullable) */
  TechnicalDescriptionClear?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** PickStockOperationType - smallint (nullable) */
  PickStockOperationType?: number;

}

