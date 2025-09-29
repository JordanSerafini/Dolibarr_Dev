/**
 * Interface pour la table PosTerminal
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PosTerminal {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** ActionOnDatabaseOpened - smallint */
  ActionOnDatabaseOpened: number;

  /** ShowHoldReceiptsForAllTerminals - boolean */
  ShowHoldReceiptsForAllTerminals: boolean;

  /** BankId - text (nullable) */
  BankId?: string;

  /** sysEditCounter - integer (nullable) */
  sysEditCounter?: number;

  /** CatId - smallint (nullable) */
  CatId?: number;

  /** StorehouseId - uuid (nullable) */
  StorehouseId?: string;

  /** Screen - smallint (nullable) */
  Screen?: number;

  /** ComputerName - text (nullable) */
  ComputerName?: string;

  /** DefaultSerial - text (nullable) */
  DefaultSerial?: string;

  /** DefaultCustomerId - text (nullable) */
  DefaultCustomerId?: string;

  /** NewCustomerDefaultFamily - text (nullable) */
  NewCustomerDefaultFamily?: string;

  /** DefaultSafeId - text (nullable) */
  DefaultSafeId?: string;

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

  /** Address_Address1 - text (nullable) */
  Address_Address1?: string;

  /** Address_Address2 - text (nullable) */
  Address_Address2?: string;

  /** Address_Address3 - text (nullable) */
  Address_Address3?: string;

  /** Address_Address4 - text (nullable) */
  Address_Address4?: string;

  /** Address_ZipCode - text (nullable) */
  Address_ZipCode?: string;

  /** Address_City - text (nullable) */
  Address_City?: string;

  /** Address_State - text (nullable) */
  Address_State?: string;

  /** Address_CountryIsoCode - text (nullable) */
  Address_CountryIsoCode?: string;

  /** Address_Longitude - numeric (nullable) */
  Address_Longitude?: number;

  /** Address_Latitude - numeric (nullable) */
  Address_Latitude?: number;

  /** Phone - text (nullable) */
  Phone?: string;

  /** Fax - text (nullable) */
  Fax?: string;

  /** TabTipMode - smallint */
  TabTipMode: number;

  /** ApplyFamilyParameters - boolean */
  ApplyFamilyParameters: boolean;

  /** Address_CodeINSEE - text (nullable) */
  Address_CodeINSEE?: string;

  /** Address_CityINSEE - text (nullable) */
  Address_CityINSEE?: string;

  /** DefaultSerialCorrective - text (nullable) */
  DefaultSerialCorrective?: string;

  /** CalculationMode - smallint */
  CalculationMode: number;

  /** InputCashMovementReceiptComment - boolean */
  InputCashMovementReceiptComment: boolean;

}

