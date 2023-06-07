"use client";
import { NextPage } from "next";
import { CartList } from "./CartList";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { Button, Typography } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";

const CheckoutPage: NextPage = () => {
  const router = useRouter();
  const { classes } = checkoutPageStyles();
  const { cartItems, totalAmount } = useAppSelector(checkoutSelector);

  return (
    <main className={classes.root}>
      {cartItems.length === 0 ? (
        <>
          <Typography variant={"h3"} mb={2}>
            Your cart is empty.
          </Typography>
          <Button
            color="info"
            variant="contained"
            onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
        </>
      ) : (
        <>
          <CartList />
          <div className={classes.priceInfoContainer}>
            <Typography variant={"h3"} fontWeight={700}>
              Total
            </Typography>
            <Typography variant={"h3"}>SEK: {totalAmount}</Typography>
          </div>
        </>
      )}
    </main>
  );
};

export default CheckoutPage;
