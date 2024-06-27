import { Flex, Grid } from '@sparrowengg/twigs-react'
import React from 'react'
import ProductCart from './ProductCart'

function HomeFeed({ products, setTotalCart, setProductsData, searchWord, selectedCategories, selectedRating }) {
    const searchQuery = (product) => (searchWord != "" ? product.title.indexOf(searchWord) > -1 : true)
    const categoriesFilter = (product) => (selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true)
    const ratingFilter = (product) => (selectedRating != 0 ? Math.round(product.rating) <= selectedRating : true)
    return (
        <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
            {
                products && products.filter(product => searchQuery(product) && categoriesFilter(product) && ratingFilter(product)).map((product) => (
                    <ProductCart product={product} cartStatus={false} setTotalCart={setTotalCart} setProducts={setProductsData} key={product.id} />
                ))
            }
        </Grid>
    )
}

export default HomeFeed