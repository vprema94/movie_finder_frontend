import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Divider, Grid, Card } from 'semantic-ui-react';
import { makeIcons } from '../sofetch/helper'

class MovieInfo extends Component {
   render() {
      const sourceIcons = makeIcons(this.props.movieInfo).map((source, index) => 
         <Card id='source-icon' key={index}>
            <a href={source.link} target='_blank' rel="noopener noreferrer">
               <Image id='icon-image' src={source.icon}>
               </Image>
            </a>
         </Card>)

      return(
         <Grid.Row id='movie-pg-body'>
            <Grid.Column>
               <Container id='movie-poster'>
                  <Image src={this.props.movieInfo['poster_400x570']}></Image>
               </Container>
            </Grid.Column>

            <Grid.Column>
               <Container id='movie-stuff'>
                  <b>OVERVIEW</b>
                  <Divider />
                  <p>{this.props.movieInfo.overview}</p>
                  <br/><br/>
                  <b>WATCH IT ON:</b>
                  <Divider />
                  <Container id='sources-container'>
                     {sourceIcons}
                  </Container>
               </Container>
            </Grid.Column>
         </Grid.Row>
      ) 
   }
}

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MovieInfo);