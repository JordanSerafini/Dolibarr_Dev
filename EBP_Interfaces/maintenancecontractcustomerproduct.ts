/**
 * Interface pour la table MaintenanceContractCustomerProduct
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractCustomerProduct {
  /** Id - uuid */
  Id: string;

  /** ContractId - text */
  ContractId: string;

  /** ArePartsCovered - boolean */
  ArePartsCovered: boolean;

  /** PartsDuration - numeric */
  PartsDuration: number;

  /** IsLabourCovered - boolean */
  IsLabourCovered: boolean;

  /** LabourDuration - numeric */
  LabourDuration: number;

  /** IsTravelCovered - boolean */
  IsTravelCovered: boolean;

  /** TravelDuration - numeric */
  TravelDuration: number;

  /** Caption - text */
  Caption: string;

  /** TrackingNumber - text (nullable) */
  TrackingNumber?: string;

  /** CustomerProductId - text (nullable) */
  CustomerProductId?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

