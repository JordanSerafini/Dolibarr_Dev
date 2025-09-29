/**
 * Interface pour la table IntrastatLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface IntrastatLine {
  /** StatisticValue - numeric */
  StatisticValue: number;

  /** SupplementaryUnits - numeric */
  SupplementaryUnits: number;

  /** Id - uuid */
  Id: string;

  /** IntrastatId - uuid */
  IntrastatId: string;

  /** LineNumber - integer */
  LineNumber: number;

  /** Amount - numeric */
  Amount: number;

  /** RegionCode - smallint */
  RegionCode: number;

  /** PurchaserCeNumber - text (nullable) */
  PurchaserCeNumber?: string;

  /** DocumentId - uuid (nullable) */
  DocumentId?: string;

  /** DocumentLineId - uuid (nullable) */
  DocumentLineId?: string;

  /** DocumentType - smallint (nullable) */
  DocumentType?: number;

  /** Nc8NomenclatureId - text (nullable) */
  Nc8NomenclatureId?: string;

  /** DestinationCountry - text (nullable) */
  DestinationCountry?: string;

  /** RegimeId - text (nullable) */
  RegimeId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** TransactionNatureId - text (nullable) */
  TransactionNatureId?: string;

  /** TransportModeId - text (nullable) */
  TransportModeId?: string;

  /** ExpeditionFinishState - text (nullable) */
  ExpeditionFinishState?: string;

  /** OriginCountry - text (nullable) */
  OriginCountry?: string;

  /** NetWeight - numeric (nullable) */
  NetWeight?: number;

  /** IncotermId - text (nullable) */
  IncotermId?: string;

}

