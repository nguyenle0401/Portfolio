import React from "react";
import "./Homepage.css";
import "./App.css";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Navbar from "./pages/Navbar";
import Aboutme from "./pages/Aboutme";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
