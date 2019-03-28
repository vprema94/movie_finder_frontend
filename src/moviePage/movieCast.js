import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Grid, Card } from 'semantic-ui-react';
import MoviePerson from '../moviePage/moviePerson';

class MovieCast extends Component {
   render() {

      const movieCast = this.props.movieInfo.cast.map((member) => 
         <MoviePerson
            key={member.id}
            memberId={member.id}
            img={member.image}
            name={member.name}
            character={member.character_name}
            />)

      return(
         <Grid.Row id='cast-container '>
            <b>CAST</b>
            <Divider />
            <br/>
            <Card.Group id='cast-cards' itemsPerRow={6}>
               {movieCast}
            </Card.Group>
         </Grid.Row>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MovieCast);