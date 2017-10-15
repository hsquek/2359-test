import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'Search'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  getInitialState() {
    return {
      activeTab: 'Search'
    };
  }

  handleSelect(key) {
    this.setState({
      activeTab: key
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
        <Nav activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <NavItem eventKey={'Search'} href='#'>Search</NavItem>
          <NavItem eventKey={'Favourites'} href='#'>Favourites</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
