/**
 * Interface pour la table FreeDiscountVoucherCampaign
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface FreeDiscountVoucherCampaign {
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

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** VoucherQuantityToCreate - numeric */
  VoucherQuantityToCreate: number;

  /** CashValue - numeric */
  CashValue: number;

  /** ValidityDateFrom - timestamp without time zone */
  ValidityDateFrom: Date | string;

  /** ValidityDateTo - timestamp without time zone */
  ValidityDateTo: Date | string;

  /** Commentary - text (nullable) */
  Commentary?: string;

}

