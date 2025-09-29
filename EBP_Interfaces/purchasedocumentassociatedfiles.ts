/**
 * Interface pour la table PurchaseDocumentAssociatedFiles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PurchaseDocumentAssociatedFiles {
  /** DocumentType - smallint */
  DocumentType: number;

  /** Id - uuid */
  Id: string;

  /** ParentId - uuid */
  ParentId: string;

  /** Name - text */
  Name: string;

  /** Content - bytea (nullable) */
  Content?: Buffer | Uint8Array;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** OneDriveShareUrl - text (nullable) */
  OneDriveShareUrl?: string;

  /** OneDriveItemId - text (nullable) */
  OneDriveItemId?: string;

  /** OneDriveCode - text (nullable) */
  OneDriveCode?: string;

  /** TypeMime - text (nullable) */
  TypeMime?: string;

  /** StorageType - smallint */
  StorageType: number;

}

