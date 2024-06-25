import API from 'api';
import Nav from 'components/Product/Nav';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger, TabsContent, Box, Button, Flex } from "@sparrowengg/twigs-react";
import { FaBagShopping, FaStar } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import ProductDetails from 'components/Product/ProductDetails';
import ProductReviews from 'components/Product/ProductReviews';

function Product() {
    const location = useLocation();
    const [productData, setProductData] = useState(null);
    const [productReviews, setProductReviews] = useState(null);
    const productId = location.pathname.split('/')[2];

    const getProductData = async () => {
        try {
            const data = await API.get(`/product/${productId}`)
            setProductData(data.data)
        }
        catch (err) {
            console.log("Cannot Fetch Product Data", err)
        }
    }

    const getProductReviews = async () => {
        try {
            const data = await API.get(`/reviews/${productId}`)
            setProductReviews(data.data)
        }
        catch (err) {
            console.log("Cannot Fetch Product Data", err)
        }
    }

    console.log(productData);
    console.log(productReviews);
    useEffect(() => {
        getProductData()
        getProductReviews()
    }, [])


    return (
        <>
            <Nav />
            {
                productData ?
                    <Flex css={{
                        height: '80vh',
                        padding: 20
                    }} alignItems='center' justifyContent='center'>
                        <Flex css={{ height: '100%', width: '100%' }} alignItems='center' justifyContent='center'>
                            <img src={productData.image} alt="" style={{ height: '100%' }} />
                        </Flex>
                        <Flex
                            css={{
                                height: '100%',
                                width: '100%',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                                borderRadius: 20,
                                padding: 20,
                                paddingBottom: 40
                            }}>
                            <Tabs defaultValue="tab1" css={{ width: '100%' }}>
                                <TabsList aria-label="tabs example">
                                    <TabsTrigger value="tab1"> About </TabsTrigger>
                                    <TabsTrigger value="tab2"> Reviews </TabsTrigger>
                                </TabsList>
                                <TabsContent value="tab1">
                                    <ProductDetails productData={productData} />
                                </TabsContent>
                                <TabsContent value="tab2" css={{ overflow: 'scroll' }}>
                                    <ProductReviews productReviews={productReviews} />
                                </TabsContent>
                            </Tabs>
                        </Flex>
                    </Flex>
                    :
                    <>Data is Fetching</>
            }
        </>
    )
}

export default Product