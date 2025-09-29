/**
 * Interface pour la table Organization
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Organization {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** OrganizationOfficial - smallint */
  OrganizationOfficial: number;

  /** IncludeEcotaxFurnitureAmountInSaleDocument - boolean */
  IncludeEcotaxFurnitureAmountInSaleDocument: boolean;

  /** IsEcotaxCalculationTypeBasedOnDocumentCalculationType - boolean */
  IsEcotaxCalculationTypeBasedOnDocumentCalculationType: boolean;

  /** IncludeEcotaxFurnitureAmountInPurchaseDocument - boolean */
  IncludeEcotaxFurnitureAmountInPurchaseDocument: boolean;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

}

