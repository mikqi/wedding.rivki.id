import React from "react";
import "./App.css";
import couple from "./images/couple.png";
import separator from "./images/separator.png";

function App() {
  return (
    <div className="vh-100 flex flex-column justify-center items-center">
      <img src={couple} style={{ width: "60%" }} />
      <div>Wedding Day</div>
      <div>@mikqi &amp; @ichafizha</div>
      <img src={separator} style={{ width: "20%" }} />
      <div>
        <div>06 Juli 2019</div>
        <div>Akad: 09.00 &amp; Resepsi: 11.00 - 13.00</div>
      </div>
      <div>Ixora Hall</div>
      <div>
        Jl. Imam Bonjol No. 32, Panunggangan Bar, Kec. Karawaci, Kota Tangerang,
        Banten 15115
      </div>
    </div>
  );
}

export default App;
