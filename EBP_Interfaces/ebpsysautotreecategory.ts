/**
 * Interface pour la table EbpSysAutoTreeCategory
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysAutoTreeCategory {
  /** Visible - boolean */
  Visible: boolean;

  /** ListId - text */
  ListId: string;

  /** ViewNamespace - text */
  ViewNamespace: string;

  /** TreeCategoryName - text */
  TreeCategoryName: string;

  /** TreeCategoryKey - integer */
  TreeCategoryKey: number;

  /** FirstFilter - text */
  FirstFilter: string;

  /** SecondFilter - text (nullable) */
  SecondFilter?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

