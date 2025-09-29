/**
 * Interface pour la table AccountingYear
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AccountingYear {
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

  /** Id - uuid */
  Id: string;

  /** IsCurrent - boolean */
  IsCurrent: boolean;

  /** StartingDate - timestamp without time zone */
  StartingDate: Date | string;

  /** EndingDate - timestamp without time zone */
  EndingDate: Date | string;

  /** Status - smallint */
  Status: number;

  /** ClosingDate - timestamp without time zone (nullable) */
  ClosingDate?: Date | string;

  /** SynchronizationUniqueId - uuid (nullable) */
  SynchronizationUniqueId?: string;

  /** Caption - text */
  Caption: string;

}

