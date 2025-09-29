/**
 * Interface pour la table SupplierOptionsCustomReport
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SupplierOptionsCustomReport {
  /** Id - uuid */
  Id: string;

  /** DocumentSubType - smallint */
  DocumentSubType: number;

  /** NumberOfCopies - integer */
  NumberOfCopies: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

