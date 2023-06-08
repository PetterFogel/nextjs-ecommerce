import { ICartItem } from "@/types/cartItem";

export const totalCartAmountHandler = (cartItems: ICartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
};
