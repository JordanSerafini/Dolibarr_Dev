/**
 * Interface pour la table Activity
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Activity {
  /** Id - uuid */
  Id: string;

  /** StartDateTime - timestamp without time zone */
  StartDateTime: Date | string;

  /** EndDateTime - timestamp without time zone */
  EndDateTime: Date | string;

  /** Caption - text */
  Caption: string;

  /** ActivityCategory - smallint */
  ActivityCategory: number;

  /** Contact_NaturalPerson - boolean */
  Contact_NaturalPerson: boolean;

  /** Contact_OptIn - boolean */
  Contact_OptIn: boolean;

  /** Contact_ExternalId_GoogleId - text (nullable) */
  Contact_ExternalId_GoogleId?: string;

  /** Contact_ExternalId_OutlookId - text (nullable) */
  Contact_ExternalId_OutlookId?: string;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** CustomerName - text (nullable) */
  CustomerName?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** SupplierName - text (nullable) */
  SupplierName?: string;

  /** ContactId - uuid (nullable) */
  ContactId?: string;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** AutomaticCreation - smallint (nullable) */
  AutomaticCreation?: number;

  /** ReminderLetterId - uuid (nullable) */
  ReminderLetterId?: string;

  /** DocumentType - smallint (nullable) */
  DocumentType?: number;

  /** SaleDocumentId - uuid (nullable) */
  SaleDocumentId?: string;

  /** PurchaseDocumentId - uuid (nullable) */
  PurchaseDocumentId?: string;

  /** ScheduleEventId - uuid (nullable) */
  ScheduleEventId?: string;

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

  /** EventType - uuid (nullable) */
  EventType?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** EventState - smallint (nullable) */
  EventState?: number;

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

  /** CreatorColleagueId - text (nullable) */
  CreatorColleagueId?: string;

  /** Contact_AllowUsePersonnalDatas - boolean */
  Contact_AllowUsePersonnalDatas: boolean;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** Contact_Profession - text (nullable) */
  Contact_Profession?: string;

}

