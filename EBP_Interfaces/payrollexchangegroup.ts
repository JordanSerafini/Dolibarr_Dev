/**
 * Interface pour la table PayrollExchangeGroup
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PayrollExchangeGroup {
  /** Id - uuid */
  Id: string;

  /** GroupNumber - integer */
  GroupNumber: number;

  /** System - boolean */
  System: boolean;

  /** TransferedPieces - boolean */
  TransferedPieces: boolean;

  /** ValidityDate - timestamp without time zone */
  ValidityDate: Date | string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

