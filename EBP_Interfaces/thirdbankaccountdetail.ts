/**
 * Interface pour la table ThirdBankAccountDetail
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ThirdBankAccountDetail {
  /** IsActive - boolean */
  IsActive: boolean;

  /** Id - uuid */
  Id: string;

  /** IsMain - boolean */
  IsMain: boolean;

  /** AccountDetail_BasicBankAccountNumber - text (nullable) */
  AccountDetail_BasicBankAccountNumber?: string;

  /** AccountDetail_InternationalBankAccountNumber - text (nullable) */
  AccountDetail_InternationalBankAccountNumber?: string;

  /** AccountDetail_BankIdentifierCode - text (nullable) */
  AccountDetail_BankIdentifierCode?: string;

  /** AccountDetail_Caption - text (nullable) */
  AccountDetail_Caption?: string;

  /** AccountDetail_CountryIsoCode - text (nullable) */
  AccountDetail_CountryIsoCode?: string;

  /** AccountDetail_Domiciliation1 - text (nullable) */
  AccountDetail_Domiciliation1?: string;

  /** AccountDetail_Domiciliation2 - text (nullable) */
  AccountDetail_Domiciliation2?: string;

  /** AccountDetail_Domiciliation3 - text (nullable) */
  AccountDetail_Domiciliation3?: string;

  /** CustomerId - text (nullable) */
  CustomerId?: string;

  /** SupplierId - text (nullable) */
  SupplierId?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** AccountDetail_OtherBankIdentifier - text (nullable) */
  AccountDetail_OtherBankIdentifier?: string;

  /** SepaMandateIdentification - text (nullable) */
  SepaMandateIdentification?: string;

  /** SepaMandateDate - timestamp without time zone (nullable) */
  SepaMandateDate?: Date | string;

  /** SepaSequence - smallint (nullable) */
  SepaSequence?: number;

  /** OriginSepaMandateIdentification - text (nullable) */
  OriginSepaMandateIdentification?: string;

  /** NewAccount - boolean */
  NewAccount: boolean;

  /** GoCardLessMandateId - text (nullable) */
  GoCardLessMandateId?: string;

  /** GoCardLessMandateStatus - smallint (nullable) */
  GoCardLessMandateStatus?: number;

  /** GoCardLessMandateCause - smallint (nullable) */
  GoCardLessMandateCause?: number;

  /** GoCardLessStatusDate - timestamp without time zone (nullable) */
  GoCardLessStatusDate?: Date | string;

  /** AccountHolder - text (nullable) */
  AccountHolder?: string;

}

