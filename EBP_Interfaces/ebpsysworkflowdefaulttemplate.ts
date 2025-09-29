/**
 * Interface pour la table EbpSysWorkflowDefaultTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWorkflowDefaultTemplate {
  /** Id - integer */
  Id: number;

  /** DefaultTemplateId - uuid */
  DefaultTemplateId: string;

  /** OwningId - uuid */
  OwningId: string;

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

