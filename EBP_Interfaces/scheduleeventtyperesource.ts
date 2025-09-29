/**
 * Interface pour la table ScheduleEventTypeResource
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventTypeResource {
  /** Id - uuid */
  Id: string;

  /** ScheduleEventTypeId - uuid */
  ScheduleEventTypeId: string;

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

}

