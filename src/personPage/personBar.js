import { Container, Header } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonBar extends Component {
   render() {
      return(
         <Container id='movie-pg-header'>
            <Header id='movie-title-header'>{this.props.personInfo.name}</Header>
         </Container> 
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     personInfo: state.personInfo
   })
}

export default connect(mapStatetoProps)(PersonBar);