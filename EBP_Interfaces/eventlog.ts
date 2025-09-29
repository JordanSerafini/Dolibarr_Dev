/**
 * Interface pour la table EventLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EventLog {
  /** Id - uuid */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** EventDate - timestamp without time zone */
  EventDate: Date | string;

  /** EventType - integer */
  EventType: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Details - text (nullable) */
  Details?: string;

  /** Hash_Hash_ChainedId - uuid (nullable) */
  Hash_Hash_ChainedId?: string;

  /** Hash_Hash_Hash - bytea (nullable) */
  Hash_Hash_Hash?: Buffer | Uint8Array;

}

