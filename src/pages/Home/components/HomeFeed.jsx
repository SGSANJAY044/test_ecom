import PropTypes from "prop-types";
import { Box, Flex, Grid } from "@sparrowengg/twigs-react";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import {
  GripDotsVerticalIcon,
  UnorderedListIcon,
} from "@sparrowengg/twigs-react-icons";
import ProductTable from "./ProductTable";

/**
 *  The `MyObserver` function uses an IntersectionObserver to track the visibility of a specified
 *  element and calls a callback function when it intersects with the viewport.
 * @date 2024-07-15
 * @param {any} {searchWord
 * @param {any} selectedCategories
 * @param {any} selectedRating
 * @param {any} selector
 * @param {any} callback
 * @param {any} }
 * @returns {any}
 */

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

  return (
    <>{searchWord && selectedCategories && selectedRating ? <></> : <></>}</>
  );
}

/**
 * The `HomeFeed` function is a React component that displays a feed of products either in a grid or
 * list view based on the `view` state.
 * @date 2024-07-15
 * @param {any} {searchWord
 * @param {any} selectedCategories
 * @param {any} selectedRating
 * @param {any} setTotalCart
 * @param {any} setProductsData
 * @param {any} setCurrentPage
 * @param {any} getData
 * @param {any} }
 * @returns {any}
 */
function HomeFeed({
  searchWord,
  selectedCategories,
  selectedRating,
  setTotalCart,
  setProductsData,
  setCurrentPage,
  getData,
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
            onClick={() => {
              getData();
              setView("Grid");
            }}
          >
            <GripDotsVerticalIcon />
          </Box>
          <Box
            css={
              view === "List"
                ? { color: "$primary400" }
                : { cursor: "pointer", ":hover": { color: "$primary400" } }
            }
            onClick={() => {
              getData();
              setView("List");
            }}
          >
            <UnorderedListIcon />
          </Box>
        </Flex>
      </Flex>
      {view === "Grid" ? (
        <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
          {productData && (
            <>
              {productData.map((product) => (
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
  getData: PropTypes.any,
  searchWord: PropTypes.any,
  selectedCategories: PropTypes.any,
  selectedRating: PropTypes.any,
  setCurrentPage: PropTypes.func,
  setProductsData: PropTypes.any,
  setTotalCart: PropTypes.any,
};
MyObserver.propTypes = {
  searchWord: PropTypes.any,
  selectedCategories: PropTypes.any,
  selectedRating: PropTypes.any,
  selector: PropTypes.any,
  callback: PropTypes.func,
};


export default HomeFeed;
