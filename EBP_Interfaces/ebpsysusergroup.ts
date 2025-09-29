/**
 * Interface pour la table EbpSysUserGroup
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUserGroup {
  /** Id - text */
  Id: string;

  /** Name - text */
  Name: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

