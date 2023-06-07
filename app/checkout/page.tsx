import { NextPage } from "next";
import { CartList } from "./CartList";

const CheckoutPage: NextPage = () => {
  return (
    <main>
      <CartList />
    </main>
  );
};

export default CheckoutPage;
