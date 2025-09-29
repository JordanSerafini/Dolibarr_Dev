/**
 * Interface pour la table IncidentTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IncidentTemplate {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

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

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

}

