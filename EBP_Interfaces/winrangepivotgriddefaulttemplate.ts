/**
 * Interface pour la table WinRangePivotGridDefaultTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface WinRangePivotGridDefaultTemplate {
  /** RangePivotGridId - uuid */
  RangePivotGridId: string;

  /** Id - integer */
  Id: number;

  /** DefaultTemplateId - uuid */
  DefaultTemplateId: string;

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

