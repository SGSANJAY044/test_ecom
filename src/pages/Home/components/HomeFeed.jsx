import { Flex, Grid } from '@sparrowengg/twigs-react'
import React from 'react'
import ProductCart from './ProductCart'

function HomeFeed({ products, setTotalCart, setProductsData, searchWord, selectedCategories }) {
    return (
        <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
            {
                products ? products.filter(product => (searchWord != "" ? product.title.indexOf(searchWord) > -1 : true) && (selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true)).map((product) => (
                    <ProductCart product={product} cartStatus={false} setTotalCart={setTotalCart} setProducts={setProductsData} key={product.id} />
                )) : <Flex>Data is Retriving</Flex>
            }
        </Grid>
    )
}

export default HomeFeed