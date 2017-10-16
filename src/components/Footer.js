import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Footer extends Component {
  render () {
    return (
        <Grid className='footer'>
          <Row className='show-grid'>
          <Col xs={8} md={8} className='appName'>
            Gallereasy POC Web App
          </Col>
          <Col xs={4} md={4} className='copyright'>
            2359 Media
          </Col>
          </Row>
        </Grid>

    )
  }
}

export default Footer
