import { Container, Header } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieBar extends Component {
   render() {
      const genres = this.props.movieInfo.genres.map(g => g.title)
      return(
         <Container id='movie-pg-header'>
            <Header id='movie-title-header'>{this.props.movieInfo.title} ({this.props.movieInfo.release_year})</Header>
            <Header id='sub-header'> {this.props.movieInfo.rating} | {genres.join(', ')}</Header>
         </Container> 
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MovieBar);