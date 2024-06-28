import { Grid, toast } from "@sparrowengg/twigs-react";
import React, { useEffect, useMemo, useState } from "react";
import ProductCart from "./ProductCart";
import API from "api";

function HomeFeed({
  products,
  setTotalCart,
  setProductsData,
  searchWord,
  selectedCategories,
  selectedRating,
  currentPage,
}) {
  const [productData, setProductData] = useState(products);
  const getFilterData = useMemo(
    () => async () => {
      try {
        let query = "";
        if (selectedCategories.length > 0)
          query += "categories=" + selectedCategories.join("/");
        if (selectedRating !== 0) {
          if (selectedCategories.length > 0) query += "&";
          query += "rating=" + selectedRating;
        }
        const data = await API.get(
          `/products/filter?${query}&pageno=${currentPage}`
        );
        setProductData(data.data.data);
      } catch (err) {
        console.log(err);
        toast({
          variant: "error",
          title: "Error in fetch Data",
          description: err.message,
        });
      }
    },
    [selectedCategories, selectedRating, currentPage]
  );

  const getSearchData = useMemo(
    () => async () => {
      try {
        const data = await API.get(
          `/products/search?searchWord=${searchWord}&pageno=${currentPage}`
        );
        console.log(data.data);
        setProductData(data.data.data);
      } catch (err) {
        toast({
          variant: "error",
          title: "Error in fetch Data",
          description: err.message,
        });
      }
    },
    [currentPage, searchWord]
  );

  useEffect(() => {
    getSearchData();
  }, [currentPage, searchWord]);
  useEffect(() => {
    getFilterData();
  }, [currentPage, selectedCategories, selectedRating]);

  return (
    <>
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
    </>
  );
}

export default HomeFeed;
