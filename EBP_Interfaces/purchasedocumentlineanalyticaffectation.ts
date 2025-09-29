/**
 * Interface pour la table PurchaseDocumentLineAnalyticAffectation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocumentLineAnalyticAffectation {
  /** Id - integer */
  Id: number;

  /** AnalyticPlanItem - integer */
  AnalyticPlanItem: number;

  /** Percentage - numeric */
  Percentage: number;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Amount - numeric */
  Amount: number;

}

