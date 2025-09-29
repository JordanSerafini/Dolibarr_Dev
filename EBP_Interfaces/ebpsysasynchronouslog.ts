/**
 * Interface pour la table EbpSysAsynchronousLog
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysAsynchronousLog {
  /** Id - integer */
  Id: number;

  /** UserId - text */
  UserId: string;

  /** ConnectedMachine - text */
  ConnectedMachine: string;

  /** ExecutionDate - timestamp without time zone */
  ExecutionDate: Date | string;

  /** Caption - text */
  Caption: string;

  /** ErrorKind - smallint */
  ErrorKind: number;

  /** Content - text (nullable) */
  Content?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

