/**
 * Interface pour la table DealPurchaseDocumentLineCostDispatch
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealPurchaseDocumentLineCostDispatch {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** DealDocumentLineId - uuid (nullable) */
  DealDocumentLineId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** ExecutionQuoteLineId - uuid */
  ExecutionQuoteLineId: string;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

  /** QuantityToInclude - numeric */
  QuantityToInclude: number;

  /** QuantityUserModified - boolean */
  QuantityUserModified: boolean;

  /** IncludedAmount - numeric */
  IncludedAmount: number;

}

