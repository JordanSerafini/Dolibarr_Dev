/**
 * Interface pour la table Round
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Round {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** RoundType - smallint */
  RoundType: number;

  /** RoundValue - numeric */
  RoundValue: number;

  /** PsychologicalPriceRoundValue - numeric */
  PsychologicalPriceRoundValue: number;

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

