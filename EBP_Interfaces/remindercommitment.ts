/**
 * Interface pour la table ReminderCommitment
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ReminderCommitment {
  /** NewReminderLevel - integer */
  NewReminderLevel: number;

  /** SendingMode - smallint */
  SendingMode: number;

  /** IsSelected - boolean */
  IsSelected: boolean;

  /** Id - uuid */
  Id: string;

  /** ReminderLetterId - uuid */
  ReminderLetterId: string;

  /** CommitmentId - uuid */
  CommitmentId: string;

  /** CommitmentDate - timestamp without time zone */
  CommitmentDate: Date | string;

  /** CommitmentDueAmount - numeric */
  CommitmentDueAmount: number;

  /** CommitmentTotalAmount - numeric */
  CommitmentTotalAmount: number;

  /** DocumentCurrencyId - text (nullable) */
  DocumentCurrencyId?: string;

  /** CommitmentCurrencyTotalAmount - numeric (nullable) */
  CommitmentCurrencyTotalAmount?: number;

  /** CommitmentCurrencyDueAmount - numeric (nullable) */
  CommitmentCurrencyDueAmount?: number;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** ThirdAddressId - uuid (nullable) */
  ThirdAddressId?: string;

}

