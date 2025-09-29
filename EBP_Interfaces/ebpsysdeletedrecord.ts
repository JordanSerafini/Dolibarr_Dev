/**
 * Interface pour la table EbpSysDeletedRecord
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysDeletedRecord {
  /** Id - text */
  Id: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** Kind - uuid */
  Kind: string;

  /** Version - integer */
  Version: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

