import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player'

const soundOn = require('./images/sound-on.png')
const soundOff = require('./images/sound-off.png')

export default class WeddingAudio extends Component<any, any> {
  audioRef: React.RefObject<any>;

  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
    this.state = {
      imageUri: soundOn
    }
  }

  toggleMusic = () => {
    const isPause = this.audioRef.current.audioEl.paused
    if (isPause) {
      this.setState({
        imageUri: soundOn
      })
      return this.audioRef.current.audioEl.play()
    }

    this.setState({
      imageUri: soundOff
    })
    return this.audioRef.current.audioEl.pause()
  }

  render() {
    const { buttonMargin } = this.props
    return (
      <div>
        <a
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px 2px',
            background: 'white',
            position: 'fixed',
            left: buttonMargin + 12,
            bottom: 24
          }}
          className="link gray dib h2 w2 br-100 mr2 pa2 ba b--black-10 shadow-hover grow"
          onClick={this.toggleMusic}
        >
          <img src={this.state.imageUri} alt="Save The Date"/>
        </a>

        <ReactAudioPlayer
          className="dn"
          src='audio.mp3'
          loop
          ref={this.audioRef}
        />
      </div>
    )
  }
}
