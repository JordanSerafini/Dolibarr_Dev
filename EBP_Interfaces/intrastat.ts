/**
 * Interface pour la table Intrastat
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Intrastat {
  /** Id - uuid */
  Id: string;

  /** IntrastatState - smallint */
  IntrastatState: number;

  /** IntrastatNumber - text */
  IntrastatNumber: string;

  /** IntrastatDate - timestamp without time zone */
  IntrastatDate: Date | string;

  /** ReferencePeriod - text */
  ReferencePeriod: string;

  /** IntrastatType - smallint */
  IntrastatType: number;

  /** ObligationLevel - smallint */
  ObligationLevel: number;

  /** StartDate - timestamp without time zone */
  StartDate: Date | string;

  /** EndDate - timestamp without time zone */
  EndDate: Date | string;

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

