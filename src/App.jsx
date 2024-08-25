// import React from 'react';
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Router Demonstration</h1>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <footer><Navbar></Navbar></footer>
    </>
  );
}

export default App;
