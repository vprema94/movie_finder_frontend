import React, { Component } from 'react';
import MovieCard from '../landingPage/movieCard' 
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landMoreMovies } from '../actions/allActions'
import { getMoreMovies, getMoreFilteredMovies } from '../sofetch/services'


class MovieCards extends Component {
   constructor() {
      super() 

      this.state = {
         start: 0
      }
   }

   componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
   }
  
   componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
   }
  
   onScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && !this.props.landingMovies.isLoading) 
         {this.onPaginatedSearch()}
   } 

   onPaginatedSearch = () => {
         this.setState({
            start: this.state.start + 56
         })
         if (this.props.filter === 'all') {
            return getMoreMovies(this.state.start)
            .then((data) => {this.props.landMoreMovies(data.results)})
         } else {
            return getMoreFilteredMovies(this.state.start, this.props.filter)
            .then((data) => {this.props.landMoreMovies(data.results)})
         }
      }

   render() {
      const mapMovies = this.props.landingMovies.map((movie) => 
      <MovieCard 
         key={movie.id}
         movieId={movie.id}
         img={movie['poster_240x342']} />)

      return(
         <Card.Group itemsPerRow={7}>
            {mapMovies}
         </Card.Group>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     landingMovies: state.landingMovies,
     filter: state.filter
   })
}

export default connect(mapStatetoProps, { landMoreMovies })(MovieCards);