/**
 * Interface pour la table CommissionScale
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CommissionScale {
  /** CSScope - smallint */
  CSScope: number;

  /** ObjectiveType - smallint */
  ObjectiveType: number;

  /** Mode - smallint */
  Mode: number;

  /** GroupBy - smallint */
  GroupBy: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DateBeginning - timestamp without time zone (nullable) */
  DateBeginning?: Date | string;

  /** DateEnd - timestamp without time zone (nullable) */
  DateEnd?: Date | string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

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

