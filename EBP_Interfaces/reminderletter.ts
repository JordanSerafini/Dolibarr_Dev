/**
 * Interface pour la table ReminderLetter
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ReminderLetter {
  /** Id - uuid */
  Id: string;

  /** ReminderNumber - integer */
  ReminderNumber: number;

  /** ReminderDate - timestamp without time zone */
  ReminderDate: Date | string;

  /** MustBeSentByMail - boolean */
  MustBeSentByMail: boolean;

  /** MustBeSentByFax - boolean */
  MustBeSentByFax: boolean;

  /** ReminderCriticalLevel - integer */
  ReminderCriticalLevel: number;

  /** NotIncrementReminderLevel - boolean */
  NotIncrementReminderLevel: boolean;

  /** IsPrinted - boolean */
  IsPrinted: boolean;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

}

