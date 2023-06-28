"use client";
import { FC, useEffect, useState } from "react";
import { CartList } from "./CartList";
import { ICartItem } from "@/types/cartItem";
import { OrderDetails } from "./OrderDetails";
import { useAppSelector } from "@/redux/hooks";
import { EmptyCartPanel } from "./EmptyCartPanel";
import { checkoutSelector } from "@/redux/slices/checkout/cartSlice";
import { CartAmountSummary } from "./CartAmountSummary";
import { checkoutPageStyles } from "./style/checkoutPageStyles";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

const CheckoutPage: FC = () => {
  const theme = useTheme();
  const isBreakpointMd = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = checkoutPageStyles();
  const { cartItems, totalAmount, shippingAmount } =
    useAppSelector(checkoutSelector);
  const [cartAmount, setCartAmount] = useState(0);
  const [shippingValue, setShippingValue] = useState(0);
  const [cartList, setCartList] = useState<ICartItem[]>([]);

  useEffect(() => {
    setCartList(cartItems);
    setCartAmount(totalAmount);
    setShippingValue(shippingAmount);
  }, [totalAmount, cartItems, shippingAmount]);

  return (
    <main className={classes.root}>
      {cartList.length === 0 ? (
        <EmptyCartPanel />
      ) : (
        <Grid container spacing={isBreakpointMd ? 2 : 5}>
          <Grid item md={6} xs={12}>
            <CartList cartItems={cartList} />
            <CartAmountSummary
              cartAmount={cartAmount}
              shippingAmount={shippingValue}
            />
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
