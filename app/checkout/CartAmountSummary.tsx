"use client";
import { FC } from "react";
import { Typography } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

interface Props {
  cartAmount: number;
}

export const CartAmountSummary: FC<Props> = ({ cartAmount }) => {
  const { classes } = checkoutPageStyles();

  return (
    <div className={classes.priceInfoContainer}>
      <Typography variant={"h3"}>Total</Typography>
      <Typography variant={"h3"}>SEK: {cartAmount}</Typography>
    </div>
  );
};
