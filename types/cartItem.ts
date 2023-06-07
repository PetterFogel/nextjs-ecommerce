import { IProduct } from "./product";

export interface ICartItem extends IProduct {
  quantity: number;
  cartItemId?: string;
  selectedSize: string;
}
