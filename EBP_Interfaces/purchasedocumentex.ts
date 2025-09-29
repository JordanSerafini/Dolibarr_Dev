/**
 * Interface pour la table PurchaseDocumentEx
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocumentEx {
  /** Id - uuid */
  Id: string;

  /** EcotaxFurnitureAmountVatExcluded - numeric */
  EcotaxFurnitureAmountVatExcluded: number;

  /** EcotaxFurnitureVatAmount - numeric */
  EcotaxFurnitureVatAmount: number;

  /** EcotaxFurnitureAmountVatIncluded - numeric */
  EcotaxFurnitureAmountVatIncluded: number;

  /** EcotaxFurnitureAmountVatExcludedIncludedToDueAmount - numeric */
  EcotaxFurnitureAmountVatExcludedIncludedToDueAmount: number;

  /** EcotaxFurnitureVatAmountIncludedToDueAmount - numeric */
  EcotaxFurnitureVatAmountIncludedToDueAmount: number;

  /** EcotaxFurnitureAmountIncludedToDueAmount - numeric */
  EcotaxFurnitureAmountIncludedToDueAmount: number;

  /** CurrencyEcotaxFurnitureVatAmount - numeric */
  CurrencyEcotaxFurnitureVatAmount: number;

  /** CurrencyEcotaxFurnitureAmountVatExcluded - numeric */
  CurrencyEcotaxFurnitureAmountVatExcluded: number;

  /** CurrencyEcotaxFurnitureAmountVatIncluded - numeric */
  CurrencyEcotaxFurnitureAmountVatIncluded: number;

  /** CurrencyEcotaxFurnitureVatAmountIncludedToDueAmount - numeric */
  CurrencyEcotaxFurnitureVatAmountIncludedToDueAmount: number;

  /** CurrencyEcotaxFurnitureAmountVatExcludedIncludedToDueAmount - numeric */
  CurrencyEcotaxFurnitureAmountVatExcludedIncludedToDueAmount: number;

  /** CurrencyEcotaxFurnitureAmountIncludedToDueAmount - numeric */
  CurrencyEcotaxFurnitureAmountIncludedToDueAmount: number;

  /** TransferReverseChargeEntryLine - boolean */
  TransferReverseChargeEntryLine: boolean;

  /** IsSelfBilling - boolean */
  IsSelfBilling: boolean;

  /** DistributeShippingOnPurchaseChargeAmount - boolean */
  DistributeShippingOnPurchaseChargeAmount: boolean;

  /** DistributionBase - smallint */
  DistributionBase: number;

  /** IsShippingDistributedOnPurchaseChargeAmount - boolean */
  IsShippingDistributedOnPurchaseChargeAmount: boolean;

  /** SettlementFinancialDiscountAmount - numeric */
  SettlementFinancialDiscountAmount: number;

  /** SettlementCurrencyFinancialDiscountAmount - numeric */
  SettlementCurrencyFinancialDiscountAmount: number;

  /** RoundLinesNetPriceVatExcluded - boolean */
  RoundLinesNetPriceVatExcluded: boolean;

  /** ShippingReverseChargeVatId - uuid (nullable) */
  ShippingReverseChargeVatId?: string;

  /** InvoicingChargesReverseChargeVatId - uuid (nullable) */
  InvoicingChargesReverseChargeVatId?: string;

  /** DetailVatAmount0_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount0_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount0_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount0_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount0_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount0_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount0_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount0_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount0_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount0_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount0_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount0_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount0_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount0_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount1_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount1_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount1_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount1_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount1_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount1_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount1_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount1_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount1_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount1_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount1_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount1_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount1_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount1_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount2_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount2_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount2_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount2_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount2_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount2_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount2_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount2_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount2_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount2_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount2_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount2_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount2_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount2_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount3_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount3_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount3_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount3_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount3_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount3_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount3_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount3_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount3_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount3_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount3_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount3_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount3_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount3_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount4_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount4_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount4_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount4_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount4_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount4_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount4_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount4_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount4_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount4_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount4_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount4_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount4_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount4_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount5_EcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_EcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount5_EcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_EcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount5_EcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount5_EcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount5_TaxFurnitAmountVatExcludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_TaxFurnitAmountVatExcludedIncludedToDueAmount?: number;

  /** DetailVatAmount5_TaxFurnitAmountVatIncludedIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_TaxFurnitAmountVatIncludedIncludedToDueAmount?: number;

  /** DetailVatAmount5_EcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_EcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount5_CurrencyEcotaxFurnitureAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxFurnitureAmountVatExcluded?: number;

  /** DetailVatAmount5_CurrencyEcotaxFurnitureAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxFurnitureAmountVatIncluded?: number;

  /** DetailVatAmount5_CurrencyEcotaxFurnitureVatAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxFurnitureVatAmount?: number;

  /** DetailVatAmount5_CurTaxFurnitAmountVatExcludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_CurTaxFurnitAmountVatExcludIncludedToDueAmount?: number;

  /** DetailVatAmount5_CurTaxFurnitAmountVatIncludIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_CurTaxFurnitAmountVatIncludIncludedToDueAmount?: number;

  /** DetailVatAmount5_CurEcotaxFurnitureVatAmountIncludedToDueAmount - numeric (nullable) */
  DetailVatAmount5_CurEcotaxFurnitureVatAmountIncludedToDueAmount?: number;

  /** DetailVatAmount0_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount0_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount0_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount0_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount1_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount1_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount1_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount1_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount2_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount2_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount2_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount2_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount3_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount3_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount3_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount3_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount4_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount4_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount4_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount4_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount5_SmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount5_SmoothedDepositDocumentVatAmount?: number;

  /** DetailVatAmount5_CurrencySmoothedDepositDocumentVatAmount - numeric (nullable) */
  DetailVatAmount5_CurrencySmoothedDepositDocumentVatAmount?: number;

  /** IsCompleted - boolean */
  IsCompleted: boolean;

  /** ProgressStateLinesPrintType - smallint */
  ProgressStateLinesPrintType: number;

  /** ProgressStateType - smallint (nullable) */
  ProgressStateType?: number;

  /** GlobalProgressPercentage - numeric */
  GlobalProgressPercentage: number;

  /** GlobalVatIncludedProgressPercentage - numeric */
  GlobalVatIncludedProgressPercentage: number;

  /** SmoothedDepositAmount - numeric */
  SmoothedDepositAmount: number;

  /** SmoothedDepositCurrencyAmount - numeric */
  SmoothedDepositCurrencyAmount: number;

  /** DepositSmoothingCalculationType - smallint */
  DepositSmoothingCalculationType: number;

  /** ForceSmoothedDepositAmount - boolean */
  ForceSmoothedDepositAmount: boolean;

  /** CumulatedSmoothedDepositAmount - numeric */
  CumulatedSmoothedDepositAmount: number;

  /** CumulatedSmoothedDepositCurrencyAmount - numeric */
  CumulatedSmoothedDepositCurrencyAmount: number;

  /** AssociatedProgressStateId - uuid (nullable) */
  AssociatedProgressStateId?: string;

  /** ProgressStateStatus - integer (nullable) */
  ProgressStateStatus?: number;

  /** ProgressStateNumbering - smallint (nullable) */
  ProgressStateNumbering?: number;

  /** PreviousProgressStateDocumentId - uuid (nullable) */
  PreviousProgressStateDocumentId?: string;

  /** NextProgressStateDocumentId - uuid (nullable) */
  NextProgressStateDocumentId?: string;

  /** DeliveryOrderInvoiceState - smallint (nullable) */
  DeliveryOrderInvoiceState?: number;

  /** DeliveryOrderInvoiceBehaviour - smallint (nullable) */
  DeliveryOrderInvoiceBehaviour?: number;

  /** IrpfAmountCalculationBase - numeric */
  IrpfAmountCalculationBase: number;

  /** CurrencyIrpfAmountCalculationBase - numeric */
  CurrencyIrpfAmountCalculationBase: number;

  /** DeliveryConstructionSiteId - text (nullable) */
  DeliveryConstructionSiteId?: string;

  /** PurchaseOrderId - uuid (nullable) */
  PurchaseOrderId?: string;

  /** ProgressEndDate - timestamp without time zone (nullable) */
  ProgressEndDate?: Date | string;

  /** IsEcotaxFurnitureBasedOnAmountVatIncluded - boolean */
  IsEcotaxFurnitureBasedOnAmountVatIncluded: boolean;

  /** IntrastatDestinationOriginCountryId - text (nullable) */
  IntrastatDestinationOriginCountryId?: string;

  /** RemainingAmountToInvoiceVatExcluded - numeric */
  RemainingAmountToInvoiceVatExcluded: number;

  /** RemainingAmountToInvoiceVatIncluded - numeric */
  RemainingAmountToInvoiceVatIncluded: number;

}

