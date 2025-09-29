/**
 * Interface pour la table CustomerProductAssociatedFiles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CustomerProductAssociatedFiles {
  /** DocumentType - smallint */
  DocumentType: number;

  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** Name - text */
  Name: string;

  /** Content - bytea (nullable) */
  Content?: Buffer | Uint8Array;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

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

