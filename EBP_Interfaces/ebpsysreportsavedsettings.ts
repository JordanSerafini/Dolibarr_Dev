/**
 * Interface pour la table EbpSysReportSavedSettings
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysReportSavedSettings {
  /** Id - uuid */
  Id: string;

  /** Label - text */
  Label: string;

  /** ReportCategoryId - uuid */
  ReportCategoryId: string;

  /** SettingsData - text */
  SettingsData: string;

  /** IsDefault - boolean */
  IsDefault: boolean;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

