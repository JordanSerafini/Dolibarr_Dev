/**
 * Interface pour la table EbpSysSaveLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysSaveLog {
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

  /** ProcessType - smallint */
  ProcessType: number;

  /** Hash_Hash_ChainedId - uuid (nullable) */
  Hash_Hash_ChainedId?: string;

  /** Hash_Hash_Hash - bytea (nullable) */
  Hash_Hash_Hash?: Buffer | Uint8Array;

}

