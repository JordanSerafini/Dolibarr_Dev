/**
 * Interface pour la table ItemFamilyVatTerritoriality
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemFamilyVatTerritoriality {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** TerritorialityId - uuid */
  TerritorialityId: string;

  /** VatId - uuid */
  VatId: string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** ParentId - text */
  ParentId: string;

}

