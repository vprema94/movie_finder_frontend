import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Divider, Grid} from 'semantic-ui-react';

class PersonInfo extends Component {
   render() {
      return(
         <Grid.Row id='movie-pg-body'>
            <Grid.Column>
               <Container id='movie-poster'>
                  <Image src={this.props.personInfo.images.large.url}></Image>
               </Container>
            </Grid.Column>

            <Grid.Column>
               <Container id='movie-stuff'>
                  <b>ABOUT</b>
                  <Divider />
                  <p>{this.props.personInfo.description}</p>
               </Container>
            </Grid.Column>
         </Grid.Row>
      ) 
   }
}

const mapStatetoProps = state => {
   return ({
     personInfo: state.personInfo
   })
}

export default connect(mapStatetoProps)(PersonInfo);