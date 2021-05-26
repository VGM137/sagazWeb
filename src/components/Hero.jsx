import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement } from '../actions'
import '../assets/styles/components/Hero.scss';
import siHay from '../assets/static/sihaysihay.jpg'
import menu from '../assets/static/menu-del-dia.jpg'

const Hero = (props) => {
  
  const { ref, inView, entry} = useInView({
    threshold: .1,
  });

  const handleVisibility = () => {
    props.visibleElement({
      hero: inView
    })
  }

  return (
    <>
      <div ref={ref} id='hero-spacer' className='hero-spacer' >
        {handleVisibility()}
      </div>
      <div className="hero" id="hero">
        <figure className="hero-imgContainer" action="index.html" method="post">
          <img className="hero-img" src={siHay} alt="" width='auto' />
        </figure>
        <figure className="hero-menu" action="index.html" method="post">
          <img width='auto' className="hero-menuImg" src={menu} alt="" />
        </figure>
        <div className='hero-info'>
          <h1 className='hero-text hero-title'>Servicio a domicilio en:</h1>
          <h2 className='hero-text subtextos'>Vertiz Narvarte, Narvarte Oriente y Narvarte Poniente</h2>
          <h2 className='hero-text subtextos'>Lunes a sábado, de 10:30 a.m. hasta agotar existencias.</h2>
            <h2 className='hero-text subtextos'>
              <a className='subtextos hero-link' href="https://wa.me/c/5215528947194">
              ¡Comunícate con nosotros aquí!
              </a>
            </h2>
        </div>
      </div>
    </>
  )
};

const dispatchStateToProps = {
  visibleElement,
}

export default connect(null, dispatchStateToProps)(Hero);