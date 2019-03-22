import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Card} from 'semantic-ui-react';
import { clickMovie } from '../actions/allActions'
import { getMovieInfo } from '../sofetch/services'

class FavCard extends Component {
   
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
            <Image src={this.props.img}></Image>
         </Card>
      )
   }
} 

export default withRouter(connect(null, { clickMovie })(FavCard));