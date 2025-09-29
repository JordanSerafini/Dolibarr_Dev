/**
 * Interface pour la table xyx_FACTUP_PeriodicInvoicesToComplete
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Xyx_FACTUP_PeriodicInvoicesToComplete {
  /** xy_sysId - uuid */
  xy_sysId: string;

  /** xy_FACTUP_PeriodicInvoice - text */
  xy_FACTUP_PeriodicInvoice: string;

  /** xy_FACTUP_Customer - text */
  xy_FACTUP_Customer: string;

  /** xy_FACTUP_InvoiceDate - timestamp without time zone */
  xy_FACTUP_InvoiceDate: Date | string;

  /** xy_FACTUP_Status - text (nullable) */
  xy_FACTUP_Status?: string;

  /** xy_FACTUP_Document - uuid (nullable) */
  xy_FACTUP_Document?: string;

}

