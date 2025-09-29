/**
 * Interface pour la table user_type_configs
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface User_type_configs {
  /** id - uuid */
  id: string;

  /** key - character varying */
  key: string;

  /** label - character varying */
  label: string;

  /** description - text (nullable) */
  description?: string;

  /** organizationId - character varying (nullable) */
  organizationId?: string;

  /** tenantId - character varying */
  tenantId: string;

  /** sortOrder - integer (nullable) */
  sortOrder?: number;

  /** color - character varying (nullable) */
  color?: string;

  /** metadata - jsonb (nullable) */
  metadata?: any;

  /** isActive - boolean (nullable) */
  isActive?: boolean;

  /** isDefault - boolean (nullable) */
  isDefault?: boolean;

  /** createdAt - timestamp without time zone (nullable) */
  createdAt?: Date | string;

  /** updatedAt - timestamp without time zone (nullable) */
  updatedAt?: Date | string;

}

