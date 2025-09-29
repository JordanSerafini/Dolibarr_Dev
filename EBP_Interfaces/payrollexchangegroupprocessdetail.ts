/**
 * Interface pour la table PayrollExchangeGroupProcessDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PayrollExchangeGroupProcessDetail {
  /** Id - integer */
  Id: number;

  /** PayrollExchangeGroupId - uuid */
  PayrollExchangeGroupId: string;

  /** ProcessType - smallint */
  ProcessType: number;

  /** ProcessDate - timestamp without time zone */
  ProcessDate: Date | string;

  /** Errors - text (nullable) */
  Errors?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

