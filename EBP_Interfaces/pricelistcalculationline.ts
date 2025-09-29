/**
 * Interface pour la table PriceListCalculationLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PriceListCalculationLine {
  /** FreeType - smallint */
  FreeType: number;

  /** Id - uuid */
  Id: string;

  /** PriceListId - text */
  PriceListId: string;

  /** Threshold - numeric */
  Threshold: number;

  /** CalculationType - integer */
  CalculationType: number;

  /** DiscountValue - numeric */
  DiscountValue: number;

  /** PriceValue - numeric (nullable) */
  PriceValue?: number;

  /** VatId - uuid (nullable) */
  VatId?: string;

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

  /** FreeItemId - text (nullable) */
  FreeItemId?: string;

  /** FreeQuantity - numeric (nullable) */
  FreeQuantity?: number;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** RoundId - uuid (nullable) */
  RoundId?: string;

}

