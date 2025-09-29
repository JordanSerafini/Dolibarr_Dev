/**
 * Interfaces TypeScript pour les tables de gestion électronique de contenu Dolibarr
 * Tables: llx_ecm_directories_extrafields, llx_ecm_directories, llx_ecm_files_extrafields, llx_ecm_files
 */

// Table llx_ecm_directories
export interface EcmDirectories {
  label: string;
  entity: number;
  fk_parent?: number;
  description: string;
  cachenbofdoc: number;
  fullpath?: string;
  extraparams?: string;
  date_c?: string;
  tms?: string;
  fk_user_c?: number;
  fk_user_m?: number;
  note_private?: string;
  note_public?: string;
  acl?: string;
}

// Table llx_ecm_directories_extrafields
export interface EcmDirectoriesExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_ecm_files
export interface EcmFiles {
  ref?: string;
  label: string;
  share?: string;
  share_pass?: string;
  entity: number;
  filepath: string;
  filename: string;
  src_object_type?: string;
  src_object_id?: number;
  agenda_id?: number;
  fullpath_orig?: string;
  description?: string;
  keywords?: string;
  content?: string;
  cover?: string;
  position?: number;
  gen_or_uploaded?: string;
  extraparams?: string;
  date_c?: string;
  tms?: string;
  fk_user_c?: number;
  fk_user_m?: number;
  note_private?: string;
  note_public?: string;
  acl?: string;
}

// Table llx_ecm_files_extrafields
export interface EcmFilesExtrafields {
  tms?: string;
  fk_object: number;
}
