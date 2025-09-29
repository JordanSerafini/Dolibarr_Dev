/**
 * Interface pour la table IncidentPurchaseDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IncidentPurchaseDocument {
  /** Id - uuid */
  Id: string;

  /** DocumentId - uuid */
  DocumentId: string;

  /** IncludeInCosts - boolean */
  IncludeInCosts: boolean;

  /** IncidentId - text (nullable) */
  IncidentId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

