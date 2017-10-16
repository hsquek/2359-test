import React, { Component } from 'react'
import ImageSearch from './ImageSearch.js'
import Gallery from './Gallery.js'

class SearchGallery extends Component {
  render () {
    return (
      <div>
        <ImageSearch handleImageSearch={this.props.handleImageSearch} />
        <Gallery imagesToRender={this.props.imagesToRender}
          handleFavouriteClick={this.props.handleFavouriteClick}
          favouritedImages={this.props.favouritedImages} />
      </div>
    )
  }
}

export default SearchGallery
