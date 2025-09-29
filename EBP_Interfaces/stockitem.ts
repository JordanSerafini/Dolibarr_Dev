/**
 * Interface pour la table StockItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockItem {
  /** CustomersDeliveryOrderPreparingQuantity - numeric */
  CustomersDeliveryOrderPreparingQuantity: number;

  /** CustomersReturnOrderPreparingQuantity - numeric */
  CustomersReturnOrderPreparingQuantity: number;

  /** SuppliersDeliveryOrderPreparingQuantity - numeric */
  SuppliersDeliveryOrderPreparingQuantity: number;

  /** SuppliersReturnOrderPreparingQuantity - numeric */
  SuppliersReturnOrderPreparingQuantity: number;

  /** ItemId - text */
  ItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

  /** RealStock - numeric */
  RealStock: number;

  /** StockValue - numeric */
  StockValue: number;

  /** MinStock - numeric */
  MinStock: number;

  /** StockToOrderThreshold - numeric */
  StockToOrderThreshold: number;

  /** VirtualStock - numeric */
  VirtualStock: number;

  /** OrderedQuantity - numeric */
  OrderedQuantity: number;

  /** SuppliersOrderedQuantity - numeric */
  SuppliersOrderedQuantity: number;

  /** Pump - numeric */
  Pump: number;

  /** StorageEnable - boolean */
  StorageEnable: boolean;

  /** TransferOutputVirtualQuantity - numeric */
  TransferOutputVirtualQuantity: number;

  /** TransferInputVirtualQuantity - numeric */
  TransferInputVirtualQuantity: number;

  /** AssemblingVirtualQuantity - numeric */
  AssemblingVirtualQuantity: number;

  /** DisassemblingQuantity - numeric */
  DisassemblingQuantity: number;

  /** QuantityUsedToAssemblate - numeric */
  QuantityUsedToAssemblate: number;

  /** QuantityFromDisassembling - numeric */
  QuantityFromDisassembling: number;

  /** MaxStock - numeric */
  MaxStock: number;

  /** MultiLocationMode - smallint */
  MultiLocationMode: number;

  /** HasLocationDispatch - boolean */
  HasLocationDispatch: boolean;

  /** VirtualPump - numeric */
  VirtualPump: number;

  /** VirtualStockValue - numeric */
  VirtualStockValue: number;

  /** BookedQuantity - numeric */
  BookedQuantity: number;

  /** LocationId - text (nullable) */
  LocationId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

