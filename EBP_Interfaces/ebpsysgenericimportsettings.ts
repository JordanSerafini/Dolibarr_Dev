/**
 * Interface pour la table EbpSysGenericImportSettings
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysGenericImportSettings {
  /** name - text */
  name: string;

  /** categoryId - uuid */
  categoryId: string;

  /** export - boolean */
  export: boolean;

  /** serializedEntity - text */
  serializedEntity: string;

  /** formatId - uuid (nullable) */
  formatId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

