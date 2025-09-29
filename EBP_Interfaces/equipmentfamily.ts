/**
 * Interface pour la table EquipmentFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EquipmentFamily {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** ReferenceItemId - text (nullable) */
  ReferenceItemId?: string;

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

