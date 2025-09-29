/**
 * Interface pour la table EbpSysReportTagAssociation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysReportTagAssociation {
  /** TagId - uuid */
  TagId: string;

  /** ReportId - uuid */
  ReportId: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

