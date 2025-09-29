/**
 * Interface pour la table ThirdReference
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ThirdReference {
  /** Id - uuid */
  Id: string;

  /** ReferenceThirdType - smallint */
  ReferenceThirdType: number;

  /** ThirdSelectionType - smallint */
  ThirdSelectionType: number;

  /** ThirdId - text */
  ThirdId: string;

  /** ItemId - text */
  ItemId: string;

  /** Reference - text (nullable) */
  Reference?: string;

  /** BarCode - text (nullable) */
  BarCode?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ThirdReferenceCaption - text (nullable) */
  ThirdReferenceCaption?: string;

  /** ThirdPriceType - smallint (nullable) */
  ThirdPriceType?: number;

}

