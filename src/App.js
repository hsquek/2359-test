import React, { Component } from 'react'
// import logo from './logo.svg'
import NavBar from './components/NavBar.js'
import ImageSearch from './components/ImageSearch.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <ImageSearch />
      </div>
    )
  }
}

export default App
