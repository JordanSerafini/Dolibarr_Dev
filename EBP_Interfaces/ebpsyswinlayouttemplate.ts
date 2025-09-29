/**
 * Interface pour la table EbpSysWinLayoutTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWinLayoutTemplate {
  /** OwningId - uuid */
  OwningId: string;

  /** SubTypeId - uuid */
  SubTypeId: string;

  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** Template - text (nullable) */
  Template?: string;

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

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** ExtensionId - uuid (nullable) */
  ExtensionId?: string;

  /** TemplateVersion - smallint */
  TemplateVersion: number;

}

