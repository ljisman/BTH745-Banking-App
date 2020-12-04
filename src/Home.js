import Vard from './Card';
import Nav from './Nav'
import React from 'react'
import './App.css';
import {Link } from 'react-router-dom';


class Home extends React.Component {
  render() {  
  return (
    <div className="Home">
      <Link to="/"> 
      <h2 style={{ color: "red", textAlign: "left" , paddingLeft: "30px" , marginBottom: "3px", textDecoration: 'none' }}>X</h2>
      </Link>
      <Vard/>
      <Nav/>
    </div>
  )
  }
}

export default Home;