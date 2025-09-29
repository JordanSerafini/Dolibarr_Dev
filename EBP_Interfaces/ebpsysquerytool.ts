/**
 * Interface pour la table EbpSysQueryTool
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysQueryTool {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Query - text */
  Query: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

