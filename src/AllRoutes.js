import React from 'react'
import {Home, Cart, Login, Signup} from 'pages'
import { Route, Routes } from 'react-router-dom'
import Product from 'pages/Product'
import { useSelector } from 'react-redux'
function AllRoutes() {
  const currentUser = sessionStorage.getItem("user")
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      {
        (currentUser || user?.token) &&
        <>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} /> 
        </>
      }

    </Routes>
  )
} 

export default AllRoutes