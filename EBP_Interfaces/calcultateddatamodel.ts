/**
 * Interface pour la table CalcultatedDataModel
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CalcultatedDataModel {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Purpose - smallint */
  Purpose: number;

  /** Program_Program - text (nullable) */
  Program_Program?: string;

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

