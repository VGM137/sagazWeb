import React from 'react';
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { visibleElement } from '../actions'
import '../assets/styles/components/Hero.scss';
import siHay from '../assets/static/sihaysihay.jpg'
import menu from '../assets/static/menu-del-dia.jpg'

const Hero = (props) => {
  
  const { ref, inView} = useInView({
    threshold: 0,
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
      </div>
    </>
  )
};

const dispatchStateToProps = {
  visibleElement,
}

export default connect(null, dispatchStateToProps)(Hero);