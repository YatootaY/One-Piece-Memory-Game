import React from 'react'


const Card = ({pic,altName}) => {

  return(
    <li className="Card">
      <img src={pic} alt={altName}/>
      <label>{altName}</label>
    </li>
  )
}

export default Card
