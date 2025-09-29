/**
 * Interface pour la table EbpSysUserGroupAssociation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUserGroupAssociation {
  /** Id - uuid */
  Id: string;

  /** UserId - text */
  UserId: string;

  /** GroupId - text */
  GroupId: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

