/**
 * Interface pour la table PriceListInclusionLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PriceListInclusionLine {
  /** Id - uuid */
  Id: string;

  /** PriceListId - text */
  PriceListId: string;

  /** InclusionType - smallint */
  InclusionType: number;

  /** IsExcluded - boolean */
  IsExcluded: boolean;

  /** InclusionOrder - integer */
  InclusionOrder: number;

  /** StartElementId - text (nullable) */
  StartElementId?: string;

  /** EndElementId - text (nullable) */
  EndElementId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** RangeTypeId - text (nullable) */
  RangeTypeId?: string;

}

