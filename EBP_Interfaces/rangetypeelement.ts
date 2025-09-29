/**
 * Interface pour la table RangeTypeElement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RangeTypeElement {
  /** RangeTypeOrder - integer */
  RangeTypeOrder: number;

  /** RangeTypeId - text */
  RangeTypeId: string;

  /** Id - uuid */
  Id: string;

  /** Code - text */
  Code: string;

  /** Caption - text */
  Caption: string;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

