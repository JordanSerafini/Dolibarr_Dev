/**
 * Interface pour la table Supplier
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Supplier {
  /** AssortDeliveryByOrder - boolean */
  AssortDeliveryByOrder: boolean;

  /** DisallowOrderAssort - boolean */
  DisallowOrderAssort: boolean;

  /** DisallowDeliveryAssort - boolean */
  DisallowDeliveryAssort: boolean;

  /** VatMode - smallint */
  VatMode: number;

  /** ExtendedCurrentAmount - numeric */
  ExtendedCurrentAmount: number;

  /** ThresholdBeforeExceedAmount - numeric */
  ThresholdBeforeExceedAmount: number;

  /** Id - text */
  Id: string;

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

  /** MainInvoicingContact_NaturalPerson - boolean */
  MainInvoicingContact_NaturalPerson: boolean;

  /** MainInvoicingContact_OptIn - boolean */
  MainInvoicingContact_OptIn: boolean;

  /** NaturalPerson - boolean */
  NaturalPerson: boolean;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

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

  /** FinancialDiscountType - smallint */
  FinancialDiscountType: number;

  /** FinancialDiscountRate - numeric */
  FinancialDiscountRate: number;

  /** FinancialDiscountPaymentDelay - smallint */
  FinancialDiscountPaymentDelay: number;

  /** ActiveState - smallint */
  ActiveState: number;

  /** MustRetrieveCommitmentsFromAccounting - boolean */
  MustRetrieveCommitmentsFromAccounting: boolean;

  /** IRPFRate - numeric */
  IRPFRate: number;

  /** UniqueId - uuid */
  UniqueId: string;

  /** ThirdLanguage - text */
  ThirdLanguage: string;

  /** InvoicingChargesAmount - numeric */
  InvoicingChargesAmount: number;

  /** IsSelfBilling - boolean */
  IsSelfBilling: boolean;

  /** PostagePaidThreshold - numeric */
  PostagePaidThreshold: number;

  /** Accounts_AuxiliaryAccount - text (nullable) */
  Accounts_AuxiliaryAccount?: string;

  /** SchedulerColor - integer (nullable) */
  SchedulerColor?: number;

  /** SelfBillingId - text (nullable) */
  SelfBillingId?: string;

  /** SelfBillingInvoiceObligatoryMentions - text (nullable) */
  SelfBillingInvoiceObligatoryMentions?: string;

  /** SelfBillingInvoiceObligatoryMentionsClear - text (nullable) */
  SelfBillingInvoiceObligatoryMentionsClear?: string;

  /** InvoicingChargesVatId - uuid (nullable) */
  InvoicingChargesVatId?: string;

  /** LastInvoicingDate - timestamp without time zone (nullable) */
  LastInvoicingDate?: Date | string;

  /** DocumentPrintMention - text (nullable) */
  DocumentPrintMention?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** DocumentSerialId - text (nullable) */
  DocumentSerialId?: string;

  /** IdentificationType - smallint (nullable) */
  IdentificationType?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** Group1 - uuid (nullable) */
  Group1?: string;

  /** Group2 - uuid (nullable) */
  Group2?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** Accounts_Account - text (nullable) */
  Accounts_Account?: string;

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

  /** Civility - text (nullable) */
  Civility?: string;

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

  /** ShippingId - text (nullable) */
  ShippingId?: string;

  /** PaymentThirdId - text (nullable) */
  PaymentThirdId?: string;

  /** InvoicingThirdId - text (nullable) */
  InvoicingThirdId?: string;

  /** MainDeliveryContact_AllowUsePersonnalDatas - boolean (nullable) */
  MainDeliveryContact_AllowUsePersonnalDatas?: boolean;

  /** MainInvoicingContact_AllowUsePersonnalDatas - boolean (nullable) */
  MainInvoicingContact_AllowUsePersonnalDatas?: boolean;

  /** AllowUsePersonnalDatas - boolean */
  AllowUsePersonnalDatas: boolean;

  /** Nic - text (nullable) */
  Nic?: string;

  /** SupplierType - smallint */
  SupplierType: number;

  /** CompetenceId - text (nullable) */
  CompetenceId?: string;

  /** IsEcotaxFurnitureBasedOnAmountVatIncluded - boolean */
  IsEcotaxFurnitureBasedOnAmountVatIncluded: boolean;

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

  /** IduCode - text (nullable) */
  IduCode?: string;

  /** CnpsCode - text (nullable) */
  CnpsCode?: string;

  /** MainDeliveryContact_Profession - text (nullable) */
  MainDeliveryContact_Profession?: string;

  /** MainInvoicingContact_Profession - text (nullable) */
  MainInvoicingContact_Profession?: string;

}

