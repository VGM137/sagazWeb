import React from 'react';
import '../assets/styles/components/Hero.scss';
import siHay from '../assets/static/sihaysihay.jpg'
import menu from '../assets/static/menu-del-dia.jpg'

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <figure className="hero-imgContainer" action="index.html" method="post">
        <img className="hero-img" src={siHay} alt="" width='auto' />
      </figure>
      <figure className="hero-menu" action="index.html" method="post">
        <img width='auto' className="hero-menuImg" src={menu} alt="" />
      </figure>
    </div>
  )
};

export default Hero;