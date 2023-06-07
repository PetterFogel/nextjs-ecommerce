"use client";
import { FC } from "react";
import { Divider } from "@mui/material";
import { CartItem } from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";

export const CartList: FC = () => {
  const { cartItems } = useAppSelector(checkoutSelector);
  console.log(cartItems);
  return (
    <>
      <Divider />
      {cartItems.map((item) => (
        <CartItem key={item.cartItemId} cartItem={item} />
      ))}
    </>
  );
};
