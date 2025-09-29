/**
 * Interface pour la table EcotaxCalculationBase
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EcotaxCalculationBase {
  /** CalculationBase - smallint */
  CalculationBase: number;

  /** TaxValue - numeric */
  TaxValue: number;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** AmountVatIncluded - numeric */
  AmountVatIncluded: number;

  /** UnitId - text (nullable) */
  UnitId?: string;

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

}

