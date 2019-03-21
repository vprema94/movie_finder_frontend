import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import PersonBar from '../personPage/personBar';
import PersonInfo from '../personPage/personInfo';
import Features from '../personPage/features'
import { Container, Divider, Grid } from 'semantic-ui-react';

class PersonPage extends Component {
   render() {
      return(
         <Container id='movie-pg-container'>
            <PersonBar />
            <Divider />
            <Grid columns={2} >
               <PersonInfo />
               <Features />
            </Grid>
         </Container>
      )
   }
} 

export default (PersonPage);