/**
 * Interface pour la table EbpSysWinListTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWinListTemplate {
  /** OwningId - uuid */
  OwningId: string;

  /** ViewId - uuid */
  ViewId: string;

  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** Template - text (nullable) */
  Template?: string;

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

  /** ExtensionId - uuid (nullable) */
  ExtensionId?: string;

}

