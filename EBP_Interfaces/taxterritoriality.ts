/**
 * Interface pour la table TaxTerritoriality
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface TaxTerritoriality {
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

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** SaleAccount - text (nullable) */
  SaleAccount?: string;

  /** PurchaseAccount - text (nullable) */
  PurchaseAccount?: string;

  /** VatId - uuid (nullable) */
  VatId?: string;

}

