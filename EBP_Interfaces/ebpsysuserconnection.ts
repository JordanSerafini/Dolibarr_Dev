/**
 * Interface pour la table EbpSysUserConnection
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUserConnection {
  /** UserId - text */
  UserId: string;

  /** ConnectedCount - integer */
  ConnectedCount: number;

  /** ApplicationId - uuid */
  ApplicationId: string;

  /** MainApplicationId - uuid */
  MainApplicationId: string;

  /** ProcessId - integer (nullable) */
  ProcessId?: number;

  /** ProcessName - text (nullable) */
  ProcessName?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** Id - uuid */
  Id: string;

  /** ApplicationType - smallint */
  ApplicationType: number;

}

