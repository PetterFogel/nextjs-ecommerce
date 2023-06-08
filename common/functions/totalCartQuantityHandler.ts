import { ICartItem } from "@/types/cartItem";

export const totalCartQuantityHandler = (cartItems: ICartItem[]) => {
  return cartItems.reduce((total, item) => total + Number(item.quantity), 0);
};
