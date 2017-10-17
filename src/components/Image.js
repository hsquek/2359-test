import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class Image extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleClick () {
    this.props.handleFavouriteClick(this.props.image)
  }

  handleMouseEnter (e) {
    if (!this.props.isFavourite) {
      e.target.style.color = 'rgba(347, 95, 61, 0.5)'
    }
  }

  handleMouseLeave (e) {
    if (!this.props.isFavourite) {
      e.target.style.color = 'rgba(347, 95, 61, 0)'
    }
  }

  render () {
    const heartOpacity = this.props.isFavourite ? 'rgba(347, 95, 61, 1)' : 'rgba(347, 95, 61, 0)'
    return (
      <Col xs={6} md={3}>
        <Col xs={12} md={12}
          className='imageFrame'
          style={{ color: heartOpacity }}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          >
          <img className='image' src={this.props.image.images.original.url} />
          <i className='fa fa-heart' aria-hidden='true' />
        </Col>
      </Col>
    )
  }
}

export default Image

// backgroundImage: 'url(' + (this.props.image.images.original.url) + ')',
