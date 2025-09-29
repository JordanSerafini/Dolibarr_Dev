/**
 * Interface pour la table ExecutionQuoteLineExtraFeeDistribution
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ExecutionQuoteLineExtraFeeDistribution {
  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** NotesClear - text (nullable) */
  NotesClear?: string;

  /** Notes - text (nullable) */
  Notes?: string;

  /** Id - uuid */
  Id: string;

  /** ExtraFeeLineId - uuid */
  ExtraFeeLineId: string;

  /** DocumentLineId - uuid */
  DocumentLineId: string;

  /** LineType - smallint */
  LineType: number;

  /** Amount - numeric */
  Amount: number;

  /** Rate - numeric */
  Rate: number;

  /** ComponentCalculationType - smallint (nullable) */
  ComponentCalculationType?: number;

  /** AllowComponentsModification - boolean */
  AllowComponentsModification: boolean;

}

