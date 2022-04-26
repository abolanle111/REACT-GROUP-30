import React from 'react'
import handFlower from "../images/IMG-20220422-WA0034.jpg"
import "./Home.css"
//import Contact from './Contact'


function Home() {
  return (
    <div className="home">
      <div className="main-home">
        <p className="description">
Let Your Stomach Do The Talking
    </p>
        <input className="enter-address" type="text" placeholder="Enter address" />
        <button className="home-button">Search</button>
    </div>
      <div className="img">
        <img className='img-pic' src={handFlower} alt="Hand holding flower" />
    </div>
    </div>
  )
}

export default Home;