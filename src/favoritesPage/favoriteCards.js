import React, { Component } from 'react';
import FavCard from '../favoritesPage/favCard';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FavoriteCards extends Component {
         
   render() {
      let favoriteCards
      if (this.props.favFilter === 'all') {
         favoriteCards = this.props.favorites.map((movie) => 
            <FavCard
               key={movie.id}
               movieId={movie.search_id}
               img={movie.poster} />)
      } else {
         favoriteCards = this.props.filteredFavorites.map((movie) => 
         <FavCard
            key={movie.id}
            movieId={movie.search_id}
            img={movie.poster} />)
      }
   
      return(
         <Card.Group itemsPerRow={7}>
            {favoriteCards}
         </Card.Group>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     favorites: state.favorites,
     favFilter: state.favFilter,
     filteredFavorites: state.filteredFavorites
   })
}

export default connect(mapStatetoProps)(FavoriteCards);