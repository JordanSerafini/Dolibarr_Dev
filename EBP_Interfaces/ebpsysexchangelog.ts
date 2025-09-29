/**
 * Interface pour la table EbpSysExchangeLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysExchangeLog {
  /** Id - uuid */
  Id: string;

  /** UserId - text */
  UserId: string;

  /** ConnectedMachine - text */
  ConnectedMachine: string;

  /** SaveDate - timestamp without time zone */
  SaveDate: Date | string;

  /** Destination - text */
  Destination: string;

  /** Content - text (nullable) */
  Content?: string;

  /** ApplicationId - text */
  ApplicationId: string;

  /** ApplicationVersion - text */
  ApplicationVersion: string;

  /** OperationType - smallint */
  OperationType: number;

}

