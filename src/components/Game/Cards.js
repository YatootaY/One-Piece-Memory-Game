import React,{useState,useEffect} from "react"
import Card from "./Card.js"
import ace from "../../images/ace.jpg"
import hancock from "../../images/hancock.jpg"
import kaido from "../../images/kaido.jpg"
import kuzan from "../../images/kuzan.jpg"
import law from "../../images/law.jpg"
import luffy from "../../images/luffy.jpg"
import nami from "../../images/nami.jpg"
import robin from "../../images/robin.jpg"
import senji from "../../images/senji.jpg"
import shanks from "../../images/shanks.jpg"
import usopp from "../../images/usopp.jpg"
import zoro from "../../images/zoro.jpg"

const Cards = () => {

  const [cards,setCards] = useState([])

  useEffect(() => {
    console.log("Updated")
  }, [cards]);

  const cardsShuffle = () => {
    let pics = [ace,hancock,kaido,kuzan,law,luffy,nami,robin,senji,shanks,usopp,zoro]
    pics.sort(() => Math.random() - 0.5);
    setCards(pics)
  }

  return(
    <div className="Cards">
      <button onClick={cardsShuffle}>Shuffle</button>
      <Card pic={cards[0]}/>
    </div>
  )
}

export default Cards
