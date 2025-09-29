/**
 * Interface pour la table EbpSysExchangeApplication
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysExchangeApplication {
  /** SourceApplicationId - uuid */
  SourceApplicationId: string;

  /** SourceApplicationName - text */
  SourceApplicationName: string;

  /** DestinationApplicationId - uuid */
  DestinationApplicationId: string;

  /** DestinationApplicationName - text */
  DestinationApplicationName: string;

  /** ApplicationVersion - text */
  ApplicationVersion: string;

  /** SourceDatabaseName - text */
  SourceDatabaseName: string;

}

