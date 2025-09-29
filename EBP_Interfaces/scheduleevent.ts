/**
 * Interface pour la table ScheduleEvent
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEvent {
  /** xx_Projet - boolean */
  xx_Projet: boolean;

  /** Id - uuid */
  Id: string;

  /** PayrollVariableDuration0 - numeric */
  PayrollVariableDuration0: number;

  /** PayrollVariableDuration1 - numeric */
  PayrollVariableDuration1: number;

  /** PayrollVariableDuration2 - numeric */
  PayrollVariableDuration2: number;

  /** PayrollVariableDuration3 - numeric */
  PayrollVariableDuration3: number;

  /** PayrollVariableDuration4 - numeric */
  PayrollVariableDuration4: number;

  /** PayrollVariableDuration5 - numeric */
  PayrollVariableDuration5: number;

  /** PayrollVariableDuration6 - numeric */
  PayrollVariableDuration6: number;

  /** PayrollVariableDuration7 - numeric */
  PayrollVariableDuration7: number;

  /** PayrollVariableDuration8 - numeric */
  PayrollVariableDuration8: number;

  /** PayrollVariableDuration9 - numeric */
  PayrollVariableDuration9: number;

  /** PayrollVariableDuration10 - numeric */
  PayrollVariableDuration10: number;

  /** PayrollVariableDuration11 - numeric */
  PayrollVariableDuration11: number;

  /** PayrollVariableDuration12 - numeric */
  PayrollVariableDuration12: number;

  /** PayrollVariableDuration13 - numeric */
  PayrollVariableDuration13: number;

  /** PayrollVariableDuration14 - numeric */
  PayrollVariableDuration14: number;

  /** PayrollVariableDuration15 - numeric */
  PayrollVariableDuration15: number;

  /** PayrollVariableDuration16 - numeric */
  PayrollVariableDuration16: number;

  /** PayrollVariableDuration17 - numeric */
  PayrollVariableDuration17: number;

  /** PayrollVariableDuration18 - numeric */
  PayrollVariableDuration18: number;

  /** PayrollVariableDuration19 - numeric */
  PayrollVariableDuration19: number;

  /** PayrollVariableDuration20 - numeric */
  PayrollVariableDuration20: number;

  /** PayrollVariableDuration21 - numeric */
  PayrollVariableDuration21: number;

  /** PayrollVariableDuration22 - numeric */
  PayrollVariableDuration22: number;

  /** PayrollVariableDuration23 - numeric */
  PayrollVariableDuration23: number;

  /** PayrollVariableDuration24 - numeric */
  PayrollVariableDuration24: number;

  /** PayrollVariableDuration25 - numeric */
  PayrollVariableDuration25: number;

  /** PayrollVariableDuration26 - numeric */
  PayrollVariableDuration26: number;

  /** PayrollVariableDuration27 - numeric */
  PayrollVariableDuration27: number;

  /** PayrollVariableDuration28 - numeric */
  PayrollVariableDuration28: number;

  /** PayrollVariableDuration29 - numeric */
  PayrollVariableDuration29: number;

  /** PayrollVariableDuration30 - numeric */
  PayrollVariableDuration30: number;

  /** PayrollVariableDuration31 - numeric */
  PayrollVariableDuration31: number;

  /** PayrollVariableDuration32 - numeric */
  PayrollVariableDuration32: number;

  /** PayrollVariableDuration33 - numeric */
  PayrollVariableDuration33: number;

  /** PayrollVariableDuration34 - numeric */
  PayrollVariableDuration34: number;

  /** PayrollVariableDuration35 - numeric */
  PayrollVariableDuration35: number;

  /** PayrollVariableDuration36 - numeric */
  PayrollVariableDuration36: number;

  /** PayrollVariableDuration37 - numeric */
  PayrollVariableDuration37: number;

  /** PayrollVariableDuration38 - numeric */
  PayrollVariableDuration38: number;

  /** PayrollVariableDuration39 - numeric */
  PayrollVariableDuration39: number;

  /** PayrollVariableDuration40 - numeric */
  PayrollVariableDuration40: number;

  /** PayrollVariableDuration41 - numeric */
  PayrollVariableDuration41: number;

  /** PayrollVariableDuration42 - numeric */
  PayrollVariableDuration42: number;

  /** PayrollVariableDuration43 - numeric */
  PayrollVariableDuration43: number;

  /** PayrollVariableDuration44 - numeric */
  PayrollVariableDuration44: number;

  /** PayrollVariableDuration45 - numeric */
  PayrollVariableDuration45: number;

  /** PayrollVariableDuration46 - numeric */
  PayrollVariableDuration46: number;

  /** PayrollVariableDuration47 - numeric */
  PayrollVariableDuration47: number;

  /** PayrollVariableDuration48 - numeric */
  PayrollVariableDuration48: number;

  /** PayrollVariableDuration49 - numeric */
  PayrollVariableDuration49: number;

  /** EventState - smallint */
  EventState: number;

  /** ScheduleShowTimeLine - boolean */
  ScheduleShowTimeLine: boolean;

  /** LineType - smallint */
  LineType: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** StartDateTime - timestamp without time zone */
  StartDateTime: Date | string;

  /** EndDateTime - timestamp without time zone */
  EndDateTime: Date | string;

  /** Caption - text */
  Caption: string;

  /** ExpectedDuration_DurationInHours - numeric (nullable) */
  ExpectedDuration_DurationInHours?: number;

  /** AchievedDuration_DurationInHours - numeric (nullable) */
  AchievedDuration_DurationInHours?: number;

  /** SalePriceVatExcluded - numeric */
  SalePriceVatExcluded: number;

  /** NetAmountVatExcluded - numeric */
  NetAmountVatExcluded: number;

  /** HourlyCostPrice - numeric */
  HourlyCostPrice: number;

  /** CostAmount - numeric */
  CostAmount: number;

  /** IncludeInRealizedCost - smallint */
  IncludeInRealizedCost: number;

  /** ToInvoice - boolean */
  ToInvoice: boolean;

  /** DocumentType - smallint */
  DocumentType: number;

  /** Address_Npai - boolean */
  Address_Npai: boolean;

  /** Contact_NaturalPerson - boolean */
  Contact_NaturalPerson: boolean;

  /** Contact_OptIn - boolean */
  Contact_OptIn: boolean;

  /** ReminderEnabled - boolean */
  ReminderEnabled: boolean;

  /** ScheduleEventNumber - text */
  ScheduleEventNumber: string;

  /** Maintenance_InvoiceTravelExpenseOnLastIntervention - smallint */
  Maintenance_InvoiceTravelExpenseOnLastIntervention: number;

  /** Maintenance_SendConfirmationMail - boolean */
  Maintenance_SendConfirmationMail: boolean;

  /** Maintenance_NextEventToForesee - boolean */
  Maintenance_NextEventToForesee: boolean;

  /** Maintenance_DecreaseContractCounterForNextEvent - boolean */
  Maintenance_DecreaseContractCounterForNextEvent: boolean;

  /** Maintenance_IncludeInIncidentPredictedCost - smallint */
  Maintenance_IncludeInIncidentPredictedCost: number;

  /** Maintenance_IncludeInContractPredictedCost - smallint */
  Maintenance_IncludeInContractPredictedCost: number;

  /** InvoiceInterveners - boolean */
  InvoiceInterveners: boolean;

  /** InvoiceEquipments - boolean */
  InvoiceEquipments: boolean;

  /** PredictedCostAmount - numeric */
  PredictedCostAmount: number;

  /** Maintenance_NextEventDate - timestamp without time zone (nullable) */
  Maintenance_NextEventDate?: Date | string;

  /** Maintenance_CustomerProductId - text (nullable) */
  Maintenance_CustomerProductId?: string;

  /** Maintenance_NextMaintenanceEventId - uuid (nullable) */
  Maintenance_NextMaintenanceEventId?: string;

  /** Maintenance_ContractId - text (nullable) */
  Maintenance_ContractId?: string;

  /** Maintenance_ContractHoursNumberDecremented - numeric (nullable) */
  Maintenance_ContractHoursNumberDecremented?: number;

  /** Maintenance_InterventionDescription - text (nullable) */
  Maintenance_InterventionDescription?: string;

  /** Maintenance_InterventionDescriptionClear - text (nullable) */
  Maintenance_InterventionDescriptionClear?: string;

  /** Maintenance_InterventionReport - text (nullable) */
  Maintenance_InterventionReport?: string;

  /** Maintenance_InterventionReportClear - text (nullable) */
  Maintenance_InterventionReportClear?: string;

  /** Maintenance_Reference - text (nullable) */
  Maintenance_Reference?: string;

  /** Maintenance_ScheduleEventTemplateId - text (nullable) */
  Maintenance_ScheduleEventTemplateId?: string;

  /** Maintenance_TravelDuration - numeric (nullable) */
  Maintenance_TravelDuration?: number;

  /** Maintenance_IncidentId - text (nullable) */
  Maintenance_IncidentId?: string;

  /** Maintenance_TravelExpenseId - text (nullable) */
  Maintenance_TravelExpenseId?: string;

  /** Maintenance_TravelExpenseInvoiceId - uuid (nullable) */
  Maintenance_TravelExpenseInvoiceId?: string;

  /** PayrollExchangeGroupId - uuid (nullable) */
  PayrollExchangeGroupId?: string;

  /** AddressId - uuid (nullable) */
  AddressId?: string;

  /** ContactId - uuid (nullable) */
  ContactId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** Contact_ExternalId_GoogleId - text (nullable) */
  Contact_ExternalId_GoogleId?: string;

  /** Contact_ExternalId_OutlookId - text (nullable) */
  Contact_ExternalId_OutlookId?: string;

  /** CreatorColleagueId - text (nullable) */
  CreatorColleagueId?: string;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** NextReminder - timestamp without time zone (nullable) */
  NextReminder?: Date | string;

  /** ReminderType - smallint (nullable) */
  ReminderType?: number;

  /** Reminder - smallint (nullable) */
  Reminder?: number;

  /** Address_WebSite - text (nullable) */
  Address_WebSite?: string;

  /** Address_Longitude - numeric (nullable) */
  Address_Longitude?: number;

  /** Address_Latitude - numeric (nullable) */
  Address_Latitude?: number;

  /** Contact_Civility - text (nullable) */
  Contact_Civility?: string;

  /** Contact_Name - text (nullable) */
  Contact_Name?: string;

  /** Contact_FirstName - text (nullable) */
  Contact_FirstName?: string;

  /** Contact_Phone - text (nullable) */
  Contact_Phone?: string;

  /** Contact_CellPhone - text (nullable) */
  Contact_CellPhone?: string;

  /** Contact_Fax - text (nullable) */
  Contact_Fax?: string;

  /** Contact_Email - text (nullable) */
  Contact_Email?: string;

  /** Contact_Function - text (nullable) */
  Contact_Function?: string;

  /** Contact_Department - text (nullable) */
  Contact_Department?: string;

  /** SaleDocumentId - uuid (nullable) */
  SaleDocumentId?: string;

  /** PurchaseDocumentId - uuid (nullable) */
  PurchaseDocumentId?: string;

  /** StockDocumentId - uuid (nullable) */
  StockDocumentId?: string;

  /** Address_Address1 - text (nullable) */
  Address_Address1?: string;

  /** Address_Address2 - text (nullable) */
  Address_Address2?: string;

  /** Address_Address3 - text (nullable) */
  Address_Address3?: string;

  /** Address_Address4 - text (nullable) */
  Address_Address4?: string;

  /** Address_ZipCode - text (nullable) */
  Address_ZipCode?: string;

  /** Address_City - text (nullable) */
  Address_City?: string;

  /** Address_State - text (nullable) */
  Address_State?: string;

  /** Address_CountryIsoCode - text (nullable) */
  Address_CountryIsoCode?: string;

  /** Address_Description - text (nullable) */
  Address_Description?: string;

  /** Address_Civility - text (nullable) */
  Address_Civility?: string;

  /** Address_ThirdName - text (nullable) */
  Address_ThirdName?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** InvoiceColleagueId - text (nullable) */
  InvoiceColleagueId?: string;

  /** InvoiceCustomerId - text (nullable) */
  InvoiceCustomerId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** Quantity - numeric (nullable) */
  Quantity?: number;

  /** EventType - uuid (nullable) */
  EventType?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** EquipmentId - text (nullable) */
  EquipmentId?: string;

  /** InvoiceId - uuid (nullable) */
  InvoiceId?: string;

  /** InvoiceLineId - uuid (nullable) */
  InvoiceLineId?: string;

  /** ParentEventId - uuid (nullable) */
  ParentEventId?: string;

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

  /** SaleDocumentLineid - uuid (nullable) */
  SaleDocumentLineid?: string;

  /** xx_Gestion_Projet_Posit - text (nullable) */
  xx_Gestion_Projet_Posit?: string;

  /** xx_Total_Temps_Realise - numeric (nullable) */
  xx_Total_Temps_Realise?: number;

  /** xx_Total_Temps_Realise_Client - numeric (nullable) */
  xx_Total_Temps_Realise_Client?: number;

  /** xx_Total_Temps_Realise_Interne - numeric (nullable) */
  xx_Total_Temps_Realise_Interne?: number;

  /** xx_Type_Tache - text (nullable) */
  xx_Type_Tache?: string;

  /** xx_Theme - text (nullable) */
  xx_Theme?: string;

  /** xx_Services - text (nullable) */
  xx_Services?: string;

  /** xx_Theme_Commercial - text (nullable) */
  xx_Theme_Commercial?: string;

  /** xx_Duree_Pevue - numeric (nullable) */
  xx_Duree_Pevue?: number;

  /** xx_Total_Temps_Realise_Relationnel - numeric (nullable) */
  xx_Total_Temps_Realise_Relationnel?: number;

  /** xx_Duree_Trajet - numeric (nullable) */
  xx_Duree_Trajet?: number;

  /** xx_Activite - text (nullable) */
  xx_Activite?: string;

  /** xx_Total_Temps_Realise_Trajet - numeric (nullable) */
  xx_Total_Temps_Realise_Trajet?: number;

  /** xx_Total_Temps_Realise_Formation - numeric (nullable) */
  xx_Total_Temps_Realise_Formation?: number;

  /** xx_Total_Temps_Realise_Maquettage - numeric (nullable) */
  xx_Total_Temps_Realise_Maquettage?: number;

  /** xx_Logiciel - text (nullable) */
  xx_Logiciel?: string;

  /** xx_Fournisseur - text (nullable) */
  xx_Fournisseur?: string;

  /** xx_URGENT - boolean */
  xx_URGENT: boolean;

  /** SubContractorId - text (nullable) */
  SubContractorId?: string;

  /** ExpectedDuration_Duration - numeric (nullable) */
  ExpectedDuration_Duration?: number;

  /** ExpectedDuration_UnitId - text (nullable) */
  ExpectedDuration_UnitId?: string;

  /** ExpectedDuration_EditedDuration - text (nullable) */
  ExpectedDuration_EditedDuration?: string;

  /** AchievedDuration_Duration - numeric (nullable) */
  AchievedDuration_Duration?: number;

  /** AchievedDuration_UnitId - text (nullable) */
  AchievedDuration_UnitId?: string;

  /** AchievedDuration_EditedDuration - text (nullable) */
  AchievedDuration_EditedDuration?: string;

  /** Contact_AllowUsePersonnalDatas - boolean */
  Contact_AllowUsePersonnalDatas: boolean;

  /** DisplayType - smallint */
  DisplayType: number;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** EquipmentTypeId - text (nullable) */
  EquipmentTypeId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** ExceptionWorked - boolean */
  ExceptionWorked: boolean;

  /** ExceptionCompetenceIds - text (nullable) */
  ExceptionCompetenceIds?: string;

  /** ExceptionColleagueIds - text (nullable) */
  ExceptionColleagueIds?: string;

  /** ExceptionColleagueSelectionType - smallint (nullable) */
  ExceptionColleagueSelectionType?: number;

  /** ExceptionDaySchedule0_StartTime - timestamp without time zone */
  ExceptionDaySchedule0_StartTime: Date | string;

  /** ExceptionDaySchedule0_EndTime - timestamp without time zone */
  ExceptionDaySchedule0_EndTime: Date | string;

  /** ExceptionDaySchedule0_Duration - real */
  ExceptionDaySchedule0_Duration: number;

  /** ExceptionDaySchedule0_Active - boolean */
  ExceptionDaySchedule0_Active: boolean;

  /** ExceptionDaySchedule0_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule0_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule0_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule0_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule0_Customize - boolean */
  ExceptionDaySchedule0_Customize: boolean;

  /** ExceptionDaySchedule1_StartTime - timestamp without time zone */
  ExceptionDaySchedule1_StartTime: Date | string;

  /** ExceptionDaySchedule1_EndTime - timestamp without time zone */
  ExceptionDaySchedule1_EndTime: Date | string;

  /** ExceptionDaySchedule1_Duration - real */
  ExceptionDaySchedule1_Duration: number;

  /** ExceptionDaySchedule1_Active - boolean */
  ExceptionDaySchedule1_Active: boolean;

  /** ExceptionDaySchedule1_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule1_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule1_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule1_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule1_Customize - boolean */
  ExceptionDaySchedule1_Customize: boolean;

  /** ExceptionDaySchedule2_StartTime - timestamp without time zone */
  ExceptionDaySchedule2_StartTime: Date | string;

  /** ExceptionDaySchedule2_EndTime - timestamp without time zone */
  ExceptionDaySchedule2_EndTime: Date | string;

  /** ExceptionDaySchedule2_Duration - real */
  ExceptionDaySchedule2_Duration: number;

  /** ExceptionDaySchedule2_Active - boolean */
  ExceptionDaySchedule2_Active: boolean;

  /** ExceptionDaySchedule2_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule2_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule2_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule2_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule2_Customize - boolean */
  ExceptionDaySchedule2_Customize: boolean;

  /** ExceptionDaySchedule3_StartTime - timestamp without time zone */
  ExceptionDaySchedule3_StartTime: Date | string;

  /** ExceptionDaySchedule3_EndTime - timestamp without time zone */
  ExceptionDaySchedule3_EndTime: Date | string;

  /** ExceptionDaySchedule3_Duration - real */
  ExceptionDaySchedule3_Duration: number;

  /** ExceptionDaySchedule3_Active - boolean */
  ExceptionDaySchedule3_Active: boolean;

  /** ExceptionDaySchedule3_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule3_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule3_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule3_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule3_Customize - boolean */
  ExceptionDaySchedule3_Customize: boolean;

  /** ExceptionDaySchedule4_StartTime - timestamp without time zone */
  ExceptionDaySchedule4_StartTime: Date | string;

  /** ExceptionDaySchedule4_EndTime - timestamp without time zone */
  ExceptionDaySchedule4_EndTime: Date | string;

  /** ExceptionDaySchedule4_Duration - real */
  ExceptionDaySchedule4_Duration: number;

  /** ExceptionDaySchedule4_Active - boolean */
  ExceptionDaySchedule4_Active: boolean;

  /** ExceptionDaySchedule4_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule4_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule4_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule4_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule4_Customize - boolean */
  ExceptionDaySchedule4_Customize: boolean;

  /** ExceptionDaySchedule5_StartTime - timestamp without time zone */
  ExceptionDaySchedule5_StartTime: Date | string;

  /** ExceptionDaySchedule5_EndTime - timestamp without time zone */
  ExceptionDaySchedule5_EndTime: Date | string;

  /** ExceptionDaySchedule5_Duration - real */
  ExceptionDaySchedule5_Duration: number;

  /** ExceptionDaySchedule5_Active - boolean */
  ExceptionDaySchedule5_Active: boolean;

  /** ExceptionDaySchedule5_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule5_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule5_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule5_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule5_Customize - boolean */
  ExceptionDaySchedule5_Customize: boolean;

  /** ExceptionDaySchedule6_StartTime - timestamp without time zone */
  ExceptionDaySchedule6_StartTime: Date | string;

  /** ExceptionDaySchedule6_EndTime - timestamp without time zone */
  ExceptionDaySchedule6_EndTime: Date | string;

  /** ExceptionDaySchedule6_Duration - real */
  ExceptionDaySchedule6_Duration: number;

  /** ExceptionDaySchedule6_Active - boolean */
  ExceptionDaySchedule6_Active: boolean;

  /** ExceptionDaySchedule6_LunchStartTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule6_LunchStartTime?: Date | string;

  /** ExceptionDaySchedule6_LunchEndTime - timestamp without time zone (nullable) */
  ExceptionDaySchedule6_LunchEndTime?: Date | string;

  /** ExceptionDaySchedule6_Customize - boolean */
  ExceptionDaySchedule6_Customize: boolean;

  /** IsScheduleException - boolean */
  IsScheduleException: boolean;

  /** MustBeCalculated - boolean */
  MustBeCalculated: boolean;

  /** CreatedByExecutionQuote - boolean */
  CreatedByExecutionQuote: boolean;

  /** WorkingDuration_DurationInHours - numeric (nullable) */
  WorkingDuration_DurationInHours?: number;

  /** WorkingDuration_Duration - numeric (nullable) */
  WorkingDuration_Duration?: number;

  /** WorkingDuration_UnitId - text (nullable) */
  WorkingDuration_UnitId?: string;

  /** WorkingDuration_EditedDuration - text (nullable) */
  WorkingDuration_EditedDuration?: string;

  /** UpdatedWorkingDuration_DurationInHours - numeric (nullable) */
  UpdatedWorkingDuration_DurationInHours?: number;

  /** UpdatedWorkingDuration_Duration - numeric (nullable) */
  UpdatedWorkingDuration_Duration?: number;

  /** UpdatedWorkingDuration_UnitId - text (nullable) */
  UpdatedWorkingDuration_UnitId?: string;

  /** UpdatedWorkingDuration_EditedDuration - text (nullable) */
  UpdatedWorkingDuration_EditedDuration?: string;

  /** GlobalPercentComplete - smallint */
  GlobalPercentComplete: number;

  /** ProgressUpdateLastDate - timestamp without time zone (nullable) */
  ProgressUpdateLastDate?: Date | string;

  /** LabourUpdatedExpectedDuration_DurationInHours - numeric (nullable) */
  LabourUpdatedExpectedDuration_DurationInHours?: number;

  /** LabourUpdatedExpectedDuration_Duration - numeric (nullable) */
  LabourUpdatedExpectedDuration_Duration?: number;

  /** LabourUpdatedExpectedDuration_UnitId - text (nullable) */
  LabourUpdatedExpectedDuration_UnitId?: string;

  /** LabourUpdatedExpectedDuration_EditedDuration - text (nullable) */
  LabourUpdatedExpectedDuration_EditedDuration?: string;

  /** LabourScheduledDuration_DurationInHours - numeric (nullable) */
  LabourScheduledDuration_DurationInHours?: number;

  /** LabourScheduledDuration_Duration - numeric (nullable) */
  LabourScheduledDuration_Duration?: number;

  /** LabourScheduledDuration_UnitId - text (nullable) */
  LabourScheduledDuration_UnitId?: string;

  /** LabourScheduledDuration_EditedDuration - text (nullable) */
  LabourScheduledDuration_EditedDuration?: string;

  /** LabourPercentComplete - smallint */
  LabourPercentComplete: number;

  /** LabourRemainingDuration_DurationInHours - numeric (nullable) */
  LabourRemainingDuration_DurationInHours?: number;

  /** LabourRemainingDuration_Duration - numeric (nullable) */
  LabourRemainingDuration_Duration?: number;

  /** LabourRemainingDuration_UnitId - text (nullable) */
  LabourRemainingDuration_UnitId?: string;

  /** LabourRemainingDuration_EditedDuration - text (nullable) */
  LabourRemainingDuration_EditedDuration?: string;

  /** LabourOverDuration_DurationInHours - numeric (nullable) */
  LabourOverDuration_DurationInHours?: number;

  /** LabourOverDuration_Duration - numeric (nullable) */
  LabourOverDuration_Duration?: number;

  /** LabourOverDuration_UnitId - text (nullable) */
  LabourOverDuration_UnitId?: string;

  /** LabourOverDuration_EditedDuration - text (nullable) */
  LabourOverDuration_EditedDuration?: string;

  /** OccupancyRate - smallint (nullable) */
  OccupancyRate?: number;

  /** AbsenceRange - smallint (nullable) */
  AbsenceRange?: number;

  /** DateChangeRemindEnabled - boolean */
  DateChangeRemindEnabled: boolean;

  /** ConflictTypes - integer */
  ConflictTypes: number;

  /** ConflictIndicator - smallint */
  ConflictIndicator: number;

  /** AccountingYearId - uuid (nullable) */
  AccountingYearId?: string;

  /** ConflictImageIndicator - bytea (nullable) */
  ConflictImageIndicator?: Buffer | Uint8Array;

  /** ConflictTypesImage - bytea (nullable) */
  ConflictTypesImage?: Buffer | Uint8Array;

  /** WorkedHours - numeric */
  WorkedHours: number;

  /** PlannedHours - numeric */
  PlannedHours: number;

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

  /** Contact_Profession - text (nullable) */
  Contact_Profession?: string;

}

