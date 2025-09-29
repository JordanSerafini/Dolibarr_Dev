/**
 * Interface pour la table BuyerReference
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface BuyerReference {
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

  /** Code - text */
  Code: string;

  /** Caption - text */
  Caption: string;

  /** Siret - text */
  Siret: string;

  /** LegalCommitment - boolean */
  LegalCommitment: boolean;

}

