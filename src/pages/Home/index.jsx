import React, { useEffect, useState } from 'react'
import './index.scss'
import logo from 'assets/surveysparrow_logo.jpeg'
import API from 'api/index';

import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping, FaStar } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";

import { SearchIcon } from '@sparrowengg/twigs-react-icons';
import { Box, Flex, Avatar, Grid, Button, Text, Input } from "@sparrowengg/twigs-react";

import { useDispatch } from 'react-redux';

import ProductCart from 'pages/Home/components/ProductCart';
import { useSelector } from 'react-redux';
import FilterDrawer from 'pages/Home/components/FilterDrawer';
import { setProductsData } from '../../redux/Products';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import HomeFeed from './components/HomeFeed';

const UseLoader = Loader(HomeFeed)

function Home() {
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart.currentCart);
  const products = useSelector((state) => state.products.currentProducts);
  const [totalCart, setTotalCart] = useState(0)
  const [searchWord, setSearchWord] = useState("")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([])
  console.log(currentCart);
  const getData = async () => {
    try {
      const data = await API.get('/products')
      dispatch(setProductsData(data.data.map((item) => ({ ...item, cartCount: 0 }))))
    }
    catch (e) {
      console.log(e)
      toast({
        variant: "error",
        title: "Error in signup",
        description: e.message,
      })
    }
  }

  // console.log(products);
  useEffect(() => {
    getData()
    let total = 0
    currentCart.map((product) => {
      total += product.cartCount;
    })
    setTotalCart(total)
  }, [])

  return (
    <>
      {/* Drawer */}
      <FilterDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      {/* Nav */}
      <Flex css={{
        height: 80,
        margin: 10,
        padding: 20,
        borderRadius: 20,
        background: '$primary300'
      }} alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center' gap={20}>
          <Avatar src={logo} name='sparrow' size='2xl' />
          <Box css={{
            fontSize: '$2xl',
            color: '$white900',
            fontFamily: 'sans-serif',
            letterSpacing: 1,
            fontWeight: '$9'
          }} >SPARROWMART</Box>
        </Flex>
        <Flex css={{
          gap: 30,
          padding: 30
        }}>
          <Input css={{
            width: 300,
            fontFamily: 'sans-serif'
          }} placeholder="Search" leftIcon={<SearchIcon size={200} />} size='lg' onChange={(e) => setSearchWord(e.target.value)} />
          <Box css={{ position: 'relative' }}>
            <Link to='/Cart'><FaShoppingCart className='cart-icon' /></Link>
            <Flex css={{
              position: 'absolute',
              top: -4,
              right: -8,
              color: '$white900',
              background: 'red',
              fontSize: '$sm',
              height: 15,
              width: 15,
              borderRadius: 200
            }} justifyContent='center' alignItems='center'>{totalCart}</Flex>
          </Box>
          <FaFilter className='filter-icon' onClick={() => setIsDrawerOpen(true)} />
        </Flex>
      </Flex>
      {/* Shopping List */}
      <UseLoader products={products} searchWord={searchWord} selectedCategories={selectedCategories} setProductsData={setProductsData} setTotalCart={setTotalCart} loading={products.length <= 0} />
    </>
  )
}

export default Home