import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Ceramics from './components/Ceramics'
import Products from './components/Products'
import Club from './components/Club'
import Studio from './components/Studio'

import Footer from './components/Footer'



function page() {
  return (
    <div>
     <Hero />
     <Brand/>
     <Ceramics/>
     <Products />
     <Club/>
     <Studio />
  
    </div>
  )
}

export default page
