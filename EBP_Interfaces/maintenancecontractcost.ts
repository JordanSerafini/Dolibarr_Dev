/**
 * Interface pour la table MaintenanceContractCost
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractCost {
  /** Quantity - numeric */
  Quantity: number;

  /** UnitPrice - numeric */
  UnitPrice: number;

  /** NetAmountVatExcluded - numeric */
  NetAmountVatExcluded: number;

  /** NetAmountVatIncluded - numeric */
  NetAmountVatIncluded: number;

  /** LineOrder - integer */
  LineOrder: number;

  /** MaintenanceContractId - text */
  MaintenanceContractId: string;

  /** CostType - smallint */
  CostType: number;

  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ExtraCostDate - timestamp without time zone */
  ExtraCostDate: Date | string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** VatId - uuid (nullable) */
  VatId?: string;

}

