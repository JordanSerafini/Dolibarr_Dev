/**
 * Interface pour la table SaleDocumentEx
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleDocumentEx {
  /** RoundLinesNetPriceVatExcluded - boolean */
  RoundLinesNetPriceVatExcluded: boolean;

  /** DiscountAmountVatIncluded - numeric */
  DiscountAmountVatIncluded: number;

  /** CurrencyDiscountAmountVatIncluded - numeric */
  CurrencyDiscountAmountVatIncluded: number;

  /** IsDiscountAmountVatIncludedEnabled - boolean */
  IsDiscountAmountVatIncludedEnabled: boolean;

  /** IsPosDocument - boolean */
  IsPosDocument: boolean;

  /** IsHeldReceipt - boolean */
  IsHeldReceipt: boolean;

  /** IsSaleInAccount - boolean */
  IsSaleInAccount: boolean;

  /** PosIsLineScaleTransaction - boolean */
  PosIsLineScaleTransaction: boolean;

  /** SettlementFinancialDiscountAmount - numeric */
  SettlementFinancialDiscountAmount: number;

  /** SettlementCurrencyFinancialDiscountAmount - numeric */
  SettlementCurrencyFinancialDiscountAmount: number;

  /** CustomerToUseInCustomerProducts - smallint */
  CustomerToUseInCustomerProducts: number;

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

  /** OpportunityId - text (nullable) */
  OpportunityId?: string;

  /** LinkWithCRM - boolean (nullable) */
  LinkWithCRM?: boolean;

  /** PosTerminalId - text (nullable) */
  PosTerminalId?: string;

  /** ConstructionSiteStartDate - timestamp without time zone (nullable) */
  ConstructionSiteStartDate?: Date | string;

  /** ConstructionSiteEndDate - timestamp without time zone (nullable) */
  ConstructionSiteEndDate?: Date | string;

  /** PlannedReceiptDate - timestamp without time zone (nullable) */
  PlannedReceiptDate?: Date | string;

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

  /** ExecutionQuoteStatus - smallint (nullable) */
  ExecutionQuoteStatus?: number;

  /** CreatorColleagueId - text (nullable) */
  CreatorColleagueId?: string;

  /** AcceptanceDate - timestamp without time zone (nullable) */
  AcceptanceDate?: Date | string;

  /** SignatureDate - timestamp without time zone (nullable) */
  SignatureDate?: Date | string;

  /** SaleOrderId - uuid (nullable) */
  SaleOrderId?: string;

  /** AmendmentDocumentState - integer (nullable) */
  AmendmentDocumentState?: number;

  /** ExecutionQuoteId - uuid (nullable) */
  ExecutionQuoteId?: string;

  /** ProgressEndDate - timestamp without time zone (nullable) */
  ProgressEndDate?: Date | string;

  /** CreatePickStockDocument - boolean */
  CreatePickStockDocument: boolean;

  /** BudgetAmount - numeric */
  BudgetAmount: number;

  /** InitialContractAmountVatExcluded - numeric */
  InitialContractAmountVatExcluded: number;

  /** InitialContractAmountVatIncluded - numeric */
  InitialContractAmountVatIncluded: number;

  /** CurrentContractAmountVatExcluded - numeric */
  CurrentContractAmountVatExcluded: number;

  /** CurrentContractAmountVatIncluded - numeric */
  CurrentContractAmountVatIncluded: number;

  /** FreezeContract - boolean */
  FreezeContract: boolean;

  /** contractProgressionRate - numeric */
  contractProgressionRate: number;

  /** NewContractAmountVatExcluded - numeric */
  NewContractAmountVatExcluded: number;

  /** NewContractAmountVatIncluded - numeric */
  NewContractAmountVatIncluded: number;

  /** CurrencyInitialContractAmountVatExcluded - numeric */
  CurrencyInitialContractAmountVatExcluded: number;

  /** CurrencyInitialContractAmountVatIncluded - numeric */
  CurrencyInitialContractAmountVatIncluded: number;

  /** CurrencyCurrentContractAmountVatExcluded - numeric */
  CurrencyCurrentContractAmountVatExcluded: number;

  /** CurrencyCurrentContractAmountVatIncluded - numeric */
  CurrencyCurrentContractAmountVatIncluded: number;

  /** CurrencyNewContractAmountVatExcluded - numeric */
  CurrencyNewContractAmountVatExcluded: number;

  /** CurrencyNewContractAmountVatIncluded - numeric */
  CurrencyNewContractAmountVatIncluded: number;

  /** DaySchedule0_StartTime - timestamp without time zone */
  DaySchedule0_StartTime: Date | string;

  /** DaySchedule0_EndTime - timestamp without time zone */
  DaySchedule0_EndTime: Date | string;

  /** DaySchedule0_Duration - real */
  DaySchedule0_Duration: number;

  /** DaySchedule0_Active - boolean */
  DaySchedule0_Active: boolean;

  /** DaySchedule0_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchStartTime?: Date | string;

  /** DaySchedule0_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchEndTime?: Date | string;

  /** DaySchedule0_Customize - boolean */
  DaySchedule0_Customize: boolean;

  /** DaySchedule1_StartTime - timestamp without time zone */
  DaySchedule1_StartTime: Date | string;

  /** DaySchedule1_EndTime - timestamp without time zone */
  DaySchedule1_EndTime: Date | string;

  /** DaySchedule1_Duration - real */
  DaySchedule1_Duration: number;

  /** DaySchedule1_Active - boolean */
  DaySchedule1_Active: boolean;

  /** DaySchedule1_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchStartTime?: Date | string;

  /** DaySchedule1_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchEndTime?: Date | string;

  /** DaySchedule1_Customize - boolean */
  DaySchedule1_Customize: boolean;

  /** DaySchedule2_StartTime - timestamp without time zone */
  DaySchedule2_StartTime: Date | string;

  /** DaySchedule2_EndTime - timestamp without time zone */
  DaySchedule2_EndTime: Date | string;

  /** DaySchedule2_Duration - real */
  DaySchedule2_Duration: number;

  /** DaySchedule2_Active - boolean */
  DaySchedule2_Active: boolean;

  /** DaySchedule2_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchStartTime?: Date | string;

  /** DaySchedule2_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchEndTime?: Date | string;

  /** DaySchedule2_Customize - boolean */
  DaySchedule2_Customize: boolean;

  /** DaySchedule3_StartTime - timestamp without time zone */
  DaySchedule3_StartTime: Date | string;

  /** DaySchedule3_EndTime - timestamp without time zone */
  DaySchedule3_EndTime: Date | string;

  /** DaySchedule3_Duration - real */
  DaySchedule3_Duration: number;

  /** DaySchedule3_Active - boolean */
  DaySchedule3_Active: boolean;

  /** DaySchedule3_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchStartTime?: Date | string;

  /** DaySchedule3_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchEndTime?: Date | string;

  /** DaySchedule3_Customize - boolean */
  DaySchedule3_Customize: boolean;

  /** DaySchedule4_StartTime - timestamp without time zone */
  DaySchedule4_StartTime: Date | string;

  /** DaySchedule4_EndTime - timestamp without time zone */
  DaySchedule4_EndTime: Date | string;

  /** DaySchedule4_Duration - real */
  DaySchedule4_Duration: number;

  /** DaySchedule4_Active - boolean */
  DaySchedule4_Active: boolean;

  /** DaySchedule4_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchStartTime?: Date | string;

  /** DaySchedule4_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchEndTime?: Date | string;

  /** DaySchedule4_Customize - boolean */
  DaySchedule4_Customize: boolean;

  /** DaySchedule5_StartTime - timestamp without time zone */
  DaySchedule5_StartTime: Date | string;

  /** DaySchedule5_EndTime - timestamp without time zone */
  DaySchedule5_EndTime: Date | string;

  /** DaySchedule5_Duration - real */
  DaySchedule5_Duration: number;

  /** DaySchedule5_Active - boolean */
  DaySchedule5_Active: boolean;

  /** DaySchedule5_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchStartTime?: Date | string;

  /** DaySchedule5_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchEndTime?: Date | string;

  /** DaySchedule5_Customize - boolean */
  DaySchedule5_Customize: boolean;

  /** DaySchedule6_StartTime - timestamp without time zone */
  DaySchedule6_StartTime: Date | string;

  /** DaySchedule6_EndTime - timestamp without time zone */
  DaySchedule6_EndTime: Date | string;

  /** DaySchedule6_Duration - real */
  DaySchedule6_Duration: number;

  /** DaySchedule6_Active - boolean */
  DaySchedule6_Active: boolean;

  /** DaySchedule6_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchStartTime?: Date | string;

  /** DaySchedule6_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchEndTime?: Date | string;

  /** DaySchedule6_Customize - boolean */
  DaySchedule6_Customize: boolean;

  /** AmendmentAcceptanceDate - timestamp without time zone (nullable) */
  AmendmentAcceptanceDate?: Date | string;

  /** TransferedFromExecutionQuote - boolean */
  TransferedFromExecutionQuote: boolean;

  /** AssociatedQuoteId - uuid (nullable) */
  AssociatedQuoteId?: string;

  /** DepositPercentage - numeric */
  DepositPercentage: number;

  /** DepositInputMode - smallint */
  DepositInputMode: number;

  /** WorksDelay - text (nullable) */
  WorksDelay?: string;

  /** WorksDescription - text (nullable) */
  WorksDescription?: string;

  /** WorksDescriptionClear - text (nullable) */
  WorksDescriptionClear?: string;

  /** SecurityBondAmount - numeric */
  SecurityBondAmount: number;

  /** CurrencySecurityBondAmount - numeric */
  CurrencySecurityBondAmount: number;

  /** SecurityBondAmountForGoodCompletedWork - numeric */
  SecurityBondAmountForGoodCompletedWork: number;

  /** CurrencySecurityBondAmountForGoodCompletedWork - numeric */
  CurrencySecurityBondAmountForGoodCompletedWork: number;

  /** ComplementaryAccountAmount - numeric */
  ComplementaryAccountAmount: number;

  /** CurrencyComplementaryAccountAmount - numeric */
  CurrencyComplementaryAccountAmount: number;

  /** ImportedDatas - boolean (nullable) */
  ImportedDatas?: boolean;

  /** IsTemporary - boolean (nullable) */
  IsTemporary?: boolean;

  /** FreezeContractReferenceDocument - boolean */
  FreezeContractReferenceDocument: boolean;

  /** BuyerReference - text (nullable) */
  BuyerReference?: string;

  /** IssuerAssignedId - text (nullable) */
  IssuerAssignedId?: string;

  /** ChorusFlowId - text (nullable) */
  ChorusFlowId?: string;

  /** ChorusFlowStatus - text (nullable) */
  ChorusFlowStatus?: string;

  /** ChorusFlowComment - text (nullable) */
  ChorusFlowComment?: string;

  /** ValidityDate - timestamp without time zone (nullable) */
  ValidityDate?: Date | string;

  /** ValidityState - smallint (nullable) */
  ValidityState?: number;

  /** NetInterestBase - numeric */
  NetInterestBase: number;

  /** MiscAmountVatIncluded - numeric */
  MiscAmountVatIncluded: number;

  /** IsReferenceDocument - boolean (nullable) */
  IsReferenceDocument?: boolean;

  /** DetailVatAmount0_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount0_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount0_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount0_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount0_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount0_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount0_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount0_UndeterminedItemMarginVatAmount?: number;

  /** DetailVatAmount1_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount1_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount1_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount1_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount1_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount1_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount1_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount1_UndeterminedItemMarginVatAmount?: number;

  /** DetailVatAmount2_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount2_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount2_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount2_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount2_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount2_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount2_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount2_UndeterminedItemMarginVatAmount?: number;

  /** DetailVatAmount3_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount3_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount3_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount3_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount3_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount3_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount3_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount3_UndeterminedItemMarginVatAmount?: number;

  /** DetailVatAmount4_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount4_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount4_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount4_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount4_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount4_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount4_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount4_UndeterminedItemMarginVatAmount?: number;

  /** DetailVatAmount5_DeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount5_DeterminedItemMarginAmount?: number;

  /** DetailVatAmount5_UndeterminedItemMarginAmount - numeric (nullable) */
  DetailVatAmount5_UndeterminedItemMarginAmount?: number;

  /** DetailVatAmount5_DeterminedItemMarginVatAmount - numeric */
  DetailVatAmount5_DeterminedItemMarginVatAmount: number;

  /** DetailVatAmount5_UndeterminedItemMarginVatAmount - numeric (nullable) */
  DetailVatAmount5_UndeterminedItemMarginVatAmount?: number;

  /** IssuerMarketId - text (nullable) */
  IssuerMarketId?: string;

  /** ScheduleEventId - uuid (nullable) */
  ScheduleEventId?: string;

  /** ThirdOrderNumber - text (nullable) */
  ThirdOrderNumber?: string;

  /** NeotouchSendingType - smallint */
  NeotouchSendingType: number;

  /** NeotouchDuplicateSendingType - smallint */
  NeotouchDuplicateSendingType: number;

  /** NeotouchStatus - smallint (nullable) */
  NeotouchStatus?: number;

  /** NeotouchContactsIdForDuplicate - text (nullable) */
  NeotouchContactsIdForDuplicate?: string;

  /** JefactureStatus - smallint (nullable) */
  JefactureStatus?: number;

  /** JefactureId - integer (nullable) */
  JefactureId?: number;

  /** IntrastatDestinationOriginCountryId - text (nullable) */
  IntrastatDestinationOriginCountryId?: string;

  /** RemainingAmountToInvoiceVatExcluded - numeric */
  RemainingAmountToInvoiceVatExcluded: number;

  /** RemainingAmountToInvoiceVatIncluded - numeric */
  RemainingAmountToInvoiceVatIncluded: number;

  /** TicketBaiStatus - smallint (nullable) */
  TicketBaiStatus?: number;

  /** MyUnisoftStatus - smallint (nullable) */
  MyUnisoftStatus?: number;

  /** TicketBaiId - integer (nullable) */
  TicketBaiId?: number;

  /** UrlTicketBAIId - text (nullable) */
  UrlTicketBAIId?: string;

  /** UrssafServiceBeginDate - timestamp without time zone (nullable) */
  UrssafServiceBeginDate?: Date | string;

  /** UrssafServiceEndDate - timestamp without time zone (nullable) */
  UrssafServiceEndDate?: Date | string;

  /** UrssafPaymentId - text (nullable) */
  UrssafPaymentId?: string;

  /** UrssafStatusId - text (nullable) */
  UrssafStatusId?: string;

  /** UrssafStatusCaption - text (nullable) */
  UrssafStatusCaption?: string;

  /** UrssafPaymentDate - timestamp without time zone (nullable) */
  UrssafPaymentDate?: Date | string;

  /** UrssafPaymentAmount - numeric */
  UrssafPaymentAmount: number;

  /** PlatformPaymentId - text (nullable) */
  PlatformPaymentId?: string;

  /** PlatformPaymentType - smallint (nullable) */
  PlatformPaymentType?: number;

  /** CategoryOperation - smallint (nullable) */
  CategoryOperation?: number;

  /** GlnThird - text (nullable) */
  GlnThird?: string;

  /** GlnPaymentThird - text (nullable) */
  GlnPaymentThird?: string;

  /** VatExemptionReasonId - uuid (nullable) */
  VatExemptionReasonId?: string;

  /** VatexCode - text (nullable) */
  VatexCode?: string;

  /** CategoryCode - text (nullable) */
  CategoryCode?: string;

}

