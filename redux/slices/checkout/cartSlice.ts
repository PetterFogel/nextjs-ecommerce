import { RootState } from "@/redux/store";
import { ICartItem } from "@/types/cartItem";
import { v4 as uuid } from "uuid";
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
    addItemToCart: (state, { payload: newItem }: PayloadAction<ICartItem>) => {
      const uniqueId = uuid();
      state.cartItems.push({ ...newItem, cartItemId: uniqueId });
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      state.totalQuantity++;
    },
    deleteItemFromCart: (
      state,
      { payload: itemId }: PayloadAction<string | undefined>
    ) => {
      state.cartItems = state.cartItems.filter((i) => i.cartItemId !== itemId);
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

export const { addItemToCart } = checkoutSlice.actions;

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutReducer;
export default checkoutSlice.reducer;
