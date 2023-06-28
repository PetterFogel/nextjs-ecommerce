"use client";
import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

interface Props {
  cartAmount: number;
  shippingAmount: number;
}

export const CartAmountSummary: FC<Props> = ({
  cartAmount,
  shippingAmount
}) => {
  const { classes } = checkoutPageStyles();

  const VAT = Math.round(cartAmount * 0.2);

  return (
    <Stack spacing={1} mt={5} mb={5}>
      <div className={classes.spaceBetween}>
        <Typography variant={"subtitle1"}>Total</Typography>
        <Typography variant={"subtitle1"}>{cartAmount} SEK</Typography>
      </div>
      <div className={classes.spaceBetween}>
        <Typography variant={"subtitle1"}>VAT</Typography>
        <Typography variant={"subtitle1"}>{VAT} SEK</Typography>
      </div>
      <div className={classes.spaceBetween}>
        <Typography variant={"subtitle1"}>Shipping</Typography>
        <Typography variant={"subtitle1"}>{shippingAmount} SEK</Typography>
      </div>
    </Stack>
  );
};
