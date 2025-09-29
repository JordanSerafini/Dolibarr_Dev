/**
 * Interface pour la table AnalyticGridLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface AnalyticGridLine {
  /** Id - integer */
  Id: number;

  /** AnalyticPlanItem - integer */
  AnalyticPlanItem: number;

  /** Percentage - numeric */
  Percentage: number;

  /** AnalyticGridId - text */
  AnalyticGridId: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

