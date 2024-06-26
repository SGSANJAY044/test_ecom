// implementing Component Pattern 

import { Box, Flex } from '@sparrowengg/twigs-react'
import React, { createContext, useContext } from 'react'
import { FaStar } from 'react-icons/fa';

const ProductReviewContext = createContext();



function ProductReviewCard({ children, review }) {
    return (
        <ProductReviewContext.Provider value={review}>
            <Flex css={{
                width: '100%',
                backgroundColor: '$primary100',
                padding: 10,
                borderRadius: 10
            }} flexDirection='column' key={review.id} gap={10} >
                {children}
            </Flex>
        </ProductReviewContext.Provider>
    )
}

ProductReviewCard.Customer = function Customer() {
    const review = useContext(ProductReviewContext)
    return <Box>{review.customer}</Box>
}

ProductReviewCard.Review = function Review() {
    const review = useContext(ProductReviewContext)
    return <Box>{review.review}</Box>
}

ProductReviewCard.Rating = function Rating() {
    const review = useContext(ProductReviewContext)
    return <Flex css={{
        fontSize: '$2xl'
    }} gap={5}>
        {
            [...Array(5)].map((index, value) => (
                value <= Math.round(review.rating) - 1 ? <FaStar className='yellow-star' style={{ fontSize: '20px' }} key={index} /> : <FaStar className='star' style={{ fontSize: '20px' }} />
            ))
        }
    </Flex>
}

export default ProductReviewCard