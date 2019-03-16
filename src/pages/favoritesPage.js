import React, { Component } from 'react';
import '../stylesheets/landingPage.css';
import FavoriteCards from '../favoritesPage/favoriteCards';
import FavoritesBar from '../favoritesPage/favoritesBar';

class FavoritesPage extends Component {
   render() {
      return(
         <div id='landing-page'>
            <FavoritesBar />
            <FavoriteCards />
         </div>
      )
   }
} 

export default (FavoritesPage);