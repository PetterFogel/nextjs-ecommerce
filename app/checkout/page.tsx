"use client";
import { NextPage } from "next";
import { CartList } from "./CartList";
import { useRouter } from "next/navigation";
import { OrderDetails } from "./OrderDetails";
import { useAppSelector } from "@/redux/hooks";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { Button, Grid, Typography } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

const CheckoutPage: NextPage = () => {
  const router = useRouter();
  const { classes } = checkoutPageStyles();
  const { cartItems, totalAmount } = useAppSelector(checkoutSelector);

  return (
    <main className={classes.root}>
      {cartItems.length === 0 ? (
        <div className={classes.emptyPanelContainer}>
          <Typography variant={"h3"} mb={2}>
            Your cart is empty.
          </Typography>
          <Button
            color="info"
            variant="contained"
            onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <CartList />
            <div className={classes.priceInfoContainer}>
              <Typography variant={"h3"} fontWeight={700}>
                Total
              </Typography>
              <Typography variant={"h3"}>SEK: {totalAmount}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <OrderDetails />
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default CheckoutPage;
