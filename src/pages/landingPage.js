import React, { Component } from 'react';
import LandingBar from '../containers/landingBar';
import MovieCards from '../containers/movieCards';
import '../stylesheets/landingPage.css';
import { connect } from 'react-redux';
import { landMovies } from '../actions/changingMovies'
import { getMovies } from '../sofetch/services';

class LandingPage extends Component {

   componentDidMount() {
      getMovies()
      .then(data => {
         this.props.landMovies(data.results)
      })
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

export default connect(null, {landMovies})(LandingPage);