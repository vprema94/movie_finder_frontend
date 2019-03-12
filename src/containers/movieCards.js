import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class MovieCards extends Component {
   render() {
      // const movies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      // const mapMovies = movies.map((movie, index) => 
		// <Card key={index}>
      //    <Image raised src='https://goodpuppyfood.com/wp-content/uploads/2018/06/Husky-puppy-1024x1024.jpg' />
      //    <Card.Content>
      //       <Card.Header>MOVIE TITLE</Card.Header>
      //    </Card.Content>
      // </Card>)

      const mapMovies = this.props.landMovies.map((movie, index) => 
      <Card key={index}>
         <Image raised src={movie['poster_120x171']} />
         <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
         </Card.Content>
      </Card>)


      return(
         <Card.Group itemsPerRow={6}>
            {mapMovies}
         </Card.Group>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     landMovies: state.movies.landMovies
   })
}

export default connect(mapStatetoProps)(MovieCards);