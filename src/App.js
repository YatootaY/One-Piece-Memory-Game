import React, { useState, useEffect } from "react";
import LoadScreen from './components/LoadScreen.js'
import HeadBar from './components/HeadBar.js'
import GameArea from './components/GameArea.js'
import "./styles/App.css"

const App = () => {

  const [load,setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 3000);
    return () => clearTimeout(timer);
  },[])

  return(
    <div className="App">
      {load === true ? <LoadScreen/> : null}
      <HeadBar/>
      <GameArea/>
    </div>
  )
}

export default App;
