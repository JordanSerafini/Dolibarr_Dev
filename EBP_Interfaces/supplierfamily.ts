/**
 * Interface pour la table SupplierFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SupplierFamily {
  /** VatMode - smallint */
  VatMode: number;

  /** IRPFRate - numeric */
  IRPFRate: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DiscountRate - numeric */
  DiscountRate: number;

  /** FinancialDiscountRate - numeric */
  FinancialDiscountRate: number;

  /** SecondDiscountRate - numeric */
  SecondDiscountRate: number;

  /** InvoicingChargesAmount - numeric */
  InvoicingChargesAmount: number;

  /** InvoicingChargesVatId - uuid (nullable) */
  InvoicingChargesVatId?: string;

  /** SchedulerColor - integer (nullable) */
  SchedulerColor?: number;

  /** PriceListCategoryId - text (nullable) */
  PriceListCategoryId?: string;

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

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** ShippingId - text (nullable) */
  ShippingId?: string;

  /** TaxIds0 - uuid (nullable) */
  TaxIds0?: string;

  /** TaxIds1 - uuid (nullable) */
  TaxIds1?: string;

  /** TaxIds2 - uuid (nullable) */
  TaxIds2?: string;

}

