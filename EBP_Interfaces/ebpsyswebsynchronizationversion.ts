/**
 * Interface pour la table EbpSysWebSynchronizationVersion
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWebSynchronizationVersion {
  /** ProviderId - uuid */
  ProviderId: string;

  /** Kind - smallint */
  Kind: number;

  /** EntityId - text */
  EntityId: string;

  /** LastVersion - integer */
  LastVersion: number;

  /** IsDeleted - boolean */
  IsDeleted: boolean;

}

