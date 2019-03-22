import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/landingPage.css';
import FavoriteCards from '../favoritesPage/favoriteCards';
import FavoritesBar from '../favoritesPage/favoritesBar';
import NavBar from '../navBar'

class FavoritesPage extends Component {
   render() {
      return(
         <div>
            <NavBar />
            <div id='landing-page'>
               <FavoritesBar />
               <FavoriteCards />
            </div>
         </div>
      )
   }
} 

export default withRouter(FavoritesPage);