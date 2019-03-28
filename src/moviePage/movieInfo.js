import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavPoster from './favPoster'
import NotFavPoster from './notFavPoster'
import { Container, Divider, Grid } from 'semantic-ui-react';
import { setUserFavorites } from '../actions/allActions'

class MovieInfo extends Component {
   
   render() {
      const directors = this.props.movieInfo.directors.map(d => d.name).join(', ')
      const writers = this.props.movieInfo.writers.map(w => w.name).join(', ')

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
                  <br/>
                  <b>DIRECTED BY:</b>
                  <Divider />
                  <p>{directors}</p>
                  <br/>
                  <b>WRITTEN BY:</b>
                  <Divider />
                  <p>{writers}</p>
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