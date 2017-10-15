import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import ImageSearch from './components/ImageSearch.js'
import Gallery from './components/Gallery.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <ImageSearch />
        <Gallery />
      </div>
    )
  }
}

export default App
