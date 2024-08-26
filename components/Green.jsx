import React, { useState, useEffect } from "react";
import "./Green.css";
import Scene from './Scene';

function Green(props) {
  const [grassAmount, setGrassAmount] = useState(props.grass);

  function makeState(){
    return {grass:{amount:grassAmount, setAmount:setGrassAmount}}
   }
   return (
     <>
       <div className="green">
         <h1>GREEN</h1>
       </div>
       <Scene state={makeState()} makeState={makeState} setState={props.setState}></Scene>
     </>
   );
 }
export default Green;
