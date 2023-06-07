import { RootState } from "@/redux/store";
import { ICartItem } from "@/types/cartItem";
import { CheckoutState } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CheckoutState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setAddToCart: (state, { payload: newItem }: PayloadAction<ICartItem>) => {
      state.cartItems.push(newItem);
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + Number(item.quantity),
        0
      );
    }
  }
});

export const { setAddToCart } = checkoutSlice.actions;

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutReducer;
export default checkoutSlice.reducer;
