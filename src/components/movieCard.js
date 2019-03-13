import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { clickMovie } from '../actions/allReducers'
import { getMovieInfo } from '../sofetch/services'

class MovieCard extends Component {

   handleClick = (movieId) => {
      getMovieInfo(movieId)
      .then((data) => {this.props.clickMovie(data)})
   }

   render() {
      return(
      <Card 
         onClick={() => this.handleClick(this.props.movieId)}
         id='movie-card'
         >
         <Image src={this.props.img}/>
      </Card>
      )
   }
} 

export default connect(null, { clickMovie })(MovieCard);