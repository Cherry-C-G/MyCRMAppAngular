import { DecimalPipe } from "@angular/common";

export interface Product {
    name: string,
    vendorId: number,
    categoryId: number,
    quantityPerUnit: number,
    unitPrice: number,
    unitsInStock: number,
    unitsOnOrder: number,
    reorderLevel: number,
    discontinued: boolean,
    vendor: string,
    category: string
}