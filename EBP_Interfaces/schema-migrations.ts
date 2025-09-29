/**
 * Interface pour la table schema_migrations
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Schema_migrations {
  /** migration_name - character varying */
  migration_name: string;

  /** executed_at - timestamp without time zone (nullable) */
  executed_at?: Date | string;

}

