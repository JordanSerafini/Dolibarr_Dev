/**
 * Interface pour la table Disbursement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Disbursement {
  /** Id - uuid */
  Id: string;

  /** DisbursementNumber - text */
  DisbursementNumber: string;

  /** DisbursementDate - timestamp without time zone */
  DisbursementDate: Date | string;

  /** BankId - text */
  BankId: string;

  /** PaymentTypeId - text */
  PaymentTypeId: string;

  /** DisbursementState - smallint */
  DisbursementState: number;

  /** Amount - numeric */
  Amount: number;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CfonbFileGenerated - boolean */
  CfonbFileGenerated: boolean;

  /** RemittanceType - smallint */
  RemittanceType: number;

  /** AccountingTransferWithCommitmentDate - boolean */
  AccountingTransferWithCommitmentDate: boolean;

  /** ChargeAmounts0 - numeric */
  ChargeAmounts0: number;

  /** ChargeAmounts1 - numeric */
  ChargeAmounts1: number;

  /** ChargeAmounts2 - numeric */
  ChargeAmounts2: number;

  /** ChargeAmounts3 - numeric */
  ChargeAmounts3: number;

  /** ChargeAmounts4 - numeric */
  ChargeAmounts4: number;

  /** CurrencyChargeAmounts0 - numeric */
  CurrencyChargeAmounts0: number;

  /** CurrencyChargeAmounts1 - numeric */
  CurrencyChargeAmounts1: number;

  /** CurrencyChargeAmounts2 - numeric */
  CurrencyChargeAmounts2: number;

  /** CurrencyChargeAmounts3 - numeric */
  CurrencyChargeAmounts3: number;

  /** CurrencyChargeAmounts4 - numeric */
  CurrencyChargeAmounts4: number;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

  /** ChargesEntryDate - timestamp without time zone (nullable) */
  ChargesEntryDate?: Date | string;

  /** LastSepaMessageId - text (nullable) */
  LastSepaMessageId?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

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

  /** ChargesAccountingEntryId - uuid (nullable) */
  ChargesAccountingEntryId?: string;

}

