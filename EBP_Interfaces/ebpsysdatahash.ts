/**
 * Interface pour la table EbpSysDataHash
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysDataHash {
  /** Id - uuid */
  Id: string;

  /** HashDate - timestamp without time zone */
  HashDate: Date | string;

  /** Category - text */
  Category: string;

  /** HashValues - bytea (nullable) */
  HashValues?: Buffer | Uint8Array;

  /** Hash - bytea (nullable) */
  Hash?: Buffer | Uint8Array;

}

