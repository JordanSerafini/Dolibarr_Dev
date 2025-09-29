/**
 * Interface pour la table PosTerminalOpenClosePaymentTypeDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminalOpenClosePaymentTypeDetail {
  /** Id - uuid */
  Id: string;

  /** ParentId - uuid */
  ParentId: string;

  /** PaymentTypeId - text */
  PaymentTypeId: string;

  /** PaymentCount - integer */
  PaymentCount: number;

  /** TotalAmount - numeric */
  TotalAmount: number;

  /** Positive - boolean */
  Positive: boolean;

  /** IsPaymentType - boolean */
  IsPaymentType: boolean;

  /** PosReturningChangeAmount - numeric */
  PosReturningChangeAmount: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

