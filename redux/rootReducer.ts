import { CheckoutState } from "@/app/checkout/redux/type";
import { Reducer } from "@reduxjs/toolkit";
import checkoutReducer from "../app/checkout/redux/cartSlice";

interface RootReducer {
  checkoutState: Reducer<CheckoutState>;
}

export const rootReducer: RootReducer = {
  checkoutState: checkoutReducer
};
