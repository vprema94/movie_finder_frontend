import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Card } from 'semantic-ui-react';
import PersonMovie from '../personPage/personMovie';

class Features extends Component {
   render() {

      const featured = this.props.personMovies.map((movie) => 
         <PersonMovie
            key={movie.id}
            movieId={movie.id}
            img={movie['poster_400x570']}
            title={movie.title}
            character={movie.character_name}
            />)

      return(
         <Grid.Row id='features-container'>
            <b>FEATURED IN</b>
            <Divider />
            <br/>
            <Card.Group id='feature-cards' itemsPerRow={6}>
               {featured}
            </Card.Group>
         </Grid.Row>
      )
   }
}

const mapStatetoProps = state => {
   return ({
      personMovies: state.personMovies
   })
}

export default connect(mapStatetoProps)(Features);