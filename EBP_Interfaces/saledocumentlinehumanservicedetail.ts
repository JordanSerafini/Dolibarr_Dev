/**
 * Interface pour la table SaleDocumentLineHumanServiceDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface SaleDocumentLineHumanServiceDetail {
  /** Id - uuid */
  Id: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** ParentLineId - uuid */
  ParentLineId: string;

  /** IntervenerId - text */
  IntervenerId: string;

  /** InterventionDate - timestamp without time zone */
  InterventionDate: Date | string;

  /** InterventionDuration - numeric */
  InterventionDuration: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

