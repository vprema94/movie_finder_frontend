import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeForm, changePage, landMovies, toggleFilter, setUserFavorites, toggleFavFilter, setFilteredFavs } from './actions/allActions'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { getSearch, getMovies, getFilteredMovies } from './sofetch/services';
import { allSources, allGenres } from './sofetch/helper';

class NavBar extends Component {
   constructor() {
      super() 

      this.timeout = 0
   }

   handleClick = (letter) => {
      this.props.changePage(letter)
   }

   handleLogout = () => {
      this.props.changePage('o')
      this.props.changeForm('b')
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
      }, 500)
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
      if (this.props.whichPage === 'a') {
         filter = <Dropdown 
            placeholder='FILTER BY SOURCE'
            options={sourceOptions} 
            selection
            onChange={this.handleSourceFilter} />    
      } else if (this.props.whichPage === 'f') {
         filter = <Dropdown 
            placeholder='FILTER BY GENRE'
            options={genreOptions} 
            selection
            onChange={this.handleGenreFilter} />   
      }

      return(
         <Menu secondary id='nav-bar'>
            <Menu.Item
            name='HOME' 
            active={this.props.whichPage === 'a'} 
            onClick={() => this.handleClick('a')} />

            <Menu.Item
            name='FAVORITES'
            active={this.props.whichPage === 'f'}
            onClick={() => this.handleClick('f')}
            /> 

            <Menu.Item>
              {filter}
            </Menu.Item>

            <Menu.Menu position='right'>
               <Menu.Item>
                  <Input icon='search' placeholder='SEARCH MOVIES' onChange={this.handleSearch} />
               </Menu.Item>
               <Menu.Item
                  name='LOGOUT' 
                  active={this.props.whichPage === 'o'} 
                  onClick={this.handleLogout} />
            </Menu.Menu>
         </Menu>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     whichPage: state.whichPage,
     favorites: state.favorites
   })
}

export default connect(mapStatetoProps, { changeForm, changePage, landMovies, toggleFilter, setUserFavorites, toggleFavFilter, setFilteredFavs })(NavBar);






