/**
 * Interface pour la table MaintenanceContractTemplate
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractTemplate {
  /** CounterAlertActive - boolean */
  CounterAlertActive: boolean;

  /** InterventionPeriodicity_DayNumberSelector - boolean */
  InterventionPeriodicity_DayNumberSelector: boolean;

  /** InterventionPeriodicity_Caption - text */
  InterventionPeriodicity_Caption: string;

  /** TacitRenewal - boolean */
  TacitRenewal: boolean;

  /** DuplicateContractWhenRenewal - boolean */
  DuplicateContractWhenRenewal: boolean;

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

  /** InvoiceContentType - smallint */
  InvoiceContentType: number;

  /** InvoicingVatIncluded - boolean */
  InvoicingVatIncluded: boolean;

  /** EventToForesee - boolean */
  EventToForesee: boolean;

  /** MailBeforeEvent - boolean */
  MailBeforeEvent: boolean;

  /** Caption - text */
  Caption: string;

  /** CounterType - smallint */
  CounterType: number;

  /** InterventionPeriodicity_DayRankSelector - boolean */
  InterventionPeriodicity_DayRankSelector: boolean;

  /** Id - text */
  Id: string;

  /** Duration - numeric */
  Duration: number;

  /** DaysNumberForProposeRenewal - smallint (nullable) */
  DaysNumberForProposeRenewal?: number;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** LocalizableDescription_2 - text (nullable) */
  LocalizableDescription_2?: string;

  /** LocalizableDescription_Clear_2 - text (nullable) */
  LocalizableDescription_Clear_2?: string;

  /** LocalizableDescription_3 - text (nullable) */
  LocalizableDescription_3?: string;

  /** LocalizableDescription_Clear_3 - text (nullable) */
  LocalizableDescription_Clear_3?: string;

  /** LocalizableDescription_4 - text (nullable) */
  LocalizableDescription_4?: string;

  /** LocalizableDescription_Clear_4 - text (nullable) */
  LocalizableDescription_Clear_4?: string;

  /** LocalizableDescription_5 - text (nullable) */
  LocalizableDescription_5?: string;

  /** LocalizableDescription_Clear_5 - text (nullable) */
  LocalizableDescription_Clear_5?: string;

  /** LocalizableContractReportId_2 - uuid (nullable) */
  LocalizableContractReportId_2?: string;

  /** LocalizableContractReportId_3 - uuid (nullable) */
  LocalizableContractReportId_3?: string;

  /** LocalizableContractReportId_4 - uuid (nullable) */
  LocalizableContractReportId_4?: string;

  /** LocalizableContractReportId_5 - uuid (nullable) */
  LocalizableContractReportId_5?: string;

  /** LocalizableTacitRenewalLetterReportId_2 - uuid (nullable) */
  LocalizableTacitRenewalLetterReportId_2?: string;

  /** LocalizableTacitRenewalLetterReportId_3 - uuid (nullable) */
  LocalizableTacitRenewalLetterReportId_3?: string;

  /** LocalizableTacitRenewalLetterReportId_4 - uuid (nullable) */
  LocalizableTacitRenewalLetterReportId_4?: string;

  /** LocalizableTacitRenewalLetterReportId_5 - uuid (nullable) */
  LocalizableTacitRenewalLetterReportId_5?: string;

  /** LocalizableContractRenewalLetterReportId_2 - uuid (nullable) */
  LocalizableContractRenewalLetterReportId_2?: string;

  /** LocalizableContractRenewalLetterReportId_3 - uuid (nullable) */
  LocalizableContractRenewalLetterReportId_3?: string;

  /** LocalizableContractRenewalLetterReportId_4 - uuid (nullable) */
  LocalizableContractRenewalLetterReportId_4?: string;

  /** LocalizableContractRenewalLetterReportId_5 - uuid (nullable) */
  LocalizableContractRenewalLetterReportId_5?: string;

  /** LocalizableCancellationAcknowledgementLetterReportId_2 - uuid (nullable) */
  LocalizableCancellationAcknowledgementLetterReportId_2?: string;

  /** LocalizableCancellationAcknowledgementLetterReportId_3 - uuid (nullable) */
  LocalizableCancellationAcknowledgementLetterReportId_3?: string;

  /** LocalizableCancellationAcknowledgementLetterReportId_4 - uuid (nullable) */
  LocalizableCancellationAcknowledgementLetterReportId_4?: string;

  /** LocalizableCancellationAcknowledgementLetterReportId_5 - uuid (nullable) */
  LocalizableCancellationAcknowledgementLetterReportId_5?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** InterventionPeriodicity_SelectedDayOfWeek - smallint (nullable) */
  InterventionPeriodicity_SelectedDayOfWeek?: number;

  /** InterventionPeriodicity_DayNumber - smallint (nullable) */
  InterventionPeriodicity_DayNumber?: number;

  /** InitialCounterNumber - numeric (nullable) */
  InitialCounterNumber?: number;

  /** ScheduleEventTypeId - uuid (nullable) */
  ScheduleEventTypeId?: string;

  /** InterventionPeriodicity_DayRank - smallint (nullable) */
  InterventionPeriodicity_DayRank?: number;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** ContractReportId - uuid (nullable) */
  ContractReportId?: string;

  /** TacitRenewalLetterReportId - uuid (nullable) */
  TacitRenewalLetterReportId?: string;

  /** ContractRenewalLetterReportId - uuid (nullable) */
  ContractRenewalLetterReportId?: string;

  /** PeriodicInvoicingId - text (nullable) */
  PeriodicInvoicingId?: string;

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

  /** ScheduleEventTemplateId - text (nullable) */
  ScheduleEventTemplateId?: string;

  /** InterventionPeriodicity_UserIncrement - integer (nullable) */
  InterventionPeriodicity_UserIncrement?: number;

  /** CounterAlertThreshold - numeric (nullable) */
  CounterAlertThreshold?: number;

  /** CancellationAcknowledgementLetterReportId - uuid (nullable) */
  CancellationAcknowledgementLetterReportId?: string;

  /** UseContractAddressInDeliveryAdressInvoice - boolean */
  UseContractAddressInDeliveryAdressInvoice: boolean;

}

