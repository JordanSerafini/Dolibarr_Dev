/**
 * Interface pour la table EbpSysSchemaInformation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysSchemaInformation {
  /** levelCompatibility - smallint */
  levelCompatibility: number;

  /** schemaId - text */
  schemaId: string;

  /** version - text */
  version: string;

  /** systemVersion - text */
  systemVersion: string;

  /** lastSynchroDate - timestamp without time zone */
  lastSynchroDate: Date | string;

  /** databaseId - text */
  databaseId: string;

  /** schemaMetaData - text */
  schemaMetaData: string;

  /** lastApplicationId - text */
  lastApplicationId: string;

  /** lastVersion - text */
  lastVersion: string;

  /** lastSystemVersion - text */
  lastSystemVersion: string;

  /** lastLastApplicationId - text */
  lastLastApplicationId: string;

  /** applicationVersion - text */
  applicationVersion: string;

  /** isCreated - boolean */
  isCreated: boolean;

  /** isDemo - boolean */
  isDemo: boolean;

  /** isBeta - boolean */
  isBeta: boolean;

  /** lastApplicationCaption - text */
  lastApplicationCaption: string;

  /** isApi - boolean */
  isApi: boolean;

  /** MustVerifyIntegrity - boolean */
  MustVerifyIntegrity: boolean;

  /** interfaceExtensionInformations - text (nullable) */
  interfaceExtensionInformations?: string;

  /** recoveryInformations - text (nullable) */
  recoveryInformations?: string;

}

