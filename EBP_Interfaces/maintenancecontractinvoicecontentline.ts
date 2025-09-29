/**
 * Interface pour la table MaintenanceContractInvoiceContentLine
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractInvoiceContentLine {
  /** Quantity - numeric */
  Quantity: number;

  /** Id - uuid */
  Id: string;

  /** LineOrder - integer */
  LineOrder: number;

  /** LocalizableDescription_2 - text (nullable) */
  LocalizableDescription_2?: string;

  /** LocalizableDescription_Clear_2 - text (nullable) */
  LocalizableDescription_Clear_2?: string;

  /** LocalizableDescription_3 - text (nullable) */
  LocalizableDescription_3?: string;

  /** LocalizableDescription_Clear_3 - text (nullable) */
  LocalizableDescription_Clear_3?: string;

  /** LocalizableDescription_4 - text (nullable) */
  LocalizableDescription_4?: string;

  /** LocalizableDescription_Clear_4 - text (nullable) */
  LocalizableDescription_Clear_4?: string;

  /** LocalizableDescription_5 - text (nullable) */
  LocalizableDescription_5?: string;

  /** LocalizableDescription_Clear_5 - text (nullable) */
  LocalizableDescription_Clear_5?: string;

  /** ContractTemplateId - text (nullable) */
  ContractTemplateId?: string;

  /** ContractId - text (nullable) */
  ContractId?: string;

  /** ItemId - text (nullable) */
  ItemId?: string;

  /** Description - text (nullable) */
  Description?: string;

  /** DescriptionClear - text (nullable) */
  DescriptionClear?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** UnitId - text (nullable) */
  UnitId?: string;

  /** PriceVatExcluded - numeric (nullable) */
  PriceVatExcluded?: number;

  /** PriceVatIncluded - numeric (nullable) */
  PriceVatIncluded?: number;

  /** TVA - uuid */
  TVA: string;

}

