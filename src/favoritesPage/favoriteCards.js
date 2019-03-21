import React, { Component } from 'react';
import FavCard from '../favoritesPage/favCard';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

class FavoriteCards extends Component {
         
      // const genreOptions = [
      //    {  text: 'ACTION',
      //       value:'action' }, 
      //    {  text: 'ADVENTURE',
      //       value:'adventure'}, 
      //    {  text: 'ANIMATION',
      //       value:'animation' },
      //    {  text: 'BIOGRAPHY',
      //       value:'biography' }, 
      //    {  text: 'CHILDREN',
      //       value:'children' },
      //    {  text: 'COMEDY',
      //       value:'comedy' }, 
      //    {  text: 'CRIME',
      //       value:'crime'}, 
      //    {  text: 'DOCUMENTARY',
      //       value:'documentary' },
      //    {  text: 'DRAMA',
      //       value:'drama' }, 
      //    {  text: 'FAMILY',
      //       value:'family' },
      //    {  text: 'FANTASY',
      //       value:'fantasy' }, 
      //    {  text: 'HISTORY',
      //       value:'history'}, 
      //    {  text: 'HORROR',
      //       value:'horror' },
      //    {  text: 'MUSICAL',
      //       value:'musical' }, 
      //    {  text: 'MYSTERY',
      //       value:'mystery' },
      //    {  text: 'ROMANCE',
      //       value:'romance'}, 
      //    {  text: 'SCIENCE FICTION',
      //       value:'science-fiction' },
      //    {  text: 'SPORT',
      //       value:'sport' }, 
      //    {  text: 'THRILLER',
      //       value:'thriller' },
      //    {  text: 'WAR',
      //       value:'war' }, 
      //    {  text: 'WESTERN',
      //       value:'western' },
      // ]


   render() {
      const favoriteCards = this.props.favorites.map((movie) => 
         <FavCard
            key={movie.id}
            movieId={movie.search_id}
            img={movie.poster} />)
   
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