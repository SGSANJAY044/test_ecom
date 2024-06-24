import React from 'react'
import {Home,Cart} from 'pages'
import { Route,Routes } from 'react-router-dom'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
  )
}

export default AllRoutes