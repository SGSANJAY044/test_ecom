import { Flex } from '@sparrowengg/twigs-react'
import React from 'react'
import ProductReviewCard from './ProductReviewCard';

function ProductReviews({ productReviews }) {
    console.log(productReviews);
    return (
        <Flex css={{ width: '100%' }} flexDirection='column' gap={20}>
            {
                productReviews.map((review) => (
                    <ProductReviewCard review={review} key={review.id}>
                        <ProductReviewCard.Customer />
                        <ProductReviewCard.Rating />
                        <ProductReviewCard.Review />
                    </ProductReviewCard>
                ))
            }
        </Flex>
    )
}

export default ProductReviews; 