/**
 * Interface pour la table PosTerminalOpenCloseColleagueDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminalOpenCloseColleagueDetail {
  /** PosReceiptCount - integer */
  PosReceiptCount: number;

  /** NetSalesVatIncluded - numeric */
  NetSalesVatIncluded: number;

  /** AverageBasket - numeric */
  AverageBasket: number;

  /** Positive - boolean */
  Positive: boolean;

  /** Id - uuid */
  Id: string;

  /** ParentId - uuid */
  ParentId: string;

  /** ColleagueId - text (nullable) */
  ColleagueId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

