"use client";
import { FC, useEffect, useState } from "react";
import { CartList } from "./CartList";
import { OrderDetails } from "./OrderDetails";
import { useAppSelector } from "@/redux/hooks";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { checkoutPageStyles } from "./style/checkoutPageStyles";
import { ICartItem } from "@/types/cartItem";

const CheckoutPage: FC = () => {
  const theme = useTheme();
  const isBreakpointMd = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = checkoutPageStyles();
  const { cartItems, totalAmount } = useAppSelector(checkoutSelector);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartList, setCartList] = useState<ICartItem[]>([]);

  useEffect(() => {
    setCartList(cartItems);
    setCartAmount(totalAmount);
  }, [totalAmount, cartItems]);

  return (
    <main className={classes.root}>
      {cartList.length === 0 ? (
        <EmptyCartPanel />
      ) : (
        <Grid container spacing={isBreakpointMd ? 2 : 5}>
          <Grid item md={6} xs={12}>
            <CartList cartItems={cartList} />
            <div className={classes.priceInfoContainer}>
              <Typography variant={"h3"} fontWeight={700}>
                Total
              </Typography>
              <Typography variant={"h3"}>SEK: {cartAmount}</Typography>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <OrderDetails />
          </Grid>
        </Grid>
      )}
    </main>
  );
};

export default CheckoutPage;
