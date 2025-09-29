/**
 * Interface pour la table ConstructionSiteReferenceDocumentLineTrackingDispatch
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ConstructionSiteReferenceDocumentLineTrackingDispatch {
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

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** ItemId - text */
  ItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** Quantity - numeric */
  Quantity: number;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

  /** DispatchIndex - integer */
  DispatchIndex: number;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** LocationId - text (nullable) */
  LocationId?: string;

  /** OriginId - uuid (nullable) */
  OriginId?: string;

  /** OriginQuantity - numeric (nullable) */
  OriginQuantity?: number;

  /** ReturnOriginLocationId - text (nullable) */
  ReturnOriginLocationId?: string;

  /** ReturnedQuantity - numeric */
  ReturnedQuantity: number;

  /** RemainingQuantity - numeric */
  RemainingQuantity: number;

  /** InvoicedQuantity - numeric (nullable) */
  InvoicedQuantity?: number;

  /** DeliveredQuantity - numeric */
  DeliveredQuantity: number;

  /** ReturnedQuantityByPreviousCreditMemo - numeric */
  ReturnedQuantityByPreviousCreditMemo: number;

  /** RemainingQuantityToDeliverGap - numeric (nullable) */
  RemainingQuantityToDeliverGap?: number;

}

