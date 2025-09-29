/**
 * Interfaces TypeScript pour les tables de gestion des ressources humaines Dolibarr
 * Tables: llx_hrm_evaluationdet_extrafields-hrm, llx_hrm_evaluationdet-hrm, llx_hrm_evaluation_extrafields-hrm, llx_hrm_evaluation-hrm, llx_hrm_job_extrafields-hrm, ... (11 tables total)
 */

// Table llx_hrm_evaluation
export interface HrmEvaluation {
  entity: number;
  ref: string;
  label?: string;
  description?: string;
  note_public?: string;
  note_private?: string;
  model_pdf?: string;
  last_main_doc?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  status: number;
  date_eval?: string;
  fk_user: number;
  fk_job: number;
}

// Table llx_hrm_evaluation_extrafields
export interface HrmEvaluationExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_hrm_evaluationdet
export interface HrmEvaluationdet {
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  fk_skill: number;
  fk_evaluation: number;
  rankorder: number;
  required_rank: number;
  comment?: string;
}

// Table llx_hrm_evaluationdet_extrafields
export interface HrmEvaluationdetExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_hrm_job
export interface HrmJob {
  label: string;
  description?: string;
  date_creation: string;
  tms?: string;
  deplacement?: string;
  note_public?: string;
  note_private?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_hrm_job_extrafields
export interface HrmJobExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_hrm_job_user
export interface HrmJobUser {
  description?: string;
  date_creation: string;
  tms?: string;
  fk_contrat?: number;
  fk_user?: number;
  fk_job: number;
  date_start?: string;
  date_end?: string;
  abort_comment?: string;
  note_public?: string;
  note_private?: string;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_hrm_skill
export interface HrmSkill {
  label?: string;
  description?: string;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  required_level: number;
  date_validite: number;
  temps_theorique: number;
  skill_type: number;
  note_public?: string;
  note_private?: string;
}

// Table llx_hrm_skill_extrafields
export interface HrmSkillExtrafields {
  tms?: string;
  fk_object: number;
}

// Table llx_hrm_skilldet
export interface HrmSkilldet {
  fk_skill: number;
  rankorder: number;
  description?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
}

// Table llx_hrm_skillrank
export interface HrmSkillrank {
  fk_skill: number;
  rankorder: number;
  fk_object: number;
  date_creation: string;
  tms?: string;
  fk_user_creat: number;
  fk_user_modif?: number;
  objecttype: string;
}
