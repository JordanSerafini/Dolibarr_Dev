/**
 * Interface pour la table conversations
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Conversations {
  /** id - uuid */
  id: string;

  /** userId - character varying */
  userId: string;

  /** title - character varying (nullable) */
  title?: string;

  /** createdAt - timestamp without time zone */
  createdAt: Date | string;

  /** updatedAt - timestamp without time zone */
  updatedAt: Date | string;

  /** isActive - boolean */
  isActive: boolean;

  /** context - jsonb (nullable) */
  context?: any;

}

