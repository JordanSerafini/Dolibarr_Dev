/**
 * Interface pour la table DealColleague
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealColleague {
  /** InvoiceDefault - boolean */
  InvoiceDefault: boolean;

  /** IsAutoLoaded - boolean */
  IsAutoLoaded: boolean;

  /** Id - uuid */
  Id: string;

  /** ColleagueId - text */
  ColleagueId: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** LastName - text (nullable) */
  LastName?: string;

  /** FirstName - text (nullable) */
  FirstName?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

}

