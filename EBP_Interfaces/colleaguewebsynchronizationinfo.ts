/**
 * Interface pour la table ColleagueWebSynchronizationInfo
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ColleagueWebSynchronizationInfo {
  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** InfoKey - text */
  InfoKey: string;

  /** InfoValue - text (nullable) */
  InfoValue?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

