import React, { Component } from 'react';
import LandingBar from '../landingPage/landingBar';
import MovieCards from '../landingPage/movieCards';
import '../stylesheets/landingPage.css';
import { connect } from 'react-redux';
import { landMovies } from '../actions/allActions'
import { getMovies } from '../sofetch/services';

class LandingPage extends Component {

   componentDidMount() {
      getMovies()
      .then((data) => {this.props.landMovies(data.results)})
   }

   render() {
      return(
         <div id='landing-page'>
            <LandingBar />
            <MovieCards />
         </div>
      )
   }
} 

export default connect(null, { landMovies })(LandingPage);