import React, { Suspense } from "react"
import separator from './images/separator.png'

const Story = React.lazy(() => import('./Story'))

const STORY_DATA = [
  {
    paragraph: "Met at the university as the new student in September 2012.",
    isFontSpecial: false
  },
  {
    paragraph: "We become best friends (Yap! Only friends!)",
    isFontSpecial: false
  },
  {
    paragraph: "Finally we graduated in 2016, and back to our hometown. Alhamdulillah..",
    isFontSpecial: false
  },
  {
    paragraph: "Got job in different city and very rare to meet, that make us sad.",
    isFontSpecial: false
  },
  {
    paragraph: "Then, we got mad each other because we didn't have a time.",
    isFontSpecial: false
  },
  {
    paragraph: "'Someone precious will feel lost when its gone.' And We feel it.",
    isFontSpecial: false
  },
  {
    paragraph: "Then we realized that, we are completing each other.",
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
        <div className="artilla tc f2">
          "And 'Marry with Best Friend' is real!"
        </div>
      </div>
    </div>
  )
}

export default Stories
