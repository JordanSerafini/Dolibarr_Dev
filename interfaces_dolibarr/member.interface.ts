/**
 * Interfaces TypeScript pour les tables d'adhérents/membres Dolibarr
 * Tables: llx_adherent_extrafields, llx_adherent, llx_adherent_type_extrafields, llx_adherent_type_lang, llx_adherent_type
 */

// Table llx_adherent
export interface Adherent {
  ref: string;
  entity: number;
  ref_ext?: string;
  gender?: string;
  civility?: string;
  lastname?: string;
  firstname?: string;
  login?: string;
  pass?: string;
  pass_crypted?: string;
  fk_adherent_type: number;
  morphy: string;
  societe?: string;
  fk_soc?: number;
  address?: string;
  zip?: string;
  town?: string;
  state_id?: number;
  country?: number;
  email?: string;
  url?: string;
  socialnetworks?: string;
  phone?: string;
  phone_perso?: string;
  phone_mobile?: string;
  birth?: string;
  photo?: string;
  statut: number;
  public: number;
  datefin?: string;
  default_lang?: string;
  note_private?: string;
  note_public?: string;
  model_pdf?: string;
  datevalid?: string;
  datec?: string;
  tms?: string;
  fk_user_author?: number;
  fk_user_mod?: number;
  fk_user_valid?: number;
  canvas?: string;
  ip?: string;
}

// Table llx_adherent_extrafields
export interface AdherentExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_adherent_type
export interface AdherentType {
  entity: number;
  tms?: string;
  statut: number;
  libelle: string;
  morphy: string;
  duration?: string;
  subscription: string;
  amount?: number;
  caneditamount?: number;
  vote: string;
  note?: string;
  mail_valid?: string;
}

// Table llx_adherent_type_extrafields
export interface AdherentTypeExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_adherent_type_lang
export interface AdherentTypeLang {
  fk_type: number;
  lang: string;
  label: string;
  description?: string;
  email?: string;
}
