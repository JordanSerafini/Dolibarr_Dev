/**
 * Interface pour la table CustomerFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerFamily {
  /** InvoicingChargesAmount - numeric */
  InvoicingChargesAmount: number;

  /** AutomaticStockBooking - boolean */
  AutomaticStockBooking: boolean;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DiscountRate - numeric */
  DiscountRate: number;

  /** FinancialDiscountRate - numeric */
  FinancialDiscountRate: number;

  /** SubjectToRE - boolean */
  SubjectToRE: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** SecondDiscountRate - numeric */
  SecondDiscountRate: number;

  /** PriceWithTaxBased - boolean */
  PriceWithTaxBased: boolean;

  /** WebContactSendKind - smallint */
  WebContactSendKind: number;

  /** ShippingId - text (nullable) */
  ShippingId?: string;

  /** PriceListCategoryId - text (nullable) */
  PriceListCategoryId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** SettlementModeId - text (nullable) */
  SettlementModeId?: string;

  /** PaymentDate - smallint (nullable) */
  PaymentDate?: number;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** TerritorialityId - uuid (nullable) */
  TerritorialityId?: string;

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

  /** TaxIds0 - uuid (nullable) */
  TaxIds0?: string;

  /** TaxIds1 - uuid (nullable) */
  TaxIds1?: string;

  /** TaxIds2 - uuid (nullable) */
  TaxIds2?: string;

  /** InvoicingChargesVatId - uuid (nullable) */
  InvoicingChargesVatId?: string;

  /** SchedulerColor - integer (nullable) */
  SchedulerColor?: number;

  /** DepositPercentage - numeric (nullable) */
  DepositPercentage?: number;

  /** CreatePosDeliveryOrderByDefault - boolean */
  CreatePosDeliveryOrderByDefault: boolean;

  /** LoyaltyCardType - text (nullable) */
  LoyaltyCardType?: string;

}

