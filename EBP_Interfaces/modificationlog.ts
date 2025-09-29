/**
 * Interface pour la table ModificationLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ModificationLog {
  /** Id - uuid */
  Id: string;

  /** ModifiedObjectId - text */
  ModifiedObjectId: string;

  /** Type - smallint */
  Type: number;

  /** ModificationGroupId - uuid (nullable) */
  ModificationGroupId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

