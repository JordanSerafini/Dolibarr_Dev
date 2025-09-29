/**
 * Interface pour la table ScheduleEventTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventTemplate {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** WorkingDuration_DurationInHours - numeric (nullable) */
  WorkingDuration_DurationInHours?: number;

  /** TravelExpenseId - text (nullable) */
  TravelExpenseId?: string;

  /** ScheduleEventTypeId - uuid (nullable) */
  ScheduleEventTypeId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

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

  /** WorkingDuration_Duration - numeric (nullable) */
  WorkingDuration_Duration?: number;

  /** WorkingDuration_UnitId - text (nullable) */
  WorkingDuration_UnitId?: string;

  /** WorkingDuration_EditedDuration - text (nullable) */
  WorkingDuration_EditedDuration?: string;

}

