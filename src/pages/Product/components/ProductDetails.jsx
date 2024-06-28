import React from 'react'
import { Box, Button, Flex } from '@sparrowengg/twigs-react';
import { FaBagShopping, FaStar } from 'react-icons/fa6';
import { useTranslation } from "react-i18next";

function ProductDetails({ productData }) {
  const { t } = useTranslation();
  return (
    <Flex
      css={{ height: "100%", paddingTop: 20 }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" gap={20}>
        <Box
          css={{
            fontFamily: "sans-serif",
            fontSize: "$3xl",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          {t(productData.title)}
        </Box>
        <Flex
          css={{
            fontSize: "$2xl",
          }}
          gap={5}
        >
          {[...Array(5)].map((index, value) =>
            value <= Math.round(productData.rating) - 1 ? (
              <FaStar className="yellow-star" style={{ fontSize: "25px" }} />
            ) : (
              <FaStar className="star" style={{ fontSize: "25px" }} />
            )
          )}
        </Flex>
        <Box css={{ fontFamily: "sans-serif", fontSize: "$2xl" }}>
          ₹ <del>{parseFloat(productData.price) + 500.0}</del>{" "}
          {productData.price}
        </Box>
        <Box css={{ fontFamily: "sans-serif", fontSize: "$md" }}>
          {t(productData.description)}
        </Box>
      </Flex>
      <Flex>
        <Button
          css={{
            padding: 20,
            fontFamily: "monospace",
            fontSize: "$md",
            width: "40%",
          }}
          leftIcon={<FaBagShopping />}
        >
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
}

export default ProductDetails