/**
 * Interface pour la table Equipment
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Equipment {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** ReferenceItemId - text (nullable) */
  ReferenceItemId?: string;

  /** FamilyId - text (nullable) */
  FamilyId?: string;

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

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** HourlyCostPrice - numeric */
  HourlyCostPrice: number;

}

