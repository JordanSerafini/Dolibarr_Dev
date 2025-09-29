/**
 * Interface pour la table DealCustomer
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealCustomer {
  /** InvoiceDefault - boolean */
  InvoiceDefault: boolean;

  /** Id - uuid */
  Id: string;

  /** ThirdId - text */
  ThirdId: string;

  /** Name - text */
  Name: string;

  /** Turnover - numeric */
  Turnover: number;

  /** Type - smallint */
  Type: number;

  /** IsAutoLoaded - boolean */
  IsAutoLoaded: boolean;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** DealId - text (nullable) */
  DealId?: string;

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

}

