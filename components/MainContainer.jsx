import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";
import Home from "./Home";
function MainContainer() {
  // only thing main container needs to know is amount. I can use className as a key for readabilities sake.
  const [blueState, setBlueState] = useState({waves:1});
  const [redState, setRedState] = useState({fire:1});
  const [greenState, setGreenState] = useState({grass:1});
  const [homeState, setHomeState] = useState({house:1});

  /// className : amount
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home state={homeState} setState={setHomeState}/>}/>
        <Route path="blue" element={<Blue state={blueState} setState={setBlueState}/>}/>
        <Route path="red" element={<Red state={redState} setState={setRedState}/>}/>
        <Route path="green" element={<Green state={greenState} setState={setGreenState}/>}/>
      </Routes>
    </div>
  );
}
export default MainContainer