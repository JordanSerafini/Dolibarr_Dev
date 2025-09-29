/**
 * Interface pour la table PosTerminalOpenCloseVatDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminalOpenCloseVatDetail {
  /** Id - uuid */
  Id: string;

  /** ParentId - uuid */
  ParentId: string;

  /** VatId - uuid */
  VatId: string;

  /** AmountVatExcluded - numeric */
  AmountVatExcluded: number;

  /** VatAmount - numeric */
  VatAmount: number;

  /** AmountVatIncluded - numeric */
  AmountVatIncluded: number;

  /** Positive - boolean */
  Positive: boolean;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

