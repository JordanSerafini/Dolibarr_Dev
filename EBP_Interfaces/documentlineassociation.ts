/**
 * Interface pour la table DocumentLineAssociation
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DocumentLineAssociation {
  /** Id - uuid */
  Id: string;

  /** OriginDocumentId - uuid */
  OriginDocumentId: string;

  /** OriginLineId - uuid */
  OriginLineId: string;

  /** OriginDocumentType - smallint */
  OriginDocumentType: number;

  /** OriginDocumentSubType - smallint */
  OriginDocumentSubType: number;

  /** TransferedLineId - uuid */
  TransferedLineId: string;

  /** TransferedDocumentType - smallint */
  TransferedDocumentType: number;

  /** TransferedDocumentSubType - smallint */
  TransferedDocumentSubType: number;

  /** TransferedDocumentId - uuid */
  TransferedDocumentId: string;

  /** Quantity - numeric */
  Quantity: number;

  /** RealQuantity - numeric */
  RealQuantity: number;

  /** IsCountermark - boolean */
  IsCountermark: boolean;

  /** LinkType - smallint */
  LinkType: number;

}

