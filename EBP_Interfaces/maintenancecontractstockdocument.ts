/**
 * Interface pour la table MaintenanceContractStockDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractStockDocument {
  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** IncludeInCosts - boolean */
  IncludeInCosts: boolean;

  /** MaintenanceContractId - text (nullable) */
  MaintenanceContractId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

