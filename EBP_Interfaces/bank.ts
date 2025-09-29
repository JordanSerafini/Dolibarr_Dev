/**
 * Interface pour la table Bank
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Bank {
  /** FormatSepaFile - boolean */
  FormatSepaFile: boolean;

  /** SepaFileUtf8Encoded - boolean */
  SepaFileUtf8Encoded: boolean;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** BankBook - text */
  BankBook: string;

  /** AccountingAccount - text */
  AccountingAccount: string;

  /** FormatCfonbFile - boolean */
  FormatCfonbFile: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** SepaForceChrgBr - boolean */
  SepaForceChrgBr: boolean;

  /** BillOfExchangeBook - text */
  BillOfExchangeBook: string;

  /** BillForCollectionBook - text */
  BillForCollectionBook: string;

  /** BillForDiscountBook - text */
  BillForDiscountBook: string;

  /** OtherPaymentBook - text */
  OtherPaymentBook: string;

  /** BillForCollectionAccount - text */
  BillForCollectionAccount: string;

  /** BillForDiscountAccount - text */
  BillForDiscountAccount: string;

  /** OtherPaymentAccount - text */
  OtherPaymentAccount: string;

  /** BankRemittanceCharges0_Amount - numeric */
  BankRemittanceCharges0_Amount: number;

  /** BankRemittanceCharges0_AmountType - smallint */
  BankRemittanceCharges0_AmountType: number;

  /** BankRemittanceCharges0_Account - text */
  BankRemittanceCharges0_Account: string;

  /** BankRemittanceCharges1_Amount - numeric */
  BankRemittanceCharges1_Amount: number;

  /** BankRemittanceCharges1_AmountType - smallint */
  BankRemittanceCharges1_AmountType: number;

  /** BankRemittanceCharges1_Account - text */
  BankRemittanceCharges1_Account: string;

  /** BankRemittanceCharges2_Amount - numeric */
  BankRemittanceCharges2_Amount: number;

  /** BankRemittanceCharges2_AmountType - smallint */
  BankRemittanceCharges2_AmountType: number;

  /** BankRemittanceCharges2_Account - text */
  BankRemittanceCharges2_Account: string;

  /** BankRemittanceCharges3_Amount - numeric */
  BankRemittanceCharges3_Amount: number;

  /** BankRemittanceCharges3_AmountType - smallint */
  BankRemittanceCharges3_AmountType: number;

  /** BankRemittanceCharges3_Account - text */
  BankRemittanceCharges3_Account: string;

  /** BankRemittanceCharges4_Amount - numeric */
  BankRemittanceCharges4_Amount: number;

  /** BankRemittanceCharges4_AmountType - smallint */
  BankRemittanceCharges4_AmountType: number;

  /** BankRemittanceCharges4_Account - text */
  BankRemittanceCharges4_Account: string;

  /** SepaBatchBooking - smallint */
  SepaBatchBooking: number;

  /** SepaSerializeDateTimeToLocalZone - boolean */
  SepaSerializeDateTimeToLocalZone: boolean;

  /** BankRemittanceCharges4_PaymentTypes - text (nullable) */
  BankRemittanceCharges4_PaymentTypes?: string;

  /** BankRemittanceCharges3_PaymentTypes - text (nullable) */
  BankRemittanceCharges3_PaymentTypes?: string;

  /** BankRemittanceCharges4_Caption - text (nullable) */
  BankRemittanceCharges4_Caption?: string;

  /** BankRemittanceCharges2_PaymentTypes - text (nullable) */
  BankRemittanceCharges2_PaymentTypes?: string;

  /** BankRemittanceCharges3_Caption - text (nullable) */
  BankRemittanceCharges3_Caption?: string;

  /** BankRemittanceCharges1_PaymentTypes - text (nullable) */
  BankRemittanceCharges1_PaymentTypes?: string;

  /** BankRemittanceCharges2_Caption - text (nullable) */
  BankRemittanceCharges2_Caption?: string;

  /** BankRemittanceCharges0_PaymentTypes - text (nullable) */
  BankRemittanceCharges0_PaymentTypes?: string;

  /** BankRemittanceCharges1_Caption - text (nullable) */
  BankRemittanceCharges1_Caption?: string;

  /** BankRemittanceCharges0_Caption - text (nullable) */
  BankRemittanceCharges0_Caption?: string;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** SepaCreditorIdentifier - text (nullable) */
  SepaCreditorIdentifier?: string;

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

  /** Address_BankName - text (nullable) */
  Address_BankName?: string;

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

  /** AccountDetail_BasicBankAccountNumber - text (nullable) */
  AccountDetail_BasicBankAccountNumber?: string;

  /** AccountDetail_InternationalBankAccountNumber - text (nullable) */
  AccountDetail_InternationalBankAccountNumber?: string;

  /** AccountDetail_BankIdentifierCode - text (nullable) */
  AccountDetail_BankIdentifierCode?: string;

  /** NationalIssuerNumber - text (nullable) */
  NationalIssuerNumber?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** BankCheckPrintingOrder - text (nullable) */
  BankCheckPrintingOrder?: string;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

  /** IsInactive - boolean */
  IsInactive: boolean;

}

