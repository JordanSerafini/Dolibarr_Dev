/**
 * Interface pour la table SubTaxTerritoriality
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SubTaxTerritoriality {
  /** Id - uuid */
  Id: string;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

  /** TaxId - uuid */
  TaxId: string;

  /** ForSale - boolean */
  ForSale: boolean;

  /** ForPurchase - boolean */
  ForPurchase: boolean;

  /** SaleAccount - text (nullable) */
  SaleAccount?: string;

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

  /** VatId - uuid (nullable) */
  VatId?: string;

}

