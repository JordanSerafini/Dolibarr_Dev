/**
 * Interface pour la table MaintenanceContractFamily
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface MaintenanceContractFamily {
  /** Id - text */
  Id: string;

  /** Caption - text */
  Caption: string;

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

