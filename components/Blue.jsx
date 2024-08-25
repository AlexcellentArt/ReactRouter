import React, { useState, useEffect } from "react";
import "./Blue.css";
function Blue() {
  const [wavesAmount, setWavesAmount] = useState(1);
  // makes waves based on amount requested, which is stored in wavesAmount
  // could make it generically return in a requested amount (var a) of snippets ( var b)
  // could move this into scene maybe and have it make the buttons
  function makeWaves() {
    const waves = [];
    let wavesRequested = wavesAmount;
    while (wavesRequested != 0)
    {
      waves.push(<div className="waves"></div>)
      wavesRequested -= 1;
    }
    return (waves);
  }
  return (
    <>
      <div className="blue">
        <h1>BLUE</h1>
      </div>
      <div className="scene">
        
      <button onClick={(e)=>{setWavesAmount(wavesAmount+1);}}>Add Waves</button>
        <div className="waves"></div>
        {
          makeWaves()
        }
      </div>
    </>
  );
}
export default Blue;
