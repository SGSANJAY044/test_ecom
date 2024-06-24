import React from 'react'
import {Home, Cart, Login, Signup} from 'pages'
import { Route,Routes } from 'react-router-dom'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes