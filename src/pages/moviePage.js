import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/moviePage.css';
import MovieBar from '../moviePage/movieBar';
import MovieInfo from '../moviePage/movieInfo';
import Sources from '../moviePage/sources';
import Trailer from '../moviePage/trailer';
import MovieCast from '../moviePage/movieCast';
import { Container, Divider, Grid } from 'semantic-ui-react';
import NavBar from '../navBar'

class MoviePage extends Component {

   render() {

      return(
         <div id="movie-background">
            <NavBar />
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
         </div>
      )
   }
} 

export default withRouter(MoviePage);