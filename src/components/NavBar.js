import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  getInitialState() {
    return {
      key: 0
    };
  }

  handleSelect(key) {
    this.setState({
      key
    })
  }

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Galler<strong>easy</strong></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeKey={this.state.key} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href='#'>Search</NavItem>
          <NavItem eventKey={2} href='#'>Favourites</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
