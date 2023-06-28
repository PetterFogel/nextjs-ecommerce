import { RootState } from "@/redux/store";
import { ICartItem } from "@/types/cartItem";
import { v4 as uuid } from "uuid";
import { CheckoutState } from "./type";
import { totalCartAmountHandler } from "../../../common/functions/totalCartAmountHandler";
import { totalCartQuantityHandler } from "../../../common/functions/totalCartQuantityHandler";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ifWindow = typeof window !== "undefined";

const cartItems = ifWindow
  ? JSON.parse(localStorage.getItem("cartItems") || "[]")
  : [];
const totalAmount = ifWindow
  ? JSON.parse(localStorage.getItem("totalAmount") || "0")
  : 0;
const totalQuantity = ifWindow
  ? JSON.parse(localStorage.getItem("totalQuantity") || "0")
  : 0;

const initialState: CheckoutState = {
  cartItems: cartItems,
  totalAmount: totalAmount,
  shippingAmount: 0,
  totalQuantity: totalQuantity
};

const setCartHandler = (state: CheckoutState) => {
  state.totalAmount = totalCartAmountHandler(state.cartItems);
  state.totalQuantity = totalCartQuantityHandler(state.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
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
    },
    setShippingAmount: (state, { payload }: PayloadAction<number>) => {
      state.shippingAmount = payload;
    }
  }
});

export const { addItemToCart, deleteItemFromCart, setShippingAmount } =
  checkoutSlice.actions;

export const checkoutSelector = (state: RootState): CheckoutState =>
  state.checkoutReducer;
export default checkoutSlice.reducer;
