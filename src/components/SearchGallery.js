import React, { Component } from 'react'
import ImageSearch from './ImageSearch.js'
import Gallery from './Gallery.js'
import FetchButton from './FetchButton.js'

class SearchGallery extends Component {
  render () {
    return (
      <div>
        <ImageSearch handleImageSearch={this.props.handleImageSearch} />
        <Gallery imagesToRender={this.props.imagesToRender}
          handleFavouriteClick={this.props.handleFavouriteClick}
          favouritedImages={this.props.favouritedImages}
          statusMessage={this.props.statusMessage} />
        { this.props.query ?
          <FetchButton handleFetchMoreImages={this.props.handleFetchMoreImages} /> : '' }
      </div>
    )
  }
}

export default SearchGallery
