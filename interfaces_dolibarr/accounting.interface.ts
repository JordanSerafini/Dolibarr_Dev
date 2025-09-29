/**
 * Interfaces TypeScript pour les tables de comptabilité Dolibarr
 * Tables: llx_accounting_account, llx_accounting_bookkeeping, llx_accounting_bookkeeping_tmp,
 * llx_accounting_category_account, llx_accounting_fiscalyear, llx_accounting_groups_account,
 * llx_accounting_journal, llx_accounting_system
 */

// Plan comptable - Table des comptes
export interface AccountingAccount {
  rowid: number;
  entity: number;
  datec?: string;
  tms: string;
  fk_pcg_version: string;
  pcg_type: string;
  account_number: string;
  account_parent?: number;
  label: string;
  labelshort?: string;
  fk_accounting_category?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  active: number;
  reconcilable: number;
  import_key?: string;
  extraparams?: string;
}

// Écritures comptables validées
export interface AccountingBookkeeping {
  rowid: number;
  entity: number;
  piece_num: number;
  doc_date: string;
  doc_type: string;
  doc_ref: string;
  fk_doc: number;
  fk_docdet: number;
  thirdparty_code?: string;
  subledger_account?: string;
  subledger_label?: string;
  numero_compte: string;
  label_compte: string;
  label_operation?: string;
  debit: number;
  credit: number;
  montant?: number;
  sens?: string;
  multicurrency_amount?: number;
  multicurrency_code?: string;
  lettering_code?: string;
  date_lettering?: string;
  date_lim_reglement?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  date_creation?: string;
  tms: string;
  fk_user?: number;
  code_journal: string;
  journal_label?: string;
  date_validated?: string;
  date_export?: string;
  import_key?: string;
  extraparams?: string;
}

// Écritures comptables temporaires (en cours de validation)
export interface AccountingBookkeepingTmp {
  rowid: number;
  entity: number;
  doc_date: string;
  doc_type: string;
  doc_ref: string;
  fk_doc: number;
  fk_docdet: number;
  thirdparty_code?: string;
  subledger_account?: string;
  subledger_label?: string;
  numero_compte?: string;
  label_compte: string;
  label_operation?: string;
  debit: number;
  credit: number;
  montant: number;
  sens?: string;
  multicurrency_amount?: number;
  multicurrency_code?: string;
  lettering_code?: string;
  date_lettering?: string;
  date_lim_reglement?: string;
  fk_user_author: number;
  fk_user_modif?: number;
  date_creation?: string;
  tms: string;
  fk_user?: number;
  code_journal: string;
  journal_label?: string;
  piece_num: number;
  date_validated?: string;
  import_key?: string;
  extraparams?: string;
}

// Liaison entre catégorie comptable et compte
export interface AccountingCategoryAccount {
  rowid: number;
  fk_accounting_category?: number;
  fk_accounting_account?: number;
}

// Exercices comptables
export interface AccountingFiscalyear {
  rowid: number;
  label: string;
  date_start?: string;
  date_end?: string;
  statut: number;
  entity: number;
  datec: string;
  tms: string;
  fk_user_author?: number;
  fk_user_modif?: number;
}

// Groupement de comptes par catégorie
export interface AccountingGroupsAccount {
  rowid: number;
  fk_accounting_account: number;
  fk_c_accounting_category: number;
}

// Journaux comptables
export interface AccountingJournal {
  rowid: number;
  entity: number;
  code: string;
  label: string;
  nature: number; // 1:diverses / 2:vente / 3:achat / 4:banque / 5:note de frais / 9:nouveau
  active: number;
}

// Systèmes de plan comptable
export interface AccountingSystem {
  rowid: number;
  fk_country?: number;
  pcg_version: string;
  label: string;
  active?: number;
  date_creation?: string;
  fk_user_author?: number;
}