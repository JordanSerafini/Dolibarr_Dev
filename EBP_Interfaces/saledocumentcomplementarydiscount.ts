/**
 * Interface pour la table SaleDocumentComplementaryDiscount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleDocumentComplementaryDiscount {
  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** Rate - numeric */
  Rate: number;

  /** Amount - numeric */
  Amount: number;

  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** Code - text (nullable) */
  Code?: string;

  /** Caption - text (nullable) */
  Caption?: string;

  /** DiscountType - smallint (nullable) */
  DiscountType?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** AdvantageType - smallint (nullable) */
  AdvantageType?: number;

  /** DocumentReferenceOriginComplementaryDiscountId - uuid (nullable) */
  DocumentReferenceOriginComplementaryDiscountId?: string;

  /** IsPriceListDiscount - boolean */
  IsPriceListDiscount: boolean;

}

