import React, { useState, useEffect } from "react";
import Scene from './Scene';

function Home(props) {
  const [homesAmount, setHomesAmount] = useState(1);

  function makeState(){
    return {homes:{amount:homesAmount, setAmount:setHomesAmount}}
   }
   return (
     <>
       <div className="home">
         <h1>HOME</h1>
       </div>
       <Scene state={makeState()} makeState={makeState} setState={props.setState}></Scene>
     </>
   );
 }

export default Home;