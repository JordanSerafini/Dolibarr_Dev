/**
 * Interface pour la table ColleagueCompetence
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ColleagueCompetence {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** ColleagueId - text */
  ColleagueId: string;

  /** CompetenceId - text */
  CompetenceId: string;

  /** StartDate - timestamp without time zone (nullable) */
  StartDate?: Date | string;

  /** EndDate - timestamp without time zone (nullable) */
  EndDate?: Date | string;

  /** Threshold - integer */
  Threshold: number;

  /** AlertDate - timestamp without time zone (nullable) */
  AlertDate?: Date | string;

  /** ComptetenceValidityDuration - integer (nullable) */
  ComptetenceValidityDuration?: number;

  /** CompetenceOrder - integer */
  CompetenceOrder: number;

}

