/**
 * Interface pour la table DealExtraCost
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealExtraCost {
  /** NetAmountVatIncluded - numeric */
  NetAmountVatIncluded: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ExtraCostDate - timestamp without time zone */
  ExtraCostDate: Date | string;

  /** Quantity - numeric */
  Quantity: number;

  /** UnitPrice - numeric */
  UnitPrice: number;

  /** NetAmountVatExcluded - numeric */
  NetAmountVatExcluded: number;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** IncludeQuantitiesInAchievement - boolean */
  IncludeQuantitiesInAchievement: boolean;

  /** ExecutionQuoteLineId - uuid (nullable) */
  ExecutionQuoteLineId?: string;

}

