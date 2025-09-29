/**
 * Interface pour la table Customer
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Customer {
  /** CheckExceedCommitmentDate - boolean */
  CheckExceedCommitmentDate: boolean;

  /** DueCommitmentsXDay - integer */
  DueCommitmentsXDay: number;

  /** EffectOfTradeAmount - numeric */
  EffectOfTradeAmount: number;

  /** GenerateVCS - boolean */
  GenerateVCS: boolean;

  /** ThirdLanguage - text */
  ThirdLanguage: string;

  /** InvoicingChargesAmount - numeric */
  InvoicingChargesAmount: number;

  /** AutomaticStockBooking - boolean */
  AutomaticStockBooking: boolean;

  /** CustomerToUseInCustomerProducts - smallint */
  CustomerToUseInCustomerProducts: number;

  /** ExtendedCurrentAmount - numeric */
  ExtendedCurrentAmount: number;

  /** ThresholdBeforeExceedAmount - numeric */
  ThresholdBeforeExceedAmount: number;

  /** Name - text */
  Name: string;

  /** UseInvoicingAddressAsDeliveryAddress - boolean */
  UseInvoicingAddressAsDeliveryAddress: boolean;

  /** UseInvoicingContactAsDeliveryContact - boolean */
  UseInvoicingContactAsDeliveryContact: boolean;

  /** MainDeliveryAddress_Npai - boolean */
  MainDeliveryAddress_Npai: boolean;

  /** MainInvoicingAddress_Npai - boolean */
  MainInvoicingAddress_Npai: boolean;

  /** MainDeliveryContact_NaturalPerson - boolean */
  MainDeliveryContact_NaturalPerson: boolean;

  /** MainDeliveryContact_OptIn - boolean */
  MainDeliveryContact_OptIn: boolean;

  /** Id - text */
  Id: string;

  /** MainInvoicingContact_NaturalPerson - boolean */
  MainInvoicingContact_NaturalPerson: boolean;

  /** MainInvoicingContact_OptIn - boolean */
  MainInvoicingContact_OptIn: boolean;

  /** NaturalPerson - boolean */
  NaturalPerson: boolean;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

  /** FinancialDiscountType - smallint */
  FinancialDiscountType: number;

  /** FinancialDiscountRate - numeric */
  FinancialDiscountRate: number;

  /** FinancialDiscountPaymentDelay - smallint */
  FinancialDiscountPaymentDelay: number;

  /** ActiveState - smallint */
  ActiveState: number;

  /** DiscountRate - numeric */
  DiscountRate: number;

  /** SecondDiscountRate - numeric */
  SecondDiscountRate: number;

  /** AllowedAmount - numeric */
  AllowedAmount: number;

  /** CurrentAmount - numeric */
  CurrentAmount: number;

  /** InitialAmount - numeric */
  InitialAmount: number;

  /** ExceedAmount - numeric */
  ExceedAmount: number;

  /** MustRetrieveCommitmentsFromAccounting - boolean */
  MustRetrieveCommitmentsFromAccounting: boolean;

  /** PriceWithTaxBased - boolean */
  PriceWithTaxBased: boolean;

  /** MustBeReminder - boolean */
  MustBeReminder: boolean;

  /** DayNumberToFirstReminder - integer */
  DayNumberToFirstReminder: number;

  /** DayNumberToSecondReminder - integer */
  DayNumberToSecondReminder: number;

  /** DayNumberToThirdReminder - integer */
  DayNumberToThirdReminder: number;

  /** IsCustomerAccount - boolean */
  IsCustomerAccount: boolean;

  /** WebContactSendKind - smallint */
  WebContactSendKind: number;

  /** SubjectToRE - boolean */
  SubjectToRE: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** DisallowOrderAssort - boolean */
  DisallowOrderAssort: boolean;

  /** DisallowDeliveryAssort - boolean */
  DisallowDeliveryAssort: boolean;

  /** SendReminderToPayerThird - boolean */
  SendReminderToPayerThird: boolean;

  /** xx_Envoi_carte_voeux - boolean */
  xx_Envoi_carte_voeux: boolean;

  /** AssortDeliveryByOrder - boolean */
  AssortDeliveryByOrder: boolean;

  /** CreatePosDeliveryOrderByDefault - boolean */
  CreatePosDeliveryOrderByDefault: boolean;

  /** LoyaltyOriginReportType - smallint */
  LoyaltyOriginReportType: number;

  /** LoyaltyOriginReportValue - numeric */
  LoyaltyOriginReportValue: number;

  /** LoyaltyValue - numeric */
  LoyaltyValue: number;

  /** LoyaltyCardType - text (nullable) */
  LoyaltyCardType?: string;

  /** LoyaltyCardId - text (nullable) */
  LoyaltyCardId?: string;

  /** LoyaltyCardCreationDate - timestamp without time zone (nullable) */
  LoyaltyCardCreationDate?: Date | string;

  /** LoyaltyCardValidityDuration - smallint (nullable) */
  LoyaltyCardValidityDuration?: number;

  /** LoyaltyCardExpiryDate - timestamp without time zone (nullable) */
  LoyaltyCardExpiryDate?: Date | string;

  /** LoyaltyCardRenewalDate - timestamp without time zone (nullable) */
  LoyaltyCardRenewalDate?: Date | string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** SelectedReminderReport - uuid (nullable) */
  SelectedReminderReport?: string;

  /** ShippingId - text (nullable) */
  ShippingId?: string;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** IdentificationType - smallint (nullable) */
  IdentificationType?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** Type - smallint (nullable) */
  Type?: number;

  /** Accounts_Account - text (nullable) */
  Accounts_Account?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** Group1 - uuid (nullable) */
  Group1?: string;

  /** Group2 - uuid (nullable) */
  Group2?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** FirstInvoicingDate - timestamp without time zone (nullable) */
  FirstInvoicingDate?: Date | string;

  /** SettlementModeId - text (nullable) */
  SettlementModeId?: string;

  /** PaymentDate - smallint (nullable) */
  PaymentDate?: number;

  /** PriceListCategoryId - text (nullable) */
  PriceListCategoryId?: string;

  /** Siren - text (nullable) */
  Siren?: string;

  /** NAF - text (nullable) */
  NAF?: string;

  /** FamilyId - text (nullable) */
  FamilyId?: string;

  /** SubFamilyId - text (nullable) */
  SubFamilyId?: string;

  /** IntracommunityVATNumber - text (nullable) */
  IntracommunityVATNumber?: string;

  /** MainInvoicingContact_ExternalId_GoogleId - text (nullable) */
  MainInvoicingContact_ExternalId_GoogleId?: string;

  /** MainInvoicingContact_ExternalId_OutlookId - text (nullable) */
  MainInvoicingContact_ExternalId_OutlookId?: string;

  /** Civility - text (nullable) */
  Civility?: string;

  /** MainDeliveryContact_ExternalId_GoogleId - text (nullable) */
  MainDeliveryContact_ExternalId_GoogleId?: string;

  /** MainDeliveryContact_ExternalId_OutlookId - text (nullable) */
  MainDeliveryContact_ExternalId_OutlookId?: string;

  /** MainInvoicingContact_Civility - text (nullable) */
  MainInvoicingContact_Civility?: string;

  /** MainInvoicingContact_Name - text (nullable) */
  MainInvoicingContact_Name?: string;

  /** MainInvoicingContact_FirstName - text (nullable) */
  MainInvoicingContact_FirstName?: string;

  /** MainInvoicingContact_Phone - text (nullable) */
  MainInvoicingContact_Phone?: string;

  /** MainInvoicingContact_CellPhone - text (nullable) */
  MainInvoicingContact_CellPhone?: string;

  /** MainInvoicingContact_Fax - text (nullable) */
  MainInvoicingContact_Fax?: string;

  /** MainInvoicingContact_Email - text (nullable) */
  MainInvoicingContact_Email?: string;

  /** MainInvoicingContact_Function - text (nullable) */
  MainInvoicingContact_Function?: string;

  /** MainInvoicingContact_Department - text (nullable) */
  MainInvoicingContact_Department?: string;

  /** MainInvoicingAddress_WebSite - text (nullable) */
  MainInvoicingAddress_WebSite?: string;

  /** MainInvoicingAddress_Longitude - numeric (nullable) */
  MainInvoicingAddress_Longitude?: number;

  /** MainInvoicingAddress_Latitude - numeric (nullable) */
  MainInvoicingAddress_Latitude?: number;

  /** MainDeliveryContact_Civility - text (nullable) */
  MainDeliveryContact_Civility?: string;

  /** MainDeliveryContact_Name - text (nullable) */
  MainDeliveryContact_Name?: string;

  /** MainDeliveryContact_FirstName - text (nullable) */
  MainDeliveryContact_FirstName?: string;

  /** MainDeliveryContact_Phone - text (nullable) */
  MainDeliveryContact_Phone?: string;

  /** MainDeliveryContact_CellPhone - text (nullable) */
  MainDeliveryContact_CellPhone?: string;

  /** MainDeliveryContact_Fax - text (nullable) */
  MainDeliveryContact_Fax?: string;

  /** MainDeliveryContact_Email - text (nullable) */
  MainDeliveryContact_Email?: string;

  /** MainDeliveryContact_Function - text (nullable) */
  MainDeliveryContact_Function?: string;

  /** MainDeliveryContact_Department - text (nullable) */
  MainDeliveryContact_Department?: string;

  /** MainDeliveryAddress_WebSite - text (nullable) */
  MainDeliveryAddress_WebSite?: string;

  /** MainDeliveryAddress_Longitude - numeric (nullable) */
  MainDeliveryAddress_Longitude?: number;

  /** MainDeliveryAddress_Latitude - numeric (nullable) */
  MainDeliveryAddress_Latitude?: number;

  /** MainInvoicingAddress_Address1 - text (nullable) */
  MainInvoicingAddress_Address1?: string;

  /** MainInvoicingAddress_Address2 - text (nullable) */
  MainInvoicingAddress_Address2?: string;

  /** MainInvoicingAddress_Address3 - text (nullable) */
  MainInvoicingAddress_Address3?: string;

  /** MainInvoicingAddress_Address4 - text (nullable) */
  MainInvoicingAddress_Address4?: string;

  /** MainInvoicingAddress_ZipCode - text (nullable) */
  MainInvoicingAddress_ZipCode?: string;

  /** MainInvoicingAddress_City - text (nullable) */
  MainInvoicingAddress_City?: string;

  /** MainInvoicingAddress_State - text (nullable) */
  MainInvoicingAddress_State?: string;

  /** MainInvoicingAddress_CountryIsoCode - text (nullable) */
  MainInvoicingAddress_CountryIsoCode?: string;

  /** MainInvoicingAddress_Description - text (nullable) */
  MainInvoicingAddress_Description?: string;

  /** MainInvoicingAddress_Civility - text (nullable) */
  MainInvoicingAddress_Civility?: string;

  /** MainInvoicingAddress_ThirdName - text (nullable) */
  MainInvoicingAddress_ThirdName?: string;

  /** MainDeliveryAddress_Address1 - text (nullable) */
  MainDeliveryAddress_Address1?: string;

  /** MainDeliveryAddress_Address2 - text (nullable) */
  MainDeliveryAddress_Address2?: string;

  /** MainDeliveryAddress_Address3 - text (nullable) */
  MainDeliveryAddress_Address3?: string;

  /** MainDeliveryAddress_Address4 - text (nullable) */
  MainDeliveryAddress_Address4?: string;

  /** MainDeliveryAddress_ZipCode - text (nullable) */
  MainDeliveryAddress_ZipCode?: string;

  /** MainDeliveryAddress_City - text (nullable) */
  MainDeliveryAddress_City?: string;

  /** MainDeliveryAddress_State - text (nullable) */
  MainDeliveryAddress_State?: string;

  /** MainDeliveryAddress_CountryIsoCode - text (nullable) */
  MainDeliveryAddress_CountryIsoCode?: string;

  /** MainDeliveryAddress_Description - text (nullable) */
  MainDeliveryAddress_Description?: string;

  /** MainDeliveryAddress_Civility - text (nullable) */
  MainDeliveryAddress_Civility?: string;

  /** MainDeliveryAddress_ThirdName - text (nullable) */
  MainDeliveryAddress_ThirdName?: string;

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

  /** Accounts_BillOfExchangeAccountingAccount - text (nullable) */
  Accounts_BillOfExchangeAccountingAccount?: string;

  /** TaxIds0 - uuid (nullable) */
  TaxIds0?: string;

  /** TaxIds1 - uuid (nullable) */
  TaxIds1?: string;

  /** TaxIds2 - uuid (nullable) */
  TaxIds2?: string;

  /** PaymentThirdId - text (nullable) */
  PaymentThirdId?: string;

  /** InvoicingThirdId - text (nullable) */
  InvoicingThirdId?: string;

  /** InvoicingChargesVatId - uuid (nullable) */
  InvoicingChargesVatId?: string;

  /** LastInvoicingDate - timestamp without time zone (nullable) */
  LastInvoicingDate?: Date | string;

  /** DocumentPrintMention - text (nullable) */
  DocumentPrintMention?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** Accounts_AuxiliaryAccount - text (nullable) */
  Accounts_AuxiliaryAccount?: string;

  /** Accounts_DoubtfulAccount - text (nullable) */
  Accounts_DoubtfulAccount?: string;

  /** SchedulerColor - integer (nullable) */
  SchedulerColor?: number;

  /** TravelExpenseId - text (nullable) */
  TravelExpenseId?: string;

  /** xx_Desabonne_Newsletter - boolean */
  xx_Desabonne_Newsletter: boolean;

  /** MainDeliveryContact_AllowUsePersonnalDatas - boolean (nullable) */
  MainDeliveryContact_AllowUsePersonnalDatas?: boolean;

  /** MainInvoicingContact_AllowUsePersonnalDatas - boolean (nullable) */
  MainInvoicingContact_AllowUsePersonnalDatas?: boolean;

  /** AllowUsePersonnalDatas - boolean */
  AllowUsePersonnalDatas: boolean;

  /** Nic - text (nullable) */
  Nic?: string;

  /** LoyaltyCumulativeTurnoverReport - numeric */
  LoyaltyCumulativeTurnoverReport: number;

  /** LoyaltyCumulativeTurnover - numeric */
  LoyaltyCumulativeTurnover: number;

  /** ShowTechnicalSheetOnFront - boolean */
  ShowTechnicalSheetOnFront: boolean;

  /** TechnicalSheetClear - text (nullable) */
  TechnicalSheetClear?: string;

  /** TechnicalSheet - text (nullable) */
  TechnicalSheet?: string;

  /** DepositPercentage - numeric (nullable) */
  DepositPercentage?: number;

  /** BuyerReference - text (nullable) */
  BuyerReference?: string;

  /** GoCardLessThirdId - text (nullable) */
  GoCardLessThirdId?: string;

  /** DefaultBankAccountId - uuid (nullable) */
  DefaultBankAccountId?: string;

  /** xx_Envoi_facture_par_mail - boolean */
  xx_Envoi_facture_par_mail: boolean;

  /** xx_Contrat_maintenance_EBP - boolean */
  xx_Contrat_maintenance_EBP: boolean;

  /** xx_login_ticket - text (nullable) */
  xx_login_ticket?: string;

  /** xx_mdp_ticket - text (nullable) */
  xx_mdp_ticket?: string;

  /** MainDeliveryAddress_CodeINSEE - text (nullable) */
  MainDeliveryAddress_CodeINSEE?: string;

  /** MainDeliveryAddress_CityINSEE - text (nullable) */
  MainDeliveryAddress_CityINSEE?: string;

  /** MainInvoicingAddress_CodeINSEE - text (nullable) */
  MainInvoicingAddress_CodeINSEE?: string;

  /** MainInvoicingAddress_CityINSEE - text (nullable) */
  MainInvoicingAddress_CityINSEE?: string;

  /** CnssCode - text (nullable) */
  CnssCode?: string;

  /** BusinessTaxCode - text (nullable) */
  BusinessTaxCode?: string;

  /** CnieCode - text (nullable) */
  CnieCode?: string;

  /** ApplyItemOtherTax - boolean */
  ApplyItemOtherTax: boolean;

  /** AssortMaintenanceContractInvoices - boolean */
  AssortMaintenanceContractInvoices: boolean;

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

  /** NeotouchSendingType - smallint */
  NeotouchSendingType: number;

  /** NeotouchDuplicateSendingType - smallint */
  NeotouchDuplicateSendingType: number;

  /** NeotouchContactsIdForDuplicate - text (nullable) */
  NeotouchContactsIdForDuplicate?: string;

  /** SendReceiptByMail - smallint */
  SendReceiptByMail: number;

  /** PrintReceiptChoice - smallint */
  PrintReceiptChoice: number;

  /** BirthDate - timestamp without time zone (nullable) */
  BirthDate?: Date | string;

  /** IduCode - text (nullable) */
  IduCode?: string;

  /** CnpsCode - text (nullable) */
  CnpsCode?: string;

  /** MainDeliveryContact_Profession - text (nullable) */
  MainDeliveryContact_Profession?: string;

  /** MainInvoicingContact_Profession - text (nullable) */
  MainInvoicingContact_Profession?: string;

  /** UrssafId - text (nullable) */
  UrssafId?: string;

  /** CustomerTypology - smallint (nullable) */
  CustomerTypology?: number;

}

