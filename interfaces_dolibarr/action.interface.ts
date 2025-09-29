/**
 * Interfaces TypeScript pour les tables d'actions/événements Dolibarr
 * Tables: llx_actioncomm_extrafields, llx_actioncomm_reminder, llx_actioncomm_resources, llx_actioncomm
 */

// Table llx_actioncomm
export interface Actioncomm {
  ref: string;
  ref_ext?: string;
  entity: number;
  datep?: string;
  datep2?: string;
  fk_action?: number;
  code?: string;
  datec?: string;
  tms?: string;
  fk_user_author?: number;
  fk_user_mod?: number;
  fk_project?: number;
  fk_task?: number;
  fk_soc?: number;
  fk_contact?: number;
  fk_parent: number;
  fk_user_action?: number;
  transparency?: number;
  priority?: number;
  visibility?: string;
  fulldayevent: number;
  percent: number;
  location?: string;
  durationp?: number;
  label: string;
  note?: string;
  calling_duration?: number;
  email_subject?: string;
  email_msgid?: string;
  email_from?: string;
  email_sender?: string;
  email_to?: string;
  email_tocc?: string;
  email_tobcc?: string;
  errors_to?: string;
  reply_to?: string;
  recurid?: string;
  recurrule?: string;
  recurdateend?: string;
  num_vote?: number;
  event_paid: number;
  status: number;
  fk_element?: number;
  elementtype?: string;
  ip?: string;
  fk_bookcal_calendar?: number;
  import_key?: string;
  extraparams?: string;
}

// Table llx_actioncomm_extrafields
export interface ActioncommExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_actioncomm_reminder
export interface ActioncommReminder {
  dateremind: string;
  typeremind: string;
  fk_user: number;
  offsetvalue: number;
  offsetunit: string;
  status: number;
  datedone?: string;
  lasterror?: string;
  entity: number;
  fk_actioncomm: number;
  fk_email_template?: number;
}

// Table llx_actioncomm_resources
export interface ActioncommResources {
  fk_actioncomm: number;
  element_type: string;
  fk_element: number;
  answer_status?: string;
  mandatory?: number;
  transparency?: number;
}
