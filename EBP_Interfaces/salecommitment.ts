/**
 * Interface pour la table SaleCommitment
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleCommitment {
  /** WasDoubtfulBeforeUnrecoverable - boolean */
  WasDoubtfulBeforeUnrecoverable: boolean;

  /** HadAnUnpaidSettlement - boolean */
  HadAnUnpaidSettlement: boolean;

  /** GenerateSettlement - boolean */
  GenerateSettlement: boolean;

  /** Id - uuid */
  Id: string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** DueDate - timestamp without time zone */
  DueDate: Date | string;

  /** Amount - numeric */
  Amount: number;

  /** BalanceDue - numeric */
  BalanceDue: number;

  /** IsDeposit - boolean */
  IsDeposit: boolean;

  /** DaysNumber - smallint */
  DaysNumber: number;

  /** CommitmentType - smallint */
  CommitmentType: number;

  /** AccountingMonth - boolean */
  AccountingMonth: boolean;

  /** IsLiquidated - boolean */
  IsLiquidated: boolean;

  /** AccountingTransferState - smallint */
  AccountingTransferState: number;

  /** LiquidationAmount - numeric */
  LiquidationAmount: number;

  /** TransferedLiquidationAmount - numeric */
  TransferedLiquidationAmount: number;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CurrencyBalanceDue - numeric */
  CurrencyBalanceDue: number;

  /** LiquidationType - smallint */
  LiquidationType: number;

  /** IsCorrected - boolean */
  IsCorrected: boolean;

  /** TotalReminderNumber - integer */
  TotalReminderNumber: number;

  /** LastReminderLevel - integer */
  LastReminderLevel: number;

  /** LiquidationAccountingTransferState - smallint */
  LiquidationAccountingTransferState: number;

  /** LiquidationAccountingExchangeGroupId - uuid (nullable) */
  LiquidationAccountingExchangeGroupId?: string;

  /** ExternalDocumentId - uuid (nullable) */
  ExternalDocumentId?: string;

  /** LastReminderDate - timestamp without time zone (nullable) */
  LastReminderDate?: Date | string;

  /** LastReminderSendingMode - smallint (nullable) */
  LastReminderSendingMode?: number;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** PreviousLiquidationType - smallint (nullable) */
  PreviousLiquidationType?: number;

  /** LiquidationStateChangeDate - timestamp without time zone (nullable) */
  LiquidationStateChangeDate?: Date | string;

  /** TransferedLiquidationStateChangeDate - timestamp without time zone (nullable) */
  TransferedLiquidationStateChangeDate?: Date | string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** ThirdId - text (nullable) */
  ThirdId?: string;

  /** PaymentTypeId - text (nullable) */
  PaymentTypeId?: string;

  /** DayOfMonth - smallint (nullable) */
  DayOfMonth?: number;

  /** PercentageDistribution - numeric (nullable) */
  PercentageDistribution?: number;

  /** DocumentSubType - smallint (nullable) */
  DocumentSubType?: number;

  /** DocumentId - uuid (nullable) */
  DocumentId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** LiquidationCurrencyAmount - numeric (nullable) */
  LiquidationCurrencyAmount?: number;

  /** TransferedLiquidationCurrencyAmount - numeric (nullable) */
  TransferedLiquidationCurrencyAmount?: number;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** PaymentThirdId - text (nullable) */
  PaymentThirdId?: string;

  /** SepaMandateIdentification - text (nullable) */
  SepaMandateIdentification?: string;

  /** SepaMandateDate - timestamp without time zone (nullable) */
  SepaMandateDate?: Date | string;

  /** SepaSequence - smallint (nullable) */
  SepaSequence?: number;

  /** DoubtfulCommitmentId - uuid (nullable) */
  DoubtfulCommitmentId?: string;

  /** DoubtfulPointingId - uuid (nullable) */
  DoubtfulPointingId?: string;

  /** UnrecoverablePointingId - uuid (nullable) */
  UnrecoverablePointingId?: string;

  /** PosReturningChangeAmount - numeric (nullable) */
  PosReturningChangeAmount?: number;

  /** PosAmount - numeric (nullable) */
  PosAmount?: number;

  /** PosReceiptGroupingId - uuid (nullable) */
  PosReceiptGroupingId?: string;

  /** PosCreditMemoDocumentNumber - text (nullable) */
  PosCreditMemoDocumentNumber?: string;

  /** GiftVoucherId - text (nullable) */
  GiftVoucherId?: string;

  /** WithoutSettlementGapAccountingEntry - boolean */
  WithoutSettlementGapAccountingEntry: boolean;

  /** PosCorrectiveReceiptDocumentNumber - text (nullable) */
  PosCorrectiveReceiptDocumentNumber?: string;

}

