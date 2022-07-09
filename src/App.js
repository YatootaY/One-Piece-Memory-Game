import React, { useState, useEffect } from "react";
import LoadScreen from './LoadScreen.js'
import "./App.css"

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

    </div>
  )
}

export default App;
