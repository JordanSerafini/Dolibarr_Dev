/**
 * Interface pour la table OptionsCopiedInDocumentSchemaTable
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface OptionsCopiedInDocumentSchemaTable {
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

  /** InvoiceObligatoryMentions - text (nullable) */
  InvoiceObligatoryMentions?: string;

  /** InvoiceObligatoryMentionsClear - text (nullable) */
  InvoiceObligatoryMentionsClear?: string;

  /** LocalizableInvoiceObligatoryMentions_2 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_2?: string;

  /** LocalizableInvoiceObligatoryMentions_Clear_2 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_Clear_2?: string;

  /** LocalizableInvoiceObligatoryMentions_3 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_3?: string;

  /** LocalizableInvoiceObligatoryMentions_Clear_3 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_Clear_3?: string;

  /** LocalizableInvoiceObligatoryMentions_4 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_4?: string;

  /** LocalizableInvoiceObligatoryMentions_Clear_4 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_Clear_4?: string;

  /** LocalizableInvoiceObligatoryMentions_5 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_5?: string;

  /** LocalizableInvoiceObligatoryMentions_Clear_5 - text (nullable) */
  LocalizableInvoiceObligatoryMentions_Clear_5?: string;

  /** CompanyName - text (nullable) */
  CompanyName?: string;

  /** CompanyIntraCommunityVatNumber - text (nullable) */
  CompanyIntraCommunityVatNumber?: string;

  /** CompanyCapital - numeric */
  CompanyCapital: number;

  /** CompanyAddress_Address1 - text (nullable) */
  CompanyAddress_Address1?: string;

  /** CompanyAddress_Address2 - text (nullable) */
  CompanyAddress_Address2?: string;

  /** CompanyAddress_Address3 - text (nullable) */
  CompanyAddress_Address3?: string;

  /** CompanyAddress_Address4 - text (nullable) */
  CompanyAddress_Address4?: string;

  /** CompanyAddress_ZipCode - text (nullable) */
  CompanyAddress_ZipCode?: string;

  /** CompanyAddress_City - text (nullable) */
  CompanyAddress_City?: string;

  /** CompanyAddress_State - text (nullable) */
  CompanyAddress_State?: string;

  /** CompanyAddress_CountryIsoCode - text (nullable) */
  CompanyAddress_CountryIsoCode?: string;

  /** CompanyLegalForm - text (nullable) */
  CompanyLegalForm?: string;

  /** CompanySiret - text (nullable) */
  CompanySiret?: string;

  /** Hash_Hash_ChainedId - uuid (nullable) */
  Hash_Hash_ChainedId?: string;

  /** Hash_Hash_Hash - bytea (nullable) */
  Hash_Hash_Hash?: Buffer | Uint8Array;

  /** OptionsCounter - integer */
  OptionsCounter: number;

  /** CompanyAddress_CodeINSEE - text (nullable) */
  CompanyAddress_CodeINSEE?: string;

  /** CompanyAddress_CityINSEE - text (nullable) */
  CompanyAddress_CityINSEE?: string;

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

  /** VatOnMarginObligatoryMentions - text (nullable) */
  VatOnMarginObligatoryMentions?: string;

  /** VatOnMarginObligatoryMentionsClear - text (nullable) */
  VatOnMarginObligatoryMentionsClear?: string;

}

