/**
 * Interface pour la table ItemSubFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemSubFamily {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ItemFamilyId - text */
  ItemFamilyId: string;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

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

