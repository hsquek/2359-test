import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {

  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Galler<strong>easy</strong></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeKey={this.props.activeKey} onSelect={this.props.handleSelect}>
          <NavItem eventKey={'Search'} href='#'>Search</NavItem>
          <NavItem eventKey={'Favourites'} href='#'>
            {
              !this.props.numFavourited ?
              'Favourites' :
              'Favourites (' + this.props.numFavourited + ')'
            }
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
