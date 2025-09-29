/**
 * Interface pour la table RangeItemAssociatedFiles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface RangeItemAssociatedFiles {
  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** Name - text */
  Name: string;

  /** DocumentType - smallint */
  DocumentType: number;

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

