/**
 * Interfaces TypeScript pour les tables de paiements Dolibarr
 * Tables: llx_paiementcharge, llx_paiement_facture, llx_paiementfourn_facturefourn, llx_paiementfourn, llx_paiement, ... (11 tables total)
 */

// Table llx_paiement
export interface Paiement {
  ref?: string;
  ref_ext?: string;
  entity: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount?: number;
  multicurrency_amount?: number;
  fk_paiement: number;
  num_paiement?: string;
  note?: string;
  ext_payment_id?: string;
  ext_payment_site?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
  statut: number;
  fk_export_compta: number;
  pos_change?: number;
}

// Table llx_paiement_facture
export interface PaiementFacture {
  fk_paiement?: number;
  fk_facture?: number;
  amount?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_amount?: number;
}

// Table llx_paiementcharge
export interface Paiementcharge {
  fk_charge?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount?: number;
  fk_typepaiement: number;
  num_paiement?: string;
  note?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_paiementfourn
export interface Paiementfourn {
  ref?: string;
  entity?: number;
  tms?: string;
  datec?: string;
  datep?: string;
  amount?: number;
  multicurrency_amount?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_paiement: number;
  num_paiement?: string;
  note?: string;
  fk_bank: number;
  statut: number;
  model_pdf?: string;
}

// Table llx_paiementfourn_facturefourn
export interface PaiementfournFacturefourn {
  fk_paiementfourn?: number;
  fk_facturefourn?: number;
  amount?: number;
  multicurrency_code?: string;
  multicurrency_tx?: number;
  multicurrency_amount?: number;
}

// Table llx_payment_donation
export interface PaymentDonation {
  fk_donation?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount?: number;
  fk_typepayment: number;
  num_payment?: string;
  note?: string;
  ext_payment_id?: string;
  ext_payment_site?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_payment_expensereport
export interface PaymentExpensereport {
  fk_expensereport?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount?: number;
  fk_typepayment: number;
  num_payment?: string;
  note?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_payment_loan
export interface PaymentLoan {
  fk_loan?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount_capital?: number;
  amount_insurance?: number;
  amount_interest?: number;
  fk_typepayment: number;
  num_payment?: string;
  note_private?: string;
  note_public?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}

// Table llx_payment_salary
export interface PaymentSalary {
  ref?: string;
  tms?: string;
  datec?: string;
  fk_user?: number;
  datep?: string;
  datev?: string;
  salary?: number;
  amount: number;
  fk_projet?: number;
  fk_typepayment: number;
  num_payment?: string;
  label?: string;
  datesp?: string;
  dateep?: string;
  entity: number;
  note?: string;
  fk_bank?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
  fk_salary?: number;
}

// Table llx_payment_various
export interface PaymentVarious {
  ref?: string;
  num_payment?: string;
  label?: string;
  tms?: string;
  datec?: string;
  datep?: string;
  datev?: string;
  sens: number;
  amount: number;
  fk_typepayment: number;
  accountancy_code?: string;
  subledger_account?: string;
  fk_projet?: number;
  entity: number;
  note?: string;
  fk_bank?: number;
  fk_user_author?: number;
  fk_user_modif?: number;
}

// Table llx_payment_vat
export interface PaymentVat {
  fk_tva?: number;
  datec?: string;
  tms?: string;
  datep?: string;
  amount?: number;
  fk_typepaiement: number;
  num_paiement?: string;
  note?: string;
  fk_bank: number;
  fk_user_creat?: number;
  fk_user_modif?: number;
}
