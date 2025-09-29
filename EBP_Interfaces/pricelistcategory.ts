/**
 * Interface pour la table PriceListCategory
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PriceListCategory {
  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Description - text */
  Description: string;

  /** IsPurchasePriceListCategory - boolean */
  IsPurchasePriceListCategory: boolean;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

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

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

}

