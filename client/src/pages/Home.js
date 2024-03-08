import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Box } from '@chakra-ui/react'
import NewCollection from '../components/NewCollection'
import Category from '../components/Category'
import Trending from '../components/Trending'
import ChooseUs from '../components/ChooseUs'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <Box bg="red.50">

        <Navbar />
        <Hero />
        <NewCollection />
        <Category />
        <Trending />
        <ChooseUs />
        <Footer />
        
    </Box>
  )
}

export default Home