import API from 'api';
import Loader from "components/Loader";
import React, { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = lazy(() => import("./components/Nav"));
const ProductCard = lazy(() => import("./components/ProductCard"));


const UseLoader = Loader(ProductCard)

/**
 *  The `Product` component fetches product data and reviews using API calls and displays them with a
 *  loader until the data is loaded.
 * @date 2024-07-15
 * @returns {any}
 */
function Product() {
  const location = useLocation();
  const [productData, setProductData] = useState(null);
  const [productReviews, setProductReviews] = useState(null);
  const productId = location.pathname.split("/")[2];

  const getProductData = async () => {
    try {
      const data = await API.get(`/product/${productId}`);
      setProductData(data.data);
    } catch (err) {
      console.log("Cannot Fetch Product Data", err);
    }
  };

  const getProductReviews = async () => {
    try {
      const data = await API.get(`/reviews/${productId}`);
      setProductReviews(data.data);
    } catch (err) {
      console.log("Cannot Fetch Product Data", err);
    }
  };

  console.log(productData);
  console.log(productReviews);
  useEffect(() => {
    getProductData();
    getProductReviews();
  }, []);

  return (
    <>
      <Nav />
      <UseLoader
        productData={productData}
        productReviews={productReviews}
        loading={productData == null}
      />
    </>
  );
} 

export default Product