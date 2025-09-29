/**
 * Interface pour la table Location
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Location {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

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

