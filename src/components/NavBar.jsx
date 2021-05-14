import React from 'react';
import '../assets/styles/components/NavBar.scss'
import logo from '../assets/static/zagaz-04.png'

const NavBar = () => {
  return (
    <div className="bar-menu" id="bar-menu">
      <div className="logo">
        <figure className="logo-container">
          <img className="logo-img" src={logo} alt="logo" width="auto" />
        </figure>
        <h2 className="slogan">El deleite de su paladar</h2>
      </div>
      <nav className="bar-menu-icons">
        <ol>
          <li>
            <a id="menu-del-dia" className="guisado yellow" href="#hero" >Guisados</a>
          </li>
          <li>
            <a id="pregunta" className="pedir" href="#comanda" >Cotización</a>
          </li>
          <li>
            <a id="contacto" className="contacto" href="#contactMe" >Contacto</a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default NavBar;