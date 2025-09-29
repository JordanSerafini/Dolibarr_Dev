/**
 * Interface pour la table GiftVoucher
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface GiftVoucher {
  /** Status - smallint */
  Status: number;

  /** Id - text */
  Id: string;

  /** ItemId - text */
  ItemId: string;

  /** CashValue - numeric */
  CashValue: number;

  /** Activated - boolean */
  Activated: boolean;

  /** ActivationDate - timestamp without time zone (nullable) */
  ActivationDate?: Date | string;

  /** ExpiryDate - timestamp without time zone (nullable) */
  ExpiryDate?: Date | string;

  /** SaleDocumentLineId - uuid (nullable) */
  SaleDocumentLineId?: string;

  /** SettlementDocumentId - uuid (nullable) */
  SettlementDocumentId?: string;

  /** GiveChangeDocumentId - uuid (nullable) */
  GiveChangeDocumentId?: string;

  /** ReturningChangeAmount - numeric (nullable) */
  ReturningChangeAmount?: number;

  /** GiftVoucherReturningChangeAmount - numeric (nullable) */
  GiftVoucherReturningChangeAmount?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** IsSoldWithoutDocument - boolean */
  IsSoldWithoutDocument: boolean;

}

