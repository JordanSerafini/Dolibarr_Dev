/**
 * Interface pour la table EbpSysWinGridTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWinGridTemplate {
  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** OwningId - uuid */
  OwningId: string;

  /** GridId - uuid */
  GridId: string;

  /** CategoryId - uuid */
  CategoryId: string;

  /** HasDynamicMember - boolean */
  HasDynamicMember: boolean;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

  /** ExtensionId - uuid (nullable) */
  ExtensionId?: string;

}

