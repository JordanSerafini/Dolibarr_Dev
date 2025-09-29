/**
 * Interface pour la table PurchaseDocumentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocumentLine {
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

  /** OtherTaxes0_TaxValue - numeric */
  OtherTaxes0_TaxValue: number;

  /** OtherTaxes0_SubjectToVat - boolean */
  OtherTaxes0_SubjectToVat: boolean;

  /** OtherTaxes0_TaxAmount - numeric */
  OtherTaxes0_TaxAmount: number;

  /** OtherTaxes0_BaseAmount - numeric */
  OtherTaxes0_BaseAmount: number;

  /** OrderedQuantity - numeric */
  OrderedQuantity: number;

  /** RemainingQuantityToInvoice - numeric */
  RemainingQuantityToInvoice: number;

  /** ReturnedQuantity - numeric */
  ReturnedQuantity: number;

  /** ReturnedQuantityByPreviousCreditMemo - numeric */
  ReturnedQuantityByPreviousCreditMemo: number;

  /** RemainingQuantityToDeliver - numeric */
  RemainingQuantityToDeliver: number;

  /** Location_MultiLocationMode - smallint */
  Location_MultiLocationMode: number;

  /** BillOfQuantitiesProgram_IsActive - boolean */
  BillOfQuantitiesProgram_IsActive: boolean;

  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** UnitPriceProgram_IsActive - boolean */
  UnitPriceProgram_IsActive: boolean;

  /** UnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  UnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** NumberOfPackage - integer */
  NumberOfPackage: number;

  /** IsCustomNumberOfPackage - boolean */
  IsCustomNumberOfPackage: boolean;

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

  /** PhaseLevel - integer */
  PhaseLevel: number;

  /** IsNumberSetManually - boolean */
  IsNumberSetManually: boolean;

  /** OtherTaxes0_CurrencyBaseAmount - numeric */
  OtherTaxes0_CurrencyBaseAmount: number;

  /** OtherTaxes0_CurrencyTaxAmount - numeric */
  OtherTaxes0_CurrencyTaxAmount: number;

  /** OtherTaxes0_CurrencyTaxValue - numeric */
  OtherTaxes0_CurrencyTaxValue: number;

  /** OtherTaxes1_CurrencyBaseAmount - numeric */
  OtherTaxes1_CurrencyBaseAmount: number;

  /** OtherTaxes1_CurrencyTaxAmount - numeric */
  OtherTaxes1_CurrencyTaxAmount: number;

  /** OtherTaxes1_CurrencyTaxValue - numeric */
  OtherTaxes1_CurrencyTaxValue: number;

  /** OtherTaxes2_CurrencyBaseAmount - numeric */
  OtherTaxes2_CurrencyBaseAmount: number;

  /** OtherTaxes2_CurrencyTaxAmount - numeric */
  OtherTaxes2_CurrencyTaxAmount: number;

  /** OtherTaxes2_CurrencyTaxValue - numeric */
  OtherTaxes2_CurrencyTaxValue: number;

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

  /** MustPartiallyDeliverCommercialNomenclature - boolean */
  MustPartiallyDeliverCommercialNomenclature: boolean;

  /** SalePurchaseConversionRate - numeric */
  SalePurchaseConversionRate: number;

  /** TotalChargeAmount - numeric */
  TotalChargeAmount: number;

  /** CostAmount - numeric */
  CostAmount: number;

  /** AdvisedSalePriceVatExcluded - numeric */
  AdvisedSalePriceVatExcluded: number;

  /** DiscountRateOnAdvisedSalePrice - numeric */
  DiscountRateOnAdvisedSalePrice: number;

  /** DiscountAmountOnAdvisedSalePrice - numeric */
  DiscountAmountOnAdvisedSalePrice: number;

  /** QuantityToReplenish - numeric */
  QuantityToReplenish: number;

  /** IsCostAmountModifiedByNextDocument - boolean */
  IsCostAmountModifiedByNextDocument: boolean;

  /** CurrencyPriceVatExcluded - numeric */
  CurrencyPriceVatExcluded: number;

  /** CurrencyPriceVatIncluded - numeric */
  CurrencyPriceVatIncluded: number;

  /** CurrencyPurchaseChargeAmount - numeric */
  CurrencyPurchaseChargeAmount: number;

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

  /** PriceVatExcluded - numeric */
  PriceVatExcluded: number;

  /** PriceVatIncluded - numeric */
  PriceVatIncluded: number;

  /** OtherTaxes1_TaxValue - numeric */
  OtherTaxes1_TaxValue: number;

  /** OtherTaxes1_SubjectToVat - boolean */
  OtherTaxes1_SubjectToVat: boolean;

  /** OtherTaxes1_TaxAmount - numeric */
  OtherTaxes1_TaxAmount: number;

  /** OtherTaxes1_BaseAmount - numeric */
  OtherTaxes1_BaseAmount: number;

  /** OtherTaxes2_TaxValue - numeric */
  OtherTaxes2_TaxValue: number;

  /** OtherTaxes2_SubjectToVat - boolean */
  OtherTaxes2_SubjectToVat: boolean;

  /** OtherTaxes2_TaxAmount - numeric */
  OtherTaxes2_TaxAmount: number;

  /** OtherTaxes2_BaseAmount - numeric */
  OtherTaxes2_BaseAmount: number;

  /** PurchaseOrderMinimumQuantity - numeric */
  PurchaseOrderMinimumQuantity: number;

  /** PurchaseOrderMultipleQuantity - numeric */
  PurchaseOrderMultipleQuantity: number;

  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** IsReferencedItem - boolean */
  IsReferencedItem: boolean;

  /** Quantity - numeric */
  Quantity: number;

  /** RealQuantity - numeric */
  RealQuantity: number;

  /** ManageStock - boolean */
  ManageStock: boolean;

  /** NomenclatureLevel - integer */
  NomenclatureLevel: number;

  /** IsPrintable - smallint */
  IsPrintable: number;

  /** QuantityDecimalNumber - smallint */
  QuantityDecimalNumber: number;

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

  /** UnitEcotaxAmountVatExcluded - numeric */
  UnitEcotaxAmountVatExcluded: number;

  /** UnitEcotaxAmountVatIncluded - numeric */
  UnitEcotaxAmountVatIncluded: number;

  /** EcotaxAmountVatExcluded - numeric */
  EcotaxAmountVatExcluded: number;

  /** EcotaxAmountVatIncluded - numeric */
  EcotaxAmountVatIncluded: number;

  /** HasTrackingDispatch - boolean */
  HasTrackingDispatch: boolean;

  /** Weight - numeric */
  Weight: number;

  /** TotalWeight - numeric */
  TotalWeight: number;

  /** NumberOfItemByPackage - integer */
  NumberOfItemByPackage: number;

  /** NetWeight - numeric */
  NetWeight: number;

  /** TotalNetWeight - numeric */
  TotalNetWeight: number;

  /** UseComponentVat - boolean */
  UseComponentVat: boolean;

  /** QuantityDecreaseByFreeQuantity - boolean */
  QuantityDecreaseByFreeQuantity: boolean;

  /** HasAnalyticAffectations - boolean */
  HasAnalyticAffectations: boolean;

  /** ApproachCharges0_ChargeDistributedAmount - numeric */
  ApproachCharges0_ChargeDistributedAmount: number;

  /** ApproachCharges0_CurrencyChargeDistributedAmount - numeric */
  ApproachCharges0_CurrencyChargeDistributedAmount: number;

  /** ApproachCharges2_ChargeDistributedAmount - numeric */
  ApproachCharges2_ChargeDistributedAmount: number;

  /** ApproachCharges2_CurrencyChargeDistributedAmount - numeric */
  ApproachCharges2_CurrencyChargeDistributedAmount: number;

  /** PurchasePricePercentage - numeric */
  PurchasePricePercentage: number;

  /** IntrastatExcluded - boolean */
  IntrastatExcluded: boolean;

  /** DoNotCreateMovement - smallint */
  DoNotCreateMovement: number;

  /** ApproachCharges1_ChargeDistributedAmount - numeric */
  ApproachCharges1_ChargeDistributedAmount: number;

  /** ApproachCharges1_CurrencyChargeDistributedAmount - numeric */
  ApproachCharges1_CurrencyChargeDistributedAmount: number;

  /** PurchasePriceVatIncludedPercentage - numeric */
  PurchasePriceVatIncludedPercentage: number;

  /** ApproachCharges2_DocumentFreightId - uuid (nullable) */
  ApproachCharges2_DocumentFreightId?: string;

  /** IntrastatOriginCountryId - text (nullable) */
  IntrastatOriginCountryId?: string;

  /** xx_Client - text (nullable) */
  xx_Client?: string;

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** ApproachCharges1_DocumentFreightId - uuid (nullable) */
  ApproachCharges1_DocumentFreightId?: string;

  /** LinkedLinesIds - text (nullable) */
  LinkedLinesIds?: string;

  /** LinkType - smallint (nullable) */
  LinkType?: number;

  /** Duration - text (nullable) */
  Duration?: string;

  /** ReverseChargeVatId - uuid (nullable) */
  ReverseChargeVatId?: string;

  /** ApproachCharges0_DocumentFreightId - uuid (nullable) */
  ApproachCharges0_DocumentFreightId?: string;

  /** FreePercentage - numeric (nullable) */
  FreePercentage?: number;

  /** DeliveredQuantity - numeric (nullable) */
  DeliveredQuantity?: number;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** Account - text (nullable) */
  Account?: string;

  /** EcotaxFurnitureId - text (nullable) */
  EcotaxFurnitureId?: string;

  /** UnitPriceProgram_Program - text (nullable) */
  UnitPriceProgram_Program?: string;

  /** ReturnState - smallint (nullable) */
  ReturnState?: number;

  /** VatMode - smallint (nullable) */
  VatMode?: number;

  /** EcotaxId - text (nullable) */
  EcotaxId?: string;

  /** VolumeUnitId - text (nullable) */
  VolumeUnitId?: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** StockMovementId - integer (nullable) */
  StockMovementId?: number;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ParentLineId - uuid (nullable) */
  ParentLineId?: string;

  /** TopParentLineId - uuid (nullable) */
  TopParentLineId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** PurchaseUnitId - text (nullable) */
  PurchaseUnitId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** OtherTaxes2_TaxUnitId - text (nullable) */
  OtherTaxes2_TaxUnitId?: string;

  /** OtherTaxes2_Id - uuid (nullable) */
  OtherTaxes2_Id?: string;

  /** OtherTaxes2_CalculationBase - smallint (nullable) */
  OtherTaxes2_CalculationBase?: number;

  /** OtherTaxes1_TaxUnitId - text (nullable) */
  OtherTaxes1_TaxUnitId?: string;

  /** ItemReference - text (nullable) */
  ItemReference?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** xx_NumSerie - text (nullable) */
  xx_NumSerie?: string;

  /** xx_NumSerie_Clear - text (nullable) */
  xx_NumSerie_Clear?: string;

  /** xx_Commentaires - text (nullable) */
  xx_Commentaires?: string;

  /** Numbering - text (nullable) */
  Numbering?: string;

  /** Location_LocationId - text (nullable) */
  Location_LocationId?: string;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** AnalyticPlanItemId - integer (nullable) */
  AnalyticPlanItemId?: number;

  /** OtherTaxes1_Id - uuid (nullable) */
  OtherTaxes1_Id?: string;

  /** OtherTaxes1_CalculationBase - smallint (nullable) */
  OtherTaxes1_CalculationBase?: number;

  /** OtherTaxes0_TaxUnitId - text (nullable) */
  OtherTaxes0_TaxUnitId?: string;

  /** OtherTaxes0_Id - uuid (nullable) */
  OtherTaxes0_Id?: string;

  /** OtherTaxes0_CalculationBase - smallint (nullable) */
  OtherTaxes0_CalculationBase?: number;

  /** Discounts2_DiscountType - smallint (nullable) */
  Discounts2_DiscountType?: number;

  /** Discounts1_DiscountType - smallint (nullable) */
  Discounts1_DiscountType?: number;

  /** Discounts0_DiscountType - smallint (nullable) */
  Discounts0_DiscountType?: number;

  /** NomenclatureCalculationType - smallint (nullable) */
  NomenclatureCalculationType?: number;

  /** WeightUnitId - text (nullable) */
  WeightUnitId?: string;

  /** LimitDate - timestamp without time zone (nullable) */
  LimitDate?: Date | string;

  /** VatId - uuid (nullable) */
  VatId?: string;

  /** VatAmount - numeric (nullable) */
  VatAmount?: number;

  /** DeliveryDate - timestamp without time zone (nullable) */
  DeliveryDate?: Date | string;

  /** DeliveryState - smallint (nullable) */
  DeliveryState?: number;

  /** OtherTaxes0_SubTaxId - uuid (nullable) */
  OtherTaxes0_SubTaxId?: string;

  /** OtherTaxes1_SubTaxId - uuid (nullable) */
  OtherTaxes1_SubTaxId?: string;

  /** OtherTaxes2_SubTaxId - uuid (nullable) */
  OtherTaxes2_SubTaxId?: string;

  /** IgnoreManualPriceSetForMultiLinePriceList - boolean (nullable) */
  IgnoreManualPriceSetForMultiLinePriceList?: boolean;

  /** RoundId - uuid (nullable) */
  RoundId?: string;

  /** IntrastatDestinationOriginCountryId - text (nullable) */
  IntrastatDestinationOriginCountryId?: string;

  /** TechnicalDescription - text (nullable) */
  TechnicalDescription?: string;

  /** TechnicalDescriptionClear - text (nullable) */
  TechnicalDescriptionClear?: string;

  /** InvoicedQuantity - numeric (nullable) */
  InvoicedQuantity?: number;

  /** NomenclatureAccountingTransferType - smallint (nullable) */
  NomenclatureAccountingTransferType?: number;

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

  /** ExecutionQuoteLineId - text (nullable) */
  ExecutionQuoteLineId?: string;

  /** PurchaseOrderLine - uuid (nullable) */
  PurchaseOrderLine?: string;

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

  /** ExcludeFixedQuantityForPrice - boolean */
  ExcludeFixedQuantityForPrice: boolean;

  /** ExcludedFromFootDiscount - boolean */
  ExcludedFromFootDiscount: boolean;

  /** ExcludedFromFinancialDiscount - boolean */
  ExcludedFromFinancialDiscount: boolean;

}

