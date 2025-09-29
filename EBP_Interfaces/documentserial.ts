/**
 * Interface pour la table DocumentSerial
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DocumentSerial {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DocumentSerialType - smallint */
  DocumentSerialType: number;

  /** IsDefault - boolean */
  IsDefault: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** ApplyToSale - boolean */
  ApplyToSale: boolean;

  /** ApplyToPurchase - boolean */
  ApplyToPurchase: boolean;

  /** ApplyToStock - boolean */
  ApplyToStock: boolean;

  /** IsDefaultForSale - boolean */
  IsDefaultForSale: boolean;

  /** IsDefaultForPurchase - boolean */
  IsDefaultForPurchase: boolean;

  /** IsDefaultForStock - boolean */
  IsDefaultForStock: boolean;

  /** AddIdToDocumentNumber - boolean */
  AddIdToDocumentNumber: boolean;

  /** SerialToDisplay - text (nullable) */
  SerialToDisplay?: string;

  /** sysModuleId - uuid (nullable) */
  sysModuleId?: string;

  /** sysDatabaseId - uuid (nullable) */
  sysDatabaseId?: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** CorrectiveSerialId - text (nullable) */
  CorrectiveSerialId?: string;

  /** SalesAccountingBook - text (nullable) */
  SalesAccountingBook?: string;

  /** PurchasesAccountingBook - text (nullable) */
  PurchasesAccountingBook?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** StocksAccountingBook - text (nullable) */
  StocksAccountingBook?: string;

}

