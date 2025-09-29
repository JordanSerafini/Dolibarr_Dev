/**
 * Interface pour la table EbpSysCustomTreeCategory
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysCustomTreeCategory {
  /** ListId - text */
  ListId: string;

  /** ViewNamespace - text */
  ViewNamespace: string;

  /** TreeCategoryName - text */
  TreeCategoryName: string;

  /** TreeCategoryKey - text */
  TreeCategoryKey: string;

  /** ParentId - text (nullable) */
  ParentId?: string;

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

}

