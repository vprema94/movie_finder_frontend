import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LandingBar from '../landingPage/landingBar';
import MovieCards from '../landingPage/movieCards';
import NavBar from '../navBar'
import '../stylesheets/landingPage.css';

class LandingPage extends Component {

   render() {
      return(
         <div>
            <NavBar />
            <div id='landing-page'>
               <LandingBar />
               <MovieCards />
            </div>
         </div>
      )
   }
} 

export default withRouter(LandingPage);