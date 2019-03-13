import React, { Component } from 'react';
import MovieCard from '../components/movieCard' 
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

class MovieCards extends Component {

   render() {
      const mapMovies = this.props.landingMovies.map((movie) => 
      <MovieCard 
         key={movie.id}
         movieId={movie.id}
         img={movie['poster_240x342']} />)

      return(
         <Card.Group itemsPerRow={7}>
            {mapMovies}
         </Card.Group>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     landingMovies: state.landingMovies
   })
}

export default connect(mapStatetoProps)(MovieCards);