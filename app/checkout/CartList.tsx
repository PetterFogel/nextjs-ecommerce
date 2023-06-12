"use client";
import { FC } from "react";
import { CartItem } from "./CartItem";
import { ICartItem } from "@/types/cartItem";

interface Props {
  cartItems: ICartItem[];
}

export const CartList: FC<Props> = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item, index) => (
        <CartItem key={index} cartItem={item} />
      ))}
    </>
  );
};
