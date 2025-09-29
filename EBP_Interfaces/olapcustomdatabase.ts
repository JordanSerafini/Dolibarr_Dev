/**
 * Interface pour la table OlapCustomDatabase
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface OlapCustomDatabase {
  /** Id - text */
  Id: string;

  /** Xml - text */
  Xml: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

