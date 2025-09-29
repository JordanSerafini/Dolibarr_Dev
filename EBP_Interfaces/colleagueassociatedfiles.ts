/**
 * Interface pour la table ColleagueAssociatedFiles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ColleagueAssociatedFiles {
  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** Name - text */
  Name: string;

  /** DocumentType - smallint */
  DocumentType: number;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

