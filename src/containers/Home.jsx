import React from 'react';
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Content from '../components/Content'
import '../assets/styles/App.scss'

const Home = () => {
/*   const handleScroll = (ev) => {
    console.log(ev.target.scrollTop)
    console.log(ev)
  } */
  
  return (
    <div className='App' /* onScroll={handleScroll} */>
      <NavBar />
      <Content />
    </div>
  )
};

export default connect(null, null)(Home);