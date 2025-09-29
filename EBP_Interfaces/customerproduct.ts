/**
 * Interface pour la table CustomerProduct
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerProduct {
  /** xx_Controle - boolean */
  xx_Controle: boolean;

  /** DeliveryAddress_Npai - boolean */
  DeliveryAddress_Npai: boolean;

  /** DeliveryContact_NaturalPerson - boolean */
  DeliveryContact_NaturalPerson: boolean;

  /** DeliveryContact_OptIn - boolean */
  DeliveryContact_OptIn: boolean;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ActiveState - smallint */
  ActiveState: number;

  /** CustomerId - text */
  CustomerId: string;

  /** CustomerName - text */
  CustomerName: string;

  /** DeliveryAddressId - uuid (nullable) */
  DeliveryAddressId?: string;

  /** DeliveryAddress_Address1 - text (nullable) */
  DeliveryAddress_Address1?: string;

  /** DeliveryAddress_Address2 - text (nullable) */
  DeliveryAddress_Address2?: string;

  /** DeliveryAddress_Address3 - text (nullable) */
  DeliveryAddress_Address3?: string;

  /** DeliveryAddress_Address4 - text (nullable) */
  DeliveryAddress_Address4?: string;

  /** DeliveryAddress_ZipCode - text (nullable) */
  DeliveryAddress_ZipCode?: string;

  /** DeliveryAddress_City - text (nullable) */
  DeliveryAddress_City?: string;

  /** DeliveryAddress_State - text (nullable) */
  DeliveryAddress_State?: string;

  /** DeliveryAddress_CountryIsoCode - text (nullable) */
  DeliveryAddress_CountryIsoCode?: string;

  /** DeliveryAddress_Description - text (nullable) */
  DeliveryAddress_Description?: string;

  /** DeliveryAddress_Civility - text (nullable) */
  DeliveryAddress_Civility?: string;

  /** DeliveryAddress_ThirdName - text (nullable) */
  DeliveryAddress_ThirdName?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** LabourStartDate - timestamp without time zone (nullable) */
  LabourStartDate?: Date | string;

  /** LabourEndDate - timestamp without time zone (nullable) */
  LabourEndDate?: Date | string;

  /** PartsStartDate - timestamp without time zone (nullable) */
  PartsStartDate?: Date | string;

  /** PartsEndDate - timestamp without time zone (nullable) */
  PartsEndDate?: Date | string;

  /** TravelStartDate - timestamp without time zone (nullable) */
  TravelStartDate?: Date | string;

  /** TravelEndDate - timestamp without time zone (nullable) */
  TravelEndDate?: Date | string;

  /** SaleDocumentLineId - uuid (nullable) */
  SaleDocumentLineId?: string;

  /** CustomerProductFamilyId - text (nullable) */
  CustomerProductFamilyId?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

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

  /** DeliveryContact_ExternalId_GoogleId - text (nullable) */
  DeliveryContact_ExternalId_GoogleId?: string;

  /** DeliveryContact_ExternalId_OutlookId - text (nullable) */
  DeliveryContact_ExternalId_OutlookId?: string;

  /** CustomerProductImage - bytea (nullable) */
  CustomerProductImage?: Buffer | Uint8Array;

  /** BlockReason - text (nullable) */
  BlockReason?: string;

  /** GuaranteeExtensionTypeId - text (nullable) */
  GuaranteeExtensionTypeId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** DeliveryAddress_WebSite - text (nullable) */
  DeliveryAddress_WebSite?: string;

  /** DeliveryAddress_Longitude - numeric (nullable) */
  DeliveryAddress_Longitude?: number;

  /** DeliveryAddress_Latitude - numeric (nullable) */
  DeliveryAddress_Latitude?: number;

  /** DeliveryContactId - uuid (nullable) */
  DeliveryContactId?: string;

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

  /** xx_Logiciel - text (nullable) */
  xx_Logiciel?: string;

  /** xx_Gamme - text (nullable) */
  xx_Gamme?: string;

  /** xx_Version - text (nullable) */
  xx_Version?: string;

  /** xx_Detail_Version - text (nullable) */
  xx_Detail_Version?: string;

  /** xx_Nb_Postes - integer (nullable) */
  xx_Nb_Postes?: number;

  /** xx_Mode - text (nullable) */
  xx_Mode?: string;

  /** xx_Technologie - text (nullable) */
  xx_Technologie?: string;

  /** xx_Licence - text (nullable) */
  xx_Licence?: string;

  /** xx_Cle_Web - text (nullable) */
  xx_Cle_Web?: string;

  /** xx_Cles_PC - text (nullable) */
  xx_Cles_PC?: string;

  /** xx_Mise_a_Jour - timestamp without time zone (nullable) */
  xx_Mise_a_Jour?: Date | string;

  /** xx_Modules_Optionnels - text (nullable) */
  xx_Modules_Optionnels?: string;

  /** DeliveryContact_AllowUsePersonnalDatas - boolean */
  DeliveryContact_AllowUsePersonnalDatas: boolean;

  /** xx_Specif_developpement - boolean */
  xx_Specif_developpement: boolean;

  /** xx_Prochaine_maj - timestamp without time zone (nullable) */
  xx_Prochaine_maj?: Date | string;

  /** DeliveryAddress_CodeINSEE - text (nullable) */
  DeliveryAddress_CodeINSEE?: string;

  /** DeliveryAddress_CityINSEE - text (nullable) */
  DeliveryAddress_CityINSEE?: string;

  /** DeliveryContact_Profession - text (nullable) */
  DeliveryContact_Profession?: string;

}

