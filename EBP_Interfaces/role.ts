/**
 * Interface pour la table Role
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Role {
  /** id - uuid */
  id: string;

  /** name - character varying */
  name: string;

  /** description - character varying (nullable) */
  description?: string;

  /** category - character varying (nullable) */
  category?: string;

  /** isActive - boolean (nullable) */
  isActive?: boolean;

  /** isSystem - boolean (nullable) */
  isSystem?: boolean;

  /** level - integer (nullable) */
  level?: number;

  /** metadata - jsonb (nullable) */
  metadata?: any;

  /** createdAt - timestamp without time zone (nullable) */
  createdAt?: Date | string;

  /** updatedAt - timestamp without time zone (nullable) */
  updatedAt?: Date | string;

}

