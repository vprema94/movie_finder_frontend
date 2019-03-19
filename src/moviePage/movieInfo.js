import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavPoster from './favPoster'
import NotFavPoster from './notFavPoster'
import { Container, Image, Divider, Grid, Card } from 'semantic-ui-react';
import { makeIcons } from '../sofetch/helper'
import { setUserFavorites } from '../actions/allActions'

class MovieInfo extends Component {
   
   render() {
      const sourceIcons = makeIcons(this.props.movieInfo).map((source, index) => 
         <Card id='source-icon' key={index}>
            <a href={source.link} target='_blank' rel="noopener noreferrer">
               <Image id='icon-image' src={source.icon}>
               </Image>
            </a>
         </Card>)

      let showPoster
      if (!this.props.favorites) {
         showPoster = <NotFavPoster />
      } else if (this.props.favorites.find(fav => fav.search_id === this.props.movieInfo.id)) {
         showPoster = <FavPoster />
      } else {
         showPoster = <NotFavPoster />
      }

      return(
         <Grid.Row id='movie-pg-body'>
            <Grid.Column>
               {showPoster}
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
     movieInfo: state.movieInfo,
     favorites: state.favorites
   })
}

export default connect(mapStatetoProps, { setUserFavorites })(MovieInfo);