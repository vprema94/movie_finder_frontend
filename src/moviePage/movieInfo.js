import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Divider, Grid, Card, Popup } from 'semantic-ui-react';
import { makeIcons } from '../sofetch/helper'
import { handleNewFavorite } from '../sofetch/services'
import { addFavorite } from '../actions/allActions'

class MovieInfo extends Component {

   handleClick = () => {
      const genres = this.props.movieInfo.genres.map(g => g.title).join()

      let favorite = {
         title: this.props.movieInfo.title,
         search_id: this.props.movieInfo.id,
         poster: this.props.movieInfo['poster_240x342'],
         genre: genres,
         user_id: this.props.currentUser
      }
      this.props.addFavorite(favorite)
      handleNewFavorite(favorite)
   } 
   
   render() {
      const sourceIcons = makeIcons(this.props.movieInfo).map((source, index) => 
         <Card id='source-icon' key={index}>
            <a href={source.link} target='_blank' rel="noopener noreferrer">
               <Image id='icon-image' src={source.icon}>
               </Image>
            </a>
         </Card>)

      const favPoster = 
         <Container id='movie-poster'>
            <Popup
               trigger={<Image 
                  src={this.props.movieInfo['poster_400x570']} 
                  label={{ as: 'a', corner: 'left', icon: 'heart', size: 'huge', color: 'red', onClick: this.handleClick}}>
                  </Image>}
               content="Add to Favorites"
               position='top left'
            />
         </Container>

      const notFavPoster = 
         <Container id='movie-poster'>
            <Popup
               trigger={<Image 
                  src={this.props.movieInfo['poster_400x570']} 
                  label={{ as: 'a', corner: 'left', icon: 'film', size: 'huge', color: 'red', onClick: this.handleClick}}>
                  </Image>}
               content="Add to Favorites"
               position='top left'
            />
         </Container>

      let showPoster
      if (this.props.favorites.find(fav => fav.title === this.props.movieInfo.title)) {
         showPoster = favPoster
      } else {
         showPoster = notFavPoster
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
   console.log(state)
   return ({
     movieInfo: state.movieInfo,
     currentUser: state.currentUser,
     favorites: state.favorites
   })
}

export default connect(mapStatetoProps, { addFavorite })(MovieInfo);