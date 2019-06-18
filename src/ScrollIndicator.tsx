import React, { Component } from 'react'

export default class ScrollIndicator extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isHidden: false
      })
    }, 6000)
  }
  

  render() {
    const { isEligibleFullHeight } = this.props
    const { isHidden } = this.state
    return (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: isHidden || !isEligibleFullHeight ? 'none' : 'block'
        }}
        className="scroll-indicator"
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4="
          width="50"
          style={{
            opacity: 0.3,
          }}
        />
      </div>
    )
  }
}
