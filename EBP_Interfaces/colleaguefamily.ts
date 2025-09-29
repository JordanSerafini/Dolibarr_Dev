/**
 * Interface pour la table ColleagueFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ColleagueFamily {
  /** DaySchedule6_StartTime - timestamp without time zone */
  DaySchedule6_StartTime: Date | string;

  /** DaySchedule6_EndTime - timestamp without time zone */
  DaySchedule6_EndTime: Date | string;

  /** DaySchedule6_Duration - real */
  DaySchedule6_Duration: number;

  /** DaySchedule6_Active - boolean */
  DaySchedule6_Active: boolean;

  /** DaySchedule5_StartTime - timestamp without time zone */
  DaySchedule5_StartTime: Date | string;

  /** DaySchedule5_EndTime - timestamp without time zone */
  DaySchedule5_EndTime: Date | string;

  /** DaySchedule5_Duration - real */
  DaySchedule5_Duration: number;

  /** DaySchedule5_Active - boolean */
  DaySchedule5_Active: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DaySchedule0_StartTime - timestamp without time zone */
  DaySchedule0_StartTime: Date | string;

  /** DaySchedule0_EndTime - timestamp without time zone */
  DaySchedule0_EndTime: Date | string;

  /** DaySchedule0_Duration - real */
  DaySchedule0_Duration: number;

  /** DaySchedule0_Active - boolean */
  DaySchedule0_Active: boolean;

  /** DaySchedule1_StartTime - timestamp without time zone */
  DaySchedule1_StartTime: Date | string;

  /** DaySchedule1_EndTime - timestamp without time zone */
  DaySchedule1_EndTime: Date | string;

  /** DaySchedule1_Duration - real */
  DaySchedule1_Duration: number;

  /** DaySchedule1_Active - boolean */
  DaySchedule1_Active: boolean;

  /** DaySchedule2_StartTime - timestamp without time zone */
  DaySchedule2_StartTime: Date | string;

  /** DaySchedule2_EndTime - timestamp without time zone */
  DaySchedule2_EndTime: Date | string;

  /** DaySchedule2_Duration - real */
  DaySchedule2_Duration: number;

  /** DaySchedule2_Active - boolean */
  DaySchedule2_Active: boolean;

  /** DaySchedule3_StartTime - timestamp without time zone */
  DaySchedule3_StartTime: Date | string;

  /** DaySchedule3_EndTime - timestamp without time zone */
  DaySchedule3_EndTime: Date | string;

  /** DaySchedule3_Duration - real */
  DaySchedule3_Duration: number;

  /** DaySchedule3_Active - boolean */
  DaySchedule3_Active: boolean;

  /** DaySchedule4_StartTime - timestamp without time zone */
  DaySchedule4_StartTime: Date | string;

  /** DaySchedule4_EndTime - timestamp without time zone */
  DaySchedule4_EndTime: Date | string;

  /** DaySchedule4_Duration - real */
  DaySchedule4_Duration: number;

  /** DaySchedule4_Active - boolean */
  DaySchedule4_Active: boolean;

  /** DaySchedule4_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchStartTime?: Date | string;

  /** DaySchedule4_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchEndTime?: Date | string;

  /** DaySchedule3_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchStartTime?: Date | string;

  /** DaySchedule3_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchEndTime?: Date | string;

  /** DaySchedule2_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchStartTime?: Date | string;

  /** DaySchedule2_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchEndTime?: Date | string;

  /** DaySchedule1_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchStartTime?: Date | string;

  /** DaySchedule1_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchEndTime?: Date | string;

  /** DaySchedule0_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchStartTime?: Date | string;

  /** DaySchedule0_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchEndTime?: Date | string;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

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

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** DaySchedule5_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchStartTime?: Date | string;

  /** DaySchedule5_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchEndTime?: Date | string;

  /** DaySchedule6_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchStartTime?: Date | string;

  /** DaySchedule6_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchEndTime?: Date | string;

  /** DaySchedule0_Customize - boolean */
  DaySchedule0_Customize: boolean;

  /** DaySchedule1_Customize - boolean */
  DaySchedule1_Customize: boolean;

  /** DaySchedule2_Customize - boolean */
  DaySchedule2_Customize: boolean;

  /** DaySchedule3_Customize - boolean */
  DaySchedule3_Customize: boolean;

  /** DaySchedule4_Customize - boolean */
  DaySchedule4_Customize: boolean;

  /** DaySchedule5_Customize - boolean */
  DaySchedule5_Customize: boolean;

  /** DaySchedule6_Customize - boolean */
  DaySchedule6_Customize: boolean;

}

