/**
 * Interface pour la table PurchaseDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocument {
  /** RemainingAmountToDeliverVatExcluded - numeric */
  RemainingAmountToDeliverVatExcluded: number;

  /** KeepDepositVatAmount - boolean */
  KeepDepositVatAmount: boolean;

  /** DocumentLanguage - text */
  DocumentLanguage: string;

  /** CurrencyInvoicingChargesAmountVatExcluded - numeric */
  CurrencyInvoicingChargesAmountVatExcluded: number;

  /** LoadFabricationComponentsMode - smallint */
  LoadFabricationComponentsMode: number;

  /** TotalApproachChargeToDistributeAmount - numeric */
  TotalApproachChargeToDistributeAmount: number;

  /** CurrencyTotalApproachChargeToDistributeAmount - numeric */
  CurrencyTotalApproachChargeToDistributeAmount: number;

  /** TotalApproachChargeAlreadyDistributedAmount - numeric */
  TotalApproachChargeAlreadyDistributedAmount: number;

  /** CurrencyTotalApproachChargeAlreadyDistributedAmount - numeric */
  CurrencyTotalApproachChargeAlreadyDistributedAmount: number;

  /** IsStructuredSepaCommunication - boolean */
  IsStructuredSepaCommunication: boolean;

  /** OtherTaxAmountNotSubjectToVat - numeric */
  OtherTaxAmountNotSubjectToVat: number;

  /** CurrencyOtherTaxAmountNotSubjectToVat - numeric */
  CurrencyOtherTaxAmountNotSubjectToVat: number;

  /** FixedShippingAmount - boolean */
  FixedShippingAmount: boolean;

  /** DoNotCreateMovement - boolean */
  DoNotCreateMovement: boolean;

  /** IsVatExcludedEcotaxCalculation - boolean */
  IsVatExcludedEcotaxCalculation: boolean;

  /** SerialId - text */
  SerialId: string;

  /** InvoicingChargesNotSubjectToFinancialDiscount - boolean */
  InvoicingChargesNotSubjectToFinancialDiscount: boolean;

  /** InvoicingChargesAmountVatExcluded - numeric */
  InvoicingChargesAmountVatExcluded: number;

  /** DeliveryAddress_City - text */
  DeliveryAddress_City: string;

  /** DetailVatAmount5_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount5_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount5_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount5_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount5_CurrencyTaxAmount - numeric */
  DetailVatAmount5_CurrencyTaxAmount: number;

  /** DetailVatAmount5_CurrencyTaxVatAmount - numeric */
  DetailVatAmount5_CurrencyTaxVatAmount: number;

  /** DetailVatAmount5_CurrencyREAmount - numeric */
  DetailVatAmount5_CurrencyREAmount: number;

  /** CurrencyOtherTaxAmount - numeric */
  CurrencyOtherTaxAmount: number;

  /** DetailTaxAmount0_CurrencyBaseAmount - numeric */
  DetailTaxAmount0_CurrencyBaseAmount: number;

  /** DetailTaxAmount0_CurrencyTaxAmount - numeric */
  DetailTaxAmount0_CurrencyTaxAmount: number;

  /** DetailTaxAmount1_CurrencyBaseAmount - numeric */
  DetailTaxAmount1_CurrencyBaseAmount: number;

  /** DetailTaxAmount1_CurrencyTaxAmount - numeric */
  DetailTaxAmount1_CurrencyTaxAmount: number;

  /** DetailTaxAmount2_CurrencyBaseAmount - numeric */
  DetailTaxAmount2_CurrencyBaseAmount: number;

  /** DetailTaxAmount2_CurrencyTaxAmount - numeric */
  DetailTaxAmount2_CurrencyTaxAmount: number;

  /** DetailTaxAmount3_CurrencyBaseAmount - numeric */
  DetailTaxAmount3_CurrencyBaseAmount: number;

  /** DetailTaxAmount3_CurrencyTaxAmount - numeric */
  DetailTaxAmount3_CurrencyTaxAmount: number;

  /** DetailTaxAmount4_CurrencyBaseAmount - numeric */
  DetailTaxAmount4_CurrencyBaseAmount: number;

  /** DetailTaxAmount4_CurrencyTaxAmount - numeric */
  DetailTaxAmount4_CurrencyTaxAmount: number;

  /** DetailTaxAmount5_CurrencyBaseAmount - numeric */
  DetailTaxAmount5_CurrencyBaseAmount: number;

  /** DetailTaxAmount5_CurrencyTaxAmount - numeric */
  DetailTaxAmount5_CurrencyTaxAmount: number;

  /** AutomaticSettlementGeneration - boolean */
  AutomaticSettlementGeneration: boolean;

  /** RemainingDepositAmount - numeric */
  RemainingDepositAmount: number;

  /** RemainingDepositCurrencyAmount - numeric */
  RemainingDepositCurrencyAmount: number;

  /** RemainingAmountToDeliver - numeric */
  RemainingAmountToDeliver: number;

  /** DeliveryAddressType - smallint */
  DeliveryAddressType: number;

  /** DetailVatAmount1_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount1_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount1_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount1_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount1_CurrencyTaxAmount - numeric */
  DetailVatAmount1_CurrencyTaxAmount: number;

  /** DetailVatAmount1_CurrencyTaxVatAmount - numeric */
  DetailVatAmount1_CurrencyTaxVatAmount: number;

  /** DetailVatAmount1_CurrencyREAmount - numeric */
  DetailVatAmount1_CurrencyREAmount: number;

  /** DetailVatAmount2_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount2_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount2_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount2_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount2_CurrencyTaxAmount - numeric */
  DetailVatAmount2_CurrencyTaxAmount: number;

  /** DetailVatAmount2_CurrencyTaxVatAmount - numeric */
  DetailVatAmount2_CurrencyTaxVatAmount: number;

  /** DetailVatAmount2_CurrencyREAmount - numeric */
  DetailVatAmount2_CurrencyREAmount: number;

  /** DetailVatAmount3_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount3_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount3_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount3_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount3_CurrencyTaxAmount - numeric */
  DetailVatAmount3_CurrencyTaxAmount: number;

  /** DetailVatAmount3_CurrencyTaxVatAmount - numeric */
  DetailVatAmount3_CurrencyTaxVatAmount: number;

  /** DetailVatAmount3_CurrencyREAmount - numeric */
  DetailVatAmount3_CurrencyREAmount: number;

  /** DetailVatAmount4_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount4_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount4_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount4_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount4_CurrencyTaxAmount - numeric */
  DetailVatAmount4_CurrencyTaxAmount: number;

  /** DetailVatAmount4_CurrencyTaxVatAmount - numeric */
  DetailVatAmount4_CurrencyTaxVatAmount: number;

  /** DetailVatAmount4_CurrencyREAmount - numeric */
  DetailVatAmount4_CurrencyREAmount: number;

  /** DetailVatAmount0_CurrencyVatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount0_CurrencyVatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount0_CurrencyVatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount0_CurrencyVatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount0_CurrencyTaxAmount - numeric */
  DetailVatAmount0_CurrencyTaxAmount: number;

  /** DetailVatAmount0_CurrencyTaxVatAmount - numeric */
  DetailVatAmount0_CurrencyTaxVatAmount: number;

  /** DetailVatAmount0_CurrencyREAmount - numeric */
  DetailVatAmount0_CurrencyREAmount: number;

  /** ShippingNotSubjectToFinancialDiscount - boolean */
  ShippingNotSubjectToFinancialDiscount: boolean;

  /** SendedByMail - boolean */
  SendedByMail: boolean;

  /** InvoicingAddress_City - text */
  InvoicingAddress_City: string;

  /** InvoicingAddress_Npai - boolean */
  InvoicingAddress_Npai: boolean;

  /** InvoicingAddress_CountryIsoCode - text */
  InvoicingAddress_CountryIsoCode: string;

  /** DeliveryAddress_CountryIsoCode - text */
  DeliveryAddress_CountryIsoCode: string;

  /** DeliveryAddress_Npai - boolean */
  DeliveryAddress_Npai: boolean;

  /** UseInvoicingAddressAsDeliveryAddress - boolean */
  UseInvoicingAddressAsDeliveryAddress: boolean;

  /** UseInvoicingContactAsDeliveryContact - boolean */
  UseInvoicingContactAsDeliveryContact: boolean;

  /** ShippingAmountVatExcluded - numeric */
  ShippingAmountVatExcluded: number;

  /** AmountVatExcludedWithDiscountAndShipping - numeric */
  AmountVatExcludedWithDiscountAndShipping: number;

  /** AmountVatExcludedWithDiscountAndShippingWithoutEcotax - numeric */
  AmountVatExcludedWithDiscountAndShippingWithoutEcotax: number;

  /** VatAmountWithoutEcotax - numeric */
  VatAmountWithoutEcotax: number;

  /** VatAmount - numeric */
  VatAmount: number;

  /** AmountVatIncluded - numeric */
  AmountVatIncluded: number;

  /** PreviousDepositAmount - numeric */
  PreviousDepositAmount: number;

  /** DepositAmount - numeric */
  DepositAmount: number;

  /** DepositCurrencyAmount - numeric */
  DepositCurrencyAmount: number;

  /** PreviousDepositCurrencyAmount - numeric */
  PreviousDepositCurrencyAmount: number;

  /** TotalDueAmount - numeric */
  TotalDueAmount: number;

  /** IsEcotaxAmountIncludedToDueAmount - boolean */
  IsEcotaxAmountIncludedToDueAmount: boolean;

  /** EcotaxAmountVatExcluded - numeric */
  EcotaxAmountVatExcluded: number;

  /** EcotaxVatAmount - numeric */
  EcotaxVatAmount: number;

  /** EcotaxAmountVatIncluded - numeric */
  EcotaxAmountVatIncluded: number;

  /** DetailVatAmount0_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount0_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount0_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount0_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount0_TaxAmount - numeric */
  DetailVatAmount0_TaxAmount: number;

  /** DetailVatAmount0_TaxVatAmount - numeric */
  DetailVatAmount0_TaxVatAmount: number;

  /** DetailVatAmount0_REAmount - numeric */
  DetailVatAmount0_REAmount: number;

  /** DetailVatAmount1_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount1_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount1_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount1_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount1_TaxAmount - numeric */
  DetailVatAmount1_TaxAmount: number;

  /** DetailVatAmount1_TaxVatAmount - numeric */
  DetailVatAmount1_TaxVatAmount: number;

  /** DetailVatAmount1_REAmount - numeric */
  DetailVatAmount1_REAmount: number;

  /** CommitmentsBalanceDue - numeric */
  CommitmentsBalanceDue: number;

  /** AmountVatExcluded - numeric */
  AmountVatExcluded: number;

  /** CostPrice - numeric */
  CostPrice: number;

  /** DiscountRate - numeric */
  DiscountRate: number;

  /** DiscountAmount - numeric */
  DiscountAmount: number;

  /** AmountVatExcludedWithDiscount - numeric */
  AmountVatExcludedWithDiscount: number;

  /** DetailVatAmount2_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount2_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount2_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount2_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount2_TaxAmount - numeric */
  DetailVatAmount2_TaxAmount: number;

  /** DetailVatAmount2_TaxVatAmount - numeric */
  DetailVatAmount2_TaxVatAmount: number;

  /** DetailVatAmount2_REAmount - numeric */
  DetailVatAmount2_REAmount: number;

  /** CloseOrderToReplenishment - boolean */
  CloseOrderToReplenishment: boolean;

  /** CloseOrderToCountermark - boolean */
  CloseOrderToCountermark: boolean;

  /** SubjectToRE - boolean */
  SubjectToRE: boolean;

  /** REAmount - numeric */
  REAmount: number;

  /** TotalNetWeight - numeric */
  TotalNetWeight: number;

  /** CorrectionType - smallint */
  CorrectionType: number;

  /** IRPFAmount - numeric */
  IRPFAmount: number;

  /** IRPFRate - numeric */
  IRPFRate: number;

  /** PriceWithTaxBased - boolean */
  PriceWithTaxBased: boolean;

  /** DocumentType - smallint */
  DocumentType: number;

  /** SupplierId - text */
  SupplierId: string;

  /** SupplierName - text */
  SupplierName: string;

  /** CurrencyConversionRate - numeric */
  CurrencyConversionRate: number;

  /** CurrencyTotalDueAmount - numeric */
  CurrencyTotalDueAmount: number;

  /** CommitmentsCurrencyBalanceDue - numeric */
  CommitmentsCurrencyBalanceDue: number;

  /** CurrencyAmountVatIncluded - numeric */
  CurrencyAmountVatIncluded: number;

  /** CurrencyApplicationType - smallint */
  CurrencyApplicationType: number;

  /** CurrencyAmountVatExcluded - numeric */
  CurrencyAmountVatExcluded: number;

  /** CurrencyAmountVatExcludedWithDiscountAndShipping - numeric */
  CurrencyAmountVatExcludedWithDiscountAndShipping: number;

  /** CurrencyAmountWithFinancialDiscount - numeric */
  CurrencyAmountWithFinancialDiscount: number;

  /** CurrencyShippingAmountVatExcluded - numeric */
  CurrencyShippingAmountVatExcluded: number;

  /** CurrencyAmountVatExcludedWithDiscount - numeric */
  CurrencyAmountVatExcludedWithDiscount: number;

  /** CurrencyAmountVatExcludedWithDiscountAndShippingWithoutEcotax - numeric */
  CurrencyAmountVatExcludedWithDiscountAndShippingWithoutEcotax: number;

  /** CurrencyEcotaxAmountVatIncluded - numeric */
  CurrencyEcotaxAmountVatIncluded: number;

  /** CurrencyFinancialDiscountAmount - numeric */
  CurrencyFinancialDiscountAmount: number;

  /** CurrencyVatAmountWithoutEcotax - numeric */
  CurrencyVatAmountWithoutEcotax: number;

  /** CurrencyEcotaxVatAmount - numeric */
  CurrencyEcotaxVatAmount: number;

  /** CurrencyEcotaxAmountVatExcluded - numeric */
  CurrencyEcotaxAmountVatExcluded: number;

  /** CurrencyVatAmount - numeric */
  CurrencyVatAmount: number;

  /** CurrencyDiscountAmount - numeric */
  CurrencyDiscountAmount: number;

  /** DetailTaxAmount3_BaseAmount - numeric */
  DetailTaxAmount3_BaseAmount: number;

  /** DetailTaxAmount3_TaxAmount - numeric */
  DetailTaxAmount3_TaxAmount: number;

  /** DetailTaxAmount4_BaseAmount - numeric */
  DetailTaxAmount4_BaseAmount: number;

  /** DetailTaxAmount4_TaxAmount - numeric */
  DetailTaxAmount4_TaxAmount: number;

  /** DetailTaxAmount5_BaseAmount - numeric */
  DetailTaxAmount5_BaseAmount: number;

  /** DetailTaxAmount5_TaxAmount - numeric */
  DetailTaxAmount5_TaxAmount: number;

  /** ShippingAmountInclusionType - smallint */
  ShippingAmountInclusionType: number;

  /** Printed - boolean */
  Printed: boolean;

  /** DetailVatAmount3_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount3_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount3_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount3_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount3_TaxAmount - numeric */
  DetailVatAmount3_TaxAmount: number;

  /** DetailVatAmount3_TaxVatAmount - numeric */
  DetailVatAmount3_TaxVatAmount: number;

  /** DetailVatAmount3_REAmount - numeric */
  DetailVatAmount3_REAmount: number;

  /** DetailVatAmount4_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount4_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount4_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount4_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount4_TaxAmount - numeric */
  DetailVatAmount4_TaxAmount: number;

  /** DetailVatAmount4_TaxVatAmount - numeric */
  DetailVatAmount4_TaxVatAmount: number;

  /** DetailVatAmount4_REAmount - numeric */
  DetailVatAmount4_REAmount: number;

  /** DetailVatAmount5_VatAmountOnCollectionWithoutDeposit - numeric */
  DetailVatAmount5_VatAmountOnCollectionWithoutDeposit: number;

  /** DetailVatAmount5_VatAmountOnDebitWithoutDeposit - numeric */
  DetailVatAmount5_VatAmountOnDebitWithoutDeposit: number;

  /** DetailVatAmount5_TaxAmount - numeric */
  DetailVatAmount5_TaxAmount: number;

  /** DetailVatAmount5_TaxVatAmount - numeric */
  DetailVatAmount5_TaxVatAmount: number;

  /** DetailVatAmount5_REAmount - numeric */
  DetailVatAmount5_REAmount: number;

  /** VatMode - smallint */
  VatMode: number;

  /** NumberOfPackage - integer */
  NumberOfPackage: number;

  /** IsCustomNumberOfPackage - boolean */
  IsCustomNumberOfPackage: boolean;

  /** OtherTaxAmount - numeric */
  OtherTaxAmount: number;

  /** FinancialDiscountType - smallint */
  FinancialDiscountType: number;

  /** FinancialDiscountRate - numeric */
  FinancialDiscountRate: number;

  /** FinancialDiscountAmount - numeric */
  FinancialDiscountAmount: number;

  /** AmountWithFinancialDiscount - numeric */
  AmountWithFinancialDiscount: number;

  /** ReportId - uuid */
  ReportId: string;

  /** NumberOfCopies - integer */
  NumberOfCopies: number;

  /** DetailTaxAmount0_BaseAmount - numeric */
  DetailTaxAmount0_BaseAmount: number;

  /** DetailTaxAmount0_TaxAmount - numeric */
  DetailTaxAmount0_TaxAmount: number;

  /** DetailTaxAmount1_BaseAmount - numeric */
  DetailTaxAmount1_BaseAmount: number;

  /** DetailTaxAmount1_TaxAmount - numeric */
  DetailTaxAmount1_TaxAmount: number;

  /** DetailTaxAmount2_BaseAmount - numeric */
  DetailTaxAmount2_BaseAmount: number;

  /** DetailTaxAmount2_TaxAmount - numeric */
  DetailTaxAmount2_TaxAmount: number;

  /** TotalVolume - numeric */
  TotalVolume: number;

  /** TotalWeight - numeric */
  TotalWeight: number;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

  /** VatId - uuid */
  VatId: string;

  /** Id - uuid */
  Id: string;

  /** DocumentNumber - text */
  DocumentNumber: string;

  /** NumberPrefix - text */
  NumberPrefix: string;

  /** NumberSuffix - numeric */
  NumberSuffix: number;

  /** DocumentDate - timestamp without time zone */
  DocumentDate: Date | string;

  /** GlobalDocumentOrder - integer */
  GlobalDocumentOrder: number;

  /** DispatchedByStorehouse - boolean */
  DispatchedByStorehouse: boolean;

  /** InvoicingAddress_ZipCode - text (nullable) */
  InvoicingAddress_ZipCode?: string;

  /** DeliveryAddress_ZipCode - text (nullable) */
  DeliveryAddress_ZipCode?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** OrderThirdId - text (nullable) */
  OrderThirdId?: string;

  /** PaymentThirdId - text (nullable) */
  PaymentThirdId?: string;

  /** InvoicingThirdId - text (nullable) */
  InvoicingThirdId?: string;

  /** TaxIds0 - uuid (nullable) */
  TaxIds0?: string;

  /** TaxIds1 - uuid (nullable) */
  TaxIds1?: string;

  /** TaxIds2 - uuid (nullable) */
  TaxIds2?: string;

  /** DetailVatAmount0_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount0_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount1_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount1_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount1_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount1_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount1_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount1_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount1_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount1_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount1_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount1_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount1_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount1_CurrencyVatAmountOnCollection?: number;

  /** DetailVatAmount4_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount4_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount5_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount5_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount5_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount5_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount5_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount5_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount5_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount5_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount5_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount5_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount5_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount5_CurrencyVatAmountOnCollection?: number;

  /** DetailVatAmount3_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount3_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount4_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount4_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount4_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount4_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount4_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount4_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount4_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount4_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount4_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount4_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount4_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount4_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount4_CurrencyVatAmountOnCollection?: number;

  /** DetailVatAmount2_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount2_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount3_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount3_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount3_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount3_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount3_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount3_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount3_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount3_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount3_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount3_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount3_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount3_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount3_CurrencyVatAmountOnCollection?: number;

  /** DetailVatAmount1_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount1_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount1_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount2_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount2_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount2_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount2_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount2_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount2_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount2_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount2_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount2_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount2_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount2_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount2_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount2_CurrencyVatAmountOnCollection?: number;

  /** DeliveryCustomerId - text (nullable) */
  DeliveryCustomerId?: string;

  /** DeliveryStorehouseId - uuid (nullable) */
  DeliveryStorehouseId?: string;

  /** DeliveryOrderPreparationState - smallint (nullable) */
  DeliveryOrderPreparationState?: number;

  /** ReturnOrderPreparationState - smallint (nullable) */
  ReturnOrderPreparationState?: number;

  /** DetailVatAmount5_CurrencyDetailDepositREAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailDepositREAmount?: number;

  /** DetailVatAmount5_CurrencyDetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount5_CurrencyDetailREAmountWithoutDepositAmount?: number;

  /** DetailTaxAmount2_TaxCaption - text (nullable) */
  DetailTaxAmount2_TaxCaption?: string;

  /** DetailTaxAmount3_TaxId - uuid (nullable) */
  DetailTaxAmount3_TaxId?: string;

  /** DetailTaxAmount3_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount3_TaxCalculationBase?: number;

  /** DetailTaxAmount1_TaxCaption - text (nullable) */
  DetailTaxAmount1_TaxCaption?: string;

  /** DetailTaxAmount2_TaxId - uuid (nullable) */
  DetailTaxAmount2_TaxId?: string;

  /** DetailTaxAmount2_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount2_TaxCalculationBase?: number;

  /** DetailTaxAmount0_TaxCaption - text (nullable) */
  DetailTaxAmount0_TaxCaption?: string;

  /** DetailTaxAmount1_TaxId - uuid (nullable) */
  DetailTaxAmount1_TaxId?: string;

  /** DetailTaxAmount1_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount1_TaxCalculationBase?: number;

  /** DetailVatAmount3_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount3_DetailDepositVatAmount?: number;

  /** DetailVatAmount3_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount3_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount3_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount3_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount3_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount3_EcotaxVatAmount?: number;

  /** DetailVatAmount3_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount3_VatAmountOnDebit?: number;

  /** DetailVatAmount3_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount3_VatAmountOnCollection?: number;

  /** ThirdBankAccountId - uuid (nullable) */
  ThirdBankAccountId?: string;

  /** DetailTaxAmount0_TaxId - uuid (nullable) */
  DetailTaxAmount0_TaxId?: string;

  /** DetailTaxAmount0_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount0_TaxCalculationBase?: number;

  /** DetailVatAmount5_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount5_DetailDepositREAmount?: number;

  /** DetailVatAmount5_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount5_DetailREAmountWithoutDepositAmount?: number;

  /** PaymentTypeId - text (nullable) */
  PaymentTypeId?: string;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** DetailVatAmount4_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount4_DetailDepositREAmount?: number;

  /** DetailVatAmount4_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount4_DetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount5_DetailVatId - uuid (nullable) */
  DetailVatAmount5_DetailVatId?: string;

  /** DetailVatAmount5_DetailVatRate - numeric (nullable) */
  DetailVatAmount5_DetailVatRate?: number;

  /** DetailVatAmount5_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_DetailAmountVatExcluded?: number;

  /** DetailVatAmount5_DetailVatAmount - numeric (nullable) */
  DetailVatAmount5_DetailVatAmount?: number;

  /** DetailVatAmount5_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_DetailAmountVatIncluded?: number;

  /** DetailVatAmount5_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount5_DetailDepositVatAmount?: number;

  /** DetailVatAmount5_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount5_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount5_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount5_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount5_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount5_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount5_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount5_EcotaxVatAmount?: number;

  /** DetailVatAmount5_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount5_VatAmountOnDebit?: number;

  /** DetailVatAmount5_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount5_VatAmountOnCollection?: number;

  /** DetailVatAmount3_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount3_DetailDepositREAmount?: number;

  /** DetailVatAmount3_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount3_DetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount4_DetailVatId - uuid (nullable) */
  DetailVatAmount4_DetailVatId?: string;

  /** DetailVatAmount4_DetailVatRate - numeric (nullable) */
  DetailVatAmount4_DetailVatRate?: number;

  /** DetailVatAmount4_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_DetailAmountVatExcluded?: number;

  /** DetailVatAmount4_DetailVatAmount - numeric (nullable) */
  DetailVatAmount4_DetailVatAmount?: number;

  /** DetailVatAmount4_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_DetailAmountVatIncluded?: number;

  /** DetailVatAmount4_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount4_DetailDepositVatAmount?: number;

  /** DetailVatAmount4_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount4_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount4_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount4_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount4_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount4_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount4_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount4_EcotaxVatAmount?: number;

  /** DetailVatAmount4_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount4_VatAmountOnDebit?: number;

  /** DetailVatAmount4_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount4_VatAmountOnCollection?: number;

  /** IntrastatTransportMode - text (nullable) */
  IntrastatTransportMode?: string;

  /** IntrastatTransactionNature - text (nullable) */
  IntrastatTransactionNature?: string;

  /** AppliedPriceListLineId - uuid (nullable) */
  AppliedPriceListLineId?: string;

  /** PriceListCategory - text (nullable) */
  PriceListCategory?: string;

  /** ShippingVatId - uuid (nullable) */
  ShippingVatId?: string;

  /** InvoicingChargesVatId - uuid (nullable) */
  InvoicingChargesVatId?: string;

  /** DetailTaxAmount5_TaxCaption - text (nullable) */
  DetailTaxAmount5_TaxCaption?: string;

  /** CompanyBankId - text (nullable) */
  CompanyBankId?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** DetailTaxAmount4_TaxCaption - text (nullable) */
  DetailTaxAmount4_TaxCaption?: string;

  /** DetailTaxAmount5_TaxId - uuid (nullable) */
  DetailTaxAmount5_TaxId?: string;

  /** DetailTaxAmount5_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount5_TaxCalculationBase?: number;

  /** DetailTaxAmount3_TaxCaption - text (nullable) */
  DetailTaxAmount3_TaxCaption?: string;

  /** DetailTaxAmount4_TaxId - uuid (nullable) */
  DetailTaxAmount4_TaxId?: string;

  /** DetailTaxAmount4_TaxCalculationBase - smallint (nullable) */
  DetailTaxAmount4_TaxCalculationBase?: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** SupplierCivility - text (nullable) */
  SupplierCivility?: string;

  /** SupplierIntracommunityVatNumber - text (nullable) */
  SupplierIntracommunityVatNumber?: string;

  /** OriginDocumentType - smallint (nullable) */
  OriginDocumentType?: number;

  /** BankId - text (nullable) */
  BankId?: string;

  /** IdentificationType - smallint (nullable) */
  IdentificationType?: number;

  /** CorrectionCause - text (nullable) */
  CorrectionCause?: string;

  /** CorrectionReasonId - text (nullable) */
  CorrectionReasonId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** DeliveryAddress_State - text (nullable) */
  DeliveryAddress_State?: string;

  /** DetailVatAmount2_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount2_DetailDepositREAmount?: number;

  /** DetailVatAmount2_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount2_DetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount3_DetailVatId - uuid (nullable) */
  DetailVatAmount3_DetailVatId?: string;

  /** DetailVatAmount3_DetailVatRate - numeric (nullable) */
  DetailVatAmount3_DetailVatRate?: number;

  /** DetailVatAmount3_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount3_DetailAmountVatExcluded?: number;

  /** DetailVatAmount3_DetailVatAmount - numeric (nullable) */
  DetailVatAmount3_DetailVatAmount?: number;

  /** DetailVatAmount3_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount3_DetailAmountVatIncluded?: number;

  /** ShippingId - text (nullable) */
  ShippingId?: string;

  /** DetailVatAmount1_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount1_DetailDepositREAmount?: number;

  /** DetailVatAmount1_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount1_DetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount2_DetailVatId - uuid (nullable) */
  DetailVatAmount2_DetailVatId?: string;

  /** DetailVatAmount2_DetailVatRate - numeric (nullable) */
  DetailVatAmount2_DetailVatRate?: number;

  /** DetailVatAmount2_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_DetailAmountVatExcluded?: number;

  /** DetailVatAmount2_DetailVatAmount - numeric (nullable) */
  DetailVatAmount2_DetailVatAmount?: number;

  /** DetailVatAmount2_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_DetailAmountVatIncluded?: number;

  /** DetailVatAmount2_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount2_DetailDepositVatAmount?: number;

  /** DetailVatAmount2_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount2_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount2_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount2_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount2_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount2_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount2_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount2_EcotaxVatAmount?: number;

  /** DetailVatAmount2_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount2_VatAmountOnDebit?: number;

  /** DetailVatAmount2_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount2_VatAmountOnCollection?: number;

  /** DetailVatAmount0_DetailDepositREAmount - numeric (nullable) */
  DetailVatAmount0_DetailDepositREAmount?: number;

  /** DetailVatAmount0_DetailREAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount0_DetailREAmountWithoutDepositAmount?: number;

  /** DetailVatAmount1_DetailVatId - uuid (nullable) */
  DetailVatAmount1_DetailVatId?: string;

  /** DetailVatAmount1_DetailVatRate - numeric (nullable) */
  DetailVatAmount1_DetailVatRate?: number;

  /** DetailVatAmount1_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_DetailAmountVatExcluded?: number;

  /** DetailVatAmount1_DetailVatAmount - numeric (nullable) */
  DetailVatAmount1_DetailVatAmount?: number;

  /** DetailVatAmount1_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_DetailAmountVatIncluded?: number;

  /** DetailVatAmount1_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount1_DetailDepositVatAmount?: number;

  /** DetailVatAmount1_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount1_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount1_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount1_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount1_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount1_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount1_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount1_EcotaxVatAmount?: number;

  /** DetailVatAmount1_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount1_VatAmountOnDebit?: number;

  /** DetailVatAmount1_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount1_VatAmountOnCollection?: number;

  /** DetailVatAmount0_DetailVatId - uuid (nullable) */
  DetailVatAmount0_DetailVatId?: string;

  /** DetailVatAmount0_DetailVatRate - numeric (nullable) */
  DetailVatAmount0_DetailVatRate?: number;

  /** DetailVatAmount0_DetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_DetailAmountVatExcluded?: number;

  /** DetailVatAmount0_DetailVatAmount - numeric (nullable) */
  DetailVatAmount0_DetailVatAmount?: number;

  /** DetailVatAmount0_DetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_DetailAmountVatIncluded?: number;

  /** DetailVatAmount0_DetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount0_DetailDepositVatAmount?: number;

  /** DetailVatAmount0_DetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount0_DetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount0_EcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_EcotaxAmountVatExcluded?: number;

  /** DetailVatAmount0_EcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_EcotaxAmountVatIncluded?: number;

  /** DetailVatAmount0_EcotaxVatAmount - numeric (nullable) */
  DetailVatAmount0_EcotaxVatAmount?: number;

  /** DetailVatAmount0_VatAmountOnDebit - numeric (nullable) */
  DetailVatAmount0_VatAmountOnDebit?: number;

  /** DetailVatAmount0_VatAmountOnCollection - numeric (nullable) */
  DetailVatAmount0_VatAmountOnCollection?: number;

  /** SettlementModeId - text (nullable) */
  SettlementModeId?: string;

  /** ValidationState - smallint (nullable) */
  ValidationState?: number;

  /** DocumentState - integer (nullable) */
  DocumentState?: number;

  /** ValidityDate - timestamp without time zone (nullable) */
  ValidityDate?: Date | string;

  /** DeliveryDate - timestamp without time zone (nullable) */
  DeliveryDate?: Date | string;

  /** DeliveryState - smallint (nullable) */
  DeliveryState?: number;

  /** DeliveryAddress_WebSite - text (nullable) */
  DeliveryAddress_WebSite?: string;

  /** DeliveryAddress_Longitude - numeric (nullable) */
  DeliveryAddress_Longitude?: number;

  /** DeliveryAddress_Latitude - numeric (nullable) */
  DeliveryAddress_Latitude?: number;

  /** DeliveryContact_Civility - text (nullable) */
  DeliveryContact_Civility?: string;

  /** DeliveryContact_Name - text (nullable) */
  DeliveryContact_Name?: string;

  /** DeliveryContact_FirstName - text (nullable) */
  DeliveryContact_FirstName?: string;

  /** DeliveryContact_Phone - text (nullable) */
  DeliveryContact_Phone?: string;

  /** DeliveryContact_CellPhone - text (nullable) */
  DeliveryContact_CellPhone?: string;

  /** DeliveryContact_Fax - text (nullable) */
  DeliveryContact_Fax?: string;

  /** DeliveryContact_Email - text (nullable) */
  DeliveryContact_Email?: string;

  /** DeliveryContact_Function - text (nullable) */
  DeliveryContact_Function?: string;

  /** DeliveryContact_Department - text (nullable) */
  DeliveryContact_Department?: string;

  /** DeliveryAddress_Description - text (nullable) */
  DeliveryAddress_Description?: string;

  /** DeliveryAddress_Civility - text (nullable) */
  DeliveryAddress_Civility?: string;

  /** DeliveryAddress_ThirdName - text (nullable) */
  DeliveryAddress_ThirdName?: string;

  /** InvoicingAddress_Description - text (nullable) */
  InvoicingAddress_Description?: string;

  /** InvoicingAddress_Civility - text (nullable) */
  InvoicingAddress_Civility?: string;

  /** InvoicingAddress_ThirdName - text (nullable) */
  InvoicingAddress_ThirdName?: string;

  /** DeliveryAddress_Address1 - text (nullable) */
  DeliveryAddress_Address1?: string;

  /** DeliveryAddress_Address2 - text (nullable) */
  DeliveryAddress_Address2?: string;

  /** DeliveryAddress_Address3 - text (nullable) */
  DeliveryAddress_Address3?: string;

  /** DeliveryAddress_Address4 - text (nullable) */
  DeliveryAddress_Address4?: string;

  /** InvoicingAddress_WebSite - text (nullable) */
  InvoicingAddress_WebSite?: string;

  /** InvoicingAddress_Longitude - numeric (nullable) */
  InvoicingAddress_Longitude?: number;

  /** InvoicingAddress_Latitude - numeric (nullable) */
  InvoicingAddress_Latitude?: number;

  /** InvoicingContact_Civility - text (nullable) */
  InvoicingContact_Civility?: string;

  /** InvoicingContact_Name - text (nullable) */
  InvoicingContact_Name?: string;

  /** InvoicingContact_FirstName - text (nullable) */
  InvoicingContact_FirstName?: string;

  /** InvoicingContact_Phone - text (nullable) */
  InvoicingContact_Phone?: string;

  /** InvoicingContact_CellPhone - text (nullable) */
  InvoicingContact_CellPhone?: string;

  /** InvoicingContact_Fax - text (nullable) */
  InvoicingContact_Fax?: string;

  /** InvoicingContact_Email - text (nullable) */
  InvoicingContact_Email?: string;

  /** InvoicingContact_Function - text (nullable) */
  InvoicingContact_Function?: string;

  /** InvoicingContact_Department - text (nullable) */
  InvoicingContact_Department?: string;

  /** InvoicingAddress_State - text (nullable) */
  InvoicingAddress_State?: string;

  /** TransferedDocumentId - uuid (nullable) */
  TransferedDocumentId?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** InvoicingAddressId - uuid (nullable) */
  InvoicingAddressId?: string;

  /** InvoicingContactId - uuid (nullable) */
  InvoicingContactId?: string;

  /** DeliveryAddressId - uuid (nullable) */
  DeliveryAddressId?: string;

  /** DeliveryContactId - uuid (nullable) */
  DeliveryContactId?: string;

  /** InvoicingAddress_Address1 - text (nullable) */
  InvoicingAddress_Address1?: string;

  /** InvoicingAddress_Address2 - text (nullable) */
  InvoicingAddress_Address2?: string;

  /** InvoicingAddress_Address3 - text (nullable) */
  InvoicingAddress_Address3?: string;

  /** InvoicingAddress_Address4 - text (nullable) */
  InvoicingAddress_Address4?: string;

  /** Reference - text (nullable) */
  Reference?: string;

  /** RecoveredFrom - smallint (nullable) */
  RecoveredFrom?: number;

  /** ModifiedSinceRecovery - boolean (nullable) */
  ModifiedSinceRecovery?: boolean;

  /** AssociatedInvoiceId - uuid (nullable) */
  AssociatedInvoiceId?: string;

  /** AssociatedDeliveryOrderId - uuid (nullable) */
  AssociatedDeliveryOrderId?: string;

  /** AssociatedOrderId - uuid (nullable) */
  AssociatedOrderId?: string;

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

  /** DetailVatAmount0_CurrencyDetailAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailAmountVatExcluded?: number;

  /** DetailVatAmount0_CurrencyDetailVatAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailVatAmount?: number;

  /** DetailVatAmount0_CurrencyDetailAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailAmountVatIncluded?: number;

  /** DetailVatAmount0_CurrencyDetailDepositVatAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailDepositVatAmount?: number;

  /** DetailVatAmount0_CurrencyDetailVatAmountWithoutDepositAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyDetailVatAmountWithoutDepositAmount?: number;

  /** DetailVatAmount0_CurrencyEcotaxAmountVatExcluded - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxAmountVatExcluded?: number;

  /** DetailVatAmount0_CurrencyEcotaxAmountVatIncluded - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxAmountVatIncluded?: number;

  /** DetailVatAmount0_CurrencyEcotaxVatAmount - numeric (nullable) */
  DetailVatAmount0_CurrencyEcotaxVatAmount?: number;

  /** DetailVatAmount0_CurrencyVatAmountOnDebit - numeric (nullable) */
  DetailVatAmount0_CurrencyVatAmountOnDebit?: number;

  /** DetailVatAmount0_CurrencyVatAmountOnCollection - numeric (nullable) */
  DetailVatAmount0_CurrencyVatAmountOnCollection?: number;

  /** ReturnState - smallint (nullable) */
  ReturnState?: number;

  /** IntrastatIncoterm - text (nullable) */
  IntrastatIncoterm?: string;

  /** ReverseChargeMention - text (nullable) */
  ReverseChargeMention?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** SepaCommunication - text (nullable) */
  SepaCommunication?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** Hash_ChainedId - uuid (nullable) */
  Hash_ChainedId?: string;

  /** Hash_Hash - bytea (nullable) */
  Hash_Hash?: Buffer | Uint8Array;

  /** ExtraFeeDistributionMode - smallint */
  ExtraFeeDistributionMode: number;

  /** ExtraFeeBase - smallint */
  ExtraFeeBase: number;

  /** ExtraFeeTotalAmount - numeric */
  ExtraFeeTotalAmount: number;

  /** ExtraFeeDistributedAmount - numeric */
  ExtraFeeDistributedAmount: number;

  /** ExtraFeeDistributionRates_GoodDistributeRate - numeric (nullable) */
  ExtraFeeDistributionRates_GoodDistributeRate?: number;

  /** ExtraFeeDistributionRates_ServiceDistributeRate - numeric (nullable) */
  ExtraFeeDistributionRates_ServiceDistributeRate?: number;

  /** ExtraFeeDistributionRates_EquipmentDistributeRate - numeric (nullable) */
  ExtraFeeDistributionRates_EquipmentDistributeRate?: number;

  /** LastRefreshPurchaseStateDate - timestamp without time zone (nullable) */
  LastRefreshPurchaseStateDate?: Date | string;

  /** ExecutionQuoteId - uuid (nullable) */
  ExecutionQuoteId?: string;

  /** SupplierType - smallint */
  SupplierType: number;

  /** InvoicingAddress_CodeINSEE - text (nullable) */
  InvoicingAddress_CodeINSEE?: string;

  /** InvoicingAddress_CityINSEE - text (nullable) */
  InvoicingAddress_CityINSEE?: string;

  /** DeliveryAddress_CodeINSEE - text (nullable) */
  DeliveryAddress_CodeINSEE?: string;

  /** DeliveryAddress_CityINSEE - text (nullable) */
  DeliveryAddress_CityINSEE?: string;

  /** DetailTaxAmount0_VatId - uuid (nullable) */
  DetailTaxAmount0_VatId?: string;

  /** DetailTaxAmount0_VatAmount - numeric */
  DetailTaxAmount0_VatAmount: number;

  /** DetailTaxAmount1_VatId - uuid (nullable) */
  DetailTaxAmount1_VatId?: string;

  /** DetailTaxAmount1_VatAmount - numeric */
  DetailTaxAmount1_VatAmount: number;

  /** DetailTaxAmount2_VatId - uuid (nullable) */
  DetailTaxAmount2_VatId?: string;

  /** DetailTaxAmount2_VatAmount - numeric */
  DetailTaxAmount2_VatAmount: number;

  /** DetailTaxAmount3_VatId - uuid (nullable) */
  DetailTaxAmount3_VatId?: string;

  /** DetailTaxAmount3_VatAmount - numeric */
  DetailTaxAmount3_VatAmount: number;

  /** DetailTaxAmount4_VatId - uuid (nullable) */
  DetailTaxAmount4_VatId?: string;

  /** DetailTaxAmount4_VatAmount - numeric */
  DetailTaxAmount4_VatAmount: number;

  /** DetailTaxAmount5_VatId - uuid (nullable) */
  DetailTaxAmount5_VatId?: string;

  /** DetailTaxAmount5_VatAmount - numeric */
  DetailTaxAmount5_VatAmount: number;

  /** xx_Validation_Direction - boolean */
  xx_Validation_Direction: boolean;

  /** xx_Commande_Effectuee - boolean */
  xx_Commande_Effectuee: boolean;

  /** xx_Saisie_Cde_Terminee - boolean */
  xx_Saisie_Cde_Terminee: boolean;

  /** InvoicingContact_Profession - text (nullable) */
  InvoicingContact_Profession?: string;

  /** DeliveryContact_Profession - text (nullable) */
  DeliveryContact_Profession?: string;

}

