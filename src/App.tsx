import React from "react";
import "./App.css";
import couple from "./images/couple.png";

function App() {
  return (
    <div className="vh-100 flex flex-column justify-center items-center">
      <img src={couple} style={{ width: "60%" }} />
      <div>Wedding Day</div>
    </div>
  );
}

export default App;
