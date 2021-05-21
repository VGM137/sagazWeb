import React from 'react';
import Hero from '../components/Hero'
import Formulario from './Formulario';
import Social from './Social'
import Footer from './Footer'
import '../assets/styles/components/Content.scss'

const Content = () => {

  return (
    <div id='content' className='content'>
      <Hero />
      <Formulario />
      <Social />
      <Footer />
    </div>
  )
}

export default Content