/**
 * Interface pour la table EbpSysSchemaSynchronizationLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysSchemaSynchronizationLog {
  /** SynchronizationDate - timestamp without time zone */
  SynchronizationDate: Date | string;

  /** Success - boolean */
  Success: boolean;

  /** Errors - text (nullable) */
  Errors?: string;

  /** SchemaIdBefore - text (nullable) */
  SchemaIdBefore?: string;

  /** SchemaIdAfter - text (nullable) */
  SchemaIdAfter?: string;

  /** SchemaVersionBefore - text (nullable) */
  SchemaVersionBefore?: string;

  /** SchemaVersionAfter - text (nullable) */
  SchemaVersionAfter?: string;

  /** SystemVersionBefore - text (nullable) */
  SystemVersionBefore?: string;

  /** SystemVersionAfter - text (nullable) */
  SystemVersionAfter?: string;

  /** ApplicationIdBefore - text (nullable) */
  ApplicationIdBefore?: string;

  /** ApplicationIdAfter - text (nullable) */
  ApplicationIdAfter?: string;

  /** ApplicationVersionBefore - text (nullable) */
  ApplicationVersionBefore?: string;

  /** ApplicationVersionAfter - text (nullable) */
  ApplicationVersionAfter?: string;

  /** SchemaMetaDataBefore - text (nullable) */
  SchemaMetaDataBefore?: string;

}

