import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Image from './Image.js'
import Status from './Status.js'
import isPresentInArr from '../helpers/isPresentInArr.js'

class Gallery extends Component {
  render () {
    const images = this.props.imagesToRender
    const handleFavouriteClick = this.props.handleFavouriteClick
    const favouritedImages = this.props.favouritedImages

    const imageTiles = images.map(function (image) {
      const isFavourite = isPresentInArr(favouritedImages, image)
      return (
        <Image key={image.id}
          image={image}
          handleFavouriteClick={handleFavouriteClick}
          isFavourite={isFavourite} />
      )
    })

    return (
      <Grid className='gallery'>
        <Status className="status" statusMessage={this.props.statusMessage} />
        <Row className='show-grid'>
          {imageTiles}
        </Row>
      </Grid>
    )
  }
}

export default Gallery
