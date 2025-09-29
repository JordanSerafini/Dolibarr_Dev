/**
 * Interface pour la table ServiceIntrastatLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ServiceIntrastatLine {
  /** Id - uuid */
  Id: string;

  /** IntrastatId - uuid */
  IntrastatId: string;

  /** LineNumber - integer */
  LineNumber: number;

  /** Amount - numeric */
  Amount: number;

  /** PurchaserCeNumber - text (nullable) */
  PurchaserCeNumber?: string;

  /** DocumentId - uuid (nullable) */
  DocumentId?: string;

  /** DocumentLineId - uuid (nullable) */
  DocumentLineId?: string;

  /** DocumentType - smallint (nullable) */
  DocumentType?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

