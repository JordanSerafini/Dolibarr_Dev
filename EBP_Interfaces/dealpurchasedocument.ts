/**
 * Interface pour la table DealPurchaseDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealPurchaseDocument {
  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** InvoiceCorrectionType - smallint */
  InvoiceCorrectionType: number;

  /** DocumentType - smallint */
  DocumentType: number;

  /** SupplierId - text */
  SupplierId: string;

  /** SupplierName - text */
  SupplierName: string;

  /** IncludeAmountInCost - boolean */
  IncludeAmountInCost: boolean;

  /** IncludedAmount - numeric */
  IncludedAmount: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DocumentState - integer (nullable) */
  DocumentState?: number;

  /** TransferedDocumentId - uuid (nullable) */
  TransferedDocumentId?: string;

  /** AmountVatExcluded - numeric (nullable) */
  AmountVatExcluded?: number;

  /** NetAmountVatExcludedWithDiscount - numeric (nullable) */
  NetAmountVatExcludedWithDiscount?: number;

  /** DocumentTotalAmountVatExcludedWithDiscount - numeric (nullable) */
  DocumentTotalAmountVatExcludedWithDiscount?: number;

  /** NetAmountVatIncludedWithDiscount - numeric (nullable) */
  NetAmountVatIncludedWithDiscount?: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** GlobalDocumentState - text (nullable) */
  GlobalDocumentState?: string;

  /** DocumentEditCounter - integer (nullable) */
  DocumentEditCounter?: number;

}

