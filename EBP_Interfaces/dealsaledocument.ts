/**
 * Interface pour la table DealSaleDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealSaleDocument {
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

  /** CustomerId - text */
  CustomerId: string;

  /** CustomerName - text */
  CustomerName: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** NetInterestAmount - numeric (nullable) */
  NetInterestAmount?: number;

  /** GrossInterestAmount - numeric (nullable) */
  GrossInterestAmount?: number;

  /** InterestAmount - numeric (nullable) */
  InterestAmount?: number;

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

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** AchievedDuration - numeric (nullable) */
  AchievedDuration?: number;

  /** ExpectedDuration - numeric (nullable) */
  ExpectedDuration?: number;

  /** ToScheduleDuration - numeric (nullable) */
  ToScheduleDuration?: number;

  /** InvoicableAchievedDuration - numeric (nullable) */
  InvoicableAchievedDuration?: number;

  /** InvoicableExpectedDuration - numeric (nullable) */
  InvoicableExpectedDuration?: number;

  /** InvoicableToScheduleDuration - numeric (nullable) */
  InvoicableToScheduleDuration?: number;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** GlobalDocumentState - text (nullable) */
  GlobalDocumentState?: string;

  /** IsReferenceDocument - boolean (nullable) */
  IsReferenceDocument?: boolean;

  /** DocumentEditCounter - integer (nullable) */
  DocumentEditCounter?: number;

}

