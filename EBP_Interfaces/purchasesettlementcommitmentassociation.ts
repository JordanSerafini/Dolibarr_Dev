/**
 * Interface pour la table PurchaseSettlementCommitmentAssociation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseSettlementCommitmentAssociation {
  /** FinancialDiscount - numeric */
  FinancialDiscount: number;

  /** CurrencyFinancialDiscount - numeric */
  CurrencyFinancialDiscount: number;

  /** Id - uuid */
  Id: string;

  /** CommitmentId - uuid */
  CommitmentId: string;

  /** AssignedAmount - numeric */
  AssignedAmount: number;

  /** CurrencyAssignedAmount - numeric */
  CurrencyAssignedAmount: number;

  /** IsTransferedToAccounting - boolean */
  IsTransferedToAccounting: boolean;

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** LinkedCommitmentId - uuid (nullable) */
  LinkedCommitmentId?: string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** SettlementId - uuid (nullable) */
  SettlementId?: string;

  /** SecondarySettlementId - uuid (nullable) */
  SecondarySettlementId?: string;

  /** Reference - text (nullable) */
  Reference?: string;

}

