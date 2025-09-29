/**
 * Interface pour la table TravelExpense
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface TravelExpense {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** AmountVatExcluded - numeric (nullable) */
  AmountVatExcluded?: number;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** AmountVatIncluded - numeric (nullable) */
  AmountVatIncluded?: number;

  /** ReferenceItemId - text (nullable) */
  ReferenceItemId?: string;

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

