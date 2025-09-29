/**
 * Interface pour la table Contact
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Contact {
  /** ContactFields_Name - text */
  ContactFields_Name: string;

  /** ContactFields_NaturalPerson - boolean */
  ContactFields_NaturalPerson: boolean;

  /** ContactFields_OptIn - boolean */
  ContactFields_OptIn: boolean;

  /** AddressFields_Npai - boolean */
  AddressFields_Npai: boolean;

  /** Id - uuid */
  Id: string;

  /** OtherAddressFields_Npai - boolean */
  OtherAddressFields_Npai: boolean;

  /** IsWebContact - boolean */
  IsWebContact: boolean;

  /** IsMainInvoicing - boolean */
  IsMainInvoicing: boolean;

  /** IsMainDelivery - boolean */
  IsMainDelivery: boolean;

  /** AssociatedCustomerId - text (nullable) */
  AssociatedCustomerId?: string;

  /** AssociatedSupplierId - text (nullable) */
  AssociatedSupplierId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** OtherAddressFields_WebSite - text (nullable) */
  OtherAddressFields_WebSite?: string;

  /** OtherAddressFields_Longitude - numeric (nullable) */
  OtherAddressFields_Longitude?: number;

  /** OtherAddressFields_Latitude - numeric (nullable) */
  OtherAddressFields_Latitude?: number;

  /** ContactFields_Civility - text (nullable) */
  ContactFields_Civility?: string;

  /** AddressFields_WebSite - text (nullable) */
  AddressFields_WebSite?: string;

  /** AddressFields_Longitude - numeric (nullable) */
  AddressFields_Longitude?: number;

  /** AddressFields_Latitude - numeric (nullable) */
  AddressFields_Latitude?: number;

  /** OtherAddressFields_Address1 - text (nullable) */
  OtherAddressFields_Address1?: string;

  /** OtherAddressFields_Address2 - text (nullable) */
  OtherAddressFields_Address2?: string;

  /** OtherAddressFields_Address3 - text (nullable) */
  OtherAddressFields_Address3?: string;

  /** OtherAddressFields_Address4 - text (nullable) */
  OtherAddressFields_Address4?: string;

  /** OtherAddressFields_ZipCode - text (nullable) */
  OtherAddressFields_ZipCode?: string;

  /** OtherAddressFields_City - text (nullable) */
  OtherAddressFields_City?: string;

  /** OtherAddressFields_State - text (nullable) */
  OtherAddressFields_State?: string;

  /** OtherAddressFields_CountryIsoCode - text (nullable) */
  OtherAddressFields_CountryIsoCode?: string;

  /** OtherAddressFields_Description - text (nullable) */
  OtherAddressFields_Description?: string;

  /** OtherAddressFields_Civility - text (nullable) */
  OtherAddressFields_Civility?: string;

  /** OtherAddressFields_ThirdName - text (nullable) */
  OtherAddressFields_ThirdName?: string;

  /** ContactFields_ExternalId_GoogleId - text (nullable) */
  ContactFields_ExternalId_GoogleId?: string;

  /** ContactFields_ExternalId_OutlookId - text (nullable) */
  ContactFields_ExternalId_OutlookId?: string;

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

  /** ContactFields_FirstName - text (nullable) */
  ContactFields_FirstName?: string;

  /** ContactFields_Phone - text (nullable) */
  ContactFields_Phone?: string;

  /** ContactFields_CellPhone - text (nullable) */
  ContactFields_CellPhone?: string;

  /** ContactFields_Fax - text (nullable) */
  ContactFields_Fax?: string;

  /** ContactFields_Email - text (nullable) */
  ContactFields_Email?: string;

  /** ContactFields_Function - text (nullable) */
  ContactFields_Function?: string;

  /** ContactFields_Department - text (nullable) */
  ContactFields_Department?: string;

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

  /** ContactFields_AllowUsePersonnalDatas - boolean */
  ContactFields_AllowUsePersonnalDatas: boolean;

  /** PrintSendOptions_Quote - smallint */
  PrintSendOptions_Quote: number;

  /** PrintSendOptions_ExecutionQuote - smallint */
  PrintSendOptions_ExecutionQuote: number;

  /** PrintSendOptions_Order - smallint */
  PrintSendOptions_Order: number;

  /** PrintSendOptions_DeliveryOrder - smallint */
  PrintSendOptions_DeliveryOrder: number;

  /** PrintSendOptions_Invoice - smallint */
  PrintSendOptions_Invoice: number;

  /** PrintSendOptions_CreditMemo - smallint */
  PrintSendOptions_CreditMemo: number;

  /** PrintSendOptions_DepositInvoice - smallint */
  PrintSendOptions_DepositInvoice: number;

  /** PrintSendOptions_DepositCreditMemo - smallint */
  PrintSendOptions_DepositCreditMemo: number;

  /** PrintSendOptions_ProgressStateDocument - smallint */
  PrintSendOptions_ProgressStateDocument: number;

  /** PrintSendOptions_PurchaseQuote - smallint */
  PrintSendOptions_PurchaseQuote: number;

  /** PrintSendOptions_PurchaseOrder - smallint */
  PrintSendOptions_PurchaseOrder: number;

  /** PrintSendOptions_ReceiptOrder - smallint */
  PrintSendOptions_ReceiptOrder: number;

  /** PrintSendOptions_ReturnOrder - smallint */
  PrintSendOptions_ReturnOrder: number;

  /** PrintSendOptions_PurchaseInvoice - smallint */
  PrintSendOptions_PurchaseInvoice: number;

  /** PrintSendOptions_PurchaseCreditMemo - smallint */
  PrintSendOptions_PurchaseCreditMemo: number;

  /** PrintSendOptions_PurchaseDepositInvoice - smallint */
  PrintSendOptions_PurchaseDepositInvoice: number;

  /** PrintSendOptions_PurchaseDepositCreditMemo - smallint */
  PrintSendOptions_PurchaseDepositCreditMemo: number;

  /** PrintSendOptions_PurchaseProgressStateDocument - smallint */
  PrintSendOptions_PurchaseProgressStateDocument: number;

  /** AddressFields_CodeINSEE - text (nullable) */
  AddressFields_CodeINSEE?: string;

  /** AddressFields_CityINSEE - text (nullable) */
  AddressFields_CityINSEE?: string;

  /** OtherAddressFields_CodeINSEE - text (nullable) */
  OtherAddressFields_CodeINSEE?: string;

  /** OtherAddressFields_CityINSEE - text (nullable) */
  OtherAddressFields_CityINSEE?: string;

  /** IsMainReminder - boolean */
  IsMainReminder: boolean;

  /** ContactFields_Profession - text (nullable) */
  ContactFields_Profession?: string;

}

