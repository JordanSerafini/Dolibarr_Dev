/**
 * Interface pour la table EbpSysDashboardTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysDashboardTemplate {
  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** OwningId - uuid */
  OwningId: string;

  /** CreationOrder - integer */
  CreationOrder: number;

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

  /** UserId - text (nullable) */
  UserId?: string;

  /** GroupId - text (nullable) */
  GroupId?: string;

  /** SystemDashboardId - uuid (nullable) */
  SystemDashboardId?: string;

  /** Template - text (nullable) */
  Template?: string;

}

