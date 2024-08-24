// import React from 'react';
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Green from "./components/Green";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Router Demonstration</h1>
      <div id="navbar">
      <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blue" element={<Blue/>} />
          <Route path="red" element={<Red/>} />
          <Route path="green" element={<Green/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
