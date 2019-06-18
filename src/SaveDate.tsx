import React, { Component } from 'react'
import calendar from "./calendar-utils"

import calendarIcon from "./images/calendar.png"

const CALENDAR_INVITATION_DATA = {
  title: 'Ikki and Icha Wedding',
  start: new Date('July 06, 2019 11:00'),
  duration: 120,
  end: new Date('July 06, 2019 13:00'),     
  address: 'Ixora Hall',
  description: 'Ikki and Icha Wedding Invitation Calendar'
}

export default class SaveDate extends Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      isHidden: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isHidden: true
      })
    }, 6000)
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
            right: buttonMargin,
            bottom: 16,
            zIndex: 999
          }}
          className="link gray dib h3 w3 br-100 mr3 pa3 ba b--black-10 shadow-hover grow"
          href={calendar.ics(CALENDAR_INVITATION_DATA)}
        >
          <span
            className="absolute bg-near-black br4 f7 ph3 pv1 white hide-3s bubble right-left"
            style={{
              left: "-200%",
              display: this.state.isHidden ? 'none' : 'block'
            }}
          >
            Save the Date
          </span>
          <img src={calendarIcon} alt="Save The Date"/>
        </a>
      </div>
    )
  }
}
