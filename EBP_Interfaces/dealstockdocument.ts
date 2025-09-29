/**
 * Interface pour la table DealStockDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealStockDocument {
  /** IncludeAmountInCost - boolean */
  IncludeAmountInCost: boolean;

  /** Amount - numeric */
  Amount: number;

  /** IncludedAmount - numeric */
  IncludedAmount: number;

  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** TargetStorehouseId - uuid (nullable) */
  TargetStorehouseId?: string;

  /** TransferedDocumentId - uuid (nullable) */
  TransferedDocumentId?: string;

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

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** CreatedFromConstructionSiteConsumptions - boolean */
  CreatedFromConstructionSiteConsumptions: boolean;

  /** PickStockOperationType - smallint (nullable) */
  PickStockOperationType?: number;

  /** DocumentEditCounter - integer (nullable) */
  DocumentEditCounter?: number;

}

