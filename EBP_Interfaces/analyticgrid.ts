/**
 * Interface pour la table AnalyticGrid
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AnalyticGrid {
  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Label - text (nullable) */
  Label?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

