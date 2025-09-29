/**
 * Interface pour la table Unit
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Unit {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** UnitType - smallint */
  UnitType: number;

  /** Decimals - smallint */
  Decimals: number;

  /** ConversionRate - numeric */
  ConversionRate: number;

  /** UniqueId - uuid */
  UniqueId: string;

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

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** DurationCaption - text (nullable) */
  DurationCaption?: string;

  /** DefaultDurationCaptionType - smallint */
  DefaultDurationCaptionType: number;

  /** UNECECode - text (nullable) */
  UNECECode?: string;

}

