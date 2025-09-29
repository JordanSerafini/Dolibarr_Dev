/**
 * Interface pour la table PriceList
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PriceList {
  /** AllowToDefineItemOnCalculationLines - boolean */
  AllowToDefineItemOnCalculationLines: boolean;

  /** IsPurchasePriceList - boolean */
  IsPurchasePriceList: boolean;

  /** Id - text */
  Id: string;

  /** Description - text */
  Description: string;

  /** UseFooterDiscount - boolean */
  UseFooterDiscount: boolean;

  /** CalculationBase - smallint */
  CalculationBase: number;

  /** IsPromotion - boolean */
  IsPromotion: boolean;

  /** IsAccumulatableWithPriceListOrPromotion - boolean */
  IsAccumulatableWithPriceListOrPromotion: boolean;

  /** IsLastAccumulatable - boolean */
  IsLastAccumulatable: boolean;

  /** CanBeAccumulated - boolean */
  CanBeAccumulated: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** IsApplyingOnSeveralLines - boolean */
  IsApplyingOnSeveralLines: boolean;

  /** IsMultiLineGroupingAllItemConditions - boolean */
  IsMultiLineGroupingAllItemConditions: boolean;

  /** MultiLineFreeItemChoice - smallint */
  MultiLineFreeItemChoice: number;

  /** Type - smallint */
  Type: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

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

  /** StartValidityDate - timestamp without time zone (nullable) */
  StartValidityDate?: Date | string;

  /** EndValidityDate - timestamp without time zone (nullable) */
  EndValidityDate?: Date | string;

  /** CurrencyId - text (nullable) */
  CurrencyId?: string;

  /** ThirdPriceType - smallint (nullable) */
  ThirdPriceType?: number;

  /** FootDiscountType - smallint */
  FootDiscountType: number;

}

