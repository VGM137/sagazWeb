import React from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import HomeContent from '../components/HomeContent'
import '../assets/styles/App.scss'

const Home = () => {

  return (
    <div className='App'>
      <NavBar />
      <HomeContent />
    </div>
  )
};

export default connect(null, null)(Home);
