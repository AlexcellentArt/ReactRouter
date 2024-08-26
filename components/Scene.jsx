import React, { useState, useEffect } from "react";
/// state: {className : {amount:var setAmount: func}}
function Scene(props) {
  // const [snippet, setSnippet] = useState(props.snip);
  // const [dupeAmount, setDupeAmount] = useState(props.amount);
  function duplicateSnippet(amount, className) {
    console.log("DUPING "+className + " Times")
    console.log(amount)
    let made = 0;
    const dupes = [];
    while (made != amount) {
      console.log(`${className} ${made} made!`)
      dupes.push(<div key={made} className={className + " delayed"} style={{"--anim-delay":made}}></div>);
      made += 1;
      if (made >= 10){
        // max is 10 to prevent overflow
        return dupes
      }
    }
    return dupes;
  }
  function readObj(obj, className) {
    console.log("READING OBJ");
    return (
      <>
        <button
          onClick={(e) => {
            obj.setAmount(obj.amount + 1);
          }}
        >
          Add {className}
        </button>
        {duplicateSnippet(obj.amount, className)}
      </>
    );
  }
  function readObjsToScene(state) {
    console.log(state);
    const scene = [];
    Object.keys(state).forEach((key) => {
      {
        console.log("READING KEY: " + key);
        console.table(state[key])
        scene.push(readObj(state[key], key));
      }
    });
    console.log("ALL KEYS READ");
    console.table(props)
    return scene;
  }
  return <div className="scene">        <button
  onClick={(e) => {
    props.setState(props.makeState())
    console.log("stateSet!")
  }}
>
  Save Scene
</button>{readObjsToScene(props.state)}</div>;
}

export default Scene;
