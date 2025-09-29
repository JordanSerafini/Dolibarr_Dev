/**
 * Interface pour la table ScheduleEventOutlookSynchronization
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventOutlookSynchronization {
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

  /** CalendarId - text */
  CalendarId: string;

  /** IsColleagueChanged - smallint */
  IsColleagueChanged: number;

  /** IsAppointmentDeleted - smallint */
  IsAppointmentDeleted: number;

  /** OutlookEntryId - text (nullable) */
  OutlookEntryId?: string;

}

