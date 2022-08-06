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
      changeMsg("TRY AGAIN")
    }else{
      setClickedCards([...clickedCards,altName])
      let len = clickedCards.length;
      if ( len === 11 ){
        changeMsg("You win!!!")
      }else
        changeMsg(`${len+1}/12`)
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
