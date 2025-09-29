/**
 * Interface pour la table Tax
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Tax {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** CalculationBase - smallint */
  CalculationBase: number;

  /** SubjectToVat - boolean */
  SubjectToVat: boolean;

  /** TaxValue - numeric */
  TaxValue: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** UnitId - text (nullable) */
  UnitId?: string;

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

}

