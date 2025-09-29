/**
 * Interface pour la table PurchaseSettlement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseSettlement {
  /** FinancialDiscountAmount - numeric */
  FinancialDiscountAmount: number;

  /** CurrencyFinancialDiscountAmount - numeric */
  CurrencyFinancialDiscountAmount: number;

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

  /** IsDeposit - boolean */
  IsDeposit: boolean;

  /** IsLiquidated - boolean */
  IsLiquidated: boolean;

  /** Id - uuid */
  Id: string;

  /** LiquidationAccountingTransferState - smallint */
  LiquidationAccountingTransferState: number;

  /** AccountingTransferMode - smallint */
  AccountingTransferMode: number;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CurrencyExchangeDifference - boolean */
  CurrencyExchangeDifference: boolean;

  /** BillOfExchangeCommitmentId - uuid */
  BillOfExchangeCommitmentId: string;

  /** BillOfExchangePointingId - uuid */
  BillOfExchangePointingId: string;

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

  /** LiquidationAccountingExchangeGroupId - uuid (nullable) */
  LiquidationAccountingExchangeGroupId?: string;

  /** DisbursementId - uuid (nullable) */
  DisbursementId?: string;

  /** Reference - text (nullable) */
  Reference?: string;

  /** DraweeReference - text (nullable) */
  DraweeReference?: string;

  /** LiquidationAmount - numeric (nullable) */
  LiquidationAmount?: number;

  /** TransferedLiquidationAmount - numeric (nullable) */
  TransferedLiquidationAmount?: number;

  /** LiquidationStateChangeDate - timestamp without time zone (nullable) */
  LiquidationStateChangeDate?: Date | string;

  /** TransferedLiquidationStateChangeDate - timestamp without time zone (nullable) */
  TransferedLiquidationStateChangeDate?: Date | string;

  /** EconomicReasonId - text (nullable) */
  EconomicReasonId?: string;

  /** RecoveredFrom - smallint (nullable) */
  RecoveredFrom?: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** BankId - text (nullable) */
  BankId?: string;

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

  /** LiquidationCurrencyAmount - numeric (nullable) */
  LiquidationCurrencyAmount?: number;

  /** TransferedLiquidationCurrencyAmount - numeric (nullable) */
  TransferedLiquidationCurrencyAmount?: number;

  /** AcceptationId - smallint (nullable) */
  AcceptationId?: number;

  /** BankRemittancePlannedDate - timestamp without time zone (nullable) */
  BankRemittancePlannedDate?: Date | string;

  /** BankRemittanceOperationDate - timestamp without time zone (nullable) */
  BankRemittanceOperationDate?: Date | string;

  /** FinancialDiscountId - uuid (nullable) */
  FinancialDiscountId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** AssociatedQuoteId - uuid (nullable) */
  AssociatedQuoteId?: string;

  /** AssociatedProgressStateId - uuid (nullable) */
  AssociatedProgressStateId?: string;

}

