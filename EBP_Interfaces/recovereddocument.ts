/**
 * Interface pour la table RecoveredDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RecoveredDocument {
  /** Id - uuid */
  Id: string;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** NumberPrefix - text */
  NumberPrefix: string;

  /** NumberSuffix - text */
  NumberSuffix: string;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** DocumentSubType - smallint */
  DocumentSubType: number;

  /** ThirdName - text */
  ThirdName: string;

  /** AmountVatExcluded - numeric */
  AmountVatExcluded: number;

  /** VatAmount - numeric */
  VatAmount: number;

  /** AmountVatIncluded - numeric */
  AmountVatIncluded: number;

  /** RecoveredFrom - smallint */
  RecoveredFrom: number;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** SaleDocumentSubType - smallint (nullable) */
  SaleDocumentSubType?: number;

  /** PurchaseDocumentSubType - smallint (nullable) */
  PurchaseDocumentSubType?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

