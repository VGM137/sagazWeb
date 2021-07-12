import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { visibleElement } from '../actions';
import '../assets/styles/components/NavBar.scss';
import logo from '../assets/static/zagaz-04.png';
import Menu from '../assets/static/menu.svg';


const NavBar = (props) => {
  const heroIsVisible = props.view.hero;
  const contatcIsVisible = props.view.contact;
  const guisadosIsVisible = props.view.guisados;

  const handleClick = (e) => {
    if(window.innerWidth >= 1025){
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.lastChild.scrollTop = 0
    }else{
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.scrollTop = 0
    }
  };

  const openClose = (e) => {

    console.log(e)

    const wrapperClassList = e.target.parentElement.childNodes[2].classList
    if(wrapperClassList.length === 2){
      console.log(wrapperClassList.length)
      wrapperClassList.remove('show')
    }else{
      wrapperClassList.add('show')
    }

  }

  return (
    <div className="bar-menu" id="bar-menu">

      <Menu className='bar-menu_ham_icon' alt="" onClick={openClose} />

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
                <a id="menu-del-dia" className="guisado yellow" href='/#hero-spacer'>Menú</a>
              :
                <a id="menu-del-dia" className="guisado" href='/#hero-spacer'>Menú</a>
            }
          </li>
          <li>
            {guisadosIsVisible
              ?
                <Link
                  to='/guisados'
                  id="guisadosLink"
                  className="guisadosLink yellow"
                  onClick={() => handleClick(window.event, 'guisados')}>
                    Guisados
                </Link>
              :
                <Link
                  to='/guisados'
                  id="guisadosLink"
                  className="guisadosLink"
                  onClick={() => handleClick(window.event)}>
                    Guisados
                </Link>
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
};

const mapStateToProps = state => {
  return {
    view: state.view,
    guisados: state.guisados,
  }
};

const dispatchStateToProps = {
  visibleElement
};

export default connect(mapStateToProps, dispatchStateToProps)(NavBar);
