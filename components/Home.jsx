import React, { useState, useEffect } from "react";
import Scene from './Scene';
import "./Home.css";

function Home(props) {
  const [homesAmount, setHomesAmount] = useState(props.state.homes);

  function readState(state){
    const keyVals = [];
    Object.keys(state).forEach((key) => {
      {
        console.log("READING STATE KEY: " + key);
        console.table(state[key])
        let val = state[key];
        if (state[key] === Object(val))
        {
          val = val.amount
        }
        keyVals.push(makeKeyVal(key, val));
      }
    });
    return keyVals
  }
  function createStateDisplay(homeState){
    const display = [];
    Object.keys(homeState).forEach((key) => {
      {
        console.log("READING Display KEY: " + key);
        console.table(homeState[key])
        display.push(<div><h2>{key}: </h2>{readState(homeState[key])}</div>);
      }
    });
    return display
  }
  function makeKeyVal(key,value){
    return <div className="keyVal"><p>{key}</p><p>{value}</p></div>
  }
  function makeState(){
    return {homes:{amount:homesAmount, setAmount:setHomesAmount}}
   }
   return (
     <>
       <div className="home">
         <h1>HOME</h1>
       </div>
       {createStateDisplay(props.state)}
     </>
   );
 }

export default Home;