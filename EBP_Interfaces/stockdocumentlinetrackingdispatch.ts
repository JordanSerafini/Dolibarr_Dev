/**
 * Interface pour la table StockDocumentLineTrackingDispatch
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockDocumentLineTrackingDispatch {
  /** RemainingQuantity - numeric */
  RemainingQuantity: number;

  /** TargetQuantity - numeric */
  TargetQuantity: number;

  /** Quantity - numeric */
  Quantity: number;

  /** DispatchIndex - integer */
  DispatchIndex: number;

  /** Id - uuid */
  Id: string;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** ItemId - text */
  ItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** TargetStockMovementId - integer (nullable) */
  TargetStockMovementId?: number;

  /** GapStockMovementId - integer (nullable) */
  GapStockMovementId?: number;

  /** TransitInputStockMovementId - integer (nullable) */
  TransitInputStockMovementId?: number;

  /** TransitOutputStockMovementId - integer (nullable) */
  TransitOutputStockMovementId?: number;

  /** ReceivedQuantity - numeric (nullable) */
  ReceivedQuantity?: number;

  /** Gap - numeric (nullable) */
  Gap?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** LocationId - text (nullable) */
  LocationId?: string;

  /** TransitLocationId - text (nullable) */
  TransitLocationId?: string;

  /** TargetLocationId - text (nullable) */
  TargetLocationId?: string;

  /** OriginId - uuid (nullable) */
  OriginId?: string;

  /** ProgressStateLineTrackingDispatchId - uuid (nullable) */
  ProgressStateLineTrackingDispatchId?: string;

}

