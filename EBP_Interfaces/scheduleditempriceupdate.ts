/**
 * Interface pour la table ScheduledItemPriceUpdate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduledItemPriceUpdate {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** ItemId - text */
  ItemId: string;

  /** ScheduledUpdateDate - timestamp without time zone */
  ScheduledUpdateDate: Date | string;

  /** PurchasePrice - numeric */
  PurchasePrice: number;

  /** CostPrice - numeric */
  CostPrice: number;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** SalePriceVatIncluded - numeric */
  SalePriceVatIncluded: number;

  /** IsPriceUpdateApplied - boolean */
  IsPriceUpdateApplied: boolean;

}

