import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class ImageSearch extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    return
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <FormGroup bsSize='large'>
            <InputGroup>
              <FormControl type='text' placeholder='Start searching for images!' onChange={this.props.handleImageSearch} />
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default ImageSearch
