import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../assets/styles/components/NavBar.scss'
import logo from '../assets/static/zagaz-04.png'

const NavBar = (props) => {
  const heroIsVisible = props.view.hero
  const contatcIsVisible = props.view.contact
  return (
    <div className="bar-menu" id="bar-menu">
      <div className="logo">
          <figure className="logo-container">
            <Link to='/' className='link'>
              <img className="logo-img" src={logo} alt="logo" width="auto" />
            </Link>
          </figure>
        <h2 className="slogan">El deleite de su paladar</h2>
      </div>
      <nav className="bar-menu-icons">
        <ol>
          <li>
            {heroIsVisible
              ?
                <a id="menu-del-dia" className="guisado yellow" href='#hero-spacer'>Menú</a>
              :
                <a id="menu-del-dia" className="guisado" href='#hero-spacer'>Menú</a>
            }
          </li>
          <li>
            {contatcIsVisible
              ?
                <a id="contacto" className="contacto yellow" href='#form-spacer'>Contacto</a>
              :
                <a id="contacto" className="contacto" href='#form-spacer'>Contacto</a>
            }
          </li>
        </ol>
      </nav>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    view: state.view,
  }
}

export default connect(mapStateToProps, null)(NavBar);