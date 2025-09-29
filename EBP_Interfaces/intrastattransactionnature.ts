/**
 * Interface pour la table IntrastatTransactionNature
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IntrastatTransactionNature {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

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

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** LocalizableNotes_2 - text (nullable) */
  LocalizableNotes_2?: string;

  /** LocalizableNotes_Clear_2 - text (nullable) */
  LocalizableNotes_Clear_2?: string;

  /** LocalizableNotes_3 - text (nullable) */
  LocalizableNotes_3?: string;

  /** LocalizableNotes_Clear_3 - text (nullable) */
  LocalizableNotes_Clear_3?: string;

  /** LocalizableNotes_4 - text (nullable) */
  LocalizableNotes_4?: string;

  /** LocalizableNotes_Clear_4 - text (nullable) */
  LocalizableNotes_Clear_4?: string;

  /** LocalizableNotes_5 - text (nullable) */
  LocalizableNotes_5?: string;

  /** LocalizableNotes_Clear_5 - text (nullable) */
  LocalizableNotes_Clear_5?: string;

}

