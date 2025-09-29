/**
 * Interface pour la table DiscountCouponItem
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DiscountCouponItem {
  /** Id - uuid */
  Id: string;

  /** ParentId - text */
  ParentId: string;

  /** InclusionType - smallint */
  InclusionType: number;

  /** IsExcluded - boolean */
  IsExcluded: boolean;

  /** RangeTypeId - text (nullable) */
  RangeTypeId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

}

