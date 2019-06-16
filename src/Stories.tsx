import React, { Suspense } from "react"
import separator from './images/separator.png'

const Story = React.lazy(() => import('./Story'))

const STORY_DATA = [
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
  {
    paragraph: "Lorem ipsum dolor sit amet consectetur.",
    isFontSpecial: false
  },
]

function Stories() {
  return (
    <div className="flex flex-column flex-auto justify-center items-center sinhala">

      <img className="mb3 mt5" src={separator} style={{ width: "20%" }} />
      <div className="z-1 autumn f2">Our Stories</div>
      {STORY_DATA.map((story, i) => (
        <Suspense key={i+1}  fallback={<div>Loading...</div>}>
          <Story image={i+1} {...story} />
        </Suspense>
      ))}

      <div className="flex flex-auto mt5 w-70 justify-center items-center">
        <img className="flex flex-auto" src={require('./images/stories/cp1.jpg')} style={{width: 200}} />
      </div>
      <div className="flex flex-auto mt3 w-50 justify-center items-center">
        <div className="artilla tc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio blanditiis, est ratione iste aliquam excepturi pariatur consectetur reiciendis cumque?
        </div>
      </div>
    </div>
  )
}

export default Stories
