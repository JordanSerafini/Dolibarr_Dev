/**
 * Interface pour la table ScheduleEventCustomerProduct
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ScheduleEventCustomerProduct {
  /** PartsCoverType - smallint */
  PartsCoverType: number;

  /** LabourCoverType - smallint */
  LabourCoverType: number;

  /** TravelCoverType - smallint */
  TravelCoverType: number;

  /** StandardExchange - boolean */
  StandardExchange: boolean;

  /** Caption - text */
  Caption: string;

  /** DoNotCreateMovementForExchangedItem - boolean */
  DoNotCreateMovementForExchangedItem: boolean;

  /** DecrementMaintenanceContractCounter - boolean */
  DecrementMaintenanceContractCounter: boolean;

  /** Id - uuid */
  Id: string;

  /** ScheduleEventId - uuid */
  ScheduleEventId: string;

  /** ContractHoursNumberDecremented - numeric (nullable) */
  ContractHoursNumberDecremented?: number;

  /** ExchangeCustomerProductId - text (nullable) */
  ExchangeCustomerProductId?: string;

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

  /** CustomerProductId - text (nullable) */
  CustomerProductId?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ExchangeItemId - text (nullable) */
  ExchangeItemId?: string;

  /** ExchangeDate - timestamp without time zone (nullable) */
  ExchangeDate?: Date | string;

  /** ExchangeTrackingNumber - text (nullable) */
  ExchangeTrackingNumber?: string;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** ExchangeStockDocumentId - uuid (nullable) */
  ExchangeStockDocumentId?: string;

  /** ExchangeStockDocumentLineId - text (nullable) */
  ExchangeStockDocumentLineId?: string;

}

