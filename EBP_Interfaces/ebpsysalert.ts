/**
 * Interface pour la table EbpSysAlert
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysAlert {
  /** Caption - text */
  Caption: string;

  /** OpeningDatabase - boolean */
  OpeningDatabase: boolean;

  /** OpeningEntryForm - boolean */
  OpeningEntryForm: boolean;

  /** EditingEntryForm - boolean */
  EditingEntryForm: boolean;

  /** SavingEntryForm - boolean */
  SavingEntryForm: boolean;

  /** MessageClear - text */
  MessageClear: string;

  /** Message - text */
  Message: string;

  /** Inactive - boolean */
  Inactive: boolean;

  /** Id - text */
  Id: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** CreatedBySystem - boolean */
  CreatedBySystem: boolean;

  /** TableName - text (nullable) */
  TableName?: string;

  /** LogicalSubTypeId - uuid (nullable) */
  LogicalSubTypeId?: string;

  /** UserId - text (nullable) */
  UserId?: string;

  /** UserGroupdId - text (nullable) */
  UserGroupdId?: string;

  /** Conditions - text (nullable) */
  Conditions?: string;

  /** ValidityDateFrom - timestamp without time zone (nullable) */
  ValidityDateFrom?: Date | string;

  /** ValidityDateFromType - integer (nullable) */
  ValidityDateFromType?: number;

  /** ValidityDateTo - timestamp without time zone (nullable) */
  ValidityDateTo?: Date | string;

  /** RemindDateTime - timestamp without time zone (nullable) */
  RemindDateTime?: Date | string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

