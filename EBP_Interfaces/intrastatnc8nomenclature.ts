/**
 * Interface pour la table IntrastatNc8Nomenclature
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IntrastatNc8Nomenclature {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Chapter - text (nullable) */
  Chapter?: string;

  /** Sh4 - text (nullable) */
  Sh4?: string;

  /** Sh6 - text (nullable) */
  Sh6?: string;

  /** Nc8Section - text (nullable) */
  Nc8Section?: string;

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

  /** LocalizableChapter_2 - text (nullable) */
  LocalizableChapter_2?: string;

  /** LocalizableSh4_2 - text (nullable) */
  LocalizableSh4_2?: string;

  /** LocalizableSh6_2 - text (nullable) */
  LocalizableSh6_2?: string;

  /** LocalizableSection_2 - text (nullable) */
  LocalizableSection_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** LocalizableChapter_3 - text (nullable) */
  LocalizableChapter_3?: string;

  /** LocalizableChapter_4 - text (nullable) */
  LocalizableChapter_4?: string;

  /** LocalizableChapter_5 - text (nullable) */
  LocalizableChapter_5?: string;

  /** LocalizableSh4_3 - text (nullable) */
  LocalizableSh4_3?: string;

  /** LocalizableSh4_4 - text (nullable) */
  LocalizableSh4_4?: string;

  /** LocalizableSh4_5 - text (nullable) */
  LocalizableSh4_5?: string;

  /** LocalizableSh6_3 - text (nullable) */
  LocalizableSh6_3?: string;

  /** LocalizableSh6_4 - text (nullable) */
  LocalizableSh6_4?: string;

  /** LocalizableSh6_5 - text (nullable) */
  LocalizableSh6_5?: string;

  /** LocalizableSection_3 - text (nullable) */
  LocalizableSection_3?: string;

  /** LocalizableSection_4 - text (nullable) */
  LocalizableSection_4?: string;

  /** LocalizableSection_5 - text (nullable) */
  LocalizableSection_5?: string;

}

