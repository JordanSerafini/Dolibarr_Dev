/**
 * Interface pour la table Incident
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Incident {
  /** PredictedDuration - numeric */
  PredictedDuration: number;

  /** AccomplishedDuration - numeric */
  AccomplishedDuration: number;

  /** ProfitsOnDuration - numeric */
  ProfitsOnDuration: number;

  /** Address_Npai - boolean */
  Address_Npai: boolean;

  /** CustomerId - text */
  CustomerId: string;

  /** CustomerName - text */
  CustomerName: string;

  /** Contact_NaturalPerson - boolean */
  Contact_NaturalPerson: boolean;

  /** Contact_OptIn - boolean */
  Contact_OptIn: boolean;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** StartDate - timestamp without time zone */
  StartDate: Date | string;

  /** Status - smallint */
  Status: number;

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

  /** NeedToUpdateAnalysis - boolean */
  NeedToUpdateAnalysis: boolean;

  /** IncidentTemplateId - text (nullable) */
  IncidentTemplateId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** AddressId - uuid (nullable) */
  AddressId?: string;

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

  /** EndDate - timestamp without time zone (nullable) */
  EndDate?: Date | string;

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

  /** Contact_ExternalId_GoogleId - text (nullable) */
  Contact_ExternalId_GoogleId?: string;

  /** Contact_ExternalId_OutlookId - text (nullable) */
  Contact_ExternalId_OutlookId?: string;

  /** ContractId - text (nullable) */
  ContractId?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** Address_WebSite - text (nullable) */
  Address_WebSite?: string;

  /** Address_Longitude - numeric (nullable) */
  Address_Longitude?: number;

  /** Address_Latitude - numeric (nullable) */
  Address_Latitude?: number;

  /** ContactId - uuid (nullable) */
  ContactId?: string;

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

  /** CreatorColleagueId - text (nullable) */
  CreatorColleagueId?: string;

  /** Contact_AllowUsePersonnalDatas - boolean */
  Contact_AllowUsePersonnalDatas: boolean;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

  /** Contact_Profession - text (nullable) */
  Contact_Profession?: string;

}

