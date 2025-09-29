/**
 * Interface pour la table EbpSysCloudAccount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysCloudAccount {
  /** IsAdministrator - boolean */
  IsAdministrator: boolean;

  /** Id - text */
  Id: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** LastName - text */
  LastName: string;

  /** FirstName - text (nullable) */
  FirstName?: string;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

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

