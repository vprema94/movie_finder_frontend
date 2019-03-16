import React, { Component } from 'react';
import './stylesheets/App.css';
import OpeningPage from './pages/openingPage';
import LandingPage from './pages/landingPage';
import MoviePage from './pages/moviePage';
import PersonPage from './pages/personPage';
import FavoritesPage from './pages/favoritesPage';
import NavBar from './navBar'
import { connect } from 'react-redux';
import { changePage } from './actions/allActions'

class App extends Component {
  render() {
    if (this.props.whichPage === 'o') {
      return (
        <div>
          <OpeningPage />
        </div>
      );
    } else if (this.props.whichPage === 'a') {
      return (
        <div>
          <NavBar />
          <LandingPage />
        </div>
      )
    } else if (this.props.whichPage === 'm') {
      return (
        <div id="movie-background">
          <NavBar />
          <MoviePage />
        </div>
      )
    } else if (this.props.whichPage === 'p') {
      return (
        <div id="movie-background">
          <NavBar />
          <PersonPage />
        </div>
      )
    } else if (this.props.whichPage === 'f') {
      return (
        <div>
          <NavBar />
          <FavoritesPage />
        </div>
      )
    } else {
      return (
        <div>
          DID YOU CHANGE whichPage CORRECTLY?
        </div>
      )
    } 
  }
}

const mapStatetoProps = state => {
  return ({
    whichPage: state.whichPage
  })
}

export default connect(mapStatetoProps, {changePage})(App);
