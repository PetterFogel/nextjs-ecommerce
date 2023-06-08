import { RootState } from "@/redux/store";
import { ICartItem } from "@/types/cartItem";
import { v4 as uuid } from "uuid";
import { CheckoutState } from "./type";
import { totalCartAmountHandler } from "../../../common/functions/totalCartAmountHandler";
import { totalCartQuantityHandler } from "../../../common/functions/totalCartQuantityHandler";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CheckoutState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
};

const setCartHandler = (state: CheckoutState) => {
  state.totalAmount = totalCartAmountHandler(state.cartItems);
  state.totalQuantity = totalCartQuantityHandler(state.cartItems);
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItemToCart: (state, { payload: newItem }: PayloadAction<ICartItem>) => {
      const uniqueId = uuid();
      const existingItem = state.cartItems.find(
        (i) => i._id === newItem._id && i.selectedSize === newItem.selectedSize
      );

      if (existingItem) existingItem.quantity++;
      else state.cartItems.push({ ...newItem, cartItemId: uniqueId });

      setCartHandler(state);
    },
    deleteItemFromCart: (
      state,
      { payload: itemId }: PayloadAction<string | undefined>
    ) => {
      state.cartItems = state.cartItems.filter((i) => i.cartItemId !== itemId);
      setCartHandler(state);
    },
    decreaseQunatityFromItem: (
      state,
      { payload: itemId }: PayloadAction<string | undefined>
    ) => {
      const existingItem = state.cartItems.find((i) => i.cartItemId === itemId);
      if (existingItem && existingItem.quantity > 1) existingItem.quantity--;
      else
        state.cartItems = state.cartItems.filter(
          (i) => i.cartItemId !== itemId
        );

      setCartHandler(state);
    }
  }
});

export const { addItemToCart, deleteItemFromCart } = checkoutSlice.actions;

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutReducer;
export default checkoutSlice.reducer;
