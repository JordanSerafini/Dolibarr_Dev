/**
 * Interface pour la table CustomerHeadOfficeCopiedInDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerHeadOfficeCopiedInDocument {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** CustomerId - text */
  CustomerId: string;

  /** HeadOfficeAddress_Address1 - text (nullable) */
  HeadOfficeAddress_Address1?: string;

  /** HeadOfficeAddress_Address2 - text (nullable) */
  HeadOfficeAddress_Address2?: string;

  /** HeadOfficeAddress_Address3 - text (nullable) */
  HeadOfficeAddress_Address3?: string;

  /** HeadOfficeAddress_Address4 - text (nullable) */
  HeadOfficeAddress_Address4?: string;

  /** HeadOfficeAddress_ZipCode - text (nullable) */
  HeadOfficeAddress_ZipCode?: string;

  /** HeadOfficeAddress_City - text (nullable) */
  HeadOfficeAddress_City?: string;

  /** HeadOfficeAddress_State - text (nullable) */
  HeadOfficeAddress_State?: string;

  /** HeadOfficeAddress_CountryIsoCode - text (nullable) */
  HeadOfficeAddress_CountryIsoCode?: string;

  /** HeadOfficeAddress_CodeINSEE - text (nullable) */
  HeadOfficeAddress_CodeINSEE?: string;

  /** HeadOfficeAddress_CityINSEE - text (nullable) */
  HeadOfficeAddress_CityINSEE?: string;

  /** HeadOfficeAddress_HeadOfficeName - text (nullable) */
  HeadOfficeAddress_HeadOfficeName?: string;

  /** HeadOfficeAddress_UseCompanyAddressAsHeadOfficeAddress - boolean */
  HeadOfficeAddress_UseCompanyAddressAsHeadOfficeAddress: boolean;

}

