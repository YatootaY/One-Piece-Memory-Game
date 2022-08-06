import React,{useState} from "react"
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

const Cards = ({cardClick}) => {

  const [cards,setCards] = useState([{ace: ace},{hancock: hancock},{kaido: kaido},{kuzan: kuzan},{law: law},{luffy: luffy},{nami: nami},{robin: robin},{senji: senji},{shanks: shanks},{usopp: usopp},{zoro: zoro}])

  const cardsShuffle = () => {
    let pics = [...cards]
    pics.sort(() => Math.random() - 0.5);
    setCards(pics)
  }

  const getAltName = (pic) => {
    let altName = "";
    if (typeof(pic) === "object" ){
      altName = Object.keys(pic)[0]
    }else{
      altName = 'none'
    }
    return altName
  }

  return(
    <div className="Cards">
      <ul>
        {[...Array(cards.length).keys()].map((i) => {
          return <Card
            pic={cards[i]}
            altName= {getAltName(cards[i])}
            key={getAltName(cards[i])}
            cardsShuffle={cardsShuffle}
            cardClick={cardClick}/>
        })}
      </ul>
    </div>
  )
}

export default Cards
