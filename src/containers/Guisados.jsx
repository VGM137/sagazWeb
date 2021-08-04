import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import GuisadosContent from '../components/GuisadosContent';
import '../assets/styles/App.scss';

const Guisados = () => {

  const listening = (e) => {
    console.log(e)
    const barMenu = e.target.classList.contains('bar-menu-icons');
    const barMenuList = e.target.classList.contains('bar-menu-icons-list');
    const hamMenu = e.target.classList.contains('bar-menu_ham_icon');
    const path = e.target.localName == 'path';
    
    const nav = document.getElementsByClassName('bar-menu-icons')
    const navClassList = nav[0].classList

    if(!barMenu & !barMenuList & !hamMenu & !path){
      console.log('Está afuera')
      navClassList.remove('show')
    }
  }

  return (
    <div className='App' onClick={listening}>
      <NavBar />
      <GuisadosContent />
    </div>
  )
};

export default connect(null, null)(Guisados);
