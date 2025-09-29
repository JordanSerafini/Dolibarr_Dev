/**
 * Interface pour la table LoyaltyInclusionLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface LoyaltyInclusionLine {
  /** IsExcluded - boolean */
  IsExcluded: boolean;

  /** InclusionOrder - integer */
  InclusionOrder: number;

  /** LoyaltyId - text */
  LoyaltyId: string;

  /** Id - uuid */
  Id: string;

  /** InclusionType - smallint */
  InclusionType: number;

  /** StartElementId - text (nullable) */
  StartElementId?: string;

  /** EndElementId - text (nullable) */
  EndElementId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** RangeTypeId - text (nullable) */
  RangeTypeId?: string;

}

