import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement } from '../actions'
import Formulario from './Formulario';
import Social from './Social'
import Footer from './Footer'

const GuisadosContent = (props) => {

  const { ref, inView, entry} = useInView({
    threshold: 1,
  });

  const handleVisibility = (el) => {
    props.visibleElement({
      [el]: inView
    })
  };

  return(
    <div id='content' className='content'>
      <div id='guisados-spacer' className='guisados-spacer'>
      </div>
      <div ref={ref} id='guisadosDisplay' className='guisadosDisplay'>
        {handleVisibility('guisados')}
        <h1>
          Hello guisados
        </h1>
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
