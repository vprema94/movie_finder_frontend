import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Card} from 'semantic-ui-react';
import { clickMovie } from '../actions/allActions'
import { getMovieInfo } from '../sofetch/services'

class PersonMovie extends Component {
   
   handleClick = (movieId) => {
      getMovieInfo(movieId)
      .then((data) => {this.props.clickMovie(data)})
   }
   
   render() {
      return(
         <Card
            onClick={() => this.handleClick(this.props.movieId)}
            >
            <Image src={this.props.img}  />
            <Card.Content>
               <Card.Header>{this.props.title}</Card.Header>
               <Card.Meta>
                  <span className='date'>{this.props.character}</span>
               </Card.Meta>
            </Card.Content>
         </Card>
      )
   }
}

export default connect(null, { clickMovie })(PersonMovie);