/**
 * Interface pour la table ShippingLevel
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ShippingLevel {
  /** Id - uuid */
  Id: string;

  /** ShippingId - text */
  ShippingId: string;

  /** Threshold - numeric */
  Threshold: number;

  /** LevelValue - numeric */
  LevelValue: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** LevelValueType - smallint */
  LevelValueType: number;

}

