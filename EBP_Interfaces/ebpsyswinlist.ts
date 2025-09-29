/**
 * Interface pour la table EbpSysWinList
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysWinList {
  /** OwningId - uuid */
  OwningId: string;

  /** ViewId - uuid */
  ViewId: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

