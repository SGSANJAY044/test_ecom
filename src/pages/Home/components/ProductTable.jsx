import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text, toast } from "@sparrowengg/twigs-react";
import ProductRow from "./ProductRow";
import API from "api";
import { useDispatch } from "react-redux";
import { setTotalCount } from "../../../redux/Products";
function ProductTable({ productData, setTotalCart, setProductsData }) {
  const scrollContainer = useRef();

  const dispatch = useDispatch();
  const updateVisibleItems = async () => {
    try {
      const containerHeight = scrollContainer.current.clientHeight;
      const rowContainer =
        scrollContainer.current.querySelector(".row-container");
      const rowHeight = rowContainer ? rowContainer.clientHeight : 0;
      const totalItems = 100;
      const visibleItems = Math.ceil(containerHeight / rowHeight);
      const scrollOffset = Math.ceil(scrollContainer.current.scrollTop);
      console.log(scrollOffset);
      const start = Math.ceil(scrollOffset / visibleItems);
      if (start >= 0 && start <= 94) {
        const data = await API.get(`/products?offset=${start}&limit=7`);
        dispatch(
          setProductsData(
            data.data.data.map((item) => ({ ...item, cartCount: 0 }))
          )
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
                key={product.id}
              />
            ))}
          </Box>
        </>
      )}
    </Flex>
  );
}

export default ProductTable;
