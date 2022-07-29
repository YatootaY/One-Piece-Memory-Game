import React from 'react'


const Card = ({pic}) => {

  let altName = "";
  if (typeof(pic) === "string" ){
    altName = pic.split('/')[3].split(".")[0]
  }else{
    altName = 'none'
  }

  return(
    <div>
      <img src={pic} alt={altName}/>
    </div>
  )
}

export default Card
