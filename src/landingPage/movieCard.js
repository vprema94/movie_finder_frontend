import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { clickMovie } from '../actions/allActions'
import { getMovieInfo } from '../sofetch/services'

class MovieCard extends Component {

   handleClick = (movieId) => {
      getMovieInfo(movieId)
      .then((data) => {this.props.clickMovie(data)})
      .then(() => this.props.history.push(`/movies/${movieId}`))
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

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default withRouter(connect(mapStatetoProps, { clickMovie })(MovieCard));