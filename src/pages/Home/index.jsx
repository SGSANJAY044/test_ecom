import React, { useEffect, useState } from 'react'
import './index.scss'
import logo from 'assets/surveysparrow_logo.jpeg'
import API from 'api/index';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaBagShopping,FaStar } from "react-icons/fa6";
import { Box,Flex,Avatar,Grid,Button } from "@sparrowengg/twigs-react";
function Home() {
  const [products,setProducts]=useState(null)

  const getData=async()=>{
    try{
      const data=await API.get('/products')
      setProducts(data.data)
      console.log(products)
    }
    catch(e){
      alert(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      {/* Nav */}
      <Flex css={{
        height:80,
        margin:10,
        padding:20,
        borderRadius:20,
        background: '$primary300'
      }} alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center' gap={20}>
          <Avatar src={logo} name='sparrow' size='2xl'/>
          <Box css={{
            fontSize:'$2xl',
            color:'$white900',
            fontFamily:'sans-serif',
            letterSpacing:1,
            fontWeight:'$9'
          }} >SPARROWMART</Box>
        </Flex>
        <Flex css={{
          gap:30,
          padding:30
        }}>
          <FaShoppingCart className='icon'/>
          <IoIosSettings className='icon'/>
        </Flex>
      </Flex>
      {/* Shopping List */}
      <Grid css={{padding:10}} width={300} gap={[20,20]}>
        {
          products && products.map((product)=>(
            <Flex css={{
            boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            padding:20,
            borderRadius:15,
            position:'relative',
            textAlign:'center'
            }}
            alignItems='center'
            flexDirection='column'
            gap={30}
            >
              <Flex css={{
                position:'absolute',
                right:10,
                top:10,
              }}>
                {
                  [...Array(5)].map((index,value)=>(
                    value<=Math.round(product.rating.rate)-1?<FaStar className='yellow-star'/>:<FaStar className='star'/>
                  ))
                }
              </Flex>
              <img src={product.image} alt={product.title} className='card-img'/>   
              <Box>{product.title}</Box>
              <Flex css={{
                gap:10
              }}>
                <Button css={{
                  padding:20,
                  fontFamily:'monospace',
                  fontSize:'$md'
                }} leftIcon={<FaBagShopping/>}>Buy Now</Button>
                 <Button css={{
                  padding:20,
                  fontFamily:'monospace',
                  fontSize:'$md',
                  color:'$primary400'
                }} color={'light'} leftIcon={<FaShoppingCart/>}>Add to Cart</Button>
              </Flex>
            </Flex>
          ))
        }
      </Grid>
    </>
  )
}

export default Home