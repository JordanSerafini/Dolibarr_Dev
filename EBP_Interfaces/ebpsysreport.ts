/**
 * Interface pour la table EbpSysReport
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysReport {
  /** ReportLanguage - text */
  ReportLanguage: string;

  /** IsVisible - boolean */
  IsVisible: boolean;

  /** IsTemplate - boolean */
  IsTemplate: boolean;

  /** Id - uuid */
  Id: string;

  /** CategoryId - uuid */
  CategoryId: string;

  /** Label - text */
  Label: string;

  /** Description - text */
  Description: string;

  /** IsSystem - boolean */
  IsSystem: boolean;

  /** PrintCount - integer */
  PrintCount: number;

  /** ReportModifiedDate - timestamp without time zone (nullable) */
  ReportModifiedDate?: Date | string;

  /** ReportDesignState - smallint (nullable) */
  ReportDesignState?: number;

  /** DesignerId - uuid (nullable) */
  DesignerId?: string;

  /** DesignerInfo - text (nullable) */
  DesignerInfo?: string;

  /** Report - bytea (nullable) */
  Report?: Buffer | Uint8Array;

  /** Thumbnail - bytea (nullable) */
  Thumbnail?: Buffer | Uint8Array;

  /** LevelId - uuid (nullable) */
  LevelId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ExtensionId - uuid (nullable) */
  ExtensionId?: string;

  /** Version - integer */
  Version: number;

}

