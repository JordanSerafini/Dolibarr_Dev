/**
 * Interface pour la table LoyaltyCalculationLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface LoyaltyCalculationLine {
  /** Id - uuid */
  Id: string;

  /** LoyaltyId - text */
  LoyaltyId: string;

  /** Threshold - numeric */
  Threshold: number;

  /** AdvantageType - smallint */
  AdvantageType: number;

  /** AdvantageValue - numeric (nullable) */
  AdvantageValue?: number;

  /** FreeItemId - text (nullable) */
  FreeItemId?: string;

  /** FreeItemFamilyId - text (nullable) */
  FreeItemFamilyId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

