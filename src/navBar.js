import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeForm, changePage, landMovies, toggleFilter } from './actions/allActions'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { getSearch, getMovies, getFilteredMovies } from './sofetch/services';

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

   handleFilter = (event, data) => {
      this.props.toggleFilter(data.value)
      if (data.value === 'all') {
         getMovies()
         .then((data) => {this.props.landMovies(data.results)})
      } else {
         getFilteredMovies(data.value)
         .then((data) => {this.props.landMovies(data.results)})
      }
   } 
   
   render() {
      const sourceOptions = [
         {  text: 'ALL',
            value:'all' }, 
         {  text: 'NETFLIX',
            value:'netflix'}, 
         {  text: 'HULU',
            value:'hulu_plus' },
         {  text: 'AMAZON PRIME',
            value:'amazon_prime' }, 
         {  text: 'HBO NOW',
            value:'hbo_now' }
      ] 

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
               <Dropdown 
                  placeholder='FILTER MOVIES'
                  options={sourceOptions} 
                  selection
                  onChange={this.handleFilter}
               />               
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
     whichPage: state.whichPage
   })
}

export default connect(mapStatetoProps, { changeForm, changePage, landMovies, toggleFilter })(NavBar);






