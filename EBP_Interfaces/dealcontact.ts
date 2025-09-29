/**
 * Interface pour la table DealContact
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface DealContact {
  /** Id - uuid */
  Id: string;

  /** Selected - boolean */
  Selected: boolean;

  /** ContactId - uuid */
  ContactId: string;

  /** DealId - text (nullable) */
  DealId?: string;

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

  /** ConstructionSiteId - text (nullable) */
  ConstructionSiteId?: string;

  /** PrintSendOptions_Quote - smallint */
  PrintSendOptions_Quote: number;

  /** PrintSendOptions_ExecutionQuote - smallint */
  PrintSendOptions_ExecutionQuote: number;

  /** PrintSendOptions_Order - smallint */
  PrintSendOptions_Order: number;

  /** PrintSendOptions_DeliveryOrder - smallint */
  PrintSendOptions_DeliveryOrder: number;

  /** PrintSendOptions_Invoice - smallint */
  PrintSendOptions_Invoice: number;

  /** PrintSendOptions_CreditMemo - smallint */
  PrintSendOptions_CreditMemo: number;

  /** PrintSendOptions_DepositInvoice - smallint */
  PrintSendOptions_DepositInvoice: number;

  /** PrintSendOptions_DepositCreditMemo - smallint */
  PrintSendOptions_DepositCreditMemo: number;

  /** PrintSendOptions_ProgressStateDocument - smallint */
  PrintSendOptions_ProgressStateDocument: number;

  /** PrintSendOptions_PurchaseQuote - smallint */
  PrintSendOptions_PurchaseQuote: number;

  /** PrintSendOptions_PurchaseOrder - smallint */
  PrintSendOptions_PurchaseOrder: number;

  /** PrintSendOptions_ReceiptOrder - smallint */
  PrintSendOptions_ReceiptOrder: number;

  /** PrintSendOptions_ReturnOrder - smallint */
  PrintSendOptions_ReturnOrder: number;

  /** PrintSendOptions_PurchaseInvoice - smallint */
  PrintSendOptions_PurchaseInvoice: number;

  /** PrintSendOptions_PurchaseCreditMemo - smallint */
  PrintSendOptions_PurchaseCreditMemo: number;

  /** PrintSendOptions_PurchaseDepositInvoice - smallint */
  PrintSendOptions_PurchaseDepositInvoice: number;

  /** PrintSendOptions_PurchaseDepositCreditMemo - smallint */
  PrintSendOptions_PurchaseDepositCreditMemo: number;

  /** PrintSendOptions_PurchaseProgressStateDocument - smallint */
  PrintSendOptions_PurchaseProgressStateDocument: number;

}

