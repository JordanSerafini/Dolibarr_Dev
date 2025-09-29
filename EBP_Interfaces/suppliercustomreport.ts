/**
 * Interface pour la table SupplierCustomReport
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SupplierCustomReport {
  /** Id - uuid */
  Id: string;

  /** DocumentSubType - smallint */
  DocumentSubType: number;

  /** NumberOfCopies - integer */
  NumberOfCopies: number;

  /** ParentId - text */
  ParentId: string;

  /** PriceTaxeBased - smallint */
  PriceTaxeBased: number;

  /** ReportId - uuid (nullable) */
  ReportId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

