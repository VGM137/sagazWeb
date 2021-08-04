import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement } from '../actions'
import Hero from './Hero'
import Formulario from './Formulario';
import Social from './Social'
import Footer from './Footer'
import '../assets/styles/components/HomeContent.scss'

const Content = (props) => {

  const { ref, inView, entry} = useInView({
    threshold: .5,
  });

  const handleVisibility = (el) => {
    props.visibleElement({
      [el]: inView
    })
  }

  return (
    <div id='content' className='content'>
      <div ref={ref}>
        {handleVisibility('hero')}
        <Hero />
      </div>
      <Formulario />
      <Social />
      <Footer />
    </div>
  )
}

const dispatchStateToProps = {
  visibleElement,
}

export default connect (null, dispatchStateToProps)(Content)
