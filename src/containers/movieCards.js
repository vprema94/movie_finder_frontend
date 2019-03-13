import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class MovieCards extends Component {

   render() {
      const mapMovies = this.props.landingMovies.map((movie, index) => 
      <Card key={index}>
         <Image src={movie['poster_240x342']} />
         {/* <Card.Content id='card-content'>
            <Card.Header>{movie.title}</Card.Header>
         </Card.Content> */}
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
     landingMovies: state.changingRenders.landingMovies
   })
}

export default connect(mapStatetoProps)(MovieCards);