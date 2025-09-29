/**
 * Interface pour la table Storehouse
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Storehouse {
  /** MultiLocationEnabled - boolean */
  MultiLocationEnabled: boolean;

  /** MultiLocationDefaultMode - smallint */
  MultiLocationDefaultMode: number;

  /** Main - boolean */
  Main: boolean;

  /** Asleep - boolean */
  Asleep: boolean;

  /** Type - smallint */
  Type: number;

  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

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

  /** LastInventoryDate - timestamp without time zone (nullable) */
  LastInventoryDate?: Date | string;

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

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

}

