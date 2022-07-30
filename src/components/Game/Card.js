import React from 'react'


const Card = ({pic,altName,cardsShuffle,cardClick}) => {

  const clicked = () =>{
    cardsShuffle()
    cardClick(altName)
  }

  return(
    <li className="Card" onClick={clicked}>
      <img src={pic} alt={altName}/>
      <label>{altName}</label>
    </li>
  )
}

export default Card
