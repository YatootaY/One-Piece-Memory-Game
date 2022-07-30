import React,{useState} from 'react'
import Cards from "./Game/Cards.js"
import '../styles/GameArea.css'

const GameArea = ({correctClick,wrongClick}) => {

  const [clickedCards,setClickedCards] = useState([])
  const [msg,changeMsg] = useState("Choose different characters")

  const cardClick = (altName) => {

    if (clickedCards.indexOf(altName) !== -1){
      wrongClick()
      setClickedCards([])
      changeMsg("Choose different characters")
    }else{
      setClickedCards([...clickedCards,altName])
      let len = clickedCards.length;
      if ( len > 5 ){
        changeMsg("Oh you are doing great")
      }else if (len > 8){
        changeMsg("Focus you are gonna win!")
      }else if (len >10){
        changeMsg("Almost there...")
      }else if (len === 12 ){
        changeMsg("You win!!!")
      }
      correctClick()
    }
  }

  return(
    <div className="GameArea">
      <h2>{msg}</h2>
      <Cards cardClick={cardClick}/>
    </div>
  )
}

export default GameArea
