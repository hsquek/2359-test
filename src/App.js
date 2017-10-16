import React, { Component } from 'react'
import $ from 'jquery'
import NavBar from './components/NavBar.js'
import Gallery from './components/Gallery.js'
import Status from './components/Status.js'
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
      timeout: 4000,
      beforeSend: function () {
        self.setState({
          status: 'Loading...'
        })
      }
    })
    .then(function (res) {
      self.setState({
        // images: self.state.images.concat(res.data)
        status: '',
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
    let isAlreadyFavourite = isPresentInArr(this.state.favourites, e)

    if (!isAlreadyFavourite) {
      return this.setState({
        favourites: this.state.favourites.concat(e)
      })
    }
    let idx = isAlreadyFavourite - 1
    return this.setState({
      favourites: this.state.favourites.slice(0, idx)
                                        .concat(this.state.favourites.slice(idx + 1, this.state.favourites.length))
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
              handleFavouriteClick={this.handleFavouriteClick} /> :
              <Gallery imagesToRender={this.state.favourites}
                favouritedImages={this.state.favourites}
                handleFavouriteClick={this.handleFavouriteClick} />
        }
        {
          this.state.status === '' ?
          null : <Status statusMessage={this.state.status} />
        }
        <Footer />
      </div>
    )
  }
}

export default App
