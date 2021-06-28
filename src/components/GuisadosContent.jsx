import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement } from '../actions'
import Formulario from './Formulario';
import Social from './Social';
import Footer from './Footer';
import Categories from './Categories.jsx';
import Carousel from './Carousel.jsx';
import CarouselItem from './CarouselItem.jsx';
import '../assets/styles/components/GuisadosContent.scss'

const GuisadosContent = (props) => {

  const { ref, inView, entry} = useInView({
    threshold: .5,
  });

  const handleVisibility = (el) => {
    props.visibleElement({
      [el]: inView
    })
  };

  return(
    <div id='guisados-content' className='guisados-content'>
      <div id='guisados-spacer' className='guisados-spacer'>
      </div>
      <div ref={ref} id='guisadosDisplay' className='guisadosDisplay'>
        {handleVisibility('guisados')}
        <Categories title='Carne de res'>
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Categories>
      </div>
      <Formulario />
      <Social />
      <Footer />
    </div>
  )
};

const dispatchStateToProps = {
  visibleElement,
};

export default connect(null, dispatchStateToProps)(GuisadosContent);
