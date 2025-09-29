/**
 * Interface pour la table EbpSysCloudPublication
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysCloudPublication {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** IconPreset - smallint */
  IconPreset: number;

  /** IsModified - boolean */
  IsModified: boolean;

  /** IsInactive - boolean */
  IsInactive: boolean;

  /** Periodicity_Type - smallint */
  Periodicity_Type: number;

  /** Periodicity_Monday - boolean */
  Periodicity_Monday: boolean;

  /** Periodicity_Tuesday - boolean */
  Periodicity_Tuesday: boolean;

  /** Periodicity_Wednesday - boolean */
  Periodicity_Wednesday: boolean;

  /** Periodicity_Thursday - boolean */
  Periodicity_Thursday: boolean;

  /** Periodicity_Friday - boolean */
  Periodicity_Friday: boolean;

  /** Periodicity_Saturday - boolean */
  Periodicity_Saturday: boolean;

  /** Periodicity_Sunday - boolean */
  Periodicity_Sunday: boolean;

  /** Folder - text */
  Folder: string;

  /** Periodicity_DayRankSelector - boolean */
  Periodicity_DayRankSelector: boolean;

  /** Periodicity_Caption - text */
  Periodicity_Caption: string;

  /** Periodicity_DayNumberSelector - boolean */
  Periodicity_DayNumberSelector: boolean;

  /** Periodicity_UserIncrement - integer (nullable) */
  Periodicity_UserIncrement?: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** Periodicity_SelectedDayOfWeek - smallint (nullable) */
  Periodicity_SelectedDayOfWeek?: number;

  /** Periodicity_DayNumber - smallint (nullable) */
  Periodicity_DayNumber?: number;

  /** Icon - bytea (nullable) */
  Icon?: Buffer | Uint8Array;

  /** Periodicity_DayRank - smallint (nullable) */
  Periodicity_DayRank?: number;

  /** NextPublishDate - timestamp without time zone (nullable) */
  NextPublishDate?: Date | string;

  /** Periodicity_StartDate - timestamp without time zone (nullable) */
  Periodicity_StartDate?: Date | string;

  /** Periodicity_EndDate - timestamp without time zone (nullable) */
  Periodicity_EndDate?: Date | string;

  /** Periodicity_Time - timestamp without time zone (nullable) */
  Periodicity_Time?: Date | string;

  /** Description - text (nullable) */
  Description?: string;

  /** LastPublishedDate - timestamp without time zone (nullable) */
  LastPublishedDate?: Date | string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

