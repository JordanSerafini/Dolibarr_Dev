/**
 * Interface pour la table PaymentType
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface PaymentType {
  /** MustOpenPosCashDrawerDuringSettlement - boolean */
  MustOpenPosCashDrawerDuringSettlement: boolean;

  /** AllowPosReturningChange - boolean */
  AllowPosReturningChange: boolean;

  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

  /** Nature - smallint */
  Nature: number;

  /** RemitToBank - boolean */
  RemitToBank: boolean;

  /** UniqueId - uuid */
  UniqueId: string;

  /** TransferAtCommitmentDate - boolean */
  TransferAtCommitmentDate: boolean;

  /** GenerateCustomerSettlement - boolean */
  GenerateCustomerSettlement: boolean;

  /** GenerateSupplierSettlement - boolean */
  GenerateSupplierSettlement: boolean;

  /** sysRecordVersion - integer (nullable) */
  sysRecordVersion?: number;

  /** sysRecordVersionId - uuid (nullable) */
  sysRecordVersionId?: string;

  /** BankId - text (nullable) */
  BankId?: string;

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

  /** BillForCollectionAccount - text (nullable) */
  BillForCollectionAccount?: string;

  /** BillForCollectionBook - text (nullable) */
  BillForCollectionBook?: string;

  /** BillForDiscountBook - text (nullable) */
  BillForDiscountBook?: string;

  /** BillForDiscountAccount - text (nullable) */
  BillForDiscountAccount?: string;

  /** LocalizableCaption_2 - text (nullable) */
  LocalizableCaption_2?: string;

  /** LocalizableCaption_3 - text (nullable) */
  LocalizableCaption_3?: string;

  /** LocalizableCaption_4 - text (nullable) */
  LocalizableCaption_4?: string;

  /** LocalizableCaption_5 - text (nullable) */
  LocalizableCaption_5?: string;

  /** IncludeUnpaidChargeToRemit - boolean */
  IncludeUnpaidChargeToRemit: boolean;

  /** OpenPaymentReference - boolean */
  OpenPaymentReference: boolean;

  /** IsInactive - boolean */
  IsInactive: boolean;

}

