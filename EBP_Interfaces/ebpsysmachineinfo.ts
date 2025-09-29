/**
 * Interface pour la table EbpSysMachineInfo
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysMachineInfo {
  /** MachineName - text */
  MachineName: string;

  /** MachineKey - text */
  MachineKey: string;

  /** CompanyName - text (nullable) */
  CompanyName?: string;

  /** ActivationCode - text (nullable) */
  ActivationCode?: string;

  /** ConnectionDate - timestamp without time zone (nullable) */
  ConnectionDate?: Date | string;

  /** WindowsUserName - text (nullable) */
  WindowsUserName?: string;

  /** WindowsDomain - text (nullable) */
  WindowsDomain?: string;

  /** OsVersion - text (nullable) */
  OsVersion?: string;

  /** MachineKeyInfo - text (nullable) */
  MachineKeyInfo?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

