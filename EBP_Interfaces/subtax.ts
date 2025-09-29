/**
 * Interface pour la table SubTax
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SubTax {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** TaxId - uuid */
  TaxId: string;

  /** TaxValue - numeric */
  TaxValue: number;

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

