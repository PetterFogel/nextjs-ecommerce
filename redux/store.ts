import { productsApi } from "./api/productsApi";
import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "../app/checkout/redux/cartSlice";

export const store = configureStore({
  reducer: {
    checkoutReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
