import React from 'react';
import logo from '../images/logo.png';
import "../styles/HeadBar.css"

const HeadBar = ({score,best}) => {

  return(
    <div className="HeadBar">
      <div>
        <img src={logo} alt="Logo"/>
        <h1>One Piece Memory</h1>
      </div>
      <div>
        <p>Score: {score}</p> <p> | </p> <p>Best: {best}</p>
      </div>

    </div>
  )
}

export default HeadBar
