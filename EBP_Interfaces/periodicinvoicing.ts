/**
 * Interface pour la table PeriodicInvoicing
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PeriodicInvoicing {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Periodicity_StartDate - timestamp without time zone */
  Periodicity_StartDate: Date | string;

  /** Periodicity_Type - smallint */
  Periodicity_Type: number;

  /** Periodicity_Monday - boolean */
  Periodicity_Monday: boolean;

  /** Periodicity_Tuesday - boolean */
  Periodicity_Tuesday: boolean;

  /** Periodicity_Wednesday - boolean */
  Periodicity_Wednesday: boolean;

  /** Periodicity_Thursday - boolean */
  Periodicity_Thursday: boolean;

  /** Periodicity_Friday - boolean */
  Periodicity_Friday: boolean;

  /** Periodicity_Saturday - boolean */
  Periodicity_Saturday: boolean;

  /** Periodicity_Sunday - boolean */
  Periodicity_Sunday: boolean;

  /** Periodicity_Caption - text */
  Periodicity_Caption: string;

  /** UpdatePrices - boolean */
  UpdatePrices: boolean;

  /** RetrieveCustomerInformations - boolean */
  RetrieveCustomerInformations: boolean;

  /** ApplyCustomerDiscount - boolean */
  ApplyCustomerDiscount: boolean;

  /** ApplyPriceList - boolean */
  ApplyPriceList: boolean;

  /** InvoicingMode - smallint */
  InvoicingMode: number;

  /** AssortItemLines - boolean */
  AssortItemLines: boolean;

  /** CopyTextLines - boolean */
  CopyTextLines: boolean;

  /** CreateSubTotal - boolean */
  CreateSubTotal: boolean;

  /** IgnoreCheckAddress - boolean */
  IgnoreCheckAddress: boolean;

  /** IgnoreCheckUserDefinedFields - boolean */
  IgnoreCheckUserDefinedFields: boolean;

  /** DelayBeforeAssortEnabled - smallint */
  DelayBeforeAssortEnabled: number;

  /** CurrencyCalculationMethod - smallint */
  CurrencyCalculationMethod: number;

  /** UseCustomSettlementMode - boolean */
  UseCustomSettlementMode: boolean;

  /** Periodicity_DayRankSelector - boolean */
  Periodicity_DayRankSelector: boolean;

  /** Periodicity_DayNumberSelector - boolean */
  Periodicity_DayNumberSelector: boolean;

  /** UpdatePurchaseAndCostPrice - boolean */
  UpdatePurchaseAndCostPrice: boolean;

  /** DoNotAddOriginDocumentInformationLine - boolean */
  DoNotAddOriginDocumentInformationLine: boolean;

  /** KeepBillOfQuantitiesProgramActive - boolean */
  KeepBillOfQuantitiesProgramActive: boolean;

  /** KeepUnitPriceProgramActive - boolean */
  KeepUnitPriceProgramActive: boolean;

  /** DoNotSetLastDebitSepaToLast - boolean */
  DoNotSetLastDebitSepaToLast: boolean;

  /** Periodicity_UserIncrement - integer (nullable) */
  Periodicity_UserIncrement?: number;

  /** Periodicity_SelectedDayOfWeek - smallint (nullable) */
  Periodicity_SelectedDayOfWeek?: number;

  /** Periodicity_DayNumber - smallint (nullable) */
  Periodicity_DayNumber?: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** SettlementModeId - text (nullable) */
  SettlementModeId?: string;

  /** Periodicity_DayRank - smallint (nullable) */
  Periodicity_DayRank?: number;

  /** Periodicity_EndDate - timestamp without time zone (nullable) */
  Periodicity_EndDate?: Date | string;

  /** ReferenceDocumentId - uuid (nullable) */
  ReferenceDocumentId?: string;

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

}

