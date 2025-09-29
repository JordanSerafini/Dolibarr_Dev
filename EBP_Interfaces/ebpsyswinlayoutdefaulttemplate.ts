/**
 * Interface pour la table EbpSysWinLayoutDefaultTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWinLayoutDefaultTemplate {
  /** Id - integer */
  Id: number;

  /** DefaultTemplateId - uuid */
  DefaultTemplateId: string;

  /** OwningId - uuid */
  OwningId: string;

  /** SubTypeId - uuid */
  SubTypeId: string;

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

  /** TemplateVersion - smallint */
  TemplateVersion: number;

}

