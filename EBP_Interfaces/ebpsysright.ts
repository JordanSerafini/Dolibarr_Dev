/**
 * Interface pour la table EbpSysRight
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysRight {
  /** Id - uuid */
  Id: string;

  /** ApplicationRightId - uuid */
  ApplicationRightId: string;

  /** Authorizations - smallint */
  Authorizations: number;

  /** ParentId - uuid (nullable) */
  ParentId?: string;

  /** UserId - text (nullable) */
  UserId?: string;

  /** GroupId - text (nullable) */
  GroupId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

