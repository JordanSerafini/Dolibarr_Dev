/**
 * Interface pour la table Shipping
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Shipping {
  /** NotSubjectToFinancialDiscount - boolean */
  NotSubjectToFinancialDiscount: boolean;

  /** ApplyOnType - smallint */
  ApplyOnType: number;

  /** Caption - text */
  Caption: string;

  /** VatId - uuid */
  VatId: string;

  /** CalculationMode - smallint */
  CalculationMode: number;

  /** CalculationValue - numeric */
  CalculationValue: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Id - text */
  Id: string;

  /** CarrierAddress_Address1 - text (nullable) */
  CarrierAddress_Address1?: string;

  /** CarrierAddress_Address2 - text (nullable) */
  CarrierAddress_Address2?: string;

  /** CarrierAddress_Address3 - text (nullable) */
  CarrierAddress_Address3?: string;

  /** CarrierAddress_Address4 - text (nullable) */
  CarrierAddress_Address4?: string;

  /** CarrierAddress_ZipCode - text (nullable) */
  CarrierAddress_ZipCode?: string;

  /** CarrierAddress_City - text (nullable) */
  CarrierAddress_City?: string;

  /** CarrierAddress_State - text (nullable) */
  CarrierAddress_State?: string;

  /** CarrierAddress_CountryIsoCode - text (nullable) */
  CarrierAddress_CountryIsoCode?: string;

  /** CarrierAddress_Longitude - numeric (nullable) */
  CarrierAddress_Longitude?: number;

  /** CarrierAddress_Latitude - numeric (nullable) */
  CarrierAddress_Latitude?: number;

  /** CarrierAddress_WebSite - text (nullable) */
  CarrierAddress_WebSite?: string;

  /** CarrierContact_Civility - text (nullable) */
  CarrierContact_Civility?: string;

  /** CarrierContact_Name - text (nullable) */
  CarrierContact_Name?: string;

  /** CarrierContact_FirstName - text (nullable) */
  CarrierContact_FirstName?: string;

  /** CarrierContact_Phone - text (nullable) */
  CarrierContact_Phone?: string;

  /** CarrierContact_CellPhone - text (nullable) */
  CarrierContact_CellPhone?: string;

  /** CarrierContact_Fax - text (nullable) */
  CarrierContact_Fax?: string;

  /** CarrierContact_Email - text (nullable) */
  CarrierContact_Email?: string;

  /** IntrastatTransportMode - text (nullable) */
  IntrastatTransportMode?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

  /** CarrierAddress_CodeINSEE - text (nullable) */
  CarrierAddress_CodeINSEE?: string;

  /** CarrierAddress_CityINSEE - text (nullable) */
  CarrierAddress_CityINSEE?: string;

}

