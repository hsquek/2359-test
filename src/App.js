import React, { Component } from 'react'
import $ from 'jquery'
import NavBar from './components/NavBar.js'
import Gallery from './components/Gallery.js'
import SearchGallery from './components/SearchGallery.js'
import Footer from './components/Footer.js'
import isPresentInArr from './helpers/isPresentInArr.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      status: '',
      images: [],
      favourites: [],
      activeTab: 'Search'
    }
    this.handleSelectActiveTab = this.handleSelectActiveTab.bind(this)
    this.handleImageSearch = this.handleImageSearch.bind(this)
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this)
    this.handleFetchMoreImages = this.handleFetchMoreImages.bind(this)
  }

  getInitialState () {
    return {
      query: '',
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
    var queryString = e.target.value

    if (queryString === '') {
      return this.setState({
        query: queryString,
        images: []
      })
    }

    $.ajax({
      type: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      data: {
        q: queryString,
        api_key: 'LBPCJHl57kzqzkPLdwVBajQb5j2k1doL',
        limit: 8
      },
      dataType: 'json',
      timeout: 4000,
      beforeSend: function () {
        self.setState({
          status: 'Loading...'
        })
      }
    })
    .then(function (res) {
      self.setState({
        status: '',
        query: queryString,
        images: res.data.concat([])
      })
    })
    .catch(function (err) {
      console.log(err)
      self.setState({
        status: 'An error occurred. Please try again.'
      })
    })
  }

  handleFavouriteClick (e) {
    var isAlreadyFavourite = isPresentInArr(this.state.favourites, e)

    if (!isAlreadyFavourite) {
      return this.setState({
        favourites: this.state.favourites.concat(e)
      })
    }
    var idx = isAlreadyFavourite - 1
    return this.setState({
      favourites: this.state.favourites.slice(0, idx)
                                        .concat(this.state.favourites.slice(idx + 1, this.state.favourites.length))
    })
  }

  handleFetchMoreImages (e) {
    console.log(e)
    var self = this
    var queryString = this.state.query

    $.ajax({
      type: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      data: {
        q: queryString,
        api_key: 'LBPCJHl57kzqzkPLdwVBajQb5j2k1doL',
        limit: 8,
        offset: this.state.images.length
      },
      dataType: 'json',
      timeout: 4000,
      beforeSend: function () {
        self.setState({
          status: 'Loading...'
        })
      }
    })
    .then(function (res) {
      self.setState({
        images: self.state.images.concat(res.data),
        status: '',
        query: queryString
      })
    })
    .catch(function (err) {
      console.log(err)
      self.setState({
        status: 'An error occurred. Please try again.'
      })
    })
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
              handleFavouriteClick={this.handleFavouriteClick}
              statusMessage={this.state.status}
              query={this.state.query}
              handleFetchMoreImages={this.handleFetchMoreImages} /> :
              <Gallery imagesToRender={this.state.favourites}
                favouritedImages={this.state.favourites}
                handleFavouriteClick={this.handleFavouriteClick}
                statusMessage={!this.state.favourites.length ?
                                'You have no favourites yet!' : ''
                            } />
        }
        <Footer />
      </div>
    )
  }
}

export default App
