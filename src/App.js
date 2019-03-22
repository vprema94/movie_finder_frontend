import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './stylesheets/App.css';
import OpeningPage from './pages/openingPage';
import LandingPage from './pages/landingPage';
import MoviePage from './pages/moviePage';
import PersonPage from './pages/personPage';
import FavoritesPage from './pages/favoritesPage';
import LoadingPage from './pages/loadingPage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={OpeningPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/loading' component={LoadingPage} />
        <Route exact path='/welcome' component={LandingPage} />
        <Route exact path='/movies/:id' component={MoviePage} />
        <Route exact path='/cast/:id' component={PersonPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
      </Switch>
    )
  }
}

export default withRouter(App);