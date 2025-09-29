/**
 * Interface pour la table CommissionScaleSelectionLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CommissionScaleSelectionLine {
  /** Id - uuid */
  Id: string;

  /** CommissionScaleId - text */
  CommissionScaleId: string;

  /** SelectionType - smallint */
  SelectionType: number;

  /** Exclude - boolean */
  Exclude: boolean;

  /** SelectionOrder - integer */
  SelectionOrder: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** IdFrom - text (nullable) */
  IdFrom?: string;

  /** IdTo - text (nullable) */
  IdTo?: string;

}

