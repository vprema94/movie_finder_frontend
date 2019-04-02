import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { landMovies, toggleFilter, setUserFavorites, toggleFavFilter, setFilteredFavs } from './actions/allActions'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { getSearch, getMovies, getFilteredMovies } from './sofetch/services';
import { allSources, allGenres } from './sofetch/helper';

class NavBar extends Component {
   constructor() {
      super() 

      this.timeout = 0
   }

   handleLogout = () => {
      this.props.history.push('/')
      localStorage.clear()
   } 

   handleSearch = (event) => {
      event.persist()
      if (this.timeout) { clearTimeout(this.timeout) }
      this.timeout = setTimeout(() => {
         if (event.target.value === "") {
            getMovies()
            .then((data) => this.props.landMovies(data.results))
         } else {
            getSearch(event.target.value)
            .then((data) => this.props.landMovies(data.results))
         }
      }, 300)
   }

   handleSourceFilter = (event, data) => {
      this.props.toggleFilter(data.value)
      if (data.value === 'all') {
         getMovies()
         .then((data) => {this.props.landMovies(data.results)})
      } else {
         getFilteredMovies(data.value)
         .then((data) => {this.props.landMovies(data.results)})
      }
   } 

   handleGenreFilter = (event, data) => {
      this.props.toggleFavFilter(data.value)
      if (data.value === 'all') {
         this.props.setUserFavorites(this.props.favorites)
      } else {
         let newFavs = this.props.favorites.filter(fav => fav.genre.toLowerCase().includes(data.value))
         this.props.setFilteredFavs(newFavs)
      }
   } 
   
   render() {
      const sourceOptions = allSources
      const genreOptions = allGenres

      let filter 
      if (this.props.location.pathname === '/welcome') {
         filter = <Dropdown 
            placeholder='FILTER BY SOURCE'
            options={sourceOptions} 
            selection
            onChange={this.handleSourceFilter} />    
      } else if (this.props.location.pathname === '/favorites') {
         filter = <Dropdown 
            placeholder='FILTER BY GENRE'
            options={genreOptions} 
            selection
            onChange={this.handleGenreFilter} />   
      } 

      let searchBar
      if (this.props.location.pathname === '/welcome') {
         searchBar = <Input icon='search' placeholder='SEARCH MOVIES' onChange={this.handleSearch} />
      } 

      return(
         <Menu secondary id='nav-bar'>
            <Menu.Item
            name='HOME' 
            active={this.props.location.pathname === '/welcome'} 
            onClick={() => this.props.history.push('/welcome')} />

            <Menu.Item
            name='FAVORITES'
            active={this.props.location.pathname === '/favorites'}
            onClick={() => this.props.history.push('/favorites')}
            /> 

            <Menu.Item>
              {filter}
            </Menu.Item>

            <Menu.Menu position='right'>
               <Menu.Item>
                  {searchBar}
               </Menu.Item>
               <Menu.Item
                  name='LOGOUT' 
                  onClick={this.handleLogout} />
            </Menu.Menu>
         </Menu>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     favorites: state.favorites
   })
}

export default withRouter(connect(mapStatetoProps, { landMovies, toggleFilter, setUserFavorites, toggleFavFilter, setFilteredFavs })(NavBar));






