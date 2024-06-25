import React from 'react'
import { useLocation } from 'react-router-dom'

function Product() {
    const location = useLocation()
    console.log(location.pathname.split('/')[2]);
    return (
        <>Single Product Page</>
    )
}

export default Product