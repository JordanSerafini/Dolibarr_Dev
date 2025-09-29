/**
 * Interface pour la table RangeTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RangeTemplate {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** RangeTypeId0 - text */
  RangeTypeId0: string;

  /** RangeTypeId1 - text (nullable) */
  RangeTypeId1?: string;

  /** RangeTypeId2 - text (nullable) */
  RangeTypeId2?: string;

  /** RangeTypeId3 - text (nullable) */
  RangeTypeId3?: string;

  /** RangeTypeId4 - text (nullable) */
  RangeTypeId4?: string;

  /** RangeTypeElementSelections0 - text (nullable) */
  RangeTypeElementSelections0?: string;

  /** RangeTypeElementSelections1 - text (nullable) */
  RangeTypeElementSelections1?: string;

  /** RangeTypeElementSelections2 - text (nullable) */
  RangeTypeElementSelections2?: string;

  /** RangeTypeElementSelections3 - text (nullable) */
  RangeTypeElementSelections3?: string;

  /** RangeTypeElementSelections4 - text (nullable) */
  RangeTypeElementSelections4?: string;

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

