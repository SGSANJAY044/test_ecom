import { Box, Flex } from '@sparrowengg/twigs-react'
import React from 'react'
import { FaStar } from 'react-icons/fa6';

function ProductReviews({ productReviews }) {
    console.log(productReviews);
    return (
        <Flex css={{ width: '100%' }} flexDirection='column' gap={20}>
            {
                productReviews.map((review) => (
                    <Flex css={{
                        width: '100%',
                        backgroundColor: '$primary100',
                        padding: 10,
                        borderRadius: 10
                    }} flexDirection='column' key={review.id} gap={10} >
                        <Box>{review.customer}</Box>
                        <Flex css={{
                            fontSize: '$2xl'
                        }} gap={5}>
                            {
                                [...Array(5)].map((index, value) => (
                                    value <= Math.round(review.rating) - 1 ? <FaStar className='yellow-star' style={{ fontSize: '20px' }} key={index} /> : <FaStar className='star' style={{ fontSize: '20px' }} />
                                ))
                            }
                        </Flex>
                        <Box>{review.review}</Box>
                    </Flex>
                ))
            }
        </Flex>
    )
}

export default ProductReviews