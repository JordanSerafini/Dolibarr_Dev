/**
 * Interface pour la table TrackingStockItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface TrackingStockItem {
  /** ItemId - text */
  ItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** RealStock - numeric */
  RealStock: number;

  /** TrackingNumber - text */
  TrackingNumber: string;

  /** UnitValue - numeric */
  UnitValue: number;

  /** StockValue - numeric */
  StockValue: number;

  /** LocationId - text */
  LocationId: string;

  /** VirtualStock - numeric */
  VirtualStock: number;

  /** VirtualUnitValue - numeric */
  VirtualUnitValue: number;

  /** VirtualStockValue - numeric */
  VirtualStockValue: number;

  /** BookedQuantity - numeric */
  BookedQuantity: number;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** AdjustedLimitDate - timestamp without time zone (nullable) */
  AdjustedLimitDate?: Date | string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** LastMovementDate - timestamp without time zone (nullable) */
  LastMovementDate?: Date | string;

}

