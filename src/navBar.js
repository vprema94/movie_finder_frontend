import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeForm, changePage, landMovies } from './actions/allActions'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { getSearch, getMovies, getFilteredMovies } from './sofetch/services';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


class NavBar extends Component {
   constructor() {
      super()
   
      this.state = {
         activeItem: 'null'
      }
   }

   handleClick = (letter) => {
      this.setState({activeItem: letter})
      this.props.changePage(letter)
   }

   handleLogout = () => {
      this.setState({activeItem: 'o'})
      this.props.changePage('o')
      this.props.changeForm('b')
      localStorage.clear()
   }

   handleSearch = async event => {
      if (event.target.value === '') {
         getMovies()
         .then((data) => {this.props.landMovies(data.results)})
      } else {
         const data = await AwesomeDebouncePromise(getSearch(event.target.value), 1000)
         this.props.landMovies(data.results)
      }
   }

   handleFilter = (event, data) => {
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

      return(
         <Menu secondary id='nav-bar'>
            <Menu.Item
            name='HOME' 
            active={this.state.activeItem === 'a'} 
            onClick={() => this.handleClick('a')} />

            <Menu.Item
            name='FAVORITES'
            active={this.state.activeItem === 'f'}
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
                  active={this.state.activeItem === 'o'} 
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

export default connect(mapStatetoProps, { changeForm, changePage, landMovies })(NavBar);






