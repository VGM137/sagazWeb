import React from 'react';
import '../assets/styles/components/Footer.scss'
import logoBlanco from '../assets/static/zagaz-logo-blanco-05.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoBlanco} height="50px" alt="logo" />
        <h3>El deleite de su paladar</h3>
      </div>
      <div className="footer-creator">
        <p>Created by <a href="https://twitter.com/VicGMD">@VicGMD</a></p>
      </div>
    </footer>
  )
};

export default Footer;