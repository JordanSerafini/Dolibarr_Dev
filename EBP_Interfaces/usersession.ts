/**
 * Interface pour la table UserSession
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface UserSession {
  /** id - uuid */
  id: string;

  /** user_id - text */
  user_id: string;

  /** token - character varying */
  token: string;

  /** deviceType - character varying (nullable) */
  deviceType?: string;

  /** deviceName - character varying (nullable) */
  deviceName?: string;

  /** ipAddress - character varying (nullable) */
  ipAddress?: string;

  /** userAgent - character varying (nullable) */
  userAgent?: string;

  /** location - character varying (nullable) */
  location?: string;

  /** expiresAt - timestamp without time zone */
  expiresAt: Date | string;

  /** lastActivityAt - timestamp without time zone (nullable) */
  lastActivityAt?: Date | string;

  /** isActive - boolean (nullable) */
  isActive?: boolean;

  /** metadata - jsonb (nullable) */
  metadata?: any;

  /** createdAt - timestamp without time zone (nullable) */
  createdAt?: Date | string;

}

