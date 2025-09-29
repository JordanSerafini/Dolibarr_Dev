/**
 * Interface pour la table ExecutionQuoteTimeUnit
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ExecutionQuoteTimeUnit {
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

  /** ExecutionQuoteId - uuid */
  ExecutionQuoteId: string;

  /** UnitId - text */
  UnitId: string;

  /** ConversionRate - numeric */
  ConversionRate: number;

}

