import React, { Component } from 'react';
import './stylesheets/App.css';
import OpeningPage from './pages/openingPage';
import LandingPage from './pages/landingPage';
import { connect } from 'react-redux';
// import { Segment } from 'semantic-ui-react';

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
          <LandingPage />
        </div>
      )
    }
  }
}

const mapStatetoProps = state => {
  return ({
    whichPage: state.changingRenders.whichPage
  })
}

export default connect(mapStatetoProps)(App);
