import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import { connect } from 'react-redux';
import MovieBar from '../moviePage/movieBar';
import MovieInfo from '../moviePage/movieInfo';
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
               <Divider />
               <MovieCast />
            </Grid>
         </Container>
      )
   }
} 

const mapStatetoProps = state => {
   console.log(state.movieInfo)
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MoviePage);