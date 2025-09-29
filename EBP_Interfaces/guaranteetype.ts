/**
 * Interface pour la table GuaranteeType
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface GuaranteeType {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ActiveState - smallint */
  ActiveState: number;

  /** ProducerGuarantee_PartsDuration - numeric */
  ProducerGuarantee_PartsDuration: number;

  /** ProducerGuarantee_LabourDuration - numeric */
  ProducerGuarantee_LabourDuration: number;

  /** ProducerGuarantee_TravelDuration - numeric */
  ProducerGuarantee_TravelDuration: number;

  /** CommercialGuarantee_PartsDuration - numeric */
  CommercialGuarantee_PartsDuration: number;

  /** CommercialGuarantee_LabourDuration - numeric */
  CommercialGuarantee_LabourDuration: number;

  /** CommercialGuarantee_TravelDuration - numeric */
  CommercialGuarantee_TravelDuration: number;

  /** PartsIncludeInProducer - boolean */
  PartsIncludeInProducer: boolean;

  /** LabourIncludeInProducer - boolean */
  LabourIncludeInProducer: boolean;

  /** TravelIncludeInProducer - boolean */
  TravelIncludeInProducer: boolean;

  /** StandardExchange - boolean */
  StandardExchange: boolean;

  /** StandardExchangeDuration - numeric (nullable) */
  StandardExchangeDuration?: number;

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

}

