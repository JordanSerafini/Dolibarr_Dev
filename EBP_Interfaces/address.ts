/**
 * Interface pour la table Address
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Address {
  /** Id - uuid */
  Id: string;

  /** IsInvoicingType - boolean */
  IsInvoicingType: boolean;

  /** IsDeliveryType - boolean */
  IsDeliveryType: boolean;

  /** IsMainInvoicing - boolean */
  IsMainInvoicing: boolean;

  /** IsMainDelivery - boolean */
  IsMainDelivery: boolean;

  /** AddressFields_Npai - boolean */
  AddressFields_Npai: boolean;

  /** IsMainReminder - boolean */
  IsMainReminder: boolean;

  /** AddressFields_WebSite - text (nullable) */
  AddressFields_WebSite?: string;

  /** AddressFields_Longitude - numeric (nullable) */
  AddressFields_Longitude?: number;

  /** AddressFields_Latitude - numeric (nullable) */
  AddressFields_Latitude?: number;

  /** AssociatedCustomerId - text (nullable) */
  AssociatedCustomerId?: string;

  /** AssociatedSupplierId - text (nullable) */
  AssociatedSupplierId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** AddressFields_Address1 - text (nullable) */
  AddressFields_Address1?: string;

  /** AddressFields_Address2 - text (nullable) */
  AddressFields_Address2?: string;

  /** AddressFields_Address3 - text (nullable) */
  AddressFields_Address3?: string;

  /** AddressFields_Address4 - text (nullable) */
  AddressFields_Address4?: string;

  /** AddressFields_ZipCode - text (nullable) */
  AddressFields_ZipCode?: string;

  /** AddressFields_City - text (nullable) */
  AddressFields_City?: string;

  /** AddressFields_State - text (nullable) */
  AddressFields_State?: string;

  /** AddressFields_CountryIsoCode - text (nullable) */
  AddressFields_CountryIsoCode?: string;

  /** AddressFields_Description - text (nullable) */
  AddressFields_Description?: string;

  /** AddressFields_Civility - text (nullable) */
  AddressFields_Civility?: string;

  /** AddressFields_ThirdName - text (nullable) */
  AddressFields_ThirdName?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** AddressFields_CodeINSEE - text (nullable) */
  AddressFields_CodeINSEE?: string;

  /** AddressFields_CityINSEE - text (nullable) */
  AddressFields_CityINSEE?: string;

}

