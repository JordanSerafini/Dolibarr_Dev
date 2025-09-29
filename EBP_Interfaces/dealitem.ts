/**
 * Interface pour la table DealItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealItem {
  /** ItemType - smallint */
  ItemType: number;

  /** Quantity - numeric */
  Quantity: number;

  /** Id - uuid */
  Id: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ItemCaption - text (nullable) */
  ItemCaption?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** AmountVatExcluded - numeric (nullable) */
  AmountVatExcluded?: number;

  /** NetAmountVatExcludedWithDiscount - numeric (nullable) */
  NetAmountVatExcludedWithDiscount?: number;

  /** InterestAmount - numeric (nullable) */
  InterestAmount?: number;

  /** NetInterestAmount - numeric (nullable) */
  NetInterestAmount?: number;

  /** GrossInterestAmount - numeric (nullable) */
  GrossInterestAmount?: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** TotalConsumedQuantity - numeric */
  TotalConsumedQuantity: number;

  /** TotalConsumedAmount - numeric */
  TotalConsumedAmount: number;

}

