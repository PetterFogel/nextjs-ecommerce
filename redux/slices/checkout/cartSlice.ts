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

const totalAmountReduceHandler = (cartItems: ICartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
};

const totalQuantityReduceHandler = (cartItems: ICartItem[]) => {
  return cartItems.reduce((total, item) => total + Number(item.quantity), 0);
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

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...newItem, cartItemId: uniqueId });
      }

      state.totalQuantity++;
      state.totalAmount = totalAmountReduceHandler(state.cartItems);
    },
    deleteItemFromCart: (
      state,
      { payload: itemId }: PayloadAction<string | undefined>
    ) => {
      state.cartItems = state.cartItems.filter((i) => i.cartItemId !== itemId);
      state.totalAmount = totalAmountReduceHandler(state.cartItems);
      state.totalQuantity = totalQuantityReduceHandler(state.cartItems);
    },
    decreaseQunatityFromItem: (
      state,
      { payload: itemId }: PayloadAction<string | undefined>
    ) => {
      const existingItem = state.cartItems.find((i) => i.cartItemId === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.cartItemId !== itemId
        );
      }

      state.totalAmount = totalAmountReduceHandler(state.cartItems);
      state.totalQuantity = totalQuantityReduceHandler(state.cartItems);
    }
  }
});

export const { addItemToCart, deleteItemFromCart } = checkoutSlice.actions;

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutReducer;
export default checkoutSlice.reducer;
