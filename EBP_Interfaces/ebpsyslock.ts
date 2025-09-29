/**
 * Interface pour la table EbpSysLock
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysLock {
  /** keyValue - text */
  keyValue: string;

  /** userId - text */
  userId: string;

  /** userName - text */
  userName: string;

  /** computerName - text */
  computerName: string;

  /** creationDate - timestamp without time zone */
  creationDate: Date | string;

  /** contextId - text */
  contextId: string;

  /** productName - text */
  productName: string;

  /** productVersion - text */
  productVersion: string;

  /** mainApplicationId - uuid (nullable) */
  mainApplicationId?: string;

  /** groupId - text (nullable) */
  groupId?: string;

  /** TransactionUnlockId - uuid (nullable) */
  TransactionUnlockId?: string;

  /** ApplicationType - smallint */
  ApplicationType: number;

}

