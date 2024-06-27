import { Grid } from '@sparrowengg/twigs-react'
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import API from 'api'

function HomeFeed({ products, setTotalCart, setProductsData, searchWord, selectedCategories, selectedRating }) {
    const [productData, setProductData] = useState(products)
    const getFilterData = async () => {
        try {
            let query = ""
            if (selectedCategories.length > 0) query += "categories=" + selectedCategories.join('/');
            if (selectedRating !== 0) {
                if (selectedCategories.length > 0) query += "&";
                query += "rating=" + selectedRating;
            }
            const data = await API.get(`/products/filter?${query}`)
            console.log(data.data)
            setProductData(data.data)
        } catch (err) {

        }
    }

    useEffect(() => {
        getFilterData()
    }, [selectedCategories, selectedRating])
    return (
        <Grid css={{ padding: 10 }} width={300} gap={[20, 20]}>
            {
                productData && productData.map((product) => (
                    <ProductCart product={product} cartStatus={false} setTotalCart={setTotalCart} setProducts={setProductsData} key={product.id} />
                ))
            }
        </Grid>
    )
}

export default HomeFeed