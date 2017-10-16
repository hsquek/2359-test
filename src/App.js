import React, { Component } from 'react'
import $ from 'jquery'
import NavBar from './components/NavBar.js'
// import ImageSearch from './components/ImageSearch.js'
import Gallery from './components/Gallery.js'
import SearchGallery from './components/SearchGallery.js'
import Footer from './components/Footer.js'
import isPresentInArr from './helpers/isPresentInArr.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: '',
      images: [],
      favourites: [],
      activeTab: 'Search'
    }
    this.handleSelectActiveTab = this.handleSelectActiveTab.bind(this)
    this.handleImageSearch = this.handleImageSearch.bind(this)
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this)
  }

  getInitialState () {
    return {
      status: '',
      images: [],
      favourites: [],
      activeTab: 'Search'
    }
  }

  handleSelectActiveTab (key) {
    this.setState({
      activeTab: key
    })
  }

  handleImageSearch (e) {
    e.preventDefault()
    var self = this

    if (e.target.value === '') {
      return this.setState({
        images: []
      })
    }

    $.ajax({
      type: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      data: {
        q: e.target.value,
        api_key: 'LBPCJHl57kzqzkPLdwVBajQb5j2k1doL',
        limit: 8
        // offset: this.state.images.length
      },
      dataType: 'json',
      timeout: 2000
    })
    .then(function (res) {
      self.setState({
        // images: self.state.images.concat(res.data)
        images: res.data.concat([])
      })
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  handleFavouriteClick (e) {
    var isAlreadyFavourite = isPresentInArr(this.state.favourites, e)
    if (!isAlreadyFavourite) {
      return this.setState({
        favourites: this.state.favourites.concat(e)
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <NavBar activeKey={this.state.activeTab}
          handleSelect={this.handleSelectActiveTab}
          numFavourited={this.state.favourites.length} />
        {
          this.state.activeTab === 'Search' ?
            <SearchGallery handleImageSearch={this.handleImageSearch}
              imagesToRender={this.state.images}
              favouritedImages={this.state.favourites}
              handleFavouriteClick={this.handleFavouriteClick} /> :
              <Gallery imagesToRender={this.state.favourites}
                favouritedImages={this.state.favourites}
                handleFavouriteClick={this.handleFavouriteClick} />
        }
        <Footer />
      </div>
    )
  }
}

export default App
