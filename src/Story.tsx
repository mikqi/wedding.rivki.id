import React from 'react'

function Story({image, paragraph}) {
  return (
    <div className="flex flex-auto mt5 w-90 justify-center items-center">
      <img className="flex flex-auto" style={{width: 200}} src={require(`./images/stories/l${image}.jpg`)} />
      <div className="tc">{paragraph} + {image}</div>
      <img className="flex flex-auto" style={{width: 200}} src={require(`./images/stories/p${image}.jpg`)} />
    </div>
  )
}

export default Story