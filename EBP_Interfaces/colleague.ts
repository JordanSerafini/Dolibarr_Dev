/**
 * Interface pour la table Colleague
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Colleague {
  /** Id - text */
  Id: string;

  /** Contact_Name - text */
  Contact_Name: string;

  /** IsSalesperson - boolean */
  IsSalesperson: boolean;

  /** ActiveState - smallint */
  ActiveState: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** IRPFRate - numeric */
  IRPFRate: number;

  /** DaySchedule0_StartTime - timestamp without time zone */
  DaySchedule0_StartTime: Date | string;

  /** DaySchedule0_EndTime - timestamp without time zone */
  DaySchedule0_EndTime: Date | string;

  /** DaySchedule0_Duration - real */
  DaySchedule0_Duration: number;

  /** DaySchedule0_Active - boolean */
  DaySchedule0_Active: boolean;

  /** DaySchedule1_StartTime - timestamp without time zone */
  DaySchedule1_StartTime: Date | string;

  /** DaySchedule1_EndTime - timestamp without time zone */
  DaySchedule1_EndTime: Date | string;

  /** DaySchedule1_Duration - real */
  DaySchedule1_Duration: number;

  /** DaySchedule1_Active - boolean */
  DaySchedule1_Active: boolean;

  /** DaySchedule2_StartTime - timestamp without time zone */
  DaySchedule2_StartTime: Date | string;

  /** DaySchedule2_EndTime - timestamp without time zone */
  DaySchedule2_EndTime: Date | string;

  /** DaySchedule2_Duration - real */
  DaySchedule2_Duration: number;

  /** DaySchedule2_Active - boolean */
  DaySchedule2_Active: boolean;

  /** DaySchedule3_StartTime - timestamp without time zone */
  DaySchedule3_StartTime: Date | string;

  /** DaySchedule3_EndTime - timestamp without time zone */
  DaySchedule3_EndTime: Date | string;

  /** DaySchedule3_Duration - real */
  DaySchedule3_Duration: number;

  /** DaySchedule3_Active - boolean */
  DaySchedule3_Active: boolean;

  /** DaySchedule4_StartTime - timestamp without time zone */
  DaySchedule4_StartTime: Date | string;

  /** DaySchedule4_EndTime - timestamp without time zone */
  DaySchedule4_EndTime: Date | string;

  /** DaySchedule4_Duration - real */
  DaySchedule4_Duration: number;

  /** DaySchedule4_Active - boolean */
  DaySchedule4_Active: boolean;

  /** DaySchedule5_StartTime - timestamp without time zone */
  DaySchedule5_StartTime: Date | string;

  /** DaySchedule5_EndTime - timestamp without time zone */
  DaySchedule5_EndTime: Date | string;

  /** DaySchedule5_Duration - real */
  DaySchedule5_Duration: number;

  /** DaySchedule5_Active - boolean */
  DaySchedule5_Active: boolean;

  /** DaySchedule6_StartTime - timestamp without time zone */
  DaySchedule6_StartTime: Date | string;

  /** DaySchedule6_EndTime - timestamp without time zone */
  DaySchedule6_EndTime: Date | string;

  /** DaySchedule6_Duration - real */
  DaySchedule6_Duration: number;

  /** DaySchedule6_Active - boolean */
  DaySchedule6_Active: boolean;

  /** EventAutomaticAssign - boolean */
  EventAutomaticAssign: boolean;

  /** HourlyCostPrice - numeric */
  HourlyCostPrice: number;

  /** ReferenceItemId - text (nullable) */
  ReferenceItemId?: string;

  /** EmployeePayrollId - integer (nullable) */
  EmployeePayrollId?: number;

  /** EmailSignatureClear - text (nullable) */
  EmailSignatureClear?: string;

  /** EmailSignature - text (nullable) */
  EmailSignature?: string;

  /** DaySchedule0_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchStartTime?: Date | string;

  /** DaySchedule0_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule0_LunchEndTime?: Date | string;

  /** DaySchedule1_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchStartTime?: Date | string;

  /** DaySchedule1_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule1_LunchEndTime?: Date | string;

  /** DaySchedule2_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchStartTime?: Date | string;

  /** DaySchedule2_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule2_LunchEndTime?: Date | string;

  /** DaySchedule3_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchStartTime?: Date | string;

  /** DaySchedule3_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule3_LunchEndTime?: Date | string;

  /** DaySchedule4_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchStartTime?: Date | string;

  /** DaySchedule4_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule4_LunchEndTime?: Date | string;

  /** DaySchedule5_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchStartTime?: Date | string;

  /** DaySchedule5_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule5_LunchEndTime?: Date | string;

  /** DaySchedule6_LunchStartTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchStartTime?: Date | string;

  /** DaySchedule6_LunchEndTime - timestamp without time zone (nullable) */
  DaySchedule6_LunchEndTime?: Date | string;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** EmployeeRegistrationNumber - text (nullable) */
  EmployeeRegistrationNumber?: string;

  /** SalePriceVatExcluded - numeric (nullable) */
  SalePriceVatExcluded?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** CifNif - text (nullable) */
  CifNif?: string;

  /** UserId - text (nullable) */
  UserId?: string;

  /** GeographicSector - text (nullable) */
  GeographicSector?: string;

  /** ColleagueFamilyId - text (nullable) */
  ColleagueFamilyId?: string;

  /** Group1 - uuid (nullable) */
  Group1?: string;

  /** Group2 - uuid (nullable) */
  Group2?: string;

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

  /** Contact_ColleagueFunction - text (nullable) */
  Contact_ColleagueFunction?: string;

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

  /** Address_Longitude - numeric (nullable) */
  Address_Longitude?: number;

  /** Address_Latitude - numeric (nullable) */
  Address_Latitude?: number;

  /** Contact_Civility - text (nullable) */
  Contact_Civility?: string;

  /** MaximumDiscountRateAllowed - numeric (nullable) */
  MaximumDiscountRateAllowed?: number;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** DaySchedule0_Customize - boolean */
  DaySchedule0_Customize: boolean;

  /** DaySchedule1_Customize - boolean */
  DaySchedule1_Customize: boolean;

  /** DaySchedule2_Customize - boolean */
  DaySchedule2_Customize: boolean;

  /** DaySchedule3_Customize - boolean */
  DaySchedule3_Customize: boolean;

  /** DaySchedule4_Customize - boolean */
  DaySchedule4_Customize: boolean;

  /** DaySchedule5_Customize - boolean */
  DaySchedule5_Customize: boolean;

  /** DaySchedule6_Customize - boolean */
  DaySchedule6_Customize: boolean;

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

  /** app_password - character varying (nullable) */
  app_password?: string;

  /** lastLoginAt - timestamp without time zone (nullable) */
  lastLoginAt?: Date | string;

}

