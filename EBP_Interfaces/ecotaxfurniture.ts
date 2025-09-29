/**
 * Interface pour la table EcotaxFurniture
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EcotaxFurniture {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** OrganizationId - uuid */
  OrganizationId: string;

  /** EcotaxCalculationBaseId - text */
  EcotaxCalculationBaseId: string;

  /** ProducerStatus - text (nullable) */
  ProducerStatus?: string;

  /** DecreeCategory - text (nullable) */
  DecreeCategory?: string;

  /** DecreeFunction - text (nullable) */
  DecreeFunction?: string;

  /** ValdeliaFamily - text (nullable) */
  ValdeliaFamily?: string;

  /** MajoritoryProductMaterial - text (nullable) */
  MajoritoryProductMaterial?: string;

  /** CustomsCode - text (nullable) */
  CustomsCode?: string;

  /** ProductStatus - text (nullable) */
  ProductStatus?: string;

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

  /** IsObsolete - boolean */
  IsObsolete: boolean;

}

