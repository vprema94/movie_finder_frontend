import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import { connect } from 'react-redux';
import MovieBar from '../moviePage/movieBar';
import MovieInfo from '../moviePage/movieInfo';
import MoviePerson from '../moviePage/moviePerson';
import { Container, Divider, Grid, Card } from 'semantic-ui-react';

class MoviePage extends Component {
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
         <Container id='movie-pg-container'>
            <MovieBar />
            <Divider />
            <Grid columns={2} >
               <MovieInfo />
               <Grid.Row id='cast-container'>
                  <b>CAST</b>
                  <Divider />
                  <br/>
                  <Card.Group id='cast-cards' itemsPerRow={6}>
                     {movieCast}
                  </Card.Group>
               </Grid.Row>
            </Grid>
         </Container>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MoviePage);