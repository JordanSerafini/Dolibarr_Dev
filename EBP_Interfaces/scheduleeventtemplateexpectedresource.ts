/**
 * Interface pour la table ScheduleEventTemplateExpectedResource
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventTemplateExpectedResource {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

  /** QuantityToSchedule - integer */
  QuantityToSchedule: number;

  /** ExpectedDuration_DurationInHours - numeric (nullable) */
  ExpectedDuration_DurationInHours?: number;

  /** ExpectedDuration_Duration - numeric (nullable) */
  ExpectedDuration_Duration?: number;

  /** ExpectedDuration_UnitId - text (nullable) */
  ExpectedDuration_UnitId?: string;

  /** ExpectedDuration_EditedDuration - text (nullable) */
  ExpectedDuration_EditedDuration?: string;

}

