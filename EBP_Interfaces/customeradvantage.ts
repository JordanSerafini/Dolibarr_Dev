/**
 * Interface pour la table CustomerAdvantage
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerAdvantage {
  /** Id - text */
  Id: string;

  /** CustomerId - text */
  CustomerId: string;

  /** AdvantageDate - timestamp without time zone */
  AdvantageDate: Date | string;

  /** AdvantageState - smallint */
  AdvantageState: number;

  /** ThresholdValue - numeric */
  ThresholdValue: number;

  /** ExpiryDate - timestamp without time zone (nullable) */
  ExpiryDate?: Date | string;

  /** CreatedByDocumentId - uuid (nullable) */
  CreatedByDocumentId?: string;

  /** UsedInDocumentId - uuid (nullable) */
  UsedInDocumentId?: string;

  /** AppliedToDiscountId - uuid (nullable) */
  AppliedToDiscountId?: string;

  /** FreeItemId - text (nullable) */
  FreeItemId?: string;

  /** LoyaltyCalculationLineId - uuid (nullable) */
  LoyaltyCalculationLineId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DiscountOnCumulativeTurnover - numeric */
  DiscountOnCumulativeTurnover: number;

  /** CumulativeTurnover - numeric */
  CumulativeTurnover: number;

}

