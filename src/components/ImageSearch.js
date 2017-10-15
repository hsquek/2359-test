import React, { Component } from 'react'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class ImageSearch extends Component {
  render () {
    return (
      <div className="container">
        <form>
          <FormGroup bsSize="large">
            <InputGroup>
              <FormControl type='text' placeholder="Start searching for images!"/>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default ImageSearch
