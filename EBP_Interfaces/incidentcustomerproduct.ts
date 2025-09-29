/**
 * Interface pour la table IncidentCustomerProduct
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IncidentCustomerProduct {
  /** DoNotCreateMovementForExchangedItem - boolean */
  DoNotCreateMovementForExchangedItem: boolean;

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

  /** DecrementMaintenanceContractCounter - boolean */
  DecrementMaintenanceContractCounter: boolean;

  /** Id - uuid */
  Id: string;

  /** IncidentId - text */
  IncidentId: string;

  /** Status - smallint */
  Status: number;

  /** ReceiptDate - timestamp without time zone (nullable) */
  ReceiptDate?: Date | string;

  /** ReturnDate - timestamp without time zone (nullable) */
  ReturnDate?: Date | string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

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

  /** ExchangeCustomerProductId - text (nullable) */
  ExchangeCustomerProductId?: string;

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

}

