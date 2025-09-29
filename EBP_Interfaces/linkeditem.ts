/**
 * Interface pour la table LinkedItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface LinkedItem {
  /** IsProportional - boolean */
  IsProportional: boolean;

  /** OfferForSale - boolean */
  OfferForSale: boolean;

  /** Id - uuid */
  Id: string;

  /** LinkedItemId - text */
  LinkedItemId: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** Quantity - numeric */
  Quantity: number;

  /** IsFree - boolean */
  IsFree: boolean;

  /** OfferForPurchase - boolean */
  OfferForPurchase: boolean;

  /** DocumentType - smallint */
  DocumentType: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

}

