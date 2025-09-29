/**
 * Interface pour la table VatExemptionReason
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface VatExemptionReason {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** Category - text (nullable) */
  Category?: string;

  /** Vatex - text (nullable) */
  Vatex?: string;

  /** RegulatoryMeasure - text */
  RegulatoryMeasure: string;

  /** PrintMention - text */
  PrintMention: string;

}

