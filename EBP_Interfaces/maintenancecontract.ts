/**
 * Interface pour la table MaintenanceContract
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContract {
  /** PredictedDuration - numeric */
  PredictedDuration: number;

  /** AccomplishedDuration - numeric */
  AccomplishedDuration: number;

  /** ProfitsOnDuration - numeric */
  ProfitsOnDuration: number;

  /** PredictedPeriodicInvoicingAmount - numeric */
  PredictedPeriodicInvoicingAmount: number;

  /** ArePartsCovered - boolean */
  ArePartsCovered: boolean;

  /** PartsDuration - numeric */
  PartsDuration: number;

  /** IsLabourCovered - boolean */
  IsLabourCovered: boolean;

  /** LabourDuration - numeric */
  LabourDuration: number;

  /** IsTravelCovered - boolean */
  IsTravelCovered: boolean;

  /** TravelDuration - numeric */
  TravelDuration: number;

  /** TransferRemainingCounterWhenRenewal - boolean */
  TransferRemainingCounterWhenRenewal: boolean;

  /** InvoicingAddress_Npai - boolean */
  InvoicingAddress_Npai: boolean;

  /** TacitRenewal - boolean */
  TacitRenewal: boolean;

  /** DuplicateContractWhenRenewal - boolean */
  DuplicateContractWhenRenewal: boolean;

  /** InvoiceContentType - smallint */
  InvoiceContentType: number;

  /** InvoicingVatIncluded - boolean */
  InvoicingVatIncluded: boolean;

  /** EventToForesee - boolean */
  EventToForesee: boolean;

  /** MailBeforeEvent - boolean */
  MailBeforeEvent: boolean;

  /** InterventionPeriodicity_Type - smallint */
  InterventionPeriodicity_Type: number;

  /** InterventionPeriodicity_Monday - boolean */
  InterventionPeriodicity_Monday: boolean;

  /** InterventionPeriodicity_Tuesday - boolean */
  InterventionPeriodicity_Tuesday: boolean;

  /** InterventionPeriodicity_Wednesday - boolean */
  InterventionPeriodicity_Wednesday: boolean;

  /** InterventionPeriodicity_Thursday - boolean */
  InterventionPeriodicity_Thursday: boolean;

  /** InterventionPeriodicity_Friday - boolean */
  InterventionPeriodicity_Friday: boolean;

  /** InterventionPeriodicity_Saturday - boolean */
  InterventionPeriodicity_Saturday: boolean;

  /** InterventionPeriodicity_Sunday - boolean */
  InterventionPeriodicity_Sunday: boolean;

  /** Caption - text */
  Caption: string;

  /** CounterType - smallint */
  CounterType: number;

  /** InterventionPeriodicity_DayRankSelector - boolean */
  InterventionPeriodicity_DayRankSelector: boolean;

  /** InterventionPeriodicity_DayNumberSelector - boolean */
  InterventionPeriodicity_DayNumberSelector: boolean;

  /** InterventionPeriodicity_Caption - text */
  InterventionPeriodicity_Caption: string;

  /** Id - text */
  Id: string;

  /** CustomerId - text */
  CustomerId: string;

  /** StartDate - timestamp without time zone */
  StartDate: Date | string;

  /** EndDate - timestamp without time zone */
  EndDate: Date | string;

  /** Status - smallint */
  Status: number;

  /** InvoicingContact_NaturalPerson - boolean */
  InvoicingContact_NaturalPerson: boolean;

  /** InvoicingContact_OptIn - boolean */
  InvoicingContact_OptIn: boolean;

  /** PredictedCosts - numeric */
  PredictedCosts: number;

  /** PredictedSales - numeric */
  PredictedSales: number;

  /** PredictedGrossMargin - numeric */
  PredictedGrossMargin: number;

  /** AccomplishedCosts - numeric */
  AccomplishedCosts: number;

  /** AccomplishedSales - numeric */
  AccomplishedSales: number;

  /** AccomplishedGrossMargin - numeric */
  AccomplishedGrossMargin: number;

  /** ProfitsOnCosts - numeric */
  ProfitsOnCosts: number;

  /** ProfitsOnSales - numeric */
  ProfitsOnSales: number;

  /** ProfitsOnGrossMargin - numeric */
  ProfitsOnGrossMargin: number;

  /** NeedToUpdateAnalysis - smallint */
  NeedToUpdateAnalysis: number;

  /** ContractLanguage - text */
  ContractLanguage: string;

  /** CounterAlertActive - boolean */
  CounterAlertActive: boolean;

  /** CounterAlertThreshold - numeric (nullable) */
  CounterAlertThreshold?: number;

  /** CancellationAcknowledgementLetterReportId - uuid (nullable) */
  CancellationAcknowledgementLetterReportId?: string;

  /** CancellationReason - smallint (nullable) */
  CancellationReason?: number;

  /** CancellationDate - timestamp without time zone (nullable) */
  CancellationDate?: Date | string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** InvoicingContact_ExternalId_GoogleId - text (nullable) */
  InvoicingContact_ExternalId_GoogleId?: string;

  /** InvoicingContact_ExternalId_OutlookId - text (nullable) */
  InvoicingContact_ExternalId_OutlookId?: string;

  /** LastEventGeneratedDate - timestamp without time zone (nullable) */
  LastEventGeneratedDate?: Date | string;

  /** PeriodicInvoicingStartDate - timestamp without time zone (nullable) */
  PeriodicInvoicingStartDate?: Date | string;

  /** RemainingCounterNumber - numeric (nullable) */
  RemainingCounterNumber?: number;

  /** TravelExpenseId - text (nullable) */
  TravelExpenseId?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** ProposeRenewalDate - timestamp without time zone (nullable) */
  ProposeRenewalDate?: Date | string;

  /** InvoicingCustomerId - text (nullable) */
  InvoicingCustomerId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ContractTemplateId - text (nullable) */
  ContractTemplateId?: string;

  /** ScheduleEventTemplateId - text (nullable) */
  ScheduleEventTemplateId?: string;

  /** InterventionPeriodicity_UserIncrement - integer (nullable) */
  InterventionPeriodicity_UserIncrement?: number;

  /** InterventionPeriodicity_SelectedDayOfWeek - smallint (nullable) */
  InterventionPeriodicity_SelectedDayOfWeek?: number;

  /** InterventionPeriodicity_DayNumber - smallint (nullable) */
  InterventionPeriodicity_DayNumber?: number;

  /** InitialCounterNumber - numeric (nullable) */
  InitialCounterNumber?: number;

  /** InterventionPeriodicity_DayRank - smallint (nullable) */
  InterventionPeriodicity_DayRank?: number;

  /** ScheduleEventTypeId - uuid (nullable) */
  ScheduleEventTypeId?: string;

  /** ContractReportId - uuid (nullable) */
  ContractReportId?: string;

  /** TacitRenewalLetterReportId - uuid (nullable) */
  TacitRenewalLetterReportId?: string;

  /** ContractRenewalLetterReportId - uuid (nullable) */
  ContractRenewalLetterReportId?: string;

  /** PeriodicInvoicingId - text (nullable) */
  PeriodicInvoicingId?: string;

  /** InvoicingAddress_WebSite - text (nullable) */
  InvoicingAddress_WebSite?: string;

  /** InvoicingAddress_Longitude - numeric (nullable) */
  InvoicingAddress_Longitude?: number;

  /** InvoicingAddress_Latitude - numeric (nullable) */
  InvoicingAddress_Latitude?: number;

  /** InvoicingContactId - uuid (nullable) */
  InvoicingContactId?: string;

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

  /** LastRenewalDate - timestamp without time zone (nullable) */
  LastRenewalDate?: Date | string;

  /** OriginContractId - text (nullable) */
  OriginContractId?: string;

  /** InvoicingAddressId - uuid (nullable) */
  InvoicingAddressId?: string;

  /** InvoicingAddress_Address1 - text (nullable) */
  InvoicingAddress_Address1?: string;

  /** InvoicingAddress_Address2 - text (nullable) */
  InvoicingAddress_Address2?: string;

  /** InvoicingAddress_Address3 - text (nullable) */
  InvoicingAddress_Address3?: string;

  /** InvoicingAddress_Address4 - text (nullable) */
  InvoicingAddress_Address4?: string;

  /** InvoicingAddress_ZipCode - text (nullable) */
  InvoicingAddress_ZipCode?: string;

  /** InvoicingAddress_City - text (nullable) */
  InvoicingAddress_City?: string;

  /** InvoicingAddress_State - text (nullable) */
  InvoicingAddress_State?: string;

  /** InvoicingAddress_CountryIsoCode - text (nullable) */
  InvoicingAddress_CountryIsoCode?: string;

  /** InvoicingAddress_Description - text (nullable) */
  InvoicingAddress_Description?: string;

  /** InvoicingAddress_Civility - text (nullable) */
  InvoicingAddress_Civility?: string;

  /** InvoicingAddress_ThirdName - text (nullable) */
  InvoicingAddress_ThirdName?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

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

  /** ContractFamilyId - text (nullable) */
  ContractFamilyId?: string;

  /** RenewalUpdatingRate - numeric (nullable) */
  RenewalUpdatingRate?: number;

  /** UseContractAddressInDeliveryAdressInvoice - boolean */
  UseContractAddressInDeliveryAdressInvoice: boolean;

  /** InterventionAddressId - uuid (nullable) */
  InterventionAddressId?: string;

  /** InvoicingContact_AllowUsePersonnalDatas - boolean */
  InvoicingContact_AllowUsePersonnalDatas: boolean;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** InvoicingAddress_CodeINSEE - text (nullable) */
  InvoicingAddress_CodeINSEE?: string;

  /** InvoicingAddress_CityINSEE - text (nullable) */
  InvoicingAddress_CityINSEE?: string;

  /** TotalInvoiceAmountVatExcluded - numeric */
  TotalInvoiceAmountVatExcluded: number;

  /** TotalInvoiceAmountVatIncluded - numeric */
  TotalInvoiceAmountVatIncluded: number;

  /** InvoicingContact_Profession - text (nullable) */
  InvoicingContact_Profession?: string;

}

