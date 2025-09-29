/**
 * Interface pour la table EbpSysUser
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysUser {
  /** Blocked - boolean */
  Blocked: boolean;

  /** Unauthorized - boolean */
  Unauthorized: boolean;

  /** Id - text */
  Id: string;

  /** Name - text */
  Name: string;

  /** UniqueId - uuid */
  UniqueId: string;

  /** IsActiveDirectoryUser - boolean */
  IsActiveDirectoryUser: boolean;

  /** IsIntegrator - boolean */
  IsIntegrator: boolean;

  /** UserPassword - text (nullable) */
  UserPassword?: string;

  /** ConnectedMachine - text (nullable) */
  ConnectedMachine?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ActiveDirectoryUserName - text (nullable) */
  ActiveDirectoryUserName?: string;

  /** EmailSignatureClear - text (nullable) */
  EmailSignatureClear?: string;

  /** EmailSignature - text (nullable) */
  EmailSignature?: string;

}

