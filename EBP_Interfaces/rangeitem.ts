/**
 * Interface pour la table RangeItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RangeItem {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DefaultQuantity - numeric */
  DefaultQuantity: number;

  /** ItemType - smallint */
  ItemType: number;

  /** PurchasePrice - numeric */
  PurchasePrice: number;

  /** ChargeRate - numeric */
  ChargeRate: number;

  /** ChargeAmount - numeric */
  ChargeAmount: number;

  /** CostPrice - numeric */
  CostPrice: number;

  /** InterestRate - numeric */
  InterestRate: number;

  /** InterestAmount - numeric */
  InterestAmount: number;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** BrandRate - numeric */
  BrandRate: number;

  /** VatAmount - numeric */
  VatAmount: number;

  /** SalePriceVatIncluded - numeric */
  SalePriceVatIncluded: number;

  /** ManageStock - boolean */
  ManageStock: boolean;

  /** Weight - numeric */
  Weight: number;

  /** NetWeight - numeric */
  NetWeight: number;

  /** ComponentsPurchasePrice - numeric */
  ComponentsPurchasePrice: number;

  /** ComponentsCostPrice - numeric */
  ComponentsCostPrice: number;

  /** ComponentsSalePriceVatExcluded - numeric */
  ComponentsSalePriceVatExcluded: number;

  /** ComponentsSalePriceVatIncluded - numeric */
  ComponentsSalePriceVatIncluded: number;

  /** PrintComponentDetail - smallint */
  PrintComponentDetail: number;

  /** AllowNegativeStock - boolean */
  AllowNegativeStock: boolean;

  /** ActiveState - smallint */
  ActiveState: number;

  /** Volume - numeric */
  Volume: number;

  /** UseComponentVat - boolean */
  UseComponentVat: boolean;

  /** ApplyPriceListOnComponents - boolean */
  ApplyPriceListOnComponents: boolean;

  /** AdvisedSalePriceVATExcluded - numeric */
  AdvisedSalePriceVATExcluded: number;

  /** SetItemSalePriceWithAdvisedSalePrice - boolean */
  SetItemSalePriceWithAdvisedSalePrice: boolean;

  /** TrackingMode - smallint */
  TrackingMode: number;

  /** AllowComponentsModification - boolean */
  AllowComponentsModification: boolean;

  /** AllowPublishOnWeb - boolean */
  AllowPublishOnWeb: boolean;

  /** ImageVersion - integer */
  ImageVersion: number;

  /** PriceDecimalNumber - smallint */
  PriceDecimalNumber: number;

  /** IntrastatExcluded - boolean */
  IntrastatExcluded: boolean;

  /** IsHumanServicesIncludedInAttestation - boolean */
  IsHumanServicesIncludedInAttestation: boolean;

  /** Oxatis_ShowInStockNote - boolean */
  Oxatis_ShowInStockNote: boolean;

  /** Oxatis_ShowStockLevel - boolean */
  Oxatis_ShowStockLevel: boolean;

  /** Oxatis_ShowIfOutOfStock - boolean */
  Oxatis_ShowIfOutOfStock: boolean;

  /** Oxatis_SaleIfOutOfStock - boolean */
  Oxatis_SaleIfOutOfStock: boolean;

  /** Oxatis_SaleIfOutOfStockScenario - integer */
  Oxatis_SaleIfOutOfStockScenario: number;

  /** Oxatis_ShowDaysToship - boolean */
  Oxatis_ShowDaysToship: boolean;

  /** Oxatis_ShipPrice - numeric */
  Oxatis_ShipPrice: number;

  /** Oxatis_DaysToship - integer */
  Oxatis_DaysToship: number;

  /** Oxatis_UserMainSupplierDaysToship - boolean */
  Oxatis_UserMainSupplierDaysToship: boolean;

  /** InterventionDurationEqualsQuantity - boolean */
  InterventionDurationEqualsQuantity: boolean;

  /** Height - numeric */
  Height: number;

  /** Width - numeric */
  Width: number;

  /** Length - numeric */
  Length: number;

  /** Oxatis_UseSubFamilyAsBrand - boolean */
  Oxatis_UseSubFamilyAsBrand: boolean;

  /** IsManagedByCounterMark - boolean */
  IsManagedByCounterMark: boolean;

  /** IsCounterMarkForced - boolean */
  IsCounterMarkForced: boolean;

  /** SalePurchaseConversionRate - numeric */
  SalePurchaseConversionRate: number;

  /** LimitDateMode - smallint */
  LimitDateMode: number;

  /** LimitDateSafetyDelay - smallint */
  LimitDateSafetyDelay: number;

  /** Oxatis_HandlingSurcharge1ST - numeric */
  Oxatis_HandlingSurcharge1ST: number;

  /** Oxatis_HandlingSurchargeOthers - numeric */
  Oxatis_HandlingSurchargeOthers: number;

  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** SaleUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  SaleUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** BarCodeCalculationMode - smallint */
  BarCodeCalculationMode: number;

  /** PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** UpdateComponentsStockInFabrication - boolean */
  UpdateComponentsStockInFabrication: boolean;

  /** CanBePartiallyDelivered - boolean */
  CanBePartiallyDelivered: boolean;

  /** NotOnMarket - boolean */
  NotOnMarket: boolean;

  /** CreateCustomerProductInCustomerPark - boolean */
  CreateCustomerProductInCustomerPark: boolean;

  /** IsMaintenanceContract - boolean */
  IsMaintenanceContract: boolean;

  /** IncludeToRecursiveReplenishment - boolean */
  IncludeToRecursiveReplenishment: boolean;

  /** IncludeToFabricationReplenishment - boolean */
  IncludeToFabricationReplenishment: boolean;

  /** IncludeToSupplierReplenishment - boolean */
  IncludeToSupplierReplenishment: boolean;

  /** CadenceQuantity - integer */
  CadenceQuantity: number;

  /** CadenceNumberOfDays - integer */
  CadenceNumberOfDays: number;

  /** DoNotAssortAssemblyRequestsWithDifferentDates - boolean */
  DoNotAssortAssemblyRequestsWithDifferentDates: boolean;

  /** MaximumGapDayToAssort - integer */
  MaximumGapDayToAssort: number;

  /** NomenclatureAccountingTransferTypeForSale - smallint */
  NomenclatureAccountingTransferTypeForSale: number;

  /** NomenclatureAccountingTransferTypeForPurchase - smallint */
  NomenclatureAccountingTransferTypeForPurchase: number;

  /** RangeTypeId0 - text */
  RangeTypeId0: string;

  /** IsGuaranteeExtension - boolean */
  IsGuaranteeExtension: boolean;

  /** CustomerParkCreation - smallint */
  CustomerParkCreation: number;

  /** StockBookingAllowed - boolean */
  StockBookingAllowed: boolean;

  /** AutomaticStockBooking - boolean */
  AutomaticStockBooking: boolean;

  /** StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** PurchaseChargesRate - numeric */
  PurchaseChargesRate: number;

  /** BarCodePrice - smallint */
  BarCodePrice: number;

  /** BarCodeWeight - smallint */
  BarCodeWeight: number;

  /** PosAddItem - boolean */
  PosAddItem: boolean;

  /** LoyaltyPoints - numeric */
  LoyaltyPoints: number;

  /** CalculateLoyaltyFrom - smallint */
  CalculateLoyaltyFrom: number;

  /** AllowCalculateRangeNomenclatures - boolean */
  AllowCalculateRangeNomenclatures: boolean;

  /** DefaultAllowedStorehouseId - uuid (nullable) */
  DefaultAllowedStorehouseId?: string;

  /** RangeTypeId1 - text (nullable) */
  RangeTypeId1?: string;

  /** RangeTypeId2 - text (nullable) */
  RangeTypeId2?: string;

  /** RangeTypeId3 - text (nullable) */
  RangeTypeId3?: string;

  /** RangeTypeId4 - text (nullable) */
  RangeTypeId4?: string;

  /** RangeTypeElementSelections0 - text (nullable) */
  RangeTypeElementSelections0?: string;

  /** RangeTypeElementSelections1 - text (nullable) */
  RangeTypeElementSelections1?: string;

  /** RangeTypeElementSelections2 - text (nullable) */
  RangeTypeElementSelections2?: string;

  /** RangeTypeElementSelections3 - text (nullable) */
  RangeTypeElementSelections3?: string;

  /** RangeTypeElementSelections4 - text (nullable) */
  RangeTypeElementSelections4?: string;

  /** RangeTemplateId - text (nullable) */
  RangeTemplateId?: string;

  /** MaintenanceContractTemplateId - text (nullable) */
  MaintenanceContractTemplateId?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** ReplenishmentDeliveryAddressType - smallint (nullable) */
  ReplenishmentDeliveryAddressType?: number;

  /** EcotaxFurnitureId - text (nullable) */
  EcotaxFurnitureId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** PurchaseUnitPriceProgram_Program - text (nullable) */
  PurchaseUnitPriceProgram_Program?: string;

  /** PurchaseBillOfQuantitiesProgram_Program - text (nullable) */
  PurchaseBillOfQuantitiesProgram_Program?: string;

  /** SaleUnitPriceProgram_Program - text (nullable) */
  SaleUnitPriceProgram_Program?: string;

  /** Oxatis_SmallImage - bytea (nullable) */
  Oxatis_SmallImage?: Buffer | Uint8Array;

  /** LimitDateSafetyDelayMode - smallint (nullable) */
  LimitDateSafetyDelayMode?: number;

  /** DefaultLifeTime - smallint (nullable) */
  DefaultLifeTime?: number;

  /** PurchasePriceUpdateType - smallint (nullable) */
  PurchasePriceUpdateType?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** PurchaseUnitId - text (nullable) */
  PurchaseUnitId?: string;

  /** DimensionUnitId - text (nullable) */
  DimensionUnitId?: string;

  /** Oxatis_LongDescription - text (nullable) */
  Oxatis_LongDescription?: string;

  /** Oxatis_LongDescriptionClear - text (nullable) */
  Oxatis_LongDescriptionClear?: string;

  /** Oxatis_CategoryType1 - smallint (nullable) */
  Oxatis_CategoryType1?: number;

  /** Oxatis_CategoryType2 - smallint (nullable) */
  Oxatis_CategoryType2?: number;

  /** Oxatis_CategoryType3 - smallint (nullable) */
  Oxatis_CategoryType3?: number;

  /** Oxatis_CategoryId1 - uuid (nullable) */
  Oxatis_CategoryId1?: string;

  /** Oxatis_CategoryId2 - uuid (nullable) */
  Oxatis_CategoryId2?: string;

  /** Oxatis_CategoryId3 - uuid (nullable) */
  Oxatis_CategoryId3?: string;

  /** Oxatis_MetaTitle - text (nullable) */
  Oxatis_MetaTitle?: string;

  /** Oxatis_MetaDescription - text (nullable) */
  Oxatis_MetaDescription?: string;

  /** Oxatis_MetaKeywords - text (nullable) */
  Oxatis_MetaKeywords?: string;

  /** Oxatis_Brand - text (nullable) */
  Oxatis_Brand?: string;

  /** MainIntervener - text (nullable) */
  MainIntervener?: string;

  /** IntrastatNc8NomenclatureId - text (nullable) */
  IntrastatNc8NomenclatureId?: string;

  /** IntrastatOriginCountryId - text (nullable) */
  IntrastatOriginCountryId?: string;

  /** Group1 - uuid (nullable) */
  Group1?: string;

  /** Group2 - uuid (nullable) */
  Group2?: string;

  /** NotPrintable - smallint (nullable) */
  NotPrintable?: number;

  /** NotIncluded - smallint (nullable) */
  NotIncluded?: number;

  /** IsFixedPrice - smallint (nullable) */
  IsFixedPrice?: number;

  /** ComponentCalculationType - smallint (nullable) */
  ComponentCalculationType?: number;

  /** VolumeUnitId - text (nullable) */
  VolumeUnitId?: string;

  /** NonInvoiceableType - smallint (nullable) */
  NonInvoiceableType?: number;

  /** WeightUnitId - text (nullable) */
  WeightUnitId?: string;

  /** NumberOfItemByPackage - integer (nullable) */
  NumberOfItemByPackage?: number;

  /** EcotaxId - text (nullable) */
  EcotaxId?: string;

  /** StockDestination - smallint (nullable) */
  StockDestination?: number;

  /** StockVarianceAccount - text (nullable) */
  StockVarianceAccount?: string;

  /** CurrentStockAccount - text (nullable) */
  CurrentStockAccount?: string;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** DesCom - text (nullable) */
  DesCom?: string;

  /** DesComClear - text (nullable) */
  DesComClear?: string;

  /** LocalizableDesCom_2 - text (nullable) */
  LocalizableDesCom_2?: string;

  /** LocalizableDesCom_Clear_2 - text (nullable) */
  LocalizableDesCom_Clear_2?: string;

  /** LocalizableDesCom_3 - text (nullable) */
  LocalizableDesCom_3?: string;

  /** LocalizableDesCom_Clear_3 - text (nullable) */
  LocalizableDesCom_Clear_3?: string;

  /** LocalizableDesCom_4 - text (nullable) */
  LocalizableDesCom_4?: string;

  /** LocalizableDesCom_Clear_4 - text (nullable) */
  LocalizableDesCom_Clear_4?: string;

  /** LocalizableDesCom_5 - text (nullable) */
  LocalizableDesCom_5?: string;

  /** LocalizableDesCom_Clear_5 - text (nullable) */
  LocalizableDesCom_Clear_5?: string;

  /** ItemImage - bytea (nullable) */
  ItemImage?: Buffer | Uint8Array;

  /** BarCode - text (nullable) */
  BarCode?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** FamilyId - text (nullable) */
  FamilyId?: string;

  /** SubFamilyId - text (nullable) */
  SubFamilyId?: string;

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

  /** StockBillOfQuantitiesProgram_Program - text (nullable) */
  StockBillOfQuantitiesProgram_Program?: string;

  /** PosThumbnail - bytea (nullable) */
  PosThumbnail?: Buffer | Uint8Array;

  /** CanBePartiallyInvoiced - boolean */
  CanBePartiallyInvoiced: boolean;

  /** PickMovementDisallowedOnTotallyBookedItem - boolean */
  PickMovementDisallowedOnTotallyBookedItem: boolean;

  /** IsExtraFee - boolean */
  IsExtraFee: boolean;

  /** SalePriceModifiedDate - timestamp without time zone (nullable) */
  SalePriceModifiedDate?: Date | string;

  /** SalePriceModifiedUserId - text (nullable) */
  SalePriceModifiedUserId?: string;

  /** SubjectToIRPF - boolean */
  SubjectToIRPF: boolean;

  /** VatType - smallint */
  VatType: number;

  /** VatOnMarginBase - numeric */
  VatOnMarginBase: number;

  /** VatOnMarginRate - numeric */
  VatOnMarginRate: number;

  /** Oxatis_CategoryType4 - smallint (nullable) */
  Oxatis_CategoryType4?: number;

  /** Oxatis_CategoryType5 - smallint (nullable) */
  Oxatis_CategoryType5?: number;

  /** Oxatis_CategoryType6 - smallint (nullable) */
  Oxatis_CategoryType6?: number;

  /** Oxatis_CategoryType7 - smallint (nullable) */
  Oxatis_CategoryType7?: number;

  /** Oxatis_CategoryType8 - smallint (nullable) */
  Oxatis_CategoryType8?: number;

  /** Oxatis_CategoryType9 - smallint (nullable) */
  Oxatis_CategoryType9?: number;

  /** Oxatis_CategoryType10 - smallint (nullable) */
  Oxatis_CategoryType10?: number;

  /** Oxatis_CategoryId4 - uuid (nullable) */
  Oxatis_CategoryId4?: string;

  /** Oxatis_CategoryId5 - uuid (nullable) */
  Oxatis_CategoryId5?: string;

  /** Oxatis_CategoryId6 - uuid (nullable) */
  Oxatis_CategoryId6?: string;

  /** Oxatis_CategoryId7 - uuid (nullable) */
  Oxatis_CategoryId7?: string;

  /** Oxatis_CategoryId8 - uuid (nullable) */
  Oxatis_CategoryId8?: string;

  /** Oxatis_CategoryId9 - uuid (nullable) */
  Oxatis_CategoryId9?: string;

  /** Oxatis_CategoryId10 - uuid (nullable) */
  Oxatis_CategoryId10?: string;

  /** ExcludedFromFooterDiscount - smallint (nullable) */
  ExcludedFromFooterDiscount?: number;

  /** ExcludedFromFinancialDiscount - smallint (nullable) */
  ExcludedFromFinancialDiscount?: number;

  /** ServiceType - text (nullable) */
  ServiceType?: string;

}

