import React from 'react';
import Hero from '../components/Hero'
import Cotizacion from './Cotizacion';
import Social from './Social'
import Footer from './Footer'
import '../assets/styles/components/Content.scss'

const Content = () => {
  return (
    <div className='content'>
      <Hero />
      <Cotizacion/>
      <Social />
      <Footer />
    </div>
  )
}

export default Content