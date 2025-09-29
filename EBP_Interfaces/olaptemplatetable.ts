/**
 * Interface pour la table OlapTemplateTable
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface OlapTemplateTable {
  /** UserSetting_SaveFilters - boolean */
  UserSetting_SaveFilters: boolean;

  /** UserSetting_ChartTitlePosition - smallint */
  UserSetting_ChartTitlePosition: number;

  /** UserSetting_ChartType - smallint */
  UserSetting_ChartType: number;

  /** UserSetting_DisplayHeader - boolean */
  UserSetting_DisplayHeader: boolean;

  /** TemplateId - uuid */
  TemplateId: string;

  /** Label - text */
  Label: string;

  /** Template - text */
  Template: string;

  /** IsSystem - boolean */
  IsSystem: boolean;

  /** UserSetting_DisplayFooter - boolean */
  UserSetting_DisplayFooter: boolean;

  /** UserSetting_DisplayGrid - boolean */
  UserSetting_DisplayGrid: boolean;

  /** UserSetting_DisplayChart - boolean */
  UserSetting_DisplayChart: boolean;

  /** UserSetting_DisplayChartInFullPage - boolean */
  UserSetting_DisplayChartInFullPage: boolean;

  /** UserSetting_LeftMargin - integer */
  UserSetting_LeftMargin: number;

  /** UserSetting_RightMargin - integer */
  UserSetting_RightMargin: number;

  /** UserSetting_TopMargin - integer */
  UserSetting_TopMargin: number;

  /** UserSetting_BottomMargin - integer */
  UserSetting_BottomMargin: number;

  /** UserSetting_Landscape - boolean */
  UserSetting_Landscape: boolean;

  /** UserSetting_PaperKind - smallint */
  UserSetting_PaperKind: number;

  /** UserSetting_Watermark - text (nullable) */
  UserSetting_Watermark?: string;

  /** UserSetting_GridCollapseState - bytea (nullable) */
  UserSetting_GridCollapseState?: Buffer | Uint8Array;

  /** UserSetting_FooterText - text (nullable) */
  UserSetting_FooterText?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** AssociatedCube - text (nullable) */
  AssociatedCube?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** CategoryId - uuid (nullable) */
  CategoryId?: string;

  /** UserSetting_GridTitle - text (nullable) */
  UserSetting_GridTitle?: string;

  /** UserSetting_ChartTitle - text (nullable) */
  UserSetting_ChartTitle?: string;

  /** UserSetting_HeaderText - text (nullable) */
  UserSetting_HeaderText?: string;

  /** UserSetting_FilterValues - bytea (nullable) */
  UserSetting_FilterValues?: Buffer | Uint8Array;

}

