import React from 'react';
import logo from './images/logo.png';
import "./HeadBar.css"

const HeadBar = () => {

  return(
    <div className="HeadBar">
      <div>
        <img src={logo} alt="Logo"/>
        <h1>One Piece Memory</h1>
      </div>
      <div>
        <p>Score: 0</p> <p> | </p> <p>Best: 1</p>
      </div>

    </div>
  )
}

export default HeadBar
