/**
 * Interface pour la table AnalyticPlan
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AnalyticPlan {
  /** Id - text */
  Id: string;

  /** MaxDepth - integer */
  MaxDepth: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** IsActive - boolean */
  IsActive: boolean;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** WaitingPlanItemId - integer (nullable) */
  WaitingPlanItemId?: number;

  /** Label - text (nullable) */
  Label?: string;

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

