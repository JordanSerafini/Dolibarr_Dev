/**
 * Interface pour la table WinRangePivotGridTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface WinRangePivotGridTemplate {
  /** RangePivotGridId - uuid */
  RangePivotGridId: string;

  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** OwningId - uuid */
  OwningId: string;

  /** GridId - uuid */
  GridId: string;

  /** RangeTypeId0 - text (nullable) */
  RangeTypeId0?: string;

  /** RangeTypeId1 - text (nullable) */
  RangeTypeId1?: string;

  /** RangeTypeId2 - text (nullable) */
  RangeTypeId2?: string;

  /** RangeTypeId3 - text (nullable) */
  RangeTypeId3?: string;

  /** RangeTypeId4 - text (nullable) */
  RangeTypeId4?: string;

  /** Template - text (nullable) */
  Template?: string;

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

  /** UserId - text (nullable) */
  UserId?: string;

  /** GroupId - text (nullable) */
  GroupId?: string;

}

