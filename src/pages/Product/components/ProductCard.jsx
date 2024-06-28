import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent, Flex } from "@sparrowengg/twigs-react";
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';
function ProductCard({ productData, productReviews }) {
    return (
      <Flex
        css={{
          height: "80vh",
          padding: 20,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          css={{ height: "100%", width: "50%" }}
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={productData.image}
            alt=""
            style={{ height: "100%", maxWidth: "90%" }}
          />
        </Flex>
        <Flex
          css={{
            height: "100%",
            width: "50%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            borderRadius: 20,
            padding: 20,
            paddingBottom: 40,
          }}
        >
          <Tabs defaultValue="tab1" css={{ width: "100%" }}>
            <TabsList aria-label="tabs example">
              <TabsTrigger value="tab1"> About </TabsTrigger>
              <TabsTrigger value="tab2"> Reviews </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <ProductDetails productData={productData} />
            </TabsContent>
            <TabsContent value="tab2" css={{ overflow: "scroll" }}>
              <ProductReviews productReviews={productReviews} />
            </TabsContent>
          </Tabs>
        </Flex>
      </Flex>
    );
}

export default ProductCard