import React, { Component } from 'react';
import LandingBar from '../landingPage/landingBar';
import MovieCards from '../landingPage/movieCards';
import '../stylesheets/landingPage.css';

class LandingPage extends Component {

   render() {
      return(
         <div id='landing-page'>
            <LandingBar />
            <MovieCards />
         </div>
      )
   }
} 

export default (LandingPage);