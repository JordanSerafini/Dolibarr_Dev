/**
 * Interface pour la table CashMovement
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface CashMovement {
  /** AccountingTransferState - smallint */
  AccountingTransferState: number;

  /** Id - uuid */
  Id: string;

  /** MovementDateTime - timestamp without time zone */
  MovementDateTime: Date | string;

  /** Caption - text */
  Caption: string;

  /** MovementType - smallint */
  MovementType: number;

  /** Amount - numeric */
  Amount: number;

  /** SourceSafeId - text (nullable) */
  SourceSafeId?: string;

  /** TargetSafeId - text (nullable) */
  TargetSafeId?: string;

  /** SourceTerminalId - text (nullable) */
  SourceTerminalId?: string;

  /** TargetTerminalId - text (nullable) */
  TargetTerminalId?: string;

  /** SourceTerminalOpenCloseId - uuid (nullable) */
  SourceTerminalOpenCloseId?: string;

  /** TargetTerminalOpenCloseId - uuid (nullable) */
  TargetTerminalOpenCloseId?: string;

  /** AccountingType - smallint (nullable) */
  AccountingType?: number;

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

  /** AccountingExchangeGroupId - uuid (nullable) */
  AccountingExchangeGroupId?: string;

  /** BankRemittanceId - uuid (nullable) */
  BankRemittanceId?: string;

  /** BankRemittanceChargeAmounts0 - numeric (nullable) */
  BankRemittanceChargeAmounts0?: number;

  /** BankRemittanceChargeAmounts1 - numeric (nullable) */
  BankRemittanceChargeAmounts1?: number;

  /** BankRemittanceChargeAmounts2 - numeric (nullable) */
  BankRemittanceChargeAmounts2?: number;

  /** BankRemittanceChargeAmounts3 - numeric (nullable) */
  BankRemittanceChargeAmounts3?: number;

  /** BankRemittanceChargeAmounts4 - numeric (nullable) */
  BankRemittanceChargeAmounts4?: number;

}

