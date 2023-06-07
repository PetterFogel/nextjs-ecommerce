import { Reducer } from "@reduxjs/toolkit";
import { CheckoutState } from "./slices/checkout/type";
import checkoutReducer from "../redux/slices/checkout/cartSlice";

interface RootReducer {
  checkoutState: Reducer<CheckoutState>;
}

export const rootReducer: RootReducer = {
  checkoutState: checkoutReducer
};
