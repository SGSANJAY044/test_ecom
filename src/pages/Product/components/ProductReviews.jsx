import PropTypes from "prop-types";
import { Flex } from "@sparrowengg/twigs-react";
import React from "react";
import ProductReviewCard from "./ProductReviewCard";

/**
 * This code defines a React functional component named `ProductReviews` that takes a prop
 * `productReviews`. 
 * @date 2024-07-15
 * @param {any} {productReviews}
 * @returns {any}
 */
function ProductReviews({ productReviews }) {
  console.log(productReviews);
  return (
    <Flex css={{ width: "100%" }} flexDirection="column" gap={20}>
      {productReviews.map((review) => (
        <ProductReviewCard review={review} key={review.id}>
          <ProductReviewCard.Customer />
          <ProductReviewCard.Rating />
          <ProductReviewCard.Review />
        </ProductReviewCard>
      ))}
    </Flex>
  );
}

ProductReviews.propTypes = {
  productReviews: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default ProductReviews;
