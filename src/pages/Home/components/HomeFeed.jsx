import PropTypes from "prop-types";
import { Box, Grid } from "@sparrowengg/twigs-react";
import React from "react";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";

function HomeFeed({ setTotalCart, setProductsData, setLastElement }) {
  const productData = useSelector(
    (state) => state.products.currentProducts.data
  );

  return (
    <Box>
      <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
        {productData && (
          <>
            {productData.map((product, index) => (
              <ProductCart
                product={product}
                cartStatus={false}
                setTotalCart={setTotalCart}
                setProducts={setProductsData}
                key={product.id}
              />
            ))}
            <Box ref={setLastElement} />
          </>
        )}
      </Grid>
    </Box>
  );
}

HomeFeed.propTypes = {
  setLastElement: PropTypes.any,
  setProductsData: PropTypes.any,
  setTotalCart: PropTypes.any,
};

export default HomeFeed;
