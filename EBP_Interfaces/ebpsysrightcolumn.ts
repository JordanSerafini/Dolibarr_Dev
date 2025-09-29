/**
 * Interface pour la table EbpSysRightColumn
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysRightColumn {
  /** Id - uuid */
  Id: string;

  /** RightId - uuid */
  RightId: string;

  /** RightTableName - text */
  RightTableName: string;

  /** RightColumnName - text */
  RightColumnName: string;

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

