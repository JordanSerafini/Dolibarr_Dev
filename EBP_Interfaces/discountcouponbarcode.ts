/**
 * Interface pour la table DiscountCouponBarCode
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DiscountCouponBarCode {
  /** Id - uuid */
  Id: string;

  /** BarCodeId - text */
  BarCodeId: string;

  /** DiscountCouponId - text */
  DiscountCouponId: string;

  /** IssuedDate - timestamp without time zone */
  IssuedDate: Date | string;

  /** Used - boolean */
  Used: boolean;

  /** UsedDate - timestamp without time zone (nullable) */
  UsedDate?: Date | string;

  /** UsedDocumentId - uuid (nullable) */
  UsedDocumentId?: string;

  /** ComplementaryDiscountId - uuid (nullable) */
  ComplementaryDiscountId?: string;

  /** IssuedDocumentId - uuid (nullable) */
  IssuedDocumentId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

