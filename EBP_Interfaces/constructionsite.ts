/**
 * Interface pour la table ConstructionSite
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ConstructionSite {
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

  /** InvoiceScheduleEvent - boolean */
  InvoiceScheduleEvent: boolean;

  /** InvoiceScheduleTimeEvent - boolean */
  InvoiceScheduleTimeEvent: boolean;

  /** PredictedCosts - numeric */
  PredictedCosts: number;

  /** PredictedSales - numeric */
  PredictedSales: number;

  /** PredictedGrossMargin - numeric */
  PredictedGrossMargin: number;

  /** PredictedDuration - numeric */
  PredictedDuration: number;

  /** AccomplishedCosts - numeric */
  AccomplishedCosts: number;

  /** AccomplishedSales - numeric */
  AccomplishedSales: number;

  /** AccomplishedGrossMargin - numeric */
  AccomplishedGrossMargin: number;

  /** AccomplishedDuration - numeric */
  AccomplishedDuration: number;

  /** ProfitsOnCosts - numeric */
  ProfitsOnCosts: number;

  /** ProfitsOnSales - numeric */
  ProfitsOnSales: number;

  /** ProfitsOnGrossMargin - numeric */
  ProfitsOnGrossMargin: number;

  /** ProfitsOnDuration - numeric */
  ProfitsOnDuration: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** ActualTreasury - numeric */
  ActualTreasury: number;

  /** CustomerCommitmentBalanceDues - numeric */
  CustomerCommitmentBalanceDues: number;

  /** SupplierCommitmentBalanceDues - numeric */
  SupplierCommitmentBalanceDues: number;

  /** SubContractorCommitmentBalanceDues - numeric */
  SubContractorCommitmentBalanceDues: number;

  /** OtherCosts - numeric */
  OtherCosts: number;

  /** TreasuryBalanceDue - numeric */
  TreasuryBalanceDue: number;

  /** Id - text */
  Id: string;

  /** ReferenceDocumentId - uuid (nullable) */
  ReferenceDocumentId?: string;

  /** ConstructionSiteReferenceDocumentId - uuid (nullable) */
  ConstructionSiteReferenceDocumentId?: string;

  /** Caption - text */
  Caption: string;

  /** StartDate - timestamp without time zone */
  StartDate: Date | string;

  /** EndDate - timestamp without time zone */
  EndDate: Date | string;

  /** Status - integer */
  Status: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** DeliveryAddressType - smallint */
  DeliveryAddressType: number;

  /** ManagementStockType - smallint */
  ManagementStockType: number;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** CustomerId - text */
  CustomerId: string;

  /** UseConstructionSiteAddressAsDeliveryAddressForSales - boolean */
  UseConstructionSiteAddressAsDeliveryAddressForSales: boolean;

  /** ConstructionSiteAddressId - uuid (nullable) */
  ConstructionSiteAddressId?: string;

  /** ConstructionSiteAddress_Address1 - text (nullable) */
  ConstructionSiteAddress_Address1?: string;

  /** ConstructionSiteAddress_Address2 - text (nullable) */
  ConstructionSiteAddress_Address2?: string;

  /** ConstructionSiteAddress_Address3 - text (nullable) */
  ConstructionSiteAddress_Address3?: string;

  /** ConstructionSiteAddress_Address4 - text (nullable) */
  ConstructionSiteAddress_Address4?: string;

  /** ConstructionSiteAddress_ZipCode - text (nullable) */
  ConstructionSiteAddress_ZipCode?: string;

  /** ConstructionSiteAddress_City - text */
  ConstructionSiteAddress_City: string;

  /** ConstructionSiteAddress_State - text (nullable) */
  ConstructionSiteAddress_State?: string;

  /** ConstructionSiteAddress_CountryIsoCode - text */
  ConstructionSiteAddress_CountryIsoCode: string;

  /** ConstructionSiteAddress_Description - text (nullable) */
  ConstructionSiteAddress_Description?: string;

  /** ConstructionSiteAddress_Civility - text (nullable) */
  ConstructionSiteAddress_Civility?: string;

  /** ConstructionSiteAddress_ThirdName - text (nullable) */
  ConstructionSiteAddress_ThirdName?: string;

  /** ConstructionSiteAddress_Npai - boolean */
  ConstructionSiteAddress_Npai: boolean;

  /** ConstructionSiteAddress_WebSite - text (nullable) */
  ConstructionSiteAddress_WebSite?: string;

  /** ConstructionSiteAddress_Longitude - numeric (nullable) */
  ConstructionSiteAddress_Longitude?: number;

  /** ConstructionSiteAddress_Latitude - numeric (nullable) */
  ConstructionSiteAddress_Latitude?: number;

  /** InvoicingAddressId - uuid (nullable) */
  InvoicingAddressId?: string;

  /** InvoicingAddress_Address1 - text (nullable) */
  InvoicingAddress_Address1?: string;

  /** InvoicingAddress_Address2 - text (nullable) */
  InvoicingAddress_Address2?: string;

  /** InvoicingAddress_Address3 - text (nullable) */
  InvoicingAddress_Address3?: string;

  /** InvoicingAddress_Address4 - text (nullable) */
  InvoicingAddress_Address4?: string;

  /** InvoicingAddress_ZipCode - text (nullable) */
  InvoicingAddress_ZipCode?: string;

  /** InvoicingAddress_City - text */
  InvoicingAddress_City: string;

  /** InvoicingAddress_State - text (nullable) */
  InvoicingAddress_State?: string;

  /** InvoicingAddress_CountryIsoCode - text */
  InvoicingAddress_CountryIsoCode: string;

  /** InvoicingAddress_Description - text (nullable) */
  InvoicingAddress_Description?: string;

  /** InvoicingAddress_Civility - text (nullable) */
  InvoicingAddress_Civility?: string;

  /** InvoicingAddress_ThirdName - text (nullable) */
  InvoicingAddress_ThirdName?: string;

  /** InvoicingAddress_Npai - boolean */
  InvoicingAddress_Npai: boolean;

  /** InvoicingAddress_WebSite - text (nullable) */
  InvoicingAddress_WebSite?: string;

  /** InvoicingAddress_Longitude - numeric (nullable) */
  InvoicingAddress_Longitude?: number;

  /** InvoicingAddress_Latitude - numeric (nullable) */
  InvoicingAddress_Latitude?: number;

  /** GlobalCost - numeric */
  GlobalCost: number;

  /** TotalGrossInterestAmount - numeric */
  TotalGrossInterestAmount: number;

  /** GrossInterestTotalRate - numeric */
  GrossInterestTotalRate: number;

  /** TotalBrandRate - numeric */
  TotalBrandRate: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** ConstructionSiteAddress_CodeINSEE - text (nullable) */
  ConstructionSiteAddress_CodeINSEE?: string;

  /** ConstructionSiteAddress_CityINSEE - text (nullable) */
  ConstructionSiteAddress_CityINSEE?: string;

  /** InvoicingAddress_CodeINSEE - text (nullable) */
  InvoicingAddress_CodeINSEE?: string;

  /** InvoicingAddress_CityINSEE - text (nullable) */
  InvoicingAddress_CityINSEE?: string;

}

