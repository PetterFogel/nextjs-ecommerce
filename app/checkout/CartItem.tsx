"use client";
import { FC } from "react";
import { ICartItem } from "@/types/cartItem";
import { checkoutPageStyles } from "./style/checkoutPageStyles";
import { Divider, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/legacy/image";

interface Props {
  cartProduct: ICartItem;
}

export const CartItem: FC<Props> = ({ cartProduct }) => {
  const { classes } = checkoutPageStyles();

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.imageHolder}>
          <Image
            src={cartProduct.imageUrl}
            alt={cartProduct.imageUrl}
            layout={"responsive"}
            height={"100"}
            width={"100"}
          />
        </div>
        <div style={{ flex: 2 }}>
          <Typography variant={"subtitle1"}>
            {cartProduct.title} - Size
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant={"subtitle1"}>
            SEK {cartProduct.price}/pcs
          </Typography>
        </div>
        <div className={classes.quantityHolder}>
          <RemoveIcon fontSize="small" />
          <Typography variant={"subtitle1"}>{cartProduct.quantity}</Typography>
          <AddIcon fontSize="small" />
        </div>
        <div className={classes.closeIconHolder}>
          <Typography variant={"subtitle1"}>
            SEK {cartProduct.quantity * cartProduct.price}
          </Typography>
          <CloseIcon fontSize="small" />
        </div>
      </div>
      <Divider />
    </>
  );
};
