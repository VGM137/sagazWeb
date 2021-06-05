import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import GuisadosContent from '../components/GuisadosContent';
import '../assets/styles/App.scss';

const Guisados = () => {

  return (
    <div className='App'>
      <NavBar />
      <GuisadosContent />
    </div>
  )
};

export default connect(null, null)(Guisados);
