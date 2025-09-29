/**
 * Interface pour la table AnalyticPlanItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AnalyticPlanItem {
  /** Id - integer */
  Id: number;

  /** Code - text */
  Code: string;

  /** PlanId - text */
  PlanId: string;

  /** IsLeaf - boolean */
  IsLeaf: boolean;

  /** HierarchyLevel - integer */
  HierarchyLevel: number;

  /** IsActive - boolean */
  IsActive: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** Label - text (nullable) */
  Label?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** ParentId - integer (nullable) */
  ParentId?: number;

  /** FullPathCode - text (nullable) */
  FullPathCode?: string;

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

