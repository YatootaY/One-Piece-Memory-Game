import React from 'react'


const Card = ({pic,altName}) => {

  return(
    <li>
      <img src={pic} alt={altName}/>
    </li>
  )
}

export default Card
