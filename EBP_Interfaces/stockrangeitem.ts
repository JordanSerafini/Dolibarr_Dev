/**
 * Interface pour la table StockRangeItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface StockRangeItem {
  /** MinStock - numeric */
  MinStock: number;

  /** StockToOrderThreshold - numeric */
  StockToOrderThreshold: number;

  /** StorageEnable - boolean */
  StorageEnable: boolean;

  /** MaxStock - numeric */
  MaxStock: number;

  /** MultiLocationMode - smallint */
  MultiLocationMode: number;

  /** RangeItemId - text */
  RangeItemId: string;

  /** StorehouseId - uuid */
  StorehouseId: string;

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

