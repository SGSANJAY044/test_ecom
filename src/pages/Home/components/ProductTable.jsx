import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { Box, Flex, Text, toast } from "@sparrowengg/twigs-react";
import ProductRow from "./ProductRow";
import API from "api";
import { useDispatch } from "react-redux";
/**
 * The `ProductTable` function is a React component that displays a table of products.
 * @date 2024-07-15
 * @param {any} {productData
 * @param {any} setTotalCart
 * @param {any} setProductsData }
 * @returns {any}
 */
function ProductTable({
  productData,
  setTotalCart,
  setProductsData,
  addCartWrapper,
}) {
  const scrollContainer = useRef();

  const dispatch = useDispatch();
  const updateVisibleItems = async () => {
    try {
      const containerHeight = scrollContainer.current.clientHeight;
      const rowContainer =
        scrollContainer.current.querySelector(".row-container");
      const rowHeight = rowContainer ? rowContainer.clientHeight : 0;
      const visibleItems = Math.ceil(containerHeight / rowHeight);
      const scrollOffset = Math.ceil(scrollContainer.current.scrollTop);
      console.log(scrollOffset);
      const start = Math.ceil(scrollOffset / visibleItems);
      if (start >= 0 && start <= 94) {
        const data = await API.get(`/products?offset=${start}&limit=7`);
        dispatch(
          setProductsData(
            data.data.data.map((item) => ({ ...item, cartCount: 0 })),
          ),
        );
      }
    } catch (e) {
      toast({
        variant: "error",
        title: "Error in Fetch Data",
        description: e.message,
      });
    }
  };
  useEffect(() => {}, []);
  return (
    <Flex
      flexDirection="column"
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        margin: 10,
        padding: "$10",
      }}
    >
      {productData && (
        <>
          <Flex
            css={{
              padding: 10,
            }}
            alignItems="center"
            gap={50}
          >
            <Text
              css={{
                fontFamily: "sans-serif",
                width: "1%",
                fontSize: "$md",
              }}
            >
              S.No
            </Text>
            <Text
              truncate
              css={{
                fontFamily: "sans-serif",
                width: "20%",
                fontSize: "$md",
              }}
            >
              Product Name
            </Text>
            <Text
              css={{
                fontFamily: "sans-serif",
                width: "50%",
                fontSize: "$md",
              }}
              truncate
            >
              Description
            </Text>
            <Text
              css={{
                fontFamily: "sans-serif",
                width: "30%",
                fontSize: "$md",
                textAlign: "center",
              }}
              truncate
            >
              Actions
            </Text>
          </Flex>
          <Box
            css={{ height: "40vh", overflow: "scroll" }}
            ref={scrollContainer}
            onScroll={updateVisibleItems}
          >
            <Box
              css={{
                height: `${Math.ceil(scrollContainer?.current?.scrollTop) + 54}px`,
              }}
            />
            {productData.map((product) => (
              <ProductRow
                product={product}
                cartStatus={false}
                setTotalCart={setTotalCart}
                setProducts={setProductsData}
                addCartWrapper={addCartWrapper}
                key={product.id}
              />
            ))}
          </Box>
        </>
      )}
    </Flex>
  );
}

ProductTable.propTypes = {
  productData: PropTypes.shape({
    map: PropTypes.func,
  }),
  setProductsData: PropTypes.func,
  setTotalCart: PropTypes.any,
  addCartWrapper: PropTypes.func,
};

export default ProductTable;
