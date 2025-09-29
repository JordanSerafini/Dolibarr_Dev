/**
 * Interfaces TypeScript pour les tables de projets Dolibarr
 * Tables: llx_projet_extrafields, llx_projet, llx_projet_task_extrafields, llx_projet_task
 */

// Table llx_projet
export interface Projet {
  fk_project?: number;
  fk_soc?: number;
  datec?: string;
  tms?: string;
  dateo?: string;
  datee?: string;
  ref?: string;
  ref_ext?: string;
  entity: number;
  title: string;
  description?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  public?: number;
  fk_statut: number;
  fk_opp_status?: number;
  opp_percent?: number;
  fk_opp_status_end?: number;
  date_close?: string;
  fk_user_close?: number;
  note_private?: string;
  note_public?: string;
  email_date?: string;
  opp_amount?: number;
  budget_amount?: number;
  usage_opportunity?: number;
  usage_task?: number;
  usage_bill_time?: number;
  usage_organize_event?: number;
  date_start_event?: string;
  date_end_event?: string;
  location?: string;
  accept_conference_suggestions?: number;
  accept_booth_suggestions?: number;
  max_attendees?: number;
  price_registration?: number;
  price_booth?: number;
  model_pdf?: string;
  ip?: string;
  last_main_doc?: string;
  import_key?: string;
  extraparams?: string;
}

// Table llx_projet_extrafields
export interface ProjetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_projet_task
export interface ProjetTask {
  ref?: string;
  entity: number;
  fk_projet: number;
  fk_task_parent: number;
  datec?: string;
  tms?: string;
  dateo?: string;
  datee?: string;
  datev?: string;
  label: string;
  description?: string;
  duration_effective?: number;
  planned_workload?: number;
  progress?: number;
  priority?: number;
  budget_amount?: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
  fk_user_valid?: number;
  fk_statut: number;
  note_private?: string;
  note_public?: string;
  rang?: number;
  model_pdf?: string;
  import_key?: string;
  billable?: number;
}

// Table llx_projet_task_extrafields
export interface ProjetTaskExtrafields {
  tms?: string;
  fk_object: number;
}
