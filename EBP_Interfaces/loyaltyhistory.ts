/**
 * Interface pour la table LoyaltyHistory
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface LoyaltyHistory {
  /** Id - uuid */
  Id: string;

  /** LoyaltyValue - numeric */
  LoyaltyValue: number;

  /** IsInitialized - boolean */
  IsInitialized: boolean;

  /** IsOriginReport - boolean */
  IsOriginReport: boolean;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** DocumentId - uuid (nullable) */
  DocumentId?: string;

  /** LoyaltyCardTypeId - text (nullable) */
  LoyaltyCardTypeId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** LoyaltyTurnover - numeric */
  LoyaltyTurnover: number;

}

