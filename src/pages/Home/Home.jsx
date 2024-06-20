import React from 'react'
import './Home.scss'
import logo from '../../assets/surveysparrow_logo.jpeg'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Box,Flex,Avatar,Grid } from "@sparrowengg/twigs-react";
function Home() {
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
            color:'$white800',
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
      <Grid>
        
      </Grid>
    </>
  )
}

export default Home