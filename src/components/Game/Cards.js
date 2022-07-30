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
import "../../styles/Cards.css"

const Cards = () => {

  const [cards,setCards] = useState([ace,hancock,kaido,kuzan,law,luffy,nami,robin,senji,shanks,usopp,zoro])

  useEffect(() => {
    console.log("Updated")
  }, [cards]);

  const cardsShuffle = () => {
    let pics = [...cards]
    pics.sort(() => Math.random() - 0.5);
    setCards(pics)
  }

  const getAltName = (pic) => {
    let altName = "";
    if (typeof(pic) === "string" ){
      altName = pic.split('/')[3].split(".")[0]
    }else{
      altName = 'none'
    }
    return altName
  }

  return(
    <div className="Cards">
      <button onClick={cardsShuffle}>Shuffle</button>
      <ul>
        {[...Array(cards.length).keys()].map((i) => {
          return <Card pic={cards[i]} altName= {getAltName(cards[i])} key={getAltName(cards[i])}/>
        })}
      </ul>
    </div>
  )
}

export default Cards
