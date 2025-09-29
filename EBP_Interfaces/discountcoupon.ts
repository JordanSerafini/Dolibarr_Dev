/**
 * Interface pour la table DiscountCoupon
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DiscountCoupon {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** BarCode - text */
  BarCode: string;

  /** UseSameBarCode - boolean */
  UseSameBarCode: boolean;

  /** IssuedCounter - integer */
  IssuedCounter: number;

  /** UsedCounter - integer */
  UsedCounter: number;

  /** PriceListId - text */
  PriceListId: string;

  /** Commentary - text (nullable) */
  Commentary?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** PrintAvaliableDateFrom - timestamp without time zone (nullable) */
  PrintAvaliableDateFrom?: Date | string;

  /** PrintAvaliableDateTo - timestamp without time zone (nullable) */
  PrintAvaliableDateTo?: Date | string;

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

}

