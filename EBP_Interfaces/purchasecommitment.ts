/**
 * Interface pour la table PurchaseCommitment
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseCommitment {
  /** GenerateSettlement - boolean */
  GenerateSettlement: boolean;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CurrencyBalanceDue - numeric */
  CurrencyBalanceDue: number;

  /** LiquidationType - smallint */
  LiquidationType: number;

  /** IsCorrected - boolean */
  IsCorrected: boolean;

  /** Id - uuid */
  Id: string;

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

  /** DocumentType - smallint */
  DocumentType: number;

  /** LiquidationAccountingTransferState - smallint */
  LiquidationAccountingTransferState: number;

  /** LiquidationAccountingExchangeGroupId - uuid (nullable) */
  LiquidationAccountingExchangeGroupId?: string;

  /** ExternalDocumentId - uuid (nullable) */
  ExternalDocumentId?: string;

  /** DocumentSubType - smallint (nullable) */
  DocumentSubType?: number;

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

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** PreviousLiquidationType - smallint (nullable) */
  PreviousLiquidationType?: number;

  /** LiquidationCurrencyAmount - numeric (nullable) */
  LiquidationCurrencyAmount?: number;

  /** TransferedLiquidationCurrencyAmount - numeric (nullable) */
  TransferedLiquidationCurrencyAmount?: number;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** PaymentThirdId - text (nullable) */
  PaymentThirdId?: string;

  /** WithoutSettlementGapAccountingEntry - boolean */
  WithoutSettlementGapAccountingEntry: boolean;

}

