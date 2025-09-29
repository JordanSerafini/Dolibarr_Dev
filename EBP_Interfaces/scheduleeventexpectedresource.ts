/**
 * Interface pour la table ScheduleEventExpectedResource
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventExpectedResource {
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

  /** ParentId - uuid */
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

  /** ScheduledQuantity - integer */
  ScheduledQuantity: number;

  /** ScheduledDuration_DurationInHours - numeric (nullable) */
  ScheduledDuration_DurationInHours?: number;

  /** ScheduledDuration_Duration - numeric (nullable) */
  ScheduledDuration_Duration?: number;

  /** ScheduledDuration_UnitId - text (nullable) */
  ScheduledDuration_UnitId?: string;

  /** ScheduledDuration_EditedDuration - text (nullable) */
  ScheduledDuration_EditedDuration?: string;

  /** CreatedBySoftware - boolean */
  CreatedBySoftware: boolean;

}

