import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class Image extends Component {
  render () {
    return (
      <Col xs={6} md={3}>
        <Col xs={12} md={12} className='imageFrame'>
          <i className="fa fa-heart" aria-hidden="true"></i>
        </Col>
      </Col>
    )
  }
}

export default Image
