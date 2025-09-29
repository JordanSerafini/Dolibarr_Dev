/**
 * Interface pour la table EbpSysStatisticCustomFilter
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysStatisticCustomFilter {
  /** Id - uuid */
  Id: string;

  /** Label - text */
  Label: string;

  /** ContextualFilterId - uuid */
  ContextualFilterId: string;

  /** CustomFilters - text */
  CustomFilters: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

}

