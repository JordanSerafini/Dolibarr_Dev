/**
 * Interface pour la table LoyaltyCardType
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface LoyaltyCardType {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** CalculationType - smallint */
  CalculationType: number;

  /** PointValue - numeric */
  PointValue: number;

  /** DecreaseLoyalty - smallint */
  DecreaseLoyalty: number;

  /** ExcludeLinesWithDiscount - boolean */
  ExcludeLinesWithDiscount: boolean;

  /** ConsiderInvoices - boolean */
  ConsiderInvoices: boolean;

  /** ExcludePosReceiptWithCustomerAdvantage - boolean */
  ExcludePosReceiptWithCustomerAdvantage: boolean;

  /** SubstractCreditMemoAndNegativePosReceipt - boolean */
  SubstractCreditMemoAndNegativePosReceipt: boolean;

  /** CalculationBaseForCommercialNomenclature - smallint */
  CalculationBaseForCommercialNomenclature: number;

  /** RoundId - uuid (nullable) */
  RoundId?: string;

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

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** InvoicingItemId - text (nullable) */
  InvoicingItemId?: string;

}

