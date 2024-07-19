// implementing Component Pattern 

import PropTypes from "prop-types";
import { Box, Flex } from '@sparrowengg/twigs-react'
import React, { createContext, useContext } from 'react'
import { FaStar } from 'react-icons/fa';

const ProductReviewContext = createContext();

// custom Hook 
const useProductReviewContext = () => {
    const data = useContext(ProductReviewContext);
    if (!data) console.log("No review Data");
    return data
}

/**
 *  * The `ProductReviewCard` component in JavaScript React renders a card displaying a product review
 * with customer details, review text, and star rating made with compound component pattern.
 * @date 2024-07-15
 * @param {any} {children
 * @param {any} review}
 * @returns {any}
 */
function ProductReviewCard({ children, review }) {
  return (
    <ProductReviewContext.Provider value={review}>
      <Flex
        css={{
          width: "100%",
          backgroundColor: "$primary100",
          padding: 10,
          borderRadius: 10,
        }}
        flexDirection="column"
        key={review.id}
        gap={10}
      >
        {children}
      </Flex>
    </ProductReviewContext.Provider>
  );
} 

ProductReviewCard.propTypes = {
  children: PropTypes.any,
  review: PropTypes.shape({
    id: PropTypes.any,
  }),
};

ProductReviewCard.Customer = function Customer() {
    const review = useProductReviewContext()
    return <Box>{review.customer}</Box>
}

ProductReviewCard.Review = function Review() {
    const review = useProductReviewContext()
    return <Box>{review.review}</Box>
}

ProductReviewCard.Rating = function Rating() {
    const review = useProductReviewContext()
    return (
      <Flex
        css={{
          fontSize: "$2xl",
        }}
        gap={5}
      >
        {[...Array(5)].map((index, value) =>
          value <= Math.round(review.rating) - 1 ? (
            <FaStar
              className="yellow-star"
              style={{ fontSize: "20px" }}
              key={index}
            />
          ) : (
            <FaStar className="star" style={{ fontSize: "20px" }} key={value} />
          )
        )}
      </Flex>
    );
}

export default ProductReviewCard