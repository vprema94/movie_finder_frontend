import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import { connect } from 'react-redux';
import MovieBar from '../moviePage/movieBar';
import MovieInfo from '../moviePage/movieInfo';
import MoviePerson from '../moviePage/moviePerson';
import { Container, Divider, Grid, Card, Embed } from 'semantic-ui-react';
import { getMovieTrailer } from '../sofetch/services';

class MoviePage extends Component {

   constructor() {
      super()

      this.state = {
         movieTrailer: null
      }
   } 

   componentDidMount() {
      getMovieTrailer(this.props.movieInfo.themoviedb)
      .then((data) => this.setState({movieTrailer: data.results[0].key}))
   }

   render() {
      let trailer
      if (this.state.movieTrailer === null) {
         trailer = null
      } else {
         trailer = <Embed id={this.state.movieTrailer}
         placeholder='/images/image-16by9.png' source='youtube' active={true}  aspectRatio='16:9' />
      }

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
               <Grid.Row id='trailer-container'>
                  <b>TRAILER</b>
                  <Divider />
                  <br/>
                  <Container>
                     {trailer}
                  </Container>
               </Grid.Row>
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
   console.log(state)
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MoviePage);