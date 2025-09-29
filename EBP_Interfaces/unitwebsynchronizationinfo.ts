/**
 * Interface pour la table UnitWebSynchronizationInfo
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface UnitWebSynchronizationInfo {
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

