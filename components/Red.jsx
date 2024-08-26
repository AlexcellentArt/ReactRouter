import React, { useState, useEffect } from 'react';
import Scene from './Scene';
function Red(props) {
  const [fireAmount, setFireAmount] = useState(props.fire);

  function makeState(){
    return {fire:{amount:fireAmount, setAmount:setFireAmount}}
   }
   return (
     <>
       <div className="red">
         <h1>RED</h1>
       </div>
       <Scene state={makeState()} makeState={makeState} setState={props.setState}></Scene>
     </>
   );
 }
export default Red