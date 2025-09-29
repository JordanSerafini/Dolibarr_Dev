/**
 * Interface pour la table ShippingAccount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ShippingAccount {
  /** ShippingId - text */
  ShippingId: string;

  /** Id - uuid */
  Id: string;

  /** VatId - uuid */
  VatId: string;

  /** Account - text (nullable) */
  Account?: string;

  /** PurchaseAccount - text (nullable) */
  PurchaseAccount?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** SubContractorAccount - text (nullable) */
  SubContractorAccount?: string;

}

