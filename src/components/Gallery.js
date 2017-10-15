import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Image from './Image.js'

class Gallery extends Component {
  render () {
    return (
      <Grid className="gallery">
        <Row className='show-grid'>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </Row>
      </Grid>
    )
  }
}

export default Gallery
