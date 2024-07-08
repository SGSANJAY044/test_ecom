import React, { lazy } from "react";
import "./index.scss";
import { Grid } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";

const Nav = lazy(() => import("./components/Nav"));
const CartCard = lazy(() => import("./components/CartCard"));

function Cart() {
  const currentCart = useSelector((state) => state.cart.currentCart);
  return (
    <>
      <Nav />
      <Grid css={{ padding: 10 }} width={600} gap={[20, 20]}>
        {currentCart.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </Grid>
    </>
  );
}

export default Cart;
