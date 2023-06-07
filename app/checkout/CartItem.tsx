"use client";
import { FC } from "react";
import { ICartItem } from "@/types/cartItem";
import { checkoutSlice } from "@/redux/slices/checkout/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { checkoutPageStyles } from "./style/checkoutPageStyles";
import { Divider, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/legacy/image";

interface Props {
  cartItem: ICartItem;
}

export const CartItem: FC<Props> = ({ cartItem }) => {
  const dispatch = useAppDispatch();
  const { deleteItemFromCart } = checkoutSlice.actions;
  const { classes } = checkoutPageStyles();

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageHolder}>
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.imageUrl}
            layout={"responsive"}
            height={"100"}
            width={"100"}
          />
        </div>
        <div style={{ flex: 2 }}>
          <Typography variant={"subtitle1"}>
            {cartItem.title} - {cartItem.selectedSize}
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant={"subtitle1"}>
            SEK {cartItem.price}/pcs
          </Typography>
        </div>
        <div className={classes.quantityHolder}>
          <RemoveIcon fontSize="small" />
          <Typography variant={"subtitle1"}>{cartItem.quantity}</Typography>
          <AddIcon fontSize="small" />
        </div>
        <div className={classes.closeIconHolder}>
          <Typography variant={"subtitle1"}>
            SEK {cartItem.quantity * cartItem.price}
          </Typography>
          <CloseIcon
            fontSize="small"
            onClick={() => dispatch(deleteItemFromCart(cartItem.cartItemId))}
          />
        </div>
      </div>
      <Divider />
    </>
  );
};
