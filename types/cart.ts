import type { Product } from "./product";

export interface Cart {
  id: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}