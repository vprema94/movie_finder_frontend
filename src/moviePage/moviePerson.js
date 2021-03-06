import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Card} from 'semantic-ui-react';
import { clickPerson, clickPersonTwo } from '../actions/allActions'
import { getPersonInfo, getPersonMovies } from '../sofetch/services'

class MoviePerson extends Component {
   
   handleClick = (memberId) => {
      getPersonInfo(memberId).then((data) => {this.props.clickPerson(data)})
      getPersonMovies(memberId).then((data) => {this.props.clickPersonTwo(data.results)})
      .then(() => this.props.history.push(`/cast/${memberId}`))
   }
   
   render() {
      return(
         <Card
            onClick={() => this.handleClick(this.props.memberId)}
            >
            <Image src={this.props.img}  />
            <Card.Content>
               <Card.Header>{this.props.name}</Card.Header>
               <Card.Meta>
                  <span className='date'>{this.props.character}</span>
               </Card.Meta>
            </Card.Content>
         </Card>
      )
   }
}

export default withRouter(connect(null, { clickPerson, clickPersonTwo })(MoviePerson));