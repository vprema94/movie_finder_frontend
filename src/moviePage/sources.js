import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Grid, Image, Card } from 'semantic-ui-react';
import { makeIcons } from '../sofetch/helper'

class Sources extends Component {
   render() {

      const sourceIcons = makeIcons(this.props.movieInfo).map((source, index) => 
      <Card id='source-icon' key={index}>
         <a href={source.link} target='_blank' rel="noopener noreferrer">
            <Image id='icon-image' src={source.icon}>
            </Image>
         </a>
      </Card>)

      return(
         <Grid.Row id='sources-row'>
         <b>WATCH IT ON:</b>
            <Divider />
            <Container id='sources-container'>
               {sourceIcons}
            </Container>
         </Grid.Row>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(Sources);