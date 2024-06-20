import React from 'react'
import {Home} from './pages/pages'
import { Route,Routes } from 'react-router-dom'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
    </Routes>
  )
}

export default AllRoutes