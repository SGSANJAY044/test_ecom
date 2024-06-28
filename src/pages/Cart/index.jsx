import React from 'react'
import './index.scss'
import { Grid } from '@sparrowengg/twigs-react';
import CartCard from './components/CartCard';
import Nav from './components/Nav'
import { useSelector } from 'react-redux';

function Cart() {
  const currentCart = useSelector((state) => state.cart.currentCart)
  console.log(currentCart);
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

export default Cart