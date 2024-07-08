import PropTypes from "prop-types";
import { Box, Flex, Grid, Text } from "@sparrowengg/twigs-react";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import {
  GripDotsVerticalIcon,
  UnorderedListIcon,
} from "@sparrowengg/twigs-react-icons";
import ProductTable from "./ProductTable";

function MyObserver({
  searchWord,
  selectedCategories,
  selectedRating,
  selector,
  callback,
}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => callback(entries));

    const element = document.querySelector(selector);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{searchWord && selectedCategories && selectedRating && <></>}</>;
}

function HomeFeed({
  searchWord,
  selectedCategories,
  selectedRating,
  setTotalCart,
  setProductsData,
  setCurrentPage,
}) {
  const productData = useSelector(
    (state) => state.products.currentProducts.data
  );
  const [view, setView] = useState("Grid");

  return (
    <Box>
      <Flex css={{ width: "100%", padding: 10 }} justifyContent="end">
        <Flex>
          <Box
            css={
              view === "Grid"
                ? { color: "$primary400" }
                : { cursor: "pointer", ":hover": { color: "$primary400" } }
            }
            onClick={() => setView("Grid")}
          >
            <GripDotsVerticalIcon />
          </Box>
          <Box
            css={
              view === "List"
                ? { color: "$primary400" }
                : { cursor: "pointer", ":hover": { color: "$primary400" } }
            }
            onClick={() => setView("List")}
          >
            <UnorderedListIcon />
          </Box>
        </Flex>
      </Flex>
      {view === "Grid" ? (
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
              <Box className="grid-observer" />
              <MyObserver
                searchWord={searchWord}
                selectedCategories={selectedCategories}
                selectedRating={selectedRating}
                selector={".grid-observer"}
                callback={(e) => {
                  if (e[0].isIntersecting) setCurrentPage((no) => no + 1);
                  return;
                }}
              />
            </>
          )}
        </Grid>
      ) : (
        <ProductTable
          productData={productData}
          setProductsData={setProductsData}
          setTotalCart={setTotalCart}
        />
      )}
    </Box>
  );
}

HomeFeed.propTypes = {
  setCurrentPage: PropTypes.func,
  setProductsData: PropTypes.any,
  setTotalCart: PropTypes.any,
};

export default HomeFeed;
