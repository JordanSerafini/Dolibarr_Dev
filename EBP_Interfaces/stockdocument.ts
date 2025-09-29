/**
 * Interface pour la table StockDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockDocument {
  /** MustGetQuantities - boolean */
  MustGetQuantities: boolean;

  /** TotalVolume - numeric */
  TotalVolume: number;

  /** TotalWeight - numeric */
  TotalWeight: number;

  /** Id - uuid */
  Id: string;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** NumberPrefix - text */
  NumberPrefix: string;

  /** NumberSuffix - numeric */
  NumberSuffix: number;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** GlobalDocumentOrder - integer */
  GlobalDocumentOrder: number;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** DispatchedByStorehouse - boolean */
  DispatchedByStorehouse: boolean;

  /** DocumentType - smallint */
  DocumentType: number;

  /** MustBeTransferedToAccounting - boolean */
  MustBeTransferedToAccounting: boolean;

  /** DocumentStage - smallint */
  DocumentStage: number;

  /** IncludeSoldOutTrackingNumbers - boolean */
  IncludeSoldOutTrackingNumbers: boolean;

  /** RemoveOutOfDateUseByStock - boolean */
  RemoveOutOfDateUseByStock: boolean;

  /** RemoveOutOfDateBestBeforeStock - boolean */
  RemoveOutOfDateBestBeforeStock: boolean;

  /** UseAdjustedLimitDate - boolean */
  UseAdjustedLimitDate: boolean;

  /** ItemValueType - smallint */
  ItemValueType: number;

  /** IsExchangeDocument - boolean */
  IsExchangeDocument: boolean;

  /** PreparationState - smallint */
  PreparationState: number;

  /** SerialId - text */
  SerialId: string;

  /** DefaultActivateInventoryQuantityFormula - boolean */
  DefaultActivateInventoryQuantityFormula: boolean;

  /** UseMaxPrecisionForPump - boolean */
  UseMaxPrecisionForPump: boolean;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** ProcessDate - timestamp without time zone (nullable) */
  ProcessDate?: Date | string;

  /** ScheduleEventId - uuid (nullable) */
  ScheduleEventId?: string;

  /** InvoiceId - uuid (nullable) */
  InvoiceId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** OriginDocumentId - uuid (nullable) */
  OriginDocumentId?: string;

  /** TransitStorehouseId - uuid (nullable) */
  TransitStorehouseId?: string;

  /** TransitEndDate - timestamp without time zone (nullable) */
  TransitEndDate?: Date | string;

  /** TransitDuration - integer (nullable) */
  TransitDuration?: number;

  /** TargetStorehouseId - uuid (nullable) */
  TargetStorehouseId?: string;

  /** ValidationDate - timestamp without time zone (nullable) */
  ValidationDate?: Date | string;

  /** ValidationGlobalDocumentOrder - integer (nullable) */
  ValidationGlobalDocumentOrder?: number;

  /** OriginDocumentType - smallint (nullable) */
  OriginDocumentType?: number;

  /** ValidateState - smallint (nullable) */
  ValidateState?: number;

  /** GroupingType - smallint (nullable) */
  GroupingType?: number;

  /** SortingType - smallint (nullable) */
  SortingType?: number;

  /** TransferedDocumentId - uuid (nullable) */
  TransferedDocumentId?: string;

  /** Reference - text (nullable) */
  Reference?: string;

  /** RecoveredFrom - smallint (nullable) */
  RecoveredFrom?: number;

  /** ModifiedSinceRecovery - boolean (nullable) */
  ModifiedSinceRecovery?: boolean;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** Hash_ChainedId - uuid (nullable) */
  Hash_ChainedId?: string;

  /** Hash_Hash - bytea (nullable) */
  Hash_Hash?: Buffer | Uint8Array;

  /** ExecutionQuoteId - uuid (nullable) */
  ExecutionQuoteId?: string;

  /** CreatedFromConstructionSiteConsumptions - boolean */
  CreatedFromConstructionSiteConsumptions: boolean;

  /** ProgressStateDocumentId - uuid (nullable) */
  ProgressStateDocumentId?: string;

  /** xx_LoanEquipmentReturn - boolean */
  xx_LoanEquipmentReturn: boolean;

  /** xx_LoanEquipment - boolean */
  xx_LoanEquipment: boolean;

  /** xx_ForCustomer - text (nullable) */
  xx_ForCustomer?: string;

}

