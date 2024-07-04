import { Box, Grid } from "@sparrowengg/twigs-react";
import React from "react";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";

function HomeFeed({ setTotalCart, setProductsData }) {
  const productData = useSelector(
    (state) => state.products.currentProducts.data
  );

  return (
    <Box>
      <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
        {productData &&
          productData.map((product) => (
            <ProductCart
              product={product}
              cartStatus={false}
              setTotalCart={setTotalCart}
              setProducts={setProductsData}
              key={product.id}
            />
          ))}
      </Grid>
    </Box>
  );
}

export default HomeFeed;
