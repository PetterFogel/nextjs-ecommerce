"use client";
import { FC } from "react";
import { Divider } from "@mui/material";
import { CartItem } from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

export const CartList: FC = () => {
  const { classes } = checkoutPageStyles();
  const { cartItems } = useAppSelector(checkoutSelector);
  return (
    <div className={classes.root}>
      <Divider />
      {cartItems.map((item) => (
        <CartItem key={item._id} cartProduct={item} />
      ))}
    </div>
  );
};
