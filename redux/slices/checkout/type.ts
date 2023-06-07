import { ICartItem } from "@/types/cartItem";

export interface CheckoutState {
  cartItems: ICartItem[];
  totalAmount: number;
  totalQuantity: number;
}
