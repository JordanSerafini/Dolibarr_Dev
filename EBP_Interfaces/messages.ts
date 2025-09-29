/**
 * Interface pour la table messages
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Messages {
  /** id - uuid */
  id: string;

  /** role - USER-DEFINED */
  role: any;

  /** content - text */
  content: string;

  /** createdAt - timestamp without time zone */
  createdAt: Date | string;

  /** conversationId - uuid */
  conversationId: string;

  /** metadata - json (nullable) */
  metadata?: any;

}

