/**
 * Interface pour la table EbpSysLinkedExtension
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysLinkedExtension {
  /** Id - uuid */
  Id: string;

  /** Name - text */
  Name: string;

  /** Description - text */
  Description: string;

  /** ExtensionVersion - text */
  ExtensionVersion: string;

  /** RelativePath - text */
  RelativePath: string;

  /** ExtensionTypeName - text */
  ExtensionTypeName: string;

  /** Enabled - boolean */
  Enabled: boolean;

  /** InterfaceExtensionId - uuid */
  InterfaceExtensionId: string;

  /** InterfaceExtensionVersion - text */
  InterfaceExtensionVersion: string;

  /** InterfaceExtensionPrefix - text */
  InterfaceExtensionPrefix: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

