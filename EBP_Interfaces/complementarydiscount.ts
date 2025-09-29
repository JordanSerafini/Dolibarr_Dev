/**
 * Interface pour la table ComplementaryDiscount
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ComplementaryDiscount {
  /** Code - text */
  Code: string;

  /** Caption - text */
  Caption: string;

  /** SaleAccount - text */
  SaleAccount: string;

  /** PurchaseAccount - text */
  PurchaseAccount: string;

  /** TransferToAccounting - boolean */
  TransferToAccounting: boolean;

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

