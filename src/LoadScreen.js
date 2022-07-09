import React from 'react';
import logo from './images/logo.png';
import './LoadScreen.css'

const LoadScreen = (load) => {

  return(
    <div className = "LoadScreen">
      <h1>One Piece Memory Game</h1>
      <img src={logo} alt="Logo"/>
      <h3>Please wait a moment . . .</h3>
    </div>
  )
}

export default LoadScreen
