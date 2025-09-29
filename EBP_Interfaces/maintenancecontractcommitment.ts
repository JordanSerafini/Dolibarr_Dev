/**
 * Interface pour la table MaintenanceContractCommitment
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractCommitment {
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

  /** Id - uuid */
  Id: string;

  /** MaintenanceContractId - text */
  MaintenanceContractId: string;

  /** CommitmentDate - timestamp without time zone */
  CommitmentDate: Date | string;

  /** InvoiceAmountVatExcluded - numeric */
  InvoiceAmountVatExcluded: number;

  /** InvoiceAmountVatIncluded - numeric */
  InvoiceAmountVatIncluded: number;

}

