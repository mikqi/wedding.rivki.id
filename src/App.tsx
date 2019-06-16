import React, { Suspense } from "react";

import "./App.css";
import couple from "./images/couple.png";
import separator from "./images/separator.png";
import topLeft from "./images/top-left.png";
import topRight from "./images/top-right.png";
import bottom from "./images/bottom.png";
import signature from "./images/signature.jpg"

const WeddingAudio = React.lazy(() => import('./WeddingAudio'))
const SaveDate = React.lazy(() => import('./SaveDate'))
const Stories = React.lazy(() => import('./Stories'))
const ScrollIndicator = React.lazy(() => import('./ScrollIndicator'))

class App extends React.Component<any, any>{
  openMap = () => {
    window.open('http://bit.ly/ikiichawedding', '_blank')
  }

  render () {
    const MINIMAL_HEIGHT = 645
    let windowHeight;
    let browserWidth;
    let buttonMargin;
    if (window) {
      windowHeight = window.innerHeight || MINIMAL_HEIGHT
      browserWidth = window.innerWidth

      buttonMargin = browserWidth > 600 ? (browserWidth - 600) / 2 : 0
    }
    let isEligibleFullHeight = windowHeight >= MINIMAL_HEIGHT
    return (
      <div
        className="overflow-hidden"
        style={{
          maxWidth: 600,
          position: "relative",
          boxShadow: "0 0 7px 0 rgba(0,0,0, .3)"
        }}
      >
        <img src={topLeft} className="absolute w-30 top-0 left-0" />
        <img src={topRight} className="absolute w-30 top-0 right-0" />
        <div className={`${isEligibleFullHeight && 'vh-100'} relative flex flex-column justify-between items-center sinhala`}>
          <div className="flex flex-column flex-auto justify-center items-center sinhala">
            {/* IMAGE */}
            <img src={couple} className="z-1 mw-60 w-60" />

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
                onClick={this.openMap}
              >
                Get Direction
              </span>
          
            </div>
            <Suspense fallback={<div>&nbsp;</div>}>
              <ScrollIndicator isEligibleFullHeight={isEligibleFullHeight} />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div className={`flex flex-column justify-between items-center sinhala`}>
            <Stories />
          </div>
        </Suspense>
        <div className="flex justify-center flex-column w-50 center mt4">
          <div className="center mt5 mb2 f7">
            Designed By
          </div>
          <a href="https://www.instagram.com/nafaliafafasignature/" className="center w-20" target="_blank">
            <img src={signature} />
          </a>
        </div>
        <Suspense fallback={<div>&nbsp;</div>}>
          <SaveDate buttonMargin={buttonMargin} />
        </Suspense>
        <Suspense fallback={<div>&nbsp;</div>}>
          <WeddingAudio buttonMargin={buttonMargin} />
        </Suspense>
        <img src={bottom} className="w-100 mt3" />
      </div>
    );
  }
}

export default App;
