/**
 * Interface pour la table ItemFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemFamily {
  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** SaleUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  SaleUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ManageStock - boolean */
  ManageStock: boolean;

  /** TrackingMode - smallint */
  TrackingMode: number;

  /** LimitDateMode - smallint */
  LimitDateMode: number;

  /** LimitDateSafetyDelay - smallint */
  LimitDateSafetyDelay: number;

  /** LimitDateSafetyDelayMode - smallint */
  LimitDateSafetyDelayMode: number;

  /** AllowNegativeStock - boolean */
  AllowNegativeStock: boolean;

  /** PriceDecimalNumber - smallint */
  PriceDecimalNumber: number;

  /** AllowPublishOnWeb - boolean */
  AllowPublishOnWeb: boolean;

  /** IsManagedByCountermark - boolean */
  IsManagedByCountermark: boolean;

  /** IsCounterMarkForced - boolean */
  IsCounterMarkForced: boolean;

  /** NotOnMarket - boolean */
  NotOnMarket: boolean;

  /** PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** CreateCustomerProductInCustomerPark - boolean */
  CreateCustomerProductInCustomerPark: boolean;

  /** StockBookingAllowed - boolean */
  StockBookingAllowed: boolean;

  /** AutomaticStockBooking - boolean */
  AutomaticStockBooking: boolean;

  /** StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** EcotaxFurnitureId - text (nullable) */
  EcotaxFurnitureId?: string;

  /** PurchaseUnitPriceProgram_Program - text (nullable) */
  PurchaseUnitPriceProgram_Program?: string;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** MainIntervener - text (nullable) */
  MainIntervener?: string;

  /** InterestRate - numeric (nullable) */
  InterestRate?: number;

  /** ChargeRate - numeric (nullable) */
  ChargeRate?: number;

  /** EcotaxId - text (nullable) */
  EcotaxId?: string;

  /** NotPrintable - smallint (nullable) */
  NotPrintable?: number;

  /** NotIncluded - smallint (nullable) */
  NotIncluded?: number;

  /** IsFixedPrice - smallint (nullable) */
  IsFixedPrice?: number;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** LocationId - text (nullable) */
  LocationId?: string;

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

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** SaleUnitPriceProgram_Program - text (nullable) */
  SaleUnitPriceProgram_Program?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** PurchaseBillOfQuantitiesProgram_Program - text (nullable) */
  PurchaseBillOfQuantitiesProgram_Program?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** StockBillOfQuantitiesProgram_Program - text (nullable) */
  StockBillOfQuantitiesProgram_Program?: string;

  /** ExtraFeeDistributionIndex - smallint (nullable) */
  ExtraFeeDistributionIndex?: number;

  /** PickMovementDisallowedOnTotallyBookedItem - boolean */
  PickMovementDisallowedOnTotallyBookedItem: boolean;

  /** ExcludedFromFooterDiscount - smallint (nullable) */
  ExcludedFromFooterDiscount?: number;

  /** ExcludedFromFinancialDiscount - smallint (nullable) */
  ExcludedFromFinancialDiscount?: number;

  /** PurchasePriceUpdateType - smallint (nullable) */
  PurchasePriceUpdateType?: number;

  /** Sustainable - boolean */
  Sustainable: boolean;

}

