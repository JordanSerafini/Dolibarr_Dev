/**
 * Interface pour la table StockMovement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockMovement {
  /** VirtualUnitCost - numeric */
  VirtualUnitCost: number;

  /** VirtualCost - numeric */
  VirtualCost: number;

  /** MovementType - smallint */
  MovementType: number;

  /** Id - integer */
  Id: number;

  /** ItemId - text */
  ItemId: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** DocumentOrder - integer */
  DocumentOrder: number;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** DocumentSubType - smallint */
  DocumentSubType: number;

  /** Quantity - numeric */
  Quantity: number;

  /** UnitCost - numeric */
  UnitCost: number;

  /** Cost - numeric */
  Cost: number;

  /** Pump - numeric */
  Pump: number;

  /** RealStock - numeric */
  RealStock: number;

  /** StockValue - numeric */
  StockValue: number;

  /** UsePumpForSaleReturn - boolean */
  UsePumpForSaleReturn: boolean;

  /** VirtualStock - numeric */
  VirtualStock: number;

  /** VirtualPump - numeric */
  VirtualPump: number;

  /** VirtualStockValue - numeric */
  VirtualStockValue: number;

  /** TrackingVirtualStock - numeric (nullable) */
  TrackingVirtualStock?: number;

  /** TrackingVirtualPump - numeric (nullable) */
  TrackingVirtualPump?: number;

  /** TrackingVirtualStockValue - numeric (nullable) */
  TrackingVirtualStockValue?: number;

  /** ReferenceMovementId - integer (nullable) */
  ReferenceMovementId?: number;

  /** StockChargeAmount - numeric (nullable) */
  StockChargeAmount?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** TrackingRealStock - numeric (nullable) */
  TrackingRealStock?: number;

  /** TrackingPump - numeric (nullable) */
  TrackingPump?: number;

  /** TrackingStockValue - numeric (nullable) */
  TrackingStockValue?: number;

  /** LocationId - text (nullable) */
  LocationId?: string;

}

