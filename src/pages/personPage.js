import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import { connect } from 'react-redux';
import PersonBar from '../personPage/personBar';
import PersonInfo from '../personPage/personInfo';
import PersonMovie from '../personPage/personMovie';
import { Container, Divider, Grid, Card } from 'semantic-ui-react';

class PersonPage extends Component {
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
         <Container id='movie-pg-container'>
            <PersonBar />
            <Divider />
            <Grid columns={2} >
               <PersonInfo />
               <Grid.Row id='cast-container'>
                  <b>FEATURED IN</b>
                  <Divider />
                  <br/>
                  <Card.Group id='cast-cards' itemsPerRow={6}>
                     {featured}
                  </Card.Group>
               </Grid.Row>
            </Grid>
         </Container>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     personMovies: state.personMovies
   })
}

export default connect(mapStatetoProps)(PersonPage);