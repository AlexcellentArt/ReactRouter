import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";
import Home from "./Home";
function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blue" element={<Blue />} />
        <Route path="red" element={<Red />} />
        <Route path="green" element={<Green />} />
      </Routes>
    </div>
  );
}
export default MainContainer