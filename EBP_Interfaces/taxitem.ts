/**
 * Interface pour la table TaxItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface TaxItem {
  /** Id - uuid */
  Id: string;

  /** TaxId - uuid */
  TaxId: string;

  /** TaxOrder - integer */
  TaxOrder: number;

  /** OwnerType - smallint */
  OwnerType: number;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** ItemFamilyId - text (nullable) */
  ItemFamilyId?: string;

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

  /** SubTaxId - uuid (nullable) */
  SubTaxId?: string;

}

