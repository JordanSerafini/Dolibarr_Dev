/**
 * Interface pour la table PosTerminalOpenCloseItemFamilyDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminalOpenCloseItemFamilyDetail {
  /** Id - uuid */
  Id: string;

  /** ParentId - uuid */
  ParentId: string;

  /** AmountVatExcluded - numeric */
  AmountVatExcluded: number;

  /** DiscountAmount - numeric */
  DiscountAmount: number;

  /** DiscountAmountVatExcluded - numeric */
  DiscountAmountVatExcluded: number;

  /** DiscountAmountVatIncluded - numeric */
  DiscountAmountVatIncluded: number;

  /** Positive - boolean */
  Positive: boolean;

  /** ItemFamilyId - text (nullable) */
  ItemFamilyId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

