/**
 * Interface pour la table BankRemittance
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface BankRemittance {
  /** Id - uuid */
  Id: string;

  /** BankRemittanceNumber - text */
  BankRemittanceNumber: string;

  /** BankRemittanceDate - timestamp without time zone */
  BankRemittanceDate: Date | string;

  /** BankId - text */
  BankId: string;

  /** PaymentTypeId - text */
  PaymentTypeId: string;

  /** BankRemittanceState - smallint */
  BankRemittanceState: number;

  /** Amount - numeric */
  Amount: number;

  /** CurrencyAmount - numeric */
  CurrencyAmount: number;

  /** CfonbFileGenerated - boolean */
  CfonbFileGenerated: boolean;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

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

  /** UseRemittanceAccountsForAccountingTransfer - boolean */
  UseRemittanceAccountsForAccountingTransfer: boolean;

  /** ContainsUnpaidSettlement - boolean */
  ContainsUnpaidSettlement: boolean;

  /** CollectionDate - timestamp without time zone (nullable) */
  CollectionDate?: Date | string;

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

