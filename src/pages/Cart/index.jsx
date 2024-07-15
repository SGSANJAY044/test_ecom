import React, { lazy } from "react";
import "./index.scss";
import { Grid } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";

const Nav = lazy(() => import("./components/Nav"));
const CartCard = lazy(() => import("./components/CartCard"));

/**
 * The `Cart` component renders a list of products from the current cart state using `CartCard`
 * components within a grid layout.
 * @date 2024-07-15
 * @returns {any}
 */
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
