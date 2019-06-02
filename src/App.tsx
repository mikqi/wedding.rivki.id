import React from "react";
import "./App.css";
import couple from "./images/couple.png";
import separator from "./images/separator.png";
import topLeft from "./images/top-left.png";

function App() {
  return (
    <div className="vh-100 flex flex-column justify-center items-center sinhala">
      <img src={topLeft} className="absolute w-30 top-0 left-0" />

      {/* IMAGE */}
      <img src={couple} className="mw-70 w-70" />

      {/* TITLE */}
      <div className="autumn mt3 f2">Wedding Day</div>

      {/* COUPLE */}
      <div className="artilla mb3 mt2 f3">@mikqi &amp; @ichafizha</div>

      {/* SEPARATOR */}
      <img src={separator} style={{ width: "20%" }} />

      {/* TIME */}
      <div className="mt3 flex justify-center items-center flex-column">
        <div className="f3">06 Juli 2019</div>
      </div>
      <div className="flex gray">
        <div className="f4 flex flex-column items-center mr3 lh-solid">
          <span>Akad Nikah</span>
          <span>09.00 - Selesai</span>
        </div>
        <div className="f4 flex flex-column items-center ml3 lh-solid">
          <span>Resepsi</span>
          <span>11.00 - 13.00</span>
        </div>
      </div>

      {/* LOCATION */}
      <div className="mt3 f3">Ixora Hall</div>
      <div className="f4 w-70 tc gray">
        Jl. Imam Bonjol No. 32, Panunggangan Bar, Kec. Karawaci, Kota Tangerang,
        Banten 15115
      </div>
    </div>
  );
}

export default App;
