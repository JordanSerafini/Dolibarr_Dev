/**
 * Interface pour la table role_permissions
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Role_permissions {
  /** role_id - uuid */
  role_id: string;

  /** permission_id - uuid */
  permission_id: string;

  /** createdAt - timestamp without time zone (nullable) */
  createdAt?: Date | string;

}

