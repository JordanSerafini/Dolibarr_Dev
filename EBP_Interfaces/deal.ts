/**
 * Interface pour la table Deal
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Deal {
  /** xx_NC - boolean */
  xx_NC: boolean;

  /** PredictedCosts - numeric */
  PredictedCosts: number;

  /** PredictedSales - numeric */
  PredictedSales: number;

  /** PredictedGrossMargin - numeric */
  PredictedGrossMargin: number;

  /** AccomplishedCosts - numeric */
  AccomplishedCosts: number;

  /** AccomplishedSales - numeric */
  AccomplishedSales: number;

  /** AccomplishedGrossMargin - numeric */
  AccomplishedGrossMargin: number;

  /** ProfitsOnCosts - numeric */
  ProfitsOnCosts: number;

  /** ProfitsOnSales - numeric */
  ProfitsOnSales: number;

  /** ProfitsOnGrossMargin - numeric */
  ProfitsOnGrossMargin: number;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** DealDate - timestamp without time zone */
  DealDate: Date | string;

  /** InvoiceScheduleEvent - boolean */
  InvoiceScheduleEvent: boolean;

  /** InvoiceScheduleTimeEvent - boolean */
  InvoiceScheduleTimeEvent: boolean;

  /** PredictedDuration - numeric */
  PredictedDuration: number;

  /** AccomplishedDuration - numeric */
  AccomplishedDuration: number;

  /** ProfitsOnDuration - numeric */
  ProfitsOnDuration: number;

  /** xx_DateDebut - timestamp without time zone (nullable) */
  xx_DateDebut?: Date | string;

  /** xx_DateFin - timestamp without time zone (nullable) */
  xx_DateFin?: Date | string;

  /** xx_Gestion_Projet_Posit - text (nullable) */
  xx_Gestion_Projet_Posit?: string;

  /** xx_DureePrevue - numeric (nullable) */
  xx_DureePrevue?: number;

  /** DealState - integer (nullable) */
  DealState?: number;

  /** AnalyticAccounting_GridId - text (nullable) */
  AnalyticAccounting_GridId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

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

  /** xx_Client - text (nullable) */
  xx_Client?: string;

  /** xx_Total_Temps_Realise - numeric (nullable) */
  xx_Total_Temps_Realise?: number;

  /** xx_Total_Temps_Realise_Client - numeric (nullable) */
  xx_Total_Temps_Realise_Client?: number;

  /** xx_Total_Temps_Realise_Interne - numeric (nullable) */
  xx_Total_Temps_Realise_Interne?: number;

  /** xx_Service - text (nullable) */
  xx_Service?: string;

  /** xx_Total_Temps_Realise_Relationnel - numeric (nullable) */
  xx_Total_Temps_Realise_Relationnel?: number;

  /** xx_Date_Fin_Reelle - timestamp without time zone (nullable) */
  xx_Date_Fin_Reelle?: Date | string;

  /** xx_Total_Temps_Realise_Projet - numeric (nullable) */
  xx_Total_Temps_Realise_Projet?: number;

  /** xx_Duree_Trajet - numeric (nullable) */
  xx_Duree_Trajet?: number;

  /** xx_Total_Temps_Realise_Trajet - numeric (nullable) */
  xx_Total_Temps_Realise_Trajet?: number;

  /** xx_Commercial - text (nullable) */
  xx_Commercial?: string;

  /** xx_Total_Temps_Realise_Formation - numeric (nullable) */
  xx_Total_Temps_Realise_Formation?: number;

  /** xx_Total_Temps_Realise_Maquettage - numeric (nullable) */
  xx_Total_Temps_Realise_Maquettage?: number;

  /** xx_Date_Fiche_Travail - timestamp without time zone (nullable) */
  xx_Date_Fiche_Travail?: Date | string;

  /** xx_Origine_Vente - text (nullable) */
  xx_Origine_Vente?: string;

  /** xx_Date_Rapport - timestamp without time zone (nullable) */
  xx_Date_Rapport?: Date | string;

  /** ActualTreasury - numeric */
  ActualTreasury: number;

  /** CustomerCommitmentBalanceDues - numeric */
  CustomerCommitmentBalanceDues: number;

  /** SupplierCommitmentBalanceDues - numeric */
  SupplierCommitmentBalanceDues: number;

  /** SubContractorCommitmentBalanceDues - numeric */
  SubContractorCommitmentBalanceDues: number;

  /** OtherCosts - numeric */
  OtherCosts: number;

  /** TreasuryBalanceDue - numeric */
  TreasuryBalanceDue: number;

}

