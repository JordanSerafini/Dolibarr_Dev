/**
 * Interface pour la table EbpSysDefaultReport
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysDefaultReport {
  /** Id - uuid */
  Id: string;

  /** ReportCategoryId - uuid */
  ReportCategoryId: string;

  /** ElementType - smallint */
  ElementType: number;

  /** ReportId - uuid */
  ReportId: string;

  /** NumberOfCopies - integer */
  NumberOfCopies: number;

  /** ReportLanguage - text */
  ReportLanguage: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

