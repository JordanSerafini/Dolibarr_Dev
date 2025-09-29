/**
 * Interface pour la table Permission
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Permission {
  /** id - uuid */
  id: string;

  /** name - character varying */
  name: string;

  /** description - character varying (nullable) */
  description?: string;

  /** module - character varying */
  module: string;

  /** action - character varying */
  action: string;

  /** resource - character varying (nullable) */
  resource?: string;

  /** isActive - boolean (nullable) */
  isActive?: boolean;

  /** isSystem - boolean (nullable) */
  isSystem?: boolean;

  /** conditions - jsonb (nullable) */
  conditions?: any;

  /** createdAt - timestamp without time zone (nullable) */
  createdAt?: Date | string;

  /** updatedAt - timestamp without time zone (nullable) */
  updatedAt?: Date | string;

}

