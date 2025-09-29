/**
 * Interface pour la table EbpSysCloudDocument
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysCloudDocument {
  /** GeneratorId - uuid */
  GeneratorId: string;

  /** Configuration - text */
  Configuration: string;

  /** Id - uuid */
  Id: string;

  /** PublicationId - uuid */
  PublicationId: string;

  /** CategoryId - integer */
  CategoryId: number;

  /** Name - text */
  Name: string;

  /** Description - text (nullable) */
  Description?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

