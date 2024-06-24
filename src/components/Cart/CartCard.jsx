import React from 'react'
import { Box, Button, Flex, Text } from '@sparrowengg/twigs-react'
import { FaBagShopping } from 'react-icons/fa6'

function CartCard({ product }) {

    return (
        <Flex css={{
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            padding: 20,
            borderRadius: 15,
            position: 'relative',
            textAlign: 'center'
        }}
            alignItems='center'
            gap={30}
        >
            <Flex css={{
                position: 'absolute',
                top: -8,
                right: -8,
                color: '$white900',
                backgroundColor: '$primary400',
                fontSize: '$sm',
                height: 35,
                width: 35,
                borderRadius: 200

            }} justifyContent='center' alignItems='center'><Box css={{ fontFamily: 'sans-serif', fontWeight: '$5', fontSize: '$xl' }}>{product.cartCount}</Box></Flex>
            <img src={product.image} alt={product.title} className='card-img' />
            <Flex css={{
                textAlign: 'left',
                height: '30vh',
                paddingTop: 20
            }} flexDirection='column' justifyContent='space-between' >
                <Flex flexDirection='column' gap={20}>
                    <Box css={{
                        fontFamily: 'sans-serif',
                        textTransform: 'uppercase',
                        fontSize: '$xl',
                        fontWeight: '$5'
                    }}>{product.title}</Box>
                    <Box css={{
                        fontFamily: 'sans-serif',
                        textTransform: 'capitalize',
                    }}>{product.description}</Box>
                </Flex>
                <Button css={{
                    padding: 20,
                    fontFamily: 'monospace',
                    fontSize: '$md'
                }} leftIcon={<FaBagShopping />}>
                    Buy Now
                </Button>
            </Flex>
        </Flex >
    )
}

export default CartCard