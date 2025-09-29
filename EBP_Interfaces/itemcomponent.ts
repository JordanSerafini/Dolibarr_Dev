/**
 * Interface pour la table ItemComponent
 * Générée automatiquement à partir de la structure PostgreSQL
 */
export interface ItemComponent {
  /** ExcludeFixedQuantityForPrice - boolean */
  ExcludeFixedQuantityForPrice: boolean;

  /** BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  BillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** Id - uuid */
  Id: string;

  /** ItemId - text */
  ItemId: string;

  /** CreateCustomerProductInCustomerPark - boolean */
  CreateCustomerProductInCustomerPark: boolean;

  /** NotIncluded - boolean */
  NotIncluded: boolean;

  /** SaleUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  SaleUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** UpdateComponentsStockInFabrication - boolean */
  UpdateComponentsStockInFabrication: boolean;

  /** PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseUnitPriceProgram_KeepActiveFromQuoteToOrder: boolean;

  /** PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  PurchaseBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** ComponentOrder - integer */
  ComponentOrder: number;

  /** Quantity - numeric */
  Quantity: number;

  /** DispatchedPurchasePrice - numeric */
  DispatchedPurchasePrice: number;

  /** DispatchedCostPrice - numeric */
  DispatchedCostPrice: number;

  /** DispatchedSalePriceVatExcluded - numeric */
  DispatchedSalePriceVatExcluded: number;

  /** DispatchedSalePriceVatIncluded - numeric */
  DispatchedSalePriceVatIncluded: number;

  /** FixedQuantity - boolean */
  FixedQuantity: boolean;

  /** PurchasePricePercentage - numeric */
  PurchasePricePercentage: number;

  /** CostPricePercentage - numeric */
  CostPricePercentage: number;

  /** SalePriceVatExcludedPercentage - numeric */
  SalePriceVatExcludedPercentage: number;

  /** IncludeToRecursiveReplenishment - boolean */
  IncludeToRecursiveReplenishment: boolean;

  /** StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder - boolean */
  StockBillOfQuantitiesProgram_KeepActiveFromQuoteToOrder: boolean;

  /** MustProcessOriginQuantity - boolean */
  MustProcessOriginQuantity: boolean;

  /** GuaranteeTypeId - text (nullable) */
  GuaranteeTypeId?: string;

  /** FreePercentage - numeric (nullable) */
  FreePercentage?: number;

  /** PurchaseUnitPriceProgram_Program - text (nullable) */
  PurchaseUnitPriceProgram_Program?: string;

  /** sysCreatedDate - timestamp without time zone (nullable) */
  sysCreatedDate?: Date | string;

  /** sysCreatedUser - text (nullable) */
  sysCreatedUser?: string;

  /** sysModifiedDate - timestamp without time zone (nullable) */
  sysModifiedDate?: Date | string;

  /** sysModifiedUser - text (nullable) */
  sysModifiedUser?: string;

  /** BillOfQuantitiesProgram_Program - text (nullable) */
  BillOfQuantitiesProgram_Program?: string;

  /** SaleUnitPriceProgram_Program - text (nullable) */
  SaleUnitPriceProgram_Program?: string;

  /** PurchaseBillOfQuantitiesProgram_Program - text (nullable) */
  PurchaseBillOfQuantitiesProgram_Program?: string;

  /** ParentRangeItemId - text (nullable) */
  ParentRangeItemId?: string;

  /** ParentItemId - text (nullable) */
  ParentItemId?: string;

  /** StockBillOfQuantitiesProgram_Program - text (nullable) */
  StockBillOfQuantitiesProgram_Program?: string;

}

