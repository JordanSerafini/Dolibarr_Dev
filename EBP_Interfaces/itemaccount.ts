/**
 * Interface pour la table ItemAccount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemAccount {
  /** Id - uuid */
  Id: string;

  /** VatId - uuid */
  VatId: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

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

  /** RangeItemId - text (nullable) */
  RangeItemId?: string;

  /** SubContractorAccount - text (nullable) */
  SubContractorAccount?: string;

}

