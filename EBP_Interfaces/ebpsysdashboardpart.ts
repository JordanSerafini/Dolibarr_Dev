/**
 * Interface pour la table EbpSysDashboardPart
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysDashboardPart {
  /** Id - uuid */
  Id: string;

  /** DashboardId - uuid */
  DashboardId: string;

  /** PartId - uuid */
  PartId: string;

  /** PartInstanceId - uuid */
  PartInstanceId: string;

  /** Config - text (nullable) */
  Config?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

