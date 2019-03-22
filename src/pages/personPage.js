import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/moviePage.css';
import PersonBar from '../personPage/personBar';
import PersonInfo from '../personPage/personInfo';
import Features from '../personPage/features'
import NavBar from '../navBar'
import { Container, Divider, Grid } from 'semantic-ui-react';

class PersonPage extends Component {
   render() {
      return(
         <div id="movie-background">
            <NavBar />
            <Container id='movie-pg-container'>
               <PersonBar />
               <Divider />
               <Grid columns={2} >
                  <PersonInfo />
                  <Features />
               </Grid>
            </Container>
         </div>
      )
   }
} 

export default withRouter(PersonPage);