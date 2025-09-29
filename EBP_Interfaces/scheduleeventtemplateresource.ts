/**
 * Interface pour la table ScheduleEventTemplateResource
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventTemplateResource {
  /** ExpectedDuration_DurationInHours - numeric (nullable) */
  ExpectedDuration_DurationInHours?: number;

  /** Id - uuid */
  Id: string;

  /** ScheduleEventTemplateId - text */
  ScheduleEventTemplateId: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** EquipmentId - text (nullable) */
  EquipmentId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ExpectedDuration_Duration - numeric (nullable) */
  ExpectedDuration_Duration?: number;

  /** ExpectedDuration_UnitId - text (nullable) */
  ExpectedDuration_UnitId?: string;

  /** ExpectedDuration_EditedDuration - text (nullable) */
  ExpectedDuration_EditedDuration?: string;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

}

