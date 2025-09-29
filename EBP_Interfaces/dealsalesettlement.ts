/**
 * Interface pour la table DealSaleSettlement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealSaleSettlement {
  /** IsDeposit - boolean */
  IsDeposit: boolean;

  /** Id - uuid */
  Id: string;

  /** SettlementId - uuid */
  SettlementId: string;

  /** ThirdId - text */
  ThirdId: string;

  /** ThirdName - text */
  ThirdName: string;

  /** SettlementDate - timestamp without time zone */
  SettlementDate: Date | string;

  /** PaymentTypeId - text */
  PaymentTypeId: string;

  /** Amount - numeric */
  Amount: number;

  /** DealId - text (nullable) */
  DealId?: string;

  /** DepositLastAttachedDocumentId - uuid (nullable) */
  DepositLastAttachedDocumentId?: string;

  /** DepositLastAttachedDocumentType - smallint (nullable) */
  DepositLastAttachedDocumentType?: number;

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

