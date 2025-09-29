/**
 * Interface pour la table PurchaseDocumentLineTrackingDispatch
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocumentLineTrackingDispatch {
  /** Id - uuid */
  Id: string;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** ItemId - text */
  ItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** ReturnedQuantity - numeric */
  ReturnedQuantity: number;

  /** RemainingQuantity - numeric */
  RemainingQuantity: number;

  /** ReturnedQuantityByPreviousCreditMemo - numeric */
  ReturnedQuantityByPreviousCreditMemo: number;

  /** Quantity - numeric */
  Quantity: number;

  /** DispatchIndex - integer */
  DispatchIndex: number;

  /** DeliveredQuantity - numeric */
  DeliveredQuantity: number;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** OriginQuantity - numeric (nullable) */
  OriginQuantity?: number;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

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

  /** OriginId - uuid (nullable) */
  OriginId?: string;

  /** ReturnOriginLocationId - text (nullable) */
  ReturnOriginLocationId?: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** RemainingQuantityToDeliverGap - numeric (nullable) */
  RemainingQuantityToDeliverGap?: number;

  /** InvoicedQuantity - numeric (nullable) */
  InvoicedQuantity?: number;

}

