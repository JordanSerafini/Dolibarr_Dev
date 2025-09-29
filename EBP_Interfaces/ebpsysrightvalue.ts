/**
 * Interface pour la table EbpSysRightValue
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysRightValue {
  /** Id - uuid */
  Id: string;

  /** RightId - uuid */
  RightId: string;

  /** RightValue - text */
  RightValue: string;

  /** Authorizations - smallint */
  Authorizations: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

