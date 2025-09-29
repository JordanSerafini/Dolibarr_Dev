/**
 * Interface pour la table Item
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Item {
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

  /** GiftVoucher - boolean */
  GiftVoucher: boolean;

  /** IntrastatExcluded - boolean */
  IntrastatExcluded: boolean;

  /** CreateCustomerProductInCustomerPark - boolean */
  CreateCustomerProductInCustomerPark: boolean;

  /** IsMaintenanceContract - boolean */
  IsMaintenanceContract: boolean;

  /** IsGuaranteeExtension - boolean */
  IsGuaranteeExtension: boolean;

  /** CustomerParkCreation - smallint */
  CustomerParkCreation: number;

  /** StockBookingAllowed - boolean */
  StockBookingAllowed: boolean;

  /** AutomaticStockBooking - boolean */
  AutomaticStockBooking: boolean;

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

  /** VirtualPump - numeric */
  VirtualPump: number;

  /** VirtualStockValue - numeric */
  VirtualStockValue: number;

  /** BookedQuantity - numeric */
  BookedQuantity: number;

  /** PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** NotOnMarket - boolean */
  NotOnMarket: boolean;

  /** PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** CanBePartiallyDelivered - boolean */
  CanBePartiallyDelivered: boolean;

  /** Caption - text */
  Caption: string;

  /** Oxatis_Oxatis_HandlingSurcharge1ST - numeric */
  Oxatis_Oxatis_HandlingSurcharge1ST: number;

  /** Oxatis_Oxatis_HandlingSurchargeOthers - numeric */
  Oxatis_Oxatis_HandlingSurchargeOthers: number;

  /** InterventionDurationEqualsQuantity - boolean */
  InterventionDurationEqualsQuantity: boolean;

  /** Height - numeric */
  Height: number;

  /** Width - numeric */
  Width: number;

  /** Length - numeric */
  Length: number;

  /** Oxatis_Oxatis_UseSubFamilyAsBrand - boolean */
  Oxatis_Oxatis_UseSubFamilyAsBrand: boolean;

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

  /** UniqueId - uuid */
  UniqueId: string;

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

  /** RealStock - numeric */
  RealStock: number;

  /** Pump - numeric */
  Pump: number;

  /** StockValue - numeric */
  StockValue: number;

  /** OrderedQuantity - numeric */
  OrderedQuantity: number;

  /** SuppliersOrderedQuantity - numeric */
  SuppliersOrderedQuantity: number;

  /** VirtualStock - numeric */
  VirtualStock: number;

  /** DefaultQuantity - numeric */
  DefaultQuantity: number;

  /** Volume - numeric */
  Volume: number;

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

  /** AssemblingVirtualQuantity - numeric */
  AssemblingVirtualQuantity: number;

  /** DisassemblingQuantity - numeric */
  DisassemblingQuantity: number;

  /** QuantityUsedToAssemblate - numeric */
  QuantityUsedToAssemblate: number;

  /** QuantityFromDisassembling - numeric */
  QuantityFromDisassembling: number;

  /** AllowNegativeStock - boolean */
  AllowNegativeStock: boolean;

  /** UseComponentVat - boolean */
  UseComponentVat: boolean;

  /** ApplyPriceListOnComponents - boolean */
  ApplyPriceListOnComponents: boolean;

  /** ActiveState - smallint */
  ActiveState: number;

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

  /** IsHumanServicesIncludedInAttestation - boolean */
  IsHumanServicesIncludedInAttestation: boolean;

  /** Oxatis_Oxatis_ShowInStockNote - boolean */
  Oxatis_Oxatis_ShowInStockNote: boolean;

  /** Oxatis_Oxatis_ShowStockLevel - boolean */
  Oxatis_Oxatis_ShowStockLevel: boolean;

  /** Oxatis_Oxatis_ShowIfOutOfStock - boolean */
  Oxatis_Oxatis_ShowIfOutOfStock: boolean;

  /** Oxatis_Oxatis_SaleIfOutOfStock - boolean */
  Oxatis_Oxatis_SaleIfOutOfStock: boolean;

  /** Oxatis_Oxatis_SaleIfOutOfStockScenario - integer */
  Oxatis_Oxatis_SaleIfOutOfStockScenario: number;

  /** Oxatis_Oxatis_ShowDaysToship - boolean */
  Oxatis_Oxatis_ShowDaysToship: boolean;

  /** Oxatis_Oxatis_ShipPrice - numeric */
  Oxatis_Oxatis_ShipPrice: number;

  /** Oxatis_Oxatis_DaysToship - integer */
  Oxatis_Oxatis_DaysToship: number;

  /** Oxatis_Oxatis_UserMainSupplierDaysToship - boolean */
  Oxatis_Oxatis_UserMainSupplierDaysToship: boolean;

  /** Id - text */
  Id: string;

  /** ItemType - smallint */
  ItemType: number;

  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** SaleUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  SaleUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** UpdateComponentsStockInFabrication - boolean */
  UpdateComponentsStockInFabrication: boolean;

  /** CustomersDeliveryOrderPreparingQuantity - numeric */
  CustomersDeliveryOrderPreparingQuantity: number;

  /** CustomersReturnOrderPreparingQuantity - numeric */
  CustomersReturnOrderPreparingQuantity: number;

  /** SuppliersDeliveryOrderPreparingQuantity - numeric */
  SuppliersDeliveryOrderPreparingQuantity: number;

  /** SuppliersReturnOrderPreparingQuantity - numeric */
  SuppliersReturnOrderPreparingQuantity: number;

  /** StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** PurchaseChargesRate - numeric */
  PurchaseChargesRate: number;

  /** PosIsScale - boolean */
  PosIsScale: boolean;

  /** PosTare - numeric (nullable) */
  PosTare?: number;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** ReplenishmentDeliveryAddressType - smallint (nullable) */
  ReplenishmentDeliveryAddressType?: number;

  /** SaleUnitPriceProgram_Program - text (nullable) */
  SaleUnitPriceProgram_Program?: string;

  /** DesCom - text (nullable) */
  DesCom?: string;

  /** DesComClear - text (nullable) */
  DesComClear?: string;

  /** ItemImage - bytea (nullable) */
  ItemImage?: Buffer | Uint8Array;

  /** BarCode - text (nullable) */
  BarCode?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

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

  /** Oxatis_Oxatis_CategoryType1 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType1?: number;

  /** Oxatis_Oxatis_CategoryType2 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType2?: number;

  /** Oxatis_Oxatis_CategoryType3 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType3?: number;

  /** Oxatis_Oxatis_CategoryId1 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId1?: string;

  /** Oxatis_Oxatis_CategoryId2 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId2?: string;

  /** Oxatis_Oxatis_CategoryId3 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId3?: string;

  /** Oxatis_Oxatis_MetaTitle - text (nullable) */
  Oxatis_Oxatis_MetaTitle?: string;

  /** Oxatis_Oxatis_MetaDescription - text (nullable) */
  Oxatis_Oxatis_MetaDescription?: string;

  /** Oxatis_Oxatis_MetaKeywords - text (nullable) */
  Oxatis_Oxatis_MetaKeywords?: string;

  /** Oxatis_Oxatis_Brand - text (nullable) */
  Oxatis_Oxatis_Brand?: string;

  /** MainIntervener - text (nullable) */
  MainIntervener?: string;

  /** IntrastatNc8NomenclatureId - text (nullable) */
  IntrastatNc8NomenclatureId?: string;

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

  /** NonInvoiceableType - smallint (nullable) */
  NonInvoiceableType?: number;

  /** ComponentCalculationType - smallint (nullable) */
  ComponentCalculationType?: number;

  /** ReplacementItem - text (nullable) */
  ReplacementItem?: string;

  /** WeightUnitId - text (nullable) */
  WeightUnitId?: string;

  /** NumberOfItemByPackage - integer (nullable) */
  NumberOfItemByPackage?: number;

  /** VolumeUnitId - text (nullable) */
  VolumeUnitId?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

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

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** LimitDateSafetyDelayMode - smallint (nullable) */
  LimitDateSafetyDelayMode?: number;

  /** DefaultLifeTime - smallint (nullable) */
  DefaultLifeTime?: number;

  /** PurchasePriceUpdateType - smallint (nullable) */
  PurchasePriceUpdateType?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** PurchaseUnitId - text (nullable) */
  PurchaseUnitId?: string;

  /** DimensionUnitId - text (nullable) */
  DimensionUnitId?: string;

  /** Oxatis_Oxatis_LongDescription - text (nullable) */
  Oxatis_Oxatis_LongDescription?: string;

  /** Oxatis_Oxatis_LongDescriptionClear - text (nullable) */
  Oxatis_Oxatis_LongDescriptionClear?: string;

  /** Oxatis_Oxatis_SmallImage - bytea (nullable) */
  Oxatis_Oxatis_SmallImage?: Buffer | Uint8Array;

  /** PurchaseBillOfQuantitiesProgram_Program - text (nullable) */
  PurchaseBillOfQuantitiesProgram_Program?: string;

  /** EcotaxFurnitureId - text (nullable) */
  EcotaxFurnitureId?: string;

  /** PurchaseUnitPriceProgram_Program - text (nullable) */
  PurchaseUnitPriceProgram_Program?: string;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableDesCom_2 - text (nullable) */
  LocalizableDesCom_2?: string;

  /** LocalizableDesCom_Clear_2 - text (nullable) */
  LocalizableDesCom_Clear_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

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

  /** IntrastatOriginCountryId - text (nullable) */
  IntrastatOriginCountryId?: string;

  /** ParentRangeItemId - text (nullable) */
  ParentRangeItemId?: string;

  /** RangeTypeElementId0 - uuid (nullable) */
  RangeTypeElementId0?: string;

  /** RangeTypeElementId1 - uuid (nullable) */
  RangeTypeElementId1?: string;

  /** RangeTypeElementId2 - uuid (nullable) */
  RangeTypeElementId2?: string;

  /** RangeTypeElementId3 - uuid (nullable) */
  RangeTypeElementId3?: string;

  /** RangeTypeElementId4 - uuid (nullable) */
  RangeTypeElementId4?: string;

  /** DefaultAllowedStorehouseId - uuid (nullable) */
  DefaultAllowedStorehouseId?: string;

  /** MaintenanceContractTemplateId - text (nullable) */
  MaintenanceContractTemplateId?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** StockBillOfQuantitiesProgram_Program - text (nullable) */
  StockBillOfQuantitiesProgram_Program?: string;

  /** PosThumbnail - bytea (nullable) */
  PosThumbnail?: Buffer | Uint8Array;

  /** GiftVoucherCashValue - numeric (nullable) */
  GiftVoucherCashValue?: number;

  /** GiftVoucherValidityDuration - smallint (nullable) */
  GiftVoucherValidityDuration?: number;

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

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

  /** ScheduleEventTemplateId - text (nullable) */
  ScheduleEventTemplateId?: string;

  /** CompetenceNumberToPlan - integer (nullable) */
  CompetenceNumberToPlan?: number;

  /** EquipmentTypeNumberToPlan - integer (nullable) */
  EquipmentTypeNumberToPlan?: number;

  /** IsSubscription - boolean */
  IsSubscription: boolean;

  /** SubscriptionPassings - smallint */
  SubscriptionPassings: number;

  /** SubscriptionTotalCostPrice - numeric */
  SubscriptionTotalCostPrice: number;

  /** SubscriptionTotalPurchasePrice - numeric */
  SubscriptionTotalPurchasePrice: number;

  /** SubscriptionTotalSalePriceVatExcluded - numeric */
  SubscriptionTotalSalePriceVatExcluded: number;

  /** SubscriptionValidityDuration - smallint */
  SubscriptionValidityDuration: number;

  /** VatType - smallint */
  VatType: number;

  /** VatOnMarginBase - numeric */
  VatOnMarginBase: number;

  /** VatOnMarginRate - numeric */
  VatOnMarginRate: number;

  /** Oxatis_Oxatis_CategoryType4 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType4?: number;

  /** Oxatis_Oxatis_CategoryType5 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType5?: number;

  /** Oxatis_Oxatis_CategoryType6 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType6?: number;

  /** Oxatis_Oxatis_CategoryType7 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType7?: number;

  /** Oxatis_Oxatis_CategoryType8 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType8?: number;

  /** Oxatis_Oxatis_CategoryType9 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType9?: number;

  /** Oxatis_Oxatis_CategoryType10 - smallint (nullable) */
  Oxatis_Oxatis_CategoryType10?: number;

  /** Oxatis_Oxatis_CategoryId4 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId4?: string;

  /** Oxatis_Oxatis_CategoryId5 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId5?: string;

  /** Oxatis_Oxatis_CategoryId6 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId6?: string;

  /** Oxatis_Oxatis_CategoryId7 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId7?: string;

  /** Oxatis_Oxatis_CategoryId8 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId8?: string;

  /** Oxatis_Oxatis_CategoryId9 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId9?: string;

  /** Oxatis_Oxatis_CategoryId10 - uuid (nullable) */
  Oxatis_Oxatis_CategoryId10?: string;

  /** GiftVoucherCashType - smallint (nullable) */
  GiftVoucherCashType?: number;

  /** ShelfRef - integer */
  ShelfRef: number;

  /** SubscriptionType - smallint (nullable) */
  SubscriptionType?: number;

  /** ExcludedFromFooterDiscount - smallint (nullable) */
  ExcludedFromFooterDiscount?: number;

  /** ExcludedFromFinancialDiscount - smallint (nullable) */
  ExcludedFromFinancialDiscount?: number;

  /** xx_Ref_Fabricant - text (nullable) */
  xx_Ref_Fabricant?: string;

  /** ServiceType - text (nullable) */
  ServiceType?: string;

  /** NextScheduledItemPriceUpdateDate - timestamp without time zone (nullable) */
  NextScheduledItemPriceUpdateDate?: Date | string;

  /** Sustainable - boolean */
  Sustainable: boolean;

}

