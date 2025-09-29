/**
 * Interface pour la table ConstructionSiteReferenceDocumentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ConstructionSiteReferenceDocumentLine {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** ParentLineId - uuid (nullable) */
  ParentLineId?: string;

  /** TopParentLineId - uuid (nullable) */
  TopParentLineId?: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** TechnicalDescription - text (nullable) */
  TechnicalDescription?: string;

  /** TechnicalDescriptionClear - text (nullable) */
  TechnicalDescriptionClear?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** IsReferencedItem - boolean */
  IsReferencedItem: boolean;

  /** Quantity - numeric */
  Quantity: number;

  /** RealQuantity - numeric */
  RealQuantity: number;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

  /** ManageStock - boolean */
  ManageStock: boolean;

  /** NomenclatureLevel - integer */
  NomenclatureLevel: number;

  /** IsPrintable - smallint */
  IsPrintable: number;

  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** HasTrackingDispatch - boolean */
  HasTrackingDispatch: boolean;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** PricesDecimalNumber - smallint */
  PricesDecimalNumber: number;

  /** IsManagedByCountermark - boolean */
  IsManagedByCountermark: boolean;

  /** IsCountermarkInitiated - boolean */
  IsCountermarkInitiated: boolean;

  /** Volume - numeric */
  Volume: number;

  /** TotalVolume - numeric */
  TotalVolume: number;

  /** VolumeUnitId - text (nullable) */
  VolumeUnitId?: string;

  /** Weight - numeric */
  Weight: number;

  /** TotalWeight - numeric */
  TotalWeight: number;

  /** WeightUnitId - text (nullable) */
  WeightUnitId?: string;

  /** PhaseLevel - integer */
  PhaseLevel: number;

  /** Location_LocationId - text (nullable) */
  Location_LocationId?: string;

  /** Location_MultiLocationMode - smallint */
  Location_MultiLocationMode: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** BillOfQuantitiesProgram_IsActive - boolean */
  BillOfQuantitiesProgram_IsActive: boolean;

  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** Numbering - text (nullable) */
  Numbering?: string;

  /** IsNumberSetManually - boolean */
  IsNumberSetManually: boolean;

  /** PurchasePrice - numeric */
  PurchasePrice: number;

  /** ChargeRate - numeric */
  ChargeRate: number;

  /** ChargeAmount - numeric */
  ChargeAmount: number;

  /** CostPrice - numeric */
  CostPrice: number;

  /** UnitDiscountRate - numeric */
  UnitDiscountRate: number;

  /** UnitDiscountAmountVatExcluded - numeric */
  UnitDiscountAmountVatExcluded: number;

  /** UnitDiscountAmountVatIncluded - numeric */
  UnitDiscountAmountVatIncluded: number;

  /** CurrencyTotalUnitDiscountAmountVatExcluded - numeric */
  CurrencyTotalUnitDiscountAmountVatExcluded: number;

  /** CurrencyTotalUnitDiscountAmountVatIncluded - numeric */
  CurrencyTotalUnitDiscountAmountVatIncluded: number;

  /** PurchasePricePercentage - numeric */
  PurchasePricePercentage: number;

  /** TotalDiscountRate - numeric */
  TotalDiscountRate: number;

  /** IsNetPriceWithFullDecimals - boolean */
  IsNetPriceWithFullDecimals: boolean;

  /** NetPriceVatExcluded - numeric */
  NetPriceVatExcluded: number;

  /** NetPriceVatIncluded - numeric */
  NetPriceVatIncluded: number;

  /** NetPriceVatExcludedWithDiscount - numeric */
  NetPriceVatExcludedWithDiscount: number;

  /** NetPriceVatIncludedWithDiscount - numeric */
  NetPriceVatIncludedWithDiscount: number;

  /** NetAmountVatExcluded - numeric */
  NetAmountVatExcluded: number;

  /** NetAmountVatExcludedWithDiscount - numeric */
  NetAmountVatExcludedWithDiscount: number;

  /** NetAmountVatIncluded - numeric */
  NetAmountVatIncluded: number;

  /** NetAmountVatIncludedWithDiscount - numeric */
  NetAmountVatIncludedWithDiscount: number;

  /** EcotaxId - text (nullable) */
  EcotaxId?: string;

  /** UnitEcotaxAmountVatExcluded - numeric */
  UnitEcotaxAmountVatExcluded: number;

  /** UnitEcotaxAmountVatIncluded - numeric */
  UnitEcotaxAmountVatIncluded: number;

  /** EcotaxAmountVatExcluded - numeric */
  EcotaxAmountVatExcluded: number;

  /** EcotaxAmountVatIncluded - numeric */
  EcotaxAmountVatIncluded: number;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** VatAmount - numeric (nullable) */
  VatAmount?: number;

  /** DeliveryDate - timestamp without time zone (nullable) */
  DeliveryDate?: Date | string;

  /** DeliveryState - smallint (nullable) */
  DeliveryState?: number;

  /** ReturnState - smallint (nullable) */
  ReturnState?: number;

  /** OrderedQuantity - numeric */
  OrderedQuantity: number;

  /** DeliveredQuantity - numeric (nullable) */
  DeliveredQuantity?: number;

  /** RemainingQuantityToDeliver - numeric */
  RemainingQuantityToDeliver: number;

  /** RemainingQuantityToInvoice - numeric */
  RemainingQuantityToInvoice: number;

  /** ReturnedQuantity - numeric */
  ReturnedQuantity: number;

  /** InvoicedQuantity - numeric (nullable) */
  InvoicedQuantity?: number;

  /** ReturnedQuantityByPreviousCreditMemo - numeric */
  ReturnedQuantityByPreviousCreditMemo: number;

  /** VatMode - smallint (nullable) */
  VatMode?: number;

  /** NumberOfItemByPackage - integer */
  NumberOfItemByPackage: number;

  /** NetWeight - numeric */
  NetWeight: number;

  /** TotalNetWeight - numeric */
  TotalNetWeight: number;

  /** UseComponentVat - boolean */
  UseComponentVat: boolean;

  /** NomenclatureCalculationType - smallint (nullable) */
  NomenclatureCalculationType?: number;

  /** FreePercentage - numeric (nullable) */
  FreePercentage?: number;

  /** RealNetAmountVatExcluded - numeric */
  RealNetAmountVatExcluded: number;

  /** RealNetAmountVatExcludedWithDiscount - numeric */
  RealNetAmountVatExcludedWithDiscount: number;

  /** RealNetAmountVatIncluded - numeric */
  RealNetAmountVatIncluded: number;

  /** RealNetAmountVatIncludedWithDiscount - numeric */
  RealNetAmountVatIncludedWithDiscount: number;

  /** RealNetAmountVatExcludedWithDiscountAndFinancialDiscount - numeric */
  RealNetAmountVatExcludedWithDiscountAndFinancialDiscount: number;

  /** RealNetAmountVatIncludedWithDiscountAndFinancialDiscount - numeric */
  RealNetAmountVatIncludedWithDiscountAndFinancialDiscount: number;

  /** Discounts0_UnitDiscountRate - numeric */
  Discounts0_UnitDiscountRate: number;

  /** Discounts0_UnitDiscountAmountVatExcluded - numeric */
  Discounts0_UnitDiscountAmountVatExcluded: number;

  /** Discounts0_UnitDiscountAmountVatIncluded - numeric */
  Discounts0_UnitDiscountAmountVatIncluded: number;

  /** Discounts0_DiscountType - smallint (nullable) */
  Discounts0_DiscountType?: number;

  /** Discounts0_CurrencyUnitDiscountAmountVatExcluded - numeric */
  Discounts0_CurrencyUnitDiscountAmountVatExcluded: number;

  /** Discounts0_CurrencyUnitDiscountAmountVatIncluded - numeric */
  Discounts0_CurrencyUnitDiscountAmountVatIncluded: number;

  /** Discounts1_UnitDiscountRate - numeric */
  Discounts1_UnitDiscountRate: number;

  /** Discounts1_UnitDiscountAmountVatExcluded - numeric */
  Discounts1_UnitDiscountAmountVatExcluded: number;

  /** Discounts1_UnitDiscountAmountVatIncluded - numeric */
  Discounts1_UnitDiscountAmountVatIncluded: number;

  /** Discounts1_DiscountType - smallint (nullable) */
  Discounts1_DiscountType?: number;

  /** Discounts1_CurrencyUnitDiscountAmountVatExcluded - numeric */
  Discounts1_CurrencyUnitDiscountAmountVatExcluded: number;

  /** Discounts1_CurrencyUnitDiscountAmountVatIncluded - numeric */
  Discounts1_CurrencyUnitDiscountAmountVatIncluded: number;

  /** Discounts2_UnitDiscountRate - numeric */
  Discounts2_UnitDiscountRate: number;

  /** Discounts2_UnitDiscountAmountVatExcluded - numeric */
  Discounts2_UnitDiscountAmountVatExcluded: number;

  /** Discounts2_UnitDiscountAmountVatIncluded - numeric */
  Discounts2_UnitDiscountAmountVatIncluded: number;

  /** Discounts2_DiscountType - smallint (nullable) */
  Discounts2_DiscountType?: number;

  /** Discounts2_CurrencyUnitDiscountAmountVatExcluded - numeric */
  Discounts2_CurrencyUnitDiscountAmountVatExcluded: number;

  /** Discounts2_CurrencyUnitDiscountAmountVatIncluded - numeric */
  Discounts2_CurrencyUnitDiscountAmountVatIncluded: number;

  /** RealNetAmountVatExcludedWithParentDiscount - numeric */
  RealNetAmountVatExcludedWithParentDiscount: number;

  /** RealNetAmountVatIncludedWithParentDiscount - numeric */
  RealNetAmountVatIncludedWithParentDiscount: number;

  /** NetPriceVatExcludedWithParentDiscount - numeric */
  NetPriceVatExcludedWithParentDiscount: number;

  /** NetPriceVatIncludedWithParentDiscount - numeric */
  NetPriceVatIncludedWithParentDiscount: number;

  /** NotIncluded - boolean */
  NotIncluded: boolean;

  /** OtherTaxes0_Id - uuid (nullable) */
  OtherTaxes0_Id?: string;

  /** OtherTaxes0_SubTaxId - uuid (nullable) */
  OtherTaxes0_SubTaxId?: string;

  /** OtherTaxes0_CalculationBase - smallint (nullable) */
  OtherTaxes0_CalculationBase?: number;

  /** OtherTaxes0_TaxValue - numeric */
  OtherTaxes0_TaxValue: number;

  /** OtherTaxes0_SubjectToVat - boolean */
  OtherTaxes0_SubjectToVat: boolean;

  /** OtherTaxes0_TaxAmount - numeric */
  OtherTaxes0_TaxAmount: number;

  /** OtherTaxes0_TaxUnitId - text (nullable) */
  OtherTaxes0_TaxUnitId?: string;

  /** OtherTaxes0_BaseAmount - numeric */
  OtherTaxes0_BaseAmount: number;

  /** OtherTaxes0_CurrencyBaseAmount - numeric */
  OtherTaxes0_CurrencyBaseAmount: number;

  /** OtherTaxes0_CurrencyTaxAmount - numeric */
  OtherTaxes0_CurrencyTaxAmount: number;

  /** OtherTaxes0_CurrencyTaxValue - numeric */
  OtherTaxes0_CurrencyTaxValue: number;

  /** OtherTaxes1_Id - uuid (nullable) */
  OtherTaxes1_Id?: string;

  /** OtherTaxes1_SubTaxId - uuid (nullable) */
  OtherTaxes1_SubTaxId?: string;

  /** OtherTaxes1_CalculationBase - smallint (nullable) */
  OtherTaxes1_CalculationBase?: number;

  /** OtherTaxes1_TaxValue - numeric */
  OtherTaxes1_TaxValue: number;

  /** OtherTaxes1_SubjectToVat - boolean */
  OtherTaxes1_SubjectToVat: boolean;

  /** OtherTaxes1_TaxAmount - numeric */
  OtherTaxes1_TaxAmount: number;

  /** OtherTaxes1_TaxUnitId - text (nullable) */
  OtherTaxes1_TaxUnitId?: string;

  /** OtherTaxes1_BaseAmount - numeric */
  OtherTaxes1_BaseAmount: number;

  /** OtherTaxes1_CurrencyBaseAmount - numeric */
  OtherTaxes1_CurrencyBaseAmount: number;

  /** OtherTaxes1_CurrencyTaxAmount - numeric */
  OtherTaxes1_CurrencyTaxAmount: number;

  /** OtherTaxes1_CurrencyTaxValue - numeric */
  OtherTaxes1_CurrencyTaxValue: number;

  /** OtherTaxes2_Id - uuid (nullable) */
  OtherTaxes2_Id?: string;

  /** OtherTaxes2_SubTaxId - uuid (nullable) */
  OtherTaxes2_SubTaxId?: string;

  /** OtherTaxes2_CalculationBase - smallint (nullable) */
  OtherTaxes2_CalculationBase?: number;

  /** OtherTaxes2_TaxValue - numeric */
  OtherTaxes2_TaxValue: number;

  /** OtherTaxes2_SubjectToVat - boolean */
  OtherTaxes2_SubjectToVat: boolean;

  /** OtherTaxes2_TaxAmount - numeric */
  OtherTaxes2_TaxAmount: number;

  /** OtherTaxes2_TaxUnitId - text (nullable) */
  OtherTaxes2_TaxUnitId?: string;

  /** OtherTaxes2_BaseAmount - numeric */
  OtherTaxes2_BaseAmount: number;

  /** OtherTaxes2_CurrencyBaseAmount - numeric */
  OtherTaxes2_CurrencyBaseAmount: number;

  /** OtherTaxes2_CurrencyTaxAmount - numeric */
  OtherTaxes2_CurrencyTaxAmount: number;

  /** OtherTaxes2_CurrencyTaxValue - numeric */
  OtherTaxes2_CurrencyTaxValue: number;

  /** IsPriceListApplied - boolean */
  IsPriceListApplied: boolean;

  /** CanApplyPriceListOnComponent - boolean */
  CanApplyPriceListOnComponent: boolean;

  /** DispatchedAmountVatExcluded - numeric */
  DispatchedAmountVatExcluded: number;

  /** DispatchedAmountVatIncluded - numeric */
  DispatchedAmountVatIncluded: number;

  /** REAmount - numeric */
  REAmount: number;

  /** CurrencyNetPriceVatExcluded - numeric */
  CurrencyNetPriceVatExcluded: number;

  /** CurrencyNetPriceVatIncluded - numeric */
  CurrencyNetPriceVatIncluded: number;

  /** CurrencyNetPriceVatExcludedWithDiscount - numeric */
  CurrencyNetPriceVatExcludedWithDiscount: number;

  /** CurrencyNetPriceVatIncludedWithDiscount - numeric */
  CurrencyNetPriceVatIncludedWithDiscount: number;

  /** CurrencyNetAmountVatExcluded - numeric */
  CurrencyNetAmountVatExcluded: number;

  /** CurrencyNetAmountVatExcludedWithDiscount - numeric */
  CurrencyNetAmountVatExcludedWithDiscount: number;

  /** CurrencyNetAmountVatIncluded - numeric */
  CurrencyNetAmountVatIncluded: number;

  /** CurrencyNetAmountVatIncludedWithDiscount - numeric */
  CurrencyNetAmountVatIncludedWithDiscount: number;

  /** CurrencyRealNetAmountVatExcluded - numeric */
  CurrencyRealNetAmountVatExcluded: number;

  /** CurrencyRealNetAmountVatExcludedWithDiscount - numeric */
  CurrencyRealNetAmountVatExcludedWithDiscount: number;

  /** CurrencyRealNetAmountVatIncluded - numeric */
  CurrencyRealNetAmountVatIncluded: number;

  /** CurrencyRealNetAmountVatIncludedWithDiscount - numeric */
  CurrencyRealNetAmountVatIncludedWithDiscount: number;

  /** CurrencyRealNetAmountVatExcludedWithDiscountAndFinancialDiscoun - numeric */
  CurrencyRealNetAmountVatExcludedWithDiscountAndFinancialDiscoun: number;

  /** CurrencyRealNetAmountVatIncludedWithDiscountAndFinancialDiscoun - numeric */
  CurrencyRealNetAmountVatIncludedWithDiscountAndFinancialDiscoun: number;

  /** CurrencyRealNetAmountVatExcludedWithParentDiscount - numeric */
  CurrencyRealNetAmountVatExcludedWithParentDiscount: number;

  /** CurrencyRealNetAmountVatIncludedWithParentDiscount - numeric */
  CurrencyRealNetAmountVatIncludedWithParentDiscount: number;

  /** CurrencyNetPriceVatExcludedWithParentDiscount - numeric */
  CurrencyNetPriceVatExcludedWithParentDiscount: number;

  /** CurrencyNetPriceVatIncludedWithParentDiscount - numeric */
  CurrencyNetPriceVatIncludedWithParentDiscount: number;

  /** CurrencyVatAmount - numeric */
  CurrencyVatAmount: number;

  /** CurrencyUnitEcotaxAmountVatExcluded - numeric */
  CurrencyUnitEcotaxAmountVatExcluded: number;

  /** CurrencyUnitEcotaxAmountVatIncluded - numeric */
  CurrencyUnitEcotaxAmountVatIncluded: number;

  /** CurrencyEcotaxAmountVatExcluded - numeric */
  CurrencyEcotaxAmountVatExcluded: number;

  /** CurrencyEcotaxAmountVatIncluded - numeric */
  CurrencyEcotaxAmountVatIncluded: number;

  /** ItemReference - text (nullable) */
  ItemReference?: string;

  /** MustPartiallyDeliverCommercialNomenclature - boolean */
  MustPartiallyDeliverCommercialNomenclature: boolean;

  /** UnitPriceProgram_Program - text (nullable) */
  UnitPriceProgram_Program?: string;

  /** UnitPriceProgram_IsActive - boolean */
  UnitPriceProgram_IsActive: boolean;

  /** UnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  UnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** NumberOfPackage - integer */
  NumberOfPackage: number;

  /** IsCustomNumberOfPackage - boolean */
  IsCustomNumberOfPackage: boolean;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** Account - text (nullable) */
  Account?: string;

  /** NomenclatureAccountingTransferType - smallint (nullable) */
  NomenclatureAccountingTransferType?: number;

  /** EcotaxFurnitureId - text (nullable) */
  EcotaxFurnitureId?: string;

  /** UnitEcotaxFurnitureAmountVatExcluded - numeric */
  UnitEcotaxFurnitureAmountVatExcluded: number;

  /** UnitEcotaxFurnitureAmountVatIncluded - numeric */
  UnitEcotaxFurnitureAmountVatIncluded: number;

  /** EcotaxFurnitureAmountVatExcluded - numeric */
  EcotaxFurnitureAmountVatExcluded: number;

  /** EcotaxFurnitureAmountVatIncluded - numeric */
  EcotaxFurnitureAmountVatIncluded: number;

  /** CurrencyUnitEcotaxFurnitureAmountVatExcluded - numeric */
  CurrencyUnitEcotaxFurnitureAmountVatExcluded: number;

  /** CurrencyUnitEcotaxFurnitureAmountVatIncluded - numeric */
  CurrencyUnitEcotaxFurnitureAmountVatIncluded: number;

  /** CurrencyEcotaxFurnitureAmountVatExcluded - numeric */
  CurrencyEcotaxFurnitureAmountVatExcluded: number;

  /** CurrencyEcotaxFurnitureAmountVatIncluded - numeric */
  CurrencyEcotaxFurnitureAmountVatIncluded: number;

  /** IncludeEcotaxFurnitureInDueAmount - boolean */
  IncludeEcotaxFurnitureInDueAmount: boolean;

  /** AnalyticPlanItemId - integer (nullable) */
  AnalyticPlanItemId?: number;

  /** HasAnalyticAffectations - boolean */
  HasAnalyticAffectations: boolean;

  /** LinkedLinesIds - text (nullable) */
  LinkedLinesIds?: string;

  /** LinkType - smallint (nullable) */
  LinkType?: number;

  /** QuantityDecreaseByFreeQuantity - boolean */
  QuantityDecreaseByFreeQuantity: boolean;

  /** IgnoreManualPriceSetForMultiLinePriceList - boolean (nullable) */
  IgnoreManualPriceSetForMultiLinePriceList?: boolean;

  /** Duration - text (nullable) */
  Duration?: string;

  /** IntrastatExcluded - boolean */
  IntrastatExcluded: boolean;

  /** DoNotCreateMovement - smallint */
  DoNotCreateMovement: number;

  /** RoundId - uuid (nullable) */
  RoundId?: string;

  /** ProgressStateType - smallint (nullable) */
  ProgressStateType?: number;

  /** QuantityProgressPercentage - numeric */
  QuantityProgressPercentage: number;

  /** TotalQuantityProgressPercentage - numeric */
  TotalQuantityProgressPercentage: number;

  /** PreviousTotalQuantityProgressPercentage - numeric */
  PreviousTotalQuantityProgressPercentage: number;

  /** ProgressPercentage - numeric */
  ProgressPercentage: number;

  /** TotalProgressPercentage - numeric */
  TotalProgressPercentage: number;

  /** PreviousTotalProgressPercentage - numeric */
  PreviousTotalProgressPercentage: number;

  /** TotalProgressQuantity - numeric */
  TotalProgressQuantity: number;

  /** ProgressRealQuantity - numeric */
  ProgressRealQuantity: number;

  /** PreviousTotalProgressQuantity - numeric */
  PreviousTotalProgressQuantity: number;

  /** TotalProgressRealNetAmountVatExcluded - numeric */
  TotalProgressRealNetAmountVatExcluded: number;

  /** CurrencyTotalProgressRealNetAmountVatExcluded - numeric */
  CurrencyTotalProgressRealNetAmountVatExcluded: number;

  /** PreviousTotalProgressRealNetAmountVatExcluded - numeric */
  PreviousTotalProgressRealNetAmountVatExcluded: number;

  /** CurrencyPreviousTotalProgressRealNetAmountVatExcluded - numeric */
  CurrencyPreviousTotalProgressRealNetAmountVatExcluded: number;

  /** LastAcceptedProgressStateLineId - uuid (nullable) */
  LastAcceptedProgressStateLineId?: string;

  /** LastProgressStateLineId - uuid (nullable) */
  LastProgressStateLineId?: string;

  /** ReferenceDocumentLineId - uuid (nullable) */
  ReferenceDocumentLineId?: string;

  /** FixedQuantity - boolean */
  FixedQuantity: boolean;

  /** ComponentFixedQuantityNumber - integer (nullable) */
  ComponentFixedQuantityNumber?: number;

  /** FixedQuantityPriceConversionRate - numeric (nullable) */
  FixedQuantityPriceConversionRate?: number;

  /** DeliveryOrderInvoiceState - smallint (nullable) */
  DeliveryOrderInvoiceState?: number;

  /** MustPartiallyInvoiceCommercialNomenclature - boolean */
  MustPartiallyInvoiceCommercialNomenclature: boolean;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** SalePriceVatIncluded - numeric */
  SalePriceVatIncluded: number;

  /** InterestRate - numeric */
  InterestRate: number;

  /** InterestAmount - numeric */
  InterestAmount: number;

  /** NetInterestRate - numeric */
  NetInterestRate: number;

  /** NetInterestAmount - numeric */
  NetInterestAmount: number;

  /** BrandRate - numeric */
  BrandRate: number;

  /** TotalInterestAmount - numeric */
  TotalInterestAmount: number;

  /** NetInterestBase - numeric */
  NetInterestBase: number;

  /** NetInterestCalculationType - smallint */
  NetInterestCalculationType: number;

  /** IsFixedPrice - smallint (nullable) */
  IsFixedPrice?: number;

  /** UsePumpForReturn - boolean */
  UsePumpForReturn: boolean;

  /** ReturnUnitCostPrice - numeric */
  ReturnUnitCostPrice: number;

  /** ReturnCostPrice - numeric */
  ReturnCostPrice: number;

  /** IsHumanService - boolean */
  IsHumanService: boolean;

  /** InterventionDurationEqualQuantity - boolean */
  InterventionDurationEqualQuantity: boolean;

  /** GrossInterestRateCalculationType - smallint */
  GrossInterestRateCalculationType: number;

  /** GrossInterestAmount - numeric */
  GrossInterestAmount: number;

  /** GrossInterestRate - numeric */
  GrossInterestRate: number;

  /** GrossInterestBase - numeric */
  GrossInterestBase: number;

  /** CurrencySalePriceVatExcluded - numeric */
  CurrencySalePriceVatExcluded: number;

  /** CurrencySalePriceVatIncluded - numeric */
  CurrencySalePriceVatIncluded: number;

  /** PurchaseDeliveryAddressType - smallint (nullable) */
  PurchaseDeliveryAddressType?: number;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** Booked - boolean */
  Booked: boolean;

  /** StockBookingAllowed - boolean */
  StockBookingAllowed: boolean;

  /** CustomerProductIds - text (nullable) */
  CustomerProductIds?: string;

  /** CreateCustomerProductInCustomerPark - boolean */
  CreateCustomerProductInCustomerPark: boolean;

  /** CreatedMaintenanceContractId - text (nullable) */
  CreatedMaintenanceContractId?: string;

  /** CreateMaintenanceContract - boolean */
  CreateMaintenanceContract: boolean;

  /** CostPricePercentage - numeric */
  CostPricePercentage: number;

  /** SalePriceVatExcludedPercentage - numeric */
  SalePriceVatExcludedPercentage: number;

  /** SalePriceVatIncludedPercentage - numeric */
  SalePriceVatIncludedPercentage: number;

  /** SupplierReference - text (nullable) */
  SupplierReference?: string;

  /** NetBrandRate - numeric */
  NetBrandRate: number;

  /** HasTask - boolean */
  HasTask: boolean;

  /** ExecutionQuoteLineStatus - smallint (nullable) */
  ExecutionQuoteLineStatus?: number;

  /** ScheduleEventTemplateId - text (nullable) */
  ScheduleEventTemplateId?: string;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** CompetenceNumberToPlan - integer (nullable) */
  CompetenceNumberToPlan?: number;

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

  /** EquipmentTypeNumberToPlan - integer (nullable) */
  EquipmentTypeNumberToPlan?: number;

  /** ConstraintType - smallint (nullable) */
  ConstraintType?: number;

  /** ConstraintDateTime - timestamp without time zone (nullable) */
  ConstraintDateTime?: Date | string;

  /** ConstraintReason - text (nullable) */
  ConstraintReason?: string;

  /** Deadline - timestamp without time zone (nullable) */
  Deadline?: Date | string;

  /** ScheduleEventId - uuid (nullable) */
  ScheduleEventId?: string;

  /** CoordinatedActivity - smallint */
  CoordinatedActivity: number;

  /** IsCritical - boolean */
  IsCritical: boolean;

  /** IsMilestone - boolean */
  IsMilestone: boolean;

  /** PickedStockQuantity - numeric */
  PickedStockQuantity: number;

  /** ConsumptionQuantity - numeric */
  ConsumptionQuantity: number;

  /** TotalConsumptionQuantity - numeric */
  TotalConsumptionQuantity: number;

  /** SurplusQuantity - numeric */
  SurplusQuantity: number;

  /** TotalSurplusQuantity - numeric */
  TotalSurplusQuantity: number;

  /** OriginNetAmountVatExcluded - numeric (nullable) */
  OriginNetAmountVatExcluded?: number;

  /** OriginQuantity - numeric (nullable) */
  OriginQuantity?: number;

  /** SchedulingType - smallint */
  SchedulingType: number;

  /** ReplenishmentType - smallint */
  ReplenishmentType: number;

  /** ReplenishmentSupplierDocumentType - smallint (nullable) */
  ReplenishmentSupplierDocumentType?: number;

  /** ReplenishmentSubContractorDocumentType - smallint (nullable) */
  ReplenishmentSubContractorDocumentType?: number;

  /** ConstructionSiteLineId - uuid (nullable) */
  ConstructionSiteLineId?: string;

  /** LineFeature - smallint */
  LineFeature: number;

  /** ExtraFeeAmount - numeric */
  ExtraFeeAmount: number;

  /** ExtraFeeState - smallint */
  ExtraFeeState: number;

  /** ExtraFeeIsManualDistribution - boolean */
  ExtraFeeIsManualDistribution: boolean;

  /** SubContractorId - text (nullable) */
  SubContractorId?: string;

  /** SubContractorReference - text (nullable) */
  SubContractorReference?: string;

  /** PosScaleTransactionNumber - text (nullable) */
  PosScaleTransactionNumber?: string;

  /** PosScaleDeletedLine - boolean */
  PosScaleDeletedLine: boolean;

  /** PurchaseState_State - text (nullable) */
  PurchaseState_State?: string;

  /** PurchaseState_Indicator - smallint */
  PurchaseState_Indicator: number;

  /** SubContractorState_State - text (nullable) */
  SubContractorState_State?: string;

  /** SubContractorState_Indicator - smallint */
  SubContractorState_Indicator: number;

  /** IsExtraFree - boolean */
  IsExtraFree: boolean;

  /** CancelledAmendmentLineId - uuid (nullable) */
  CancelledAmendmentLineId?: string;

  /** AddedAmendmentLineId - uuid (nullable) */
  AddedAmendmentLineId?: string;

  /** CustomerSubscriptionId - text (nullable) */
  CustomerSubscriptionId?: string;

  /** TotalConsumedAmount - numeric */
  TotalConsumedAmount: number;

  /** GlobalQuantities - numeric */
  GlobalQuantities: number;

  /** GlobalCost - numeric (nullable) */
  GlobalCost?: number;

  /** TotalGrossInterestAmount - numeric (nullable) */
  TotalGrossInterestAmount?: number;

  /** TotalGrossInterestRate - numeric (nullable) */
  TotalGrossInterestRate?: number;

  /** TotalBrandRate - numeric (nullable) */
  TotalBrandRate?: number;

  /** TotalSurplusAmount - numeric */
  TotalSurplusAmount: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** PurchaseState_IndicatorImage - bytea (nullable) */
  PurchaseState_IndicatorImage?: Buffer | Uint8Array;

  /** SubContractorState_IndicatorImage - bytea (nullable) */
  SubContractorState_IndicatorImage?: Buffer | Uint8Array;

  /** OtherTaxes0_VatRate - numeric (nullable) */
  OtherTaxes0_VatRate?: number;

  /** OtherTaxes0_VatId - uuid (nullable) */
  OtherTaxes0_VatId?: string;

  /** OtherTaxes1_VatRate - numeric (nullable) */
  OtherTaxes1_VatRate?: number;

  /** OtherTaxes1_VatId - uuid (nullable) */
  OtherTaxes1_VatId?: string;

  /** OtherTaxes2_VatRate - numeric (nullable) */
  OtherTaxes2_VatRate?: number;

  /** OtherTaxes2_VatId - uuid (nullable) */
  OtherTaxes2_VatId?: string;

  /** VatType - smallint (nullable) */
  VatType?: number;

  /** VatOnMarginRate - numeric (nullable) */
  VatOnMarginRate?: number;

  /** VatOnMarginBaseAmount - numeric */
  VatOnMarginBaseAmount: number;

  /** ExcludeFixedQuantityForPrice - boolean */
  ExcludeFixedQuantityForPrice: boolean;

  /** IntrastatOriginCountryId - text (nullable) */
  IntrastatOriginCountryId?: string;

  /** IntrastatDestinationOriginCountryId - text (nullable) */
  IntrastatDestinationOriginCountryId?: string;

  /** ExcludedFromFootDiscount - boolean */
  ExcludedFromFootDiscount: boolean;

  /** ExcludedFromFinancialDiscount - boolean */
  ExcludedFromFinancialDiscount: boolean;

  /** ServiceTypeId - text (nullable) */
  ServiceTypeId?: string;

}

