/**
 * Interface pour la table Zipcode
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface Zipcode {
  /** CountryIsoCode - text */
  CountryIsoCode: string;

  /** Id - uuid */
  Id: string;

  /** ZipCode - text */
  ZipCode: string;

  /** City - text */
  City: string;

  /** StateId - uuid (nullable) */
  StateId?: string;

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

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** LocalizableCity_2 - text (nullable) */
  LocalizableCity_2?: string;

  /** LocalizableCity_3 - text (nullable) */
  LocalizableCity_3?: string;

  /** LocalizableCity_4 - text (nullable) */
  LocalizableCity_4?: string;

  /** LocalizableCity_5 - text (nullable) */
  LocalizableCity_5?: string;

  /** CodeINSEE - text (nullable) */
  CodeINSEE?: string;

  /** CityINSEE - text (nullable) */
  CityINSEE?: string;

}

