import React from "react";
import calendar from "./calendar-utils"

import "./App.css";
import couple from "./images/couple.png";
import separator from "./images/separator.png";
import topLeft from "./images/top-left.png";
import topRight from "./images/top-right.png";
import bottom from "./images/bottom.png";
import signature from "./images/signature.jpg"
import calendarIcon from "./images/calendar.png"

const CALENDAR_INVITATION_DATA = {
  title: 'Ikki and Icha Wedding',
  start: new Date('July 06, 2019 11:00'),
  duration: 120,
  end: new Date('July 06, 2019 13:00'),     
  address: 'Ixora Hall',
  description: 'Ikki and Icha Wedding Invitation Calendar'
}

function openMap() {
  if (window) {
    window.open('http://bit.ly/ikiichawedding', '_blank')
  }
}

function App() {
  const MINIMAL_HEIGHT = 645
  let windowHeight;
  if (window) {
    windowHeight = window.innerHeight || MINIMAL_HEIGHT
  }
  let isEligibleFullHeight = windowHeight >= MINIMAL_HEIGHT
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
      <div className={`${isEligibleFullHeight && 'vh-100'} flex flex-column justify-between items-center sinhala`}>
        <div className="flex flex-column flex-auto justify-center items-center sinhala">
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
            <div className="z-1 f3">Sabtu, 06 Juli 2019</div>
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
          <div className="z-1 mt3 f3">
            <span>
            Ixora Hall
            </span>
          </div>
          <div className="z-1 f4 w-70 tc gray">
            <span>
              Jl. Imam Bonjol No. 32, Panunggangan Bar, Kec. Karawaci, Kota
              Tangerang, Banten 15115
            </span>
            <span
              className="f7 sans-serif grow no-underline br-pill ml2 ph2 pv1 mb2 dib white bg-near-black outline-0 pointer"
              onClick={openMap}
            >
              Get Direction
            </span>

          </div>
        </div>

        <div className={`${!isEligibleFullHeight && 'dn'} scroll-indicator`}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4="
            width="50"
            style={{ opacity: 0.3 }}
          />
        </div>
      </div>
      <div className="flex justify-center flex-column w-50 center mt4">
        <div className="center mt5 mb4">
          Credits
        </div>
        <img src={signature} className="center w-30" />
      </div>
      <a
        className="link gray dib h3 w3 br-100 mr3 pa3 ba b--black-10 shadow-hover save-date"
        href={calendar.ics(CALENDAR_INVITATION_DATA)}
      >
        <img src={calendarIcon} alt="Save The Date"/>
      </a>
      <img src={bottom} className="w-100 mt3" />
    </div>
  );
}

export default App;
