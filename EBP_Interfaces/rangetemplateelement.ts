/**
 * Interface pour la table RangeTemplateElement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RangeTemplateElement {
  /** Id - uuid */
  Id: string;

  /** RangeTemplateId - text */
  RangeTemplateId: string;

  /** RangeTypeElementId0 - uuid */
  RangeTypeElementId0: string;

  /** RangeTypeElementId1 - uuid (nullable) */
  RangeTypeElementId1?: string;

  /** RangeTypeElementId2 - uuid (nullable) */
  RangeTypeElementId2?: string;

  /** RangeTypeElementId3 - uuid (nullable) */
  RangeTypeElementId3?: string;

  /** RangeTypeElementId4 - uuid (nullable) */
  RangeTypeElementId4?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

