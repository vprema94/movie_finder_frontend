import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Popup } from 'semantic-ui-react';
import { handleNewFavorite, getFavorites } from '../sofetch/services'
import { setUserFavorites } from '../actions/allActions'


class NotFavPoster extends Component {

   handleClick = () => {
      const genres = this.props.movieInfo.genres.map(g => g.title).join()

      let favorite = {
         title: this.props.movieInfo.title,
         search_id: this.props.movieInfo.id,
         poster: this.props.movieInfo['poster_240x342'],
         genre: genres,
         user_id: this.props.currentUser
      }

      handleNewFavorite(favorite)
      .then(() => getFavorites(this.props.currentUser))
      .then(data => this.props.setUserFavorites(data.movies))
   } 

   render() {
      return(
         <Container id='movie-poster'>
            <Popup
               trigger={<Image 
                  src={this.props.movieInfo['poster_400x570']} 
                  label={{ as: 'a', corner: 'left', icon: 'add', size: 'huge', color: 'olive', onClick: this.handleClick}}>
                  </Image>}
               content="Add to Favorites"
               position='top left'
            />
         </Container>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
      movieInfo: state.movieInfo,
      currentUser: state.currentUser
   })
}

export default connect(mapStatetoProps, { setUserFavorites })(NotFavPoster)