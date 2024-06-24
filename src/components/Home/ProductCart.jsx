import React, { useState } from 'react'
import { Flex, Button, Text } from "@sparrowengg/twigs-react";
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../../redux/Cart';


import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaStar } from "react-icons/fa6";

function ProductCart({ product, setTotalCart, cartStatus, setProducts }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.currentProducts);
    const [cartCount, setCartCount] = useState(0)
    const [currentCartStatus, setCurrentCartStatus] = useState(cartStatus)
    const addCart = (product) => {
        dispatch(setProducts(products.map((currentproduct) => {
            if (currentproduct.id == product.id) {
                return { ...product, cartCount: currentproduct.cartCount + cartCount }
            }
            return currentproduct
        })))
        dispatch(setCartData({ ...product, cartCount: cartCount }))
        setTotalCart(prev => prev + cartCount);
        setCurrentCartStatus(false)
        setCartCount(0)
    }
    return (
        <Flex css={{
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            padding: 20,
            borderRadius: 15,
            position: 'relative',
            textAlign: 'center'
        }}
            alignItems='center'
            flexDirection='column'
            gap={30}
        >
            <Flex css={{
                position: 'absolute',
                right: 10,
                top: 10,
            }}>
                {
                    [...Array(5)].map((index, value) => (
                        value <= Math.round(product.rating) - 1 ? <FaStar className='yellow-star' /> : <FaStar className='star' />
                    ))
                }
            </Flex>
            <img src={product.image} alt={product.title} className='card-img' />
            <Text css={{
                height: 20,
                width: 300,
                fontFamily: 'sans-serif',
                fontSize: '$lg'
            }} truncate>{product.title}</Text>
            <Flex css={{
                gap: 10
            }}>

                {
                    currentCartStatus ? <>
                        <Button css={{
                            padding: 20,
                            fontFamily: 'sans-serif',
                            fontSize: '$lg',
                            width: 120,
                            textAlign: 'center'
                        }} onClick={() => addCart(product)}>OK</Button>

                        <Button css={{
                            padding: 20,
                            fontFamily: 'monospace',
                            fontSize: '$xl',
                            width: 40,
                            textAlign: 'center'
                        }} onClick={() => setCartCount((prev) => prev + 1)}>
                            +
                        </Button>
                        <Flex css={{
                            fontSize: '$xl',
                            fontFamily: 'sans-serif',
                            textAlign: 'center',
                            paddingRight: 5,
                            paddingLeft: 5,
                        }} alignItems='center'>{cartCount}</Flex>
                        <Button css={{
                            padding: 20,
                            fontFamily: 'monospace',
                            fontSize: '$xl',
                            width: 40,
                            textAlign: 'center'
                        }} disabled={cartCount < 1} onClick={() => setCartCount((prev) => prev - 1)}>
                            -
                        </Button>
                    </> :
                        <>
                            <Button css={{
                                padding: 20,
                                fontFamily: 'monospace',
                                fontSize: '$md'
                            }} leftIcon={<FaBagShopping />}>
                                Buy Now
                            </Button>
                            <Button css={{
                                padding: 20,
                                fontFamily: 'monospace',
                                fontSize: '$md',
                                color: '$primary400'
                            }} color={'light'} leftIcon={<FaShoppingCart />} onClick={() => setCurrentCartStatus(true)}>
                                Add to Cart
                            </Button>
                        </>
                }
            </Flex>
        </Flex>
    )
}

export default ProductCart