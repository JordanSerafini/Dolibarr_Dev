/**
 * Interface pour la table EbpSysGlobalSearch
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysGlobalSearch {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** TableName - text (nullable) */
  TableName?: string;

  /** LogicalSubTypeId - uuid (nullable) */
  LogicalSubTypeId?: string;

  /** Inactive - boolean */
  Inactive: boolean;

  /** UserId - text (nullable) */
  UserId?: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** CreatedBySystem - boolean */
  CreatedBySystem: boolean;

  /** Id - uuid */
  Id: string;

  /** QuerySet - text */
  QuerySet: string;

}

