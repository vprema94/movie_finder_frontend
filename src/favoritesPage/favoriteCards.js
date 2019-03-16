import React, { Component } from 'react';
import FavCard from '../favoritesPage/favCard';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FavoriteCards extends Component {
   
   render() {
      const favoriteCards = this.props.favorites.map((movie) => 
         <FavCard
            key={movie.id}
            movieId={movie.search_id}
            img={movie['poster_240x342']} />)
   
      return(
         <Card.Group itemsPerRow={7}>
            {favoriteCards}
         </Card.Group>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     favorites: state.favorites
   })
}

export default connect(mapStatetoProps)(FavoriteCards);