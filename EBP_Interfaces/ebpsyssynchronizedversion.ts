/**
 * Interface pour la table EbpSysSynchronizedVersion
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysSynchronizedVersion {
  /** Version - integer */
  Version: number;

  /** VersionId - uuid */
  VersionId: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** VersionKonwnByDistant - integer (nullable) */
  VersionKonwnByDistant?: number;

}

