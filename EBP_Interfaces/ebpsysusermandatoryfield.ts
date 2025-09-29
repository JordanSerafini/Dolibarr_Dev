/**
 * Interface pour la table EbpSysUserMandatoryField
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUserMandatoryField {
  /** Id - uuid */
  Id: string;

  /** TableName - text */
  TableName: string;

  /** ColumnName - text */
  ColumnName: string;

  /** LogicalSubTypeId - uuid (nullable) */
  LogicalSubTypeId?: string;

  /** Conditions - text (nullable) */
  Conditions?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

