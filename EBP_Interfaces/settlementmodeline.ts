/**
 * Interface pour la table SettlementModeLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SettlementModeLine {
  /** GenerateCustomerSettlement - boolean */
  GenerateCustomerSettlement: boolean;

  /** GenerateSupplierSettlement - boolean */
  GenerateSupplierSettlement: boolean;

  /** DaysNumber - smallint */
  DaysNumber: number;

  /** CommitmentType - smallint */
  CommitmentType: number;

  /** Id - uuid */
  Id: string;

  /** SettlementModeId - text */
  SettlementModeId: string;

  /** PercentageDistribution - numeric */
  PercentageDistribution: number;

  /** AccountingMonth - boolean */
  AccountingMonth: boolean;

  /** PaymentTypeId - text (nullable) */
  PaymentTypeId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DayOfMonth - smallint (nullable) */
  DayOfMonth?: number;

}

