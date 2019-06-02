import React from "react";
import "./App.css";
import couple from "./images/couple.png";
import separator from "./images/separator.png";
import topLeft from "./images/top-left.png";
import topRight from "./images/top-right.png";
import bottom from "./images/bottom.png";

function App() {
  return (
    <div
      style={{
        maxWidth: 600,
        position: "relative",
        boxShadow: "0 0 7px 0 rgba(0,0,0, .3)"
      }}
    >
      <img src={topLeft} className="absolute w-30 top-0 left-0" />
      <img src={topRight} className="absolute w-30 top-0 right-0" />
      <div className="vh-100 flex flex-column justify-center items-center sinhala">
        {/* IMAGE */}
        <img src={couple} className="z-1 mw-70 w-70" />

        {/* TITLE */}
        <div className="z-1 autumn mt3 f2">Wedding Day</div>

        {/* COUPLE */}
        <div className="z-1 artilla mb3 mt2 f3">@mikqi &amp; @ichafizha</div>

        {/* SEPARATOR */}
        <img src={separator} style={{ width: "20%" }} />

        {/* TIME */}
        <div className="z-1 mt3 flex justify-center items-center flex-column">
          <div className="z-1 f3">06 Juli 2019</div>
        </div>
        <div className="z-1 flex gray">
          <div className="z-1 f4 flex flex-column items-center mr3 lh-solid">
            <span>Akad Nikah</span>
            <span>09.00 - Selesai</span>
          </div>
          <div className="z-1 f4 flex flex-column items-center ml3 lh-solid">
            <span>Resepsi</span>
            <span>11.00 - 13.00</span>
          </div>
        </div>

        {/* LOCATION */}
        <div className="z-1 mt3 f3">Ixora Hall</div>
        <div className="z-1 f4 w-70 tc gray">
          Jl. Imam Bonjol No. 32, Panunggangan Bar, Kec. Karawaci, Kota
          Tangerang, Banten 15115
        </div>
      </div>
      <img src={bottom} className="w-100 mt6" />
    </div>
  );
}

export default App;
