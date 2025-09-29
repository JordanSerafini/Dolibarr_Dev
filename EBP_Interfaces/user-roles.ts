/**
 * Interface pour la table user_roles
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface User_roles {
  /** user_id - text */
  user_id: string;

  /** role_id - uuid */
  role_id: string;

  /** assignedAt - timestamp without time zone (nullable) */
  assignedAt?: Date | string;

  /** assignedBy - text (nullable) */
  assignedBy?: string;

}

