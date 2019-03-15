import React, { Component } from 'react';
import { Container, Header} from 'semantic-ui-react';

class LandingBar extends Component {
   
   render() {
      return(
         <Container id='landing-container'>
            <Header id='landing-header'>CINEPOP</Header> 
         </Container>
      )
   }
} 

export default (LandingBar);