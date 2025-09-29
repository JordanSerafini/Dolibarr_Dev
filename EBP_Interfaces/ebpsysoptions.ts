/**
 * Interface pour la table EbpSysOptions
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface EbpSysOptions {
  /** OptionName - text */
  OptionName: string;

  /** LocalUser - text */
  LocalUser: string;

  /** LocalWorkstation - text */
  LocalWorkstation: string;

  /** OptionHashCode - integer */
  OptionHashCode: number;

  /** OptionValue - text (nullable) */
  OptionValue?: string;

  /** OptionBlobValue - bytea (nullable) */
  OptionBlobValue?: Buffer | Uint8Array;

  /** ExtensionId - uuid (nullable) */
  ExtensionId?: string;

}

