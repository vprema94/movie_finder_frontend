import React, { Component } from 'react';
import './stylesheets/App.css';
import OpeningPage from './containers/openingPage';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
      <Segment>
        <OpeningPage />
      </Segment>
      </div>
    );
  }
}

export default App;
