/**
 * Interface pour la table CommissionScaleStageLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CommissionScaleStageLine {
  /** Id - uuid */
  Id: string;

  /** CommissionScaleId - text */
  CommissionScaleId: string;

  /** Threshold - numeric */
  Threshold: number;

  /** Formula - smallint */
  Formula: number;

  /** Amount - numeric */
  Amount: number;

  /** Percentage - numeric */
  Percentage: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

