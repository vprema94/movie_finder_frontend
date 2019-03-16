import { Container, Header } from 'semantic-ui-react';
import React, { Component } from 'react';

class FavoritesBar extends Component {
   render() {
      return(
         <Container id='landing-container'>
            <Header id='landing-header'>YOUR FAVORITES</Header>
         </Container> 
      )
   }
} 

export default (FavoritesBar);