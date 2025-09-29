/**
 * Interface pour la table Competence
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Competence {
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

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Threshold - integer (nullable) */
  Threshold?: number;

  /** ValidityDuration - integer (nullable) */
  ValidityDuration?: number;

}

