/**
 * Interface pour la table SaleSettlement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleSettlement {
  /** IsPosReceipt - boolean */
  IsPosReceipt: boolean;

  /** FinancialDiscountAmount - numeric */
  FinancialDiscountAmount: number;

  /** CurrencyFinancialDiscountAmount - numeric */
  CurrencyFinancialDiscountAmount: number;

  /** BillOfExchangeCommitmentId - uuid */
  BillOfExchangeCommitmentId: string;

  /** BillOfExchangePointingId - uuid */
  BillOfExchangePointingId: string;

  /** LiquidationAccountingTransferState - smallint */
  LiquidationAccountingTransferState: number;

  /** Id - uuid */
  Id: string;

  /** ThirdId - text */
  ThirdId: string;

  /** SettlementDate - timestamp without time zone */
  SettlementDate: Date | string;

  /** PaymentTypeId - text */
  PaymentTypeId: string;

  /** Amount - numeric */
  Amount: number;

  /** RemainingAmount - numeric */
  RemainingAmount: number;

  /** CurrencyRemainingAmount - numeric */
  CurrencyRemainingAmount: number;

  /** ValidationState - smallint */
  ValidationState: number;

  /** IsLiquidated - boolean */
  IsLiquidated: boolean;

  /** AccountingTransferMode - smallint */
  AccountingTransferMode: number;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CurrencyExchangeDifference - boolean */
  CurrencyExchangeDifference: boolean;

  /** IsDeposit - boolean */
  IsDeposit: boolean;

  /** IsUnpaid - boolean */
  IsUnpaid: boolean;

  /** EconomicReasonId - text (nullable) */
  EconomicReasonId?: string;

  /** RecoveredFrom - smallint (nullable) */
  RecoveredFrom?: number;

  /** SepaMandateIdentification - text (nullable) */
  SepaMandateIdentification?: string;

  /** SepaMandateDate - timestamp without time zone (nullable) */
  SepaMandateDate?: Date | string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** PreviousLiquidationType - smallint (nullable) */
  PreviousLiquidationType?: number;

  /** ThirdBankAccountId - uuid (nullable) */
  ThirdBankAccountId?: string;

  /** AssociatedOrderId - uuid (nullable) */
  AssociatedOrderId?: string;

  /** AssociatedDeliveryId - uuid (nullable) */
  AssociatedDeliveryId?: string;

  /** AssociatedInvoiceId - uuid (nullable) */
  AssociatedInvoiceId?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** LiquidationAmount - numeric (nullable) */
  LiquidationAmount?: number;

  /** TransferedLiquidationAmount - numeric (nullable) */
  TransferedLiquidationAmount?: number;

  /** LiquidationStateChangeDate - timestamp without time zone (nullable) */
  LiquidationStateChangeDate?: Date | string;

  /** TransferedLiquidationStateChangeDate - timestamp without time zone (nullable) */
  TransferedLiquidationStateChangeDate?: Date | string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** BankId - text (nullable) */
  BankId?: string;

  /** Reference - text (nullable) */
  Reference?: string;

  /** DraweeReference - text (nullable) */
  DraweeReference?: string;

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

  /** LiquidationAccountingExchangeGroupId - uuid (nullable) */
  LiquidationAccountingExchangeGroupId?: string;

  /** BankRemittanceId - uuid (nullable) */
  BankRemittanceId?: string;

  /** LiquidationCurrencyAmount - numeric (nullable) */
  LiquidationCurrencyAmount?: number;

  /** TransferedLiquidationCurrencyAmount - numeric (nullable) */
  TransferedLiquidationCurrencyAmount?: number;

  /** AcceptationId - smallint (nullable) */
  AcceptationId?: number;

  /** BankRemittancePlannedDate - timestamp without time zone (nullable) */
  BankRemittancePlannedDate?: Date | string;

  /** BankRemittanceChargeAmounts0 - numeric (nullable) */
  BankRemittanceChargeAmounts0?: number;

  /** BankRemittanceChargeAmounts1 - numeric (nullable) */
  BankRemittanceChargeAmounts1?: number;

  /** BankRemittanceChargeAmounts2 - numeric (nullable) */
  BankRemittanceChargeAmounts2?: number;

  /** BankRemittanceChargeAmounts3 - numeric (nullable) */
  BankRemittanceChargeAmounts3?: number;

  /** BankRemittanceChargeAmounts4 - numeric (nullable) */
  BankRemittanceChargeAmounts4?: number;

  /** SepaDirectDebitSequence - smallint (nullable) */
  SepaDirectDebitSequence?: number;

  /** BankRemittanceOperationDate - timestamp without time zone (nullable) */
  BankRemittanceOperationDate?: Date | string;

  /** UnpaidState - smallint (nullable) */
  UnpaidState?: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** FinancialDiscountId - uuid (nullable) */
  FinancialDiscountId?: string;

  /** OriginSepaMandateIdentification - text (nullable) */
  OriginSepaMandateIdentification?: string;

  /** PosTerminalId - text (nullable) */
  PosTerminalId?: string;

  /** PosReturningChangeAmount - numeric (nullable) */
  PosReturningChangeAmount?: number;

  /** AssociatedProgressStateId - uuid (nullable) */
  AssociatedProgressStateId?: string;

  /** AssociatedQuoteId - uuid (nullable) */
  AssociatedQuoteId?: string;

  /** NewAccount - boolean */
  NewAccount: boolean;

  /** AssociatedExecutionQuoteId - uuid (nullable) */
  AssociatedExecutionQuoteId?: string;

  /** Hash_Hash_ChainedId - uuid (nullable) */
  Hash_Hash_ChainedId?: string;

  /** Hash_Hash_Hash - bytea (nullable) */
  Hash_Hash_Hash?: Buffer | Uint8Array;

  /** ThirdName - text (nullable) */
  ThirdName?: string;

  /** PaymentTypeCaption - text (nullable) */
  PaymentTypeCaption?: string;

  /** MandateExecutionDate - timestamp without time zone (nullable) */
  MandateExecutionDate?: Date | string;

  /** GoCardLessPaymentStatus - smallint (nullable) */
  GoCardLessPaymentStatus?: number;

  /** GoCardLessPaymentCause - smallint (nullable) */
  GoCardLessPaymentCause?: number;

  /** GoCardLessStatusDate - timestamp without time zone (nullable) */
  GoCardLessStatusDate?: Date | string;

  /** GoCardLessPaymentId - text (nullable) */
  GoCardLessPaymentId?: string;

}

