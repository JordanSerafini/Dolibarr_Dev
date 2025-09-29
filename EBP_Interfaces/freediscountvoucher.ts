/**
 * Interface pour la table FreeDiscountVoucher
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface FreeDiscountVoucher {
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

  /** CampaignId - text */
  CampaignId: string;

  /** Status - smallint */
  Status: number;

  /** DocumentId - uuid (nullable) */
  DocumentId?: string;

}

