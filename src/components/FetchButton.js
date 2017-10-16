import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class FetchButton extends Component {

  render () {
    return (
      <div className='container'>
        <Button bsStyle='primary'
          className='fetchMoreImages'
          onClick={this.props.handleFetchMoreImages}>
          Show me more!
        </Button>
      </div>
    )
  }
}

export default FetchButton
