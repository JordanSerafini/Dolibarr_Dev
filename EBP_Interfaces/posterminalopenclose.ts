/**
 * Interface pour la table PosTerminalOpenClose
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminalOpenClose {
  /** DepositsAmountVatIncluded - numeric */
  DepositsAmountVatIncluded: number;

  /** SaleInAccountAmountVatIncluded - numeric */
  SaleInAccountAmountVatIncluded: number;

  /** LiquidatedAmount - numeric */
  LiquidatedAmount: number;

  /** TotalCreditMemoBalanceDue - numeric */
  TotalCreditMemoBalanceDue: number;

  /** SoldGiftVouchers - numeric */
  SoldGiftVouchers: number;

  /** ReturningChangeGiftVouchers - numeric */
  ReturningChangeGiftVouchers: number;

  /** Id - uuid */
  Id: string;

  /** PosTerminalId - text (nullable) */
  PosTerminalId?: string;

  /** OpenDateTime - timestamp without time zone */
  OpenDateTime: Date | string;

  /** OpenAmount - numeric */
  OpenAmount: number;

  /** CloseAmount - numeric */
  CloseAmount: number;

  /** AmountOfDeposit - numeric */
  AmountOfDeposit: number;

  /** WithdrawalAmount - numeric */
  WithdrawalAmount: number;

  /** CollectedAmount - numeric */
  CollectedAmount: number;

  /** PosReceiptCount - integer */
  PosReceiptCount: number;

  /** AmountVatExcluded - numeric */
  AmountVatExcluded: number;

  /** AmountVatIncluded - numeric */
  AmountVatIncluded: number;

  /** UserId - text */
  UserId: string;

  /** AccountingTransferState - smallint */
  AccountingTransferState: number;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** TheoreticalCloseAmount - numeric (nullable) */
  TheoreticalCloseAmount?: number;

  /** CashRegisterGapAmount - numeric (nullable) */
  CashRegisterGapAmount?: number;

  /** CloseDateTime - timestamp without time zone (nullable) */
  CloseDateTime?: Date | string;

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

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** Hash_Hash_ChainedId - uuid (nullable) */
  Hash_Hash_ChainedId?: string;

  /** Hash_Hash_Hash - bytea (nullable) */
  Hash_Hash_Hash?: Buffer | Uint8Array;

  /** PeriodType - smallint */
  PeriodType: number;

  /** ClosedPeriodBeginning - timestamp without time zone (nullable) */
  ClosedPeriodBeginning?: Date | string;

  /** ClosedPeriodEnding - timestamp without time zone (nullable) */
  ClosedPeriodEnding?: Date | string;

  /** OrderAmountVatExcluded - numeric */
  OrderAmountVatExcluded: number;

  /** OrderAmountVatIncluded - numeric */
  OrderAmountVatIncluded: number;

  /** DeliveryOrderAmountVatExcluded - numeric */
  DeliveryOrderAmountVatExcluded: number;

  /** DeliveryOrderAmountVatIncluded - numeric */
  DeliveryOrderAmountVatIncluded: number;

}

