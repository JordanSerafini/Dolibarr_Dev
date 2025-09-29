/**
 * Interface pour la table CurrencyTable
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CurrencyTable {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Symbol - text */
  Symbol: string;

  /** ConversionRate - numeric */
  ConversionRate: number;

  /** DecimalCount - smallint */
  DecimalCount: number;

  /** ConversionRateDate - timestamp without time zone */
  ConversionRateDate: Date | string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** ProviderName - text (nullable) */
  ProviderName?: string;

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

  /** SalesJournal - text (nullable) */
  SalesJournal?: string;

  /** PurchasesJournal - text (nullable) */
  PurchasesJournal?: string;

}

