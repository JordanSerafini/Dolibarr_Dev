/**
 * Interface pour la table DealResourcesCost
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealResourcesCost {
  /** PredictedDuration - numeric */
  PredictedDuration: number;

  /** AccomplishedDuration - numeric */
  AccomplishedDuration: number;

  /** ProfitsOnDuration - numeric */
  ProfitsOnDuration: number;

  /** NetAmountVatExcluded - numeric */
  NetAmountVatExcluded: number;

  /** CostAmount - numeric */
  CostAmount: number;

  /** PredictedCostamount - numeric */
  PredictedCostamount: number;

  /** Id - uuid */
  Id: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** EquipmentId - text (nullable) */
  EquipmentId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

}

