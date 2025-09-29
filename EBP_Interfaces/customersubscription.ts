/**
 * Interface pour la table CustomerSubscription
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerSubscription {
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

  /** CustomerId - text */
  CustomerId: string;

  /** SubscriptionId - text */
  SubscriptionId: string;

  /** ExpiryDate - timestamp without time zone */
  ExpiryDate: Date | string;

  /** TotalPassingsAllowed - smallint */
  TotalPassingsAllowed: number;

  /** RemainingPassings - smallint */
  RemainingPassings: number;

  /** SaleDocumentLineId - uuid (nullable) */
  SaleDocumentLineId?: string;

  /** SalePriceVatIncluded - numeric */
  SalePriceVatIncluded: number;

  /** SubscriptionState - smallint */
  SubscriptionState: number;

}

