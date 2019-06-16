import React from 'react'

function Story({image, paragraph, isFontSpecial}) {
  return (
    <div className="flex flex-auto mt5 w-90 justify-center items-center">
      <img className="flex flex-auto" style={{width: 200}} src={require(`./images/stories/l${image}.jpg`)} />
      <div
        className={`${isFontSpecial ? 'artilla' : ''} tc relative`}
      >
        <div
          style={{
            background: `url(${require(`./images/arrows/arr${Math.ceil(Math.random() * 4)}.png`)}) no-repeat`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: 100,
            height: 150,
            top: '-150%',
            right: `${Math.ceil(Math.random() * 25)}%`,
            position: 'absolute',
            opacity: .5
          }}
        />
        {paragraph}
      </div>
      <img className="flex flex-auto" style={{width: 200}} src={require(`./images/stories/p${image}.jpg`)} />
    </div>
  )
}

export default Story