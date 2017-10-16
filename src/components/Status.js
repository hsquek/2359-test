import React, { Component } from 'react'
import {  } from 'react-bootstrap'

class Status extends Component {

  render () {
    return (
      <div>
        {this.props.statusMessage}
      </div>
    )
  }
}

export default Status
