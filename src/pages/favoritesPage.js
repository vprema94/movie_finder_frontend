import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/landingPage.css';
import FavoriteCards from '../favoritesPage/favoriteCards';
import FavoritesBar from '../favoritesPage/favoritesBar';
import SignUpLogIn from '../favoritesPage/signUpLogIn';
import NavBar from '../navBar'

class FavoritesPage extends Component {
   render() {
      let favoritesBody
      if (localStorage.length === 0) {
         favoritesBody = <SignUpLogIn />
      } else {
         favoritesBody = <FavoriteCards />
      }
      return(
         <div>
            <NavBar />
            <div id='landing-page'>
               <FavoritesBar />
               {favoritesBody}
            </div>
         </div>
      )
   }
} 

export default withRouter(FavoritesPage);