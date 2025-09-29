/**
 * Interface pour la table PeriodicInvoicingCustomer
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PeriodicInvoicingCustomer {
  /** LineNumber - integer */
  LineNumber: number;

  /** Id - uuid */
  Id: string;

  /** PeriodicInvoicingId - text */
  PeriodicInvoicingId: string;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** CustomerFamilyId - text (nullable) */
  CustomerFamilyId?: string;

  /** StartDate - timestamp without time zone (nullable) */
  StartDate?: Date | string;

  /** EndDate - timestamp without time zone (nullable) */
  EndDate?: Date | string;

  /** PreviousInvoicingDate - timestamp without time zone (nullable) */
  PreviousInvoicingDate?: Date | string;

  /** NextInvoicingDate - timestamp without time zone (nullable) */
  NextInvoicingDate?: Date | string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** SepaMandateIdentification - text (nullable) */
  SepaMandateIdentification?: string;

  /** SepaMandateDate - timestamp without time zone (nullable) */
  SepaMandateDate?: Date | string;

  /** SepaSequence - smallint (nullable) */
  SepaSequence?: number;

  /** BankAccountId - uuid (nullable) */
  BankAccountId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** MaintenanceContractUpdatingRate - numeric (nullable) */
  MaintenanceContractUpdatingRate?: number;

}

