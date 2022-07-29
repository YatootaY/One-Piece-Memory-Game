import React from 'react'
import Cards from "./Game/Cards.js"
import '../styles/GameArea.css'

const GameArea = () => {



  return(
    <div className="GameArea">
      <h2>Choose different characters!</h2>
      <Cards/>
    </div>
  )
}

export default GameArea
