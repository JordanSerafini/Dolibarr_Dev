/**
 * Interface pour la table EbpSysWorkflowTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWorkflowTemplate {
  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** OwningId - uuid */
  OwningId: string;

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

}

