/**
 * Interface pour la table Dependency
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Dependency {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - text */
  Id: string;

  /** Caption - text (nullable) */
  Caption?: string;

  /** DependencyType - smallint */
  DependencyType: number;

  /** Lag_DurationInHours - numeric (nullable) */
  Lag_DurationInHours?: number;

  /** Lag_Duration - numeric (nullable) */
  Lag_Duration?: number;

  /** Lag_UnitId - text (nullable) */
  Lag_UnitId?: string;

  /** Lag_EditedDuration - text (nullable) */
  Lag_EditedDuration?: string;

  /** PredecessorId - uuid */
  PredecessorId: string;

  /** SuccessorId - uuid */
  SuccessorId: string;

}

