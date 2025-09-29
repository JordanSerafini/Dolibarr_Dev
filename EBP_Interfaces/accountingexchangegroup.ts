/**
 * Interface pour la table AccountingExchangeGroup
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AccountingExchangeGroup {
  /** Id - uuid */
  Id: string;

  /** GroupNumber - integer */
  GroupNumber: number;

  /** System - boolean */
  System: boolean;

  /** TransferedPieces - boolean */
  TransferedPieces: boolean;

  /** ProcessType - smallint */
  ProcessType: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

