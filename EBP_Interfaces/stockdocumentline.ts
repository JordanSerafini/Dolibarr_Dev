/**
 * Interface pour la table StockDocumentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockDocumentLine {
  /** BillOfQuantitiesProgram_IsActive - boolean */
  BillOfQuantitiesProgram_IsActive: boolean;

  /** FixedQuantity - boolean */
  FixedQuantity: boolean;

  /** Booked - boolean */
  Booked: boolean;

  /** StockBookingAllowed - boolean */
  StockBookingAllowed: boolean;

  /** ToInvoice - boolean */
  ToInvoice: boolean;

  /** TargetLocation_MultiLocationMode - smallint */
  TargetLocation_MultiLocationMode: number;

  /** TransitLocation_MultiLocationMode - smallint */
  TransitLocation_MultiLocationMode: number;

  /** PhaseLevel - integer */
  PhaseLevel: number;

  /** UpdateComponentsStockInFabrication - boolean */
  UpdateComponentsStockInFabrication: boolean;

  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** IsReferencedItem - boolean */
  IsReferencedItem: boolean;

  /** Quantity - numeric */
  Quantity: number;

  /** RealQuantity - numeric */
  RealQuantity: number;

  /** ManageStock - boolean */
  ManageStock: boolean;

  /** NomenclatureLevel - integer */
  NomenclatureLevel: number;

  /** IsPrintable - smallint */
  IsPrintable: number;

  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

  /** PricesDecimalNumber - smallint */
  PricesDecimalNumber: number;

  /** IsManagedByCountermark - boolean */
  IsManagedByCountermark: boolean;

  /** IsCountermarkInitiated - boolean */
  IsCountermarkInitiated: boolean;

  /** Volume - numeric */
  Volume: number;

  /** TotalVolume - numeric */
  TotalVolume: number;

  /** HasTrackingDispatch - boolean */
  HasTrackingDispatch: boolean;

  /** Weight - numeric */
  Weight: number;

  /** TotalWeight - numeric */
  TotalWeight: number;

  /** ItemValue - numeric */
  ItemValue: number;

  /** TotalValue - numeric */
  TotalValue: number;

  /** CurrentStock - numeric */
  CurrentStock: number;

  /** NewTotalValue - numeric */
  NewTotalValue: number;

  /** AccountingNewTotalValue - numeric */
  AccountingNewTotalValue: number;

  /** ExistingTrackingNumber - boolean */
  ExistingTrackingNumber: boolean;

  /** TrackingMasterLine - boolean */
  TrackingMasterLine: boolean;

  /** PreviousTotalValue - numeric */
  PreviousTotalValue: number;

  /** Location_MultiLocationMode - smallint */
  Location_MultiLocationMode: number;

  /** MustProcessOriginQuantity - boolean */
  MustProcessOriginQuantity: boolean;

  /** DealId - text (nullable) */
  DealId?: string;

  /** TransitLocation_LocationId - text (nullable) */
  TransitLocation_LocationId?: string;

  /** Gap - numeric (nullable) */
  Gap?: number;

  /** JustificationQuantity1 - numeric (nullable) */
  JustificationQuantity1?: number;

  /** JustificationQuantity2 - numeric (nullable) */
  JustificationQuantity2?: number;

  /** JustificationQuantity3 - numeric (nullable) */
  JustificationQuantity3?: number;

  /** JustificationQuantity4 - numeric (nullable) */
  JustificationQuantity4?: number;

  /** JustificationQuantity5 - numeric (nullable) */
  JustificationQuantity5?: number;

  /** TargetStorehouseId - uuid (nullable) */
  TargetStorehouseId?: string;

  /** ReceivedQuantity - numeric (nullable) */
  ReceivedQuantity?: number;

  /** TargetStockMovementId - integer (nullable) */
  TargetStockMovementId?: number;

  /** StockChargeAmount - numeric (nullable) */
  StockChargeAmount?: number;

  /** GapStockMovementId - integer (nullable) */
  GapStockMovementId?: number;

  /** OriginLineId - uuid (nullable) */
  OriginLineId?: string;

  /** RemainingQuantity - numeric (nullable) */
  RemainingQuantity?: number;

  /** TargetQuantity - numeric (nullable) */
  TargetQuantity?: number;

  /** TransitInputStockMovementId - integer (nullable) */
  TransitInputStockMovementId?: number;

  /** TransitOutputStockMovementId - integer (nullable) */
  TransitOutputStockMovementId?: number;

  /** LocationCaption - text (nullable) */
  LocationCaption?: string;

  /** UnitCaption - text (nullable) */
  UnitCaption?: string;

  /** Commentary - text (nullable) */
  Commentary?: string;

  /** NewPump - numeric (nullable) */
  NewPump?: number;

  /** CurrentPump - numeric (nullable) */
  CurrentPump?: number;

  /** WeightUnitId - text (nullable) */
  WeightUnitId?: string;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** VolumeUnitId - text (nullable) */
  VolumeUnitId?: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ParentLineId - uuid (nullable) */
  ParentLineId?: string;

  /** TopParentLineId - uuid (nullable) */
  TopParentLineId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Location_LocationId - text (nullable) */
  Location_LocationId?: string;

  /** TargetLocation_LocationId - text (nullable) */
  TargetLocation_LocationId?: string;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** InvoiceLineId - uuid (nullable) */
  InvoiceLineId?: string;

  /** CustomerProductId - text (nullable) */
  CustomerProductId?: string;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** TechnicalDescription - text (nullable) */
  TechnicalDescription?: string;

  /** TechnicalDescriptionClear - text (nullable) */
  TechnicalDescriptionClear?: string;

  /** ExecutionQuoteLineId - uuid (nullable) */
  ExecutionQuoteLineId?: string;

  /** ProgressDocumentLineId - uuid (nullable) */
  ProgressDocumentLineId?: string;

  /** ExcludeFixedQuantityForPrice - boolean */
  ExcludeFixedQuantityForPrice: boolean;

}

