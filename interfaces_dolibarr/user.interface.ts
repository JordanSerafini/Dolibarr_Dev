/**
 * Interfaces TypeScript pour les tables d'utilisateurs Dolibarr
 * Tables: llx_user_alert, llx_user_clicktodial, llx_user_employment, llx_user_extrafields, llx_usergroup_extrafields, ... (11 tables total)
 */

// Table llx_user_alert
export interface UserAlert {
  type?: number;
  fk_contact?: number;
  fk_user?: number;
}

// Table llx_user_clicktodial
export interface UserClicktodial {
  url?: string;
  login?: string;
  pass?: string;
  poste?: string;
}

// Table llx_user_employment
export interface UserEmployment {
  entity: number;
  ref?: string;
  ref_ext?: string;
  fk_user?: number;
  datec?: string;
  tms?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
  job?: string;
  status: number;
  salary?: number;
  salaryextra?: number;
  weeklyhours?: number;
  dateemployment?: string;
  dateemploymentend?: string;
}

// Table llx_user_extrafields
export interface UserExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_user_param
export interface UserParam {
  fk_user: number;
  entity: number;
  param: string;
  value: string;
}

// Table llx_user_rib
export interface UserRib {
  fk_user: number;
  entity: number;
  datec?: string;
  tms?: string;
  label?: string;
  bank?: string;
  code_banque?: string;
  code_guichet?: string;
  number?: string;
  bic?: string;
  bic_intermediate?: string;
  iban_prefix?: string;
  domiciliation?: string;
  proprio?: string;
  owner_address?: string;
  state_id?: number;
  fk_country?: number;
  currency_code?: string;
  default_rib: number;
}

// Table llx_user_rights
export interface UserRights {
  entity: number;
  fk_user: number;
  fk_id: number;
}

// Table llx_usergroup
export interface Usergroup {
  nom: string;
  entity: number;
  datec?: string;
  tms?: string;
  note?: string;
  model_pdf?: string;
}

// Table llx_usergroup_extrafields
export interface UsergroupExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_usergroup_rights
export interface UsergroupRights {
  entity: number;
  fk_usergroup: number;
  fk_id: number;
}

// Table llx_usergroup_user
export interface UsergroupUser {
  entity: number;
  fk_user: number;
  fk_usergroup: number;
}
