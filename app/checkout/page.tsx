"use client";
import { FC } from "react";
import { CartList } from "./CartList";
import { OrderDetails } from "./OrderDetails";
import { useAppSelector } from "@/redux/hooks";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { Grid, Typography } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

const CheckoutPage: FC = () => {
  const { classes } = checkoutPageStyles();
  const { cartItems, totalAmount } = useAppSelector(checkoutSelector);

  return (
    <main className={classes.root}>
      {cartItems.length === 0 ? (
        <EmptyCartPanel />
      ) : (
        <Grid container spacing={10}>
          <Grid item lg={6} md={12} xs={12}>
            <CartList />
            <div className={classes.priceInfoContainer}>
              <Typography variant={"h3"} fontWeight={700}>
                Total
              </Typography>
              <Typography variant={"h3"}>SEK: {totalAmount}</Typography>
            </div>
          </Grid>
          <Grid item lg={5} md={12} xs={12}>
            <OrderDetails />
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default CheckoutPage;
