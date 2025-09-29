/**
 * Interface pour la table UnpaidSaleSettlementLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface UnpaidSaleSettlementLine {
  /** Id - uuid */
  Id: string;

  /** SettlementId - uuid */
  SettlementId: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** UnpaidState - smallint */
  UnpaidState: number;

  /** UnpaidDate - timestamp without time zone */
  UnpaidDate: Date | string;

  /** Reason - text */
  Reason: string;

  /** ChargeAmountVatExcluded - numeric */
  ChargeAmountVatExcluded: number;

  /** ChargeAmountVatIncluded - numeric */
  ChargeAmountVatIncluded: number;

  /** MustCreateChargesInvoice - boolean */
  MustCreateChargesInvoice: boolean;

  /** AccountingTransferState - smallint */
  AccountingTransferState: number;

  /** CurrencyChargeAmountVatExcluded - numeric */
  CurrencyChargeAmountVatExcluded: number;

  /** CurrencyChargeAmountVatIncluded - numeric */
  CurrencyChargeAmountVatIncluded: number;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

  /** SettlementAmount - numeric */
  SettlementAmount: number;

  /** SettlementCurrencyAmount - numeric */
  SettlementCurrencyAmount: number;

  /** SettlementDate - timestamp without time zone (nullable) */
  SettlementDate?: Date | string;

  /** SettlementCurrencyId - text (nullable) */
  SettlementCurrencyId?: string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** BankRemittanceId - uuid (nullable) */
  BankRemittanceId?: string;

  /** ChargeInvoiceId - uuid (nullable) */
  ChargeInvoiceId?: string;

  /** ChargeInvoiceItemId - text (nullable) */
  ChargeInvoiceItemId?: string;

  /** DateToRemitAgain - timestamp without time zone (nullable) */
  DateToRemitAgain?: Date | string;

  /** ChargeVatId - uuid (nullable) */
  ChargeVatId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** IncludeUnpaidChargeToRemit - boolean */
  IncludeUnpaidChargeToRemit: boolean;

}

