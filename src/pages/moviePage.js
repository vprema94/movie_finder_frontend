import React, { Component } from 'react';
import '../stylesheets/moviePage.css';
import { connect } from 'react-redux';
import { Container, Header, Image, Divider, Card } from 'semantic-ui-react';

class MoviePage extends Component {
   render() {
      const genres = this.props.movieInfo.genres.map(g => g.title)
      return(
         <Container id='movie-pg-container'>
            <Container id='movie-pg-header'>
               <Header id='movie-title-header'>{this.props.movieInfo.title} ({this.props.movieInfo.release_year})</Header>
               <Header id='sub-header'>{genres.join(', ')}</Header>
            </Container> 

            <Divider />

            <Container id='movie-pg-body'>
               <Container id='movie-poster'>
                  <Image src={this.props.movieInfo['poster_400x570']}></Image>
               </Container>
               
               <Container id='movie-stuff'>
                  <b>OVERVIEW</b>
                  <Divider />
                  <p>{this.props.movieInfo.overview}</p>
                  <br/><br/>
                  <b>WATCH IT ON:</b>
                  <Divider />
               </Container>
            </Container>

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