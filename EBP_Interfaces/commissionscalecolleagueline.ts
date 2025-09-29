/**
 * Interface pour la table CommissionScaleColleagueLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CommissionScaleColleagueLine {
  /** CommissionOrder - integer */
  CommissionOrder: number;

  /** Id - uuid */
  Id: string;

  /** CommissionScaleId - text */
  CommissionScaleId: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** ColleagueFamilyId - text (nullable) */
  ColleagueFamilyId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

