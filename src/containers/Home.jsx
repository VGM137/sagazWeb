import React from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import '../assets/styles/App.scss'

const Home = () => {

  return (
    <div className='App'>
      <NavBar />
      <Content />
    </div>
  )
};

export default connect(null, null)(Home);
