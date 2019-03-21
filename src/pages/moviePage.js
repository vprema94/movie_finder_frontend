import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import MovieBar from '../moviePage/movieBar';
import MovieInfo from '../moviePage/movieInfo';
import Sources from '../moviePage/sources';
import Trailer from '../moviePage/trailer';
import MovieCast from '../moviePage/movieCast';
import { Container, Divider, Grid } from 'semantic-ui-react';

class MoviePage extends Component {

   render() {

      return(
         <Container id='movie-pg-container'>
            <MovieBar />
            <Divider />
            <Grid columns={2} >
               <MovieInfo />
               <Sources />
               <Trailer />
               <MovieCast />
            </Grid>
         </Container>
      )
   }
} 

export default (MoviePage);