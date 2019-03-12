import React, { Component } from 'react';
import './stylesheets/App.css';
import OpeningPage from './containers/openingPage';
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
        <div>{null}</div>
      )
    }
  }
}

const mapStatetoProps = state => {
  return ({
    whichPage: state.renders.whichPage
  })
}

export default connect(mapStatetoProps)(App);
