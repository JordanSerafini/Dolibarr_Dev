/**
 * Interface pour la table EbpSysUserFunction
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUserFunction {
  /** Id - text */
  Id: string;

  /** Description - text */
  Description: string;

  /** ReturnedDataType - smallint */
  ReturnedDataType: number;

  /** Category - integer */
  Category: number;

  /** Example - text (nullable) */
  Example?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** Signature - text (nullable) */
  Signature?: string;

  /** UserFunctionProgram_Program - text (nullable) */
  UserFunctionProgram_Program?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

}

