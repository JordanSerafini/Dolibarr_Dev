/**
 * Interface pour la table ItemFamilyAccount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemFamilyAccount {
  /** ItemFamilyId - text */
  ItemFamilyId: string;

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

  /** ServiceAccount - text (nullable) */
  ServiceAccount?: string;

  /** PurchaseServiceAccount - text (nullable) */
  PurchaseServiceAccount?: string;

  /** SubContractorAccount - text (nullable) */
  SubContractorAccount?: string;

  /** SubContractorServiceAccount - text (nullable) */
  SubContractorServiceAccount?: string;

}

