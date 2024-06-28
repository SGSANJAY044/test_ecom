import React from 'react'
import {Home, Cart, Login, Signup} from 'pages'
import { Route, Routes } from 'react-router-dom'
import Product from 'pages/Product'
function AllRoutes() {
  const currentUser = JSON.parse(localStorage.getItem("user"))?.token
  console.log(currentUser);
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      {
        currentUser &&
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