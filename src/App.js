import React, { useState, useEffect } from "react";
import LoadScreen from './components/LoadScreen.js'
import HeadBar from './components/HeadBar.js'
import GameArea from './components/GameArea.js'
import Footer from './components/Footer.js'
import "./styles/App.css"

const App = () => {

  const [load,setLoad] = useState(true);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const correctClick = () => {
    setScore(score+1)
  }

  const wrongClick = () => {

    if (score > best){
      setBest(score)
    }
    setScore(0)
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 3000);
    return () => clearTimeout(timer);
  },[])


  return(
    <div className="App">
      {load === true ? <LoadScreen/> : null}
      <HeadBar score={score} best={best}/>
      <GameArea correctClick={correctClick} wrongClick={wrongClick}/>
      <Footer/>
    </div>
  )
}

export default App;
