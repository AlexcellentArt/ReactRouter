import React, { useState, useEffect } from "react";
import "./Blue.css";
import Scene from "./Scene";
function Blue(props) {
  
  const [wavesAmount, setWavesAmount] = useState(props.state.waves);
  // const classNames = ["waves"]
  /// state: {className : {amount:var setAmount: func}}
  function makeState(){
    // console.log(props.setState)
    // console.log("S")
   return {waves:{amount:wavesAmount, setAmount:setWavesAmount}}
  }
  return (
    <>
      <div className="blue">
        <h1>BLUE</h1>
      </div>
      <Scene state={makeState()} makeState={makeState} setState={props.setState}></Scene>
    </>
  );
}
export default Blue;
