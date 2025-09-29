/**
 * Interface pour la table SaleDocumentChorusAssociatedFiles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleDocumentChorusAssociatedFiles {
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

  /** ParentId - uuid */
  ParentId: string;

  /** Name - text */
  Name: string;

  /** Content - bytea (nullable) */
  Content?: Buffer | Uint8Array;

  /** DocumentType - smallint */
  DocumentType: number;

  /** OneDriveShareUrl - text (nullable) */
  OneDriveShareUrl?: string;

  /** OneDriveItemId - text (nullable) */
  OneDriveItemId?: string;

  /** OneDriveCode - text (nullable) */
  OneDriveCode?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** TypeMime - text (nullable) */
  TypeMime?: string;

  /** StorageType - smallint */
  StorageType: number;

}

