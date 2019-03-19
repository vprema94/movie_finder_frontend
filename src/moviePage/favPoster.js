import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Popup } from 'semantic-ui-react';
import { getFavorites, deleteFavorite } from '../sofetch/services'
import { setUserFavorites } from '../actions/allActions'


class FavPoster extends Component {

   handleClick = () => {
      let favedMovie
      if (this.props.favorites !== []) {
         favedMovie = this.props.favorites.find(fav => fav.search_id === this.props.movieInfo.id)
      }

      deleteFavorite(this.props.currentUser, favedMovie.id)
      .then(() => getFavorites(this.props.currentUser))
      .then(data => this.props.setUserFavorites(data.movies))
   } 

   render() {
      return(
         <Container id='movie-poster'>
            <Popup
               trigger={<Image 
                  src={this.props.movieInfo['poster_400x570']} 
                  label={{ as: 'a', corner: 'left', icon: 'heart', size: 'huge', color: 'red', onClick: this.handleClick}}>
                  </Image>}
               content="Remove from Favorites"
               position='top left'
            />
         </Container>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
      movieInfo: state.movieInfo,
      currentUser: state.currentUser,
      favorites: state.favorites
   })
}

export default connect(mapStatetoProps, { setUserFavorites })(FavPoster)