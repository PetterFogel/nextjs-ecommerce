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
  const { classes } = checkoutPageStyles();
  const { deleteItemFromCart, addItemToCart, decreaseQunatityFromItem } =
    checkoutSlice.actions;

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageHolder}>
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.imageUrl}
            priority={true}
            layout={"responsive"}
            height={"100"}
            width={"100"}
          />
        </div>
        <div className={classes.itemInfoHolder}>
          <div>
            <Typography variant={"h4"}>
              {cartItem.title} - {cartItem.selectedSize}
            </Typography>
          </div>
          <div>
            <Typography variant={"h4"}>{cartItem.price} SEK</Typography>
          </div>
        </div>
        <div className={classes.quantityHolder}>
          <RemoveIcon
            fontSize="small"
            onClick={() =>
              dispatch(decreaseQunatityFromItem(cartItem.cartItemId))
            }
          />
          <Typography variant={"h4"}>{cartItem.quantity}</Typography>
          <AddIcon
            fontSize="small"
            onClick={() => dispatch(addItemToCart(cartItem))}
          />
        </div>
        <div className={classes.closeIconHolder}>
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
