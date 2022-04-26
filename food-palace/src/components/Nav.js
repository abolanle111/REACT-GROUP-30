import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    
    <div className="HeaderGroup">
      <div className='HeaderLeft'>
    <Link to="/">
      <h2  className="palaceTitle">Food Palace</h2>
    </Link>
    </div>
    <div className='HeaderRight'>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </div>
 
  )
}

export default Nav