import React from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Content from '../components/Content'

const Home = () => {
  return (
    <>
      <NavBar />
      <Content />
    </>
  )
};

export default connect(null, null)(Home);