import React from "react";
import ProductCard from "../pages/Product/components/ProductCard";

export default {
    title: "Product Card",
    component: ProductCard
}
const productData = {
    id: 4,
    title: 'Mens Casual Slim Fit',
    category: 'men\'s clothing',
    description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: '2.0',
    price: '15.99'
}

const productReviews = [
    {
        id: 7,
        productid: 4,
        review: 'The color is not as shown in the picture.',
        rating: '2.0',
        customer: 'Eve Franklin'
    }
]

export const Default = () => <ProductCard productData={productData} productReviews={productReviews} />