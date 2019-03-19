import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, landMovies } from './actions/allActions'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { getSearch, getMovies, getFilteredMovies } from './sofetch/services';

class NavBar extends Component {
   constructor() {
      super()
   
      this.state = {
         activeItem: 'a'
      }
   }

   handleClick = (letter) => {
      this.setState({activeItem: letter})
      this.props.changePage(letter)
   }

   handleLogout = () => {
      this.setState({activeItem: 'o'})
      window.location.reload()
   }

   handleSearch = (event) => {
      if (event.target.value === '') {
         getMovies()
         .then((data) => {this.props.landMovies(data.results)})
      } else {
         getSearch(event.target.value)
         .then((data) => {this.props.landMovies(data.results)})
      }
   } 

   handleFilter = (source) => {
      getFilteredMovies(source)
      .then((data) => {this.props.landMovies(data.results)})
   }
   
   render() {
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
               <Dropdown item text='FILTER MOVIES'>
                  <Dropdown.Menu>
                     <Dropdown.Item
                        onClick={() => this.handleFilter('netflix')}>
                        NETFLIX</Dropdown.Item>
                     <Dropdown.Item
                        onClick={() => this.handleFilter('hulu_plus')}>
                        HULU</Dropdown.Item>
                     <Dropdown.Item
                        onClick={() => this.handleFilter('amazon_prime')}>
                        AMAZON PRIME</Dropdown.Item>
                     <Dropdown.Item
                        onClick={() => this.handleFilter('hbo_now')}>
                        HBO NOW</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
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

export default connect(mapStatetoProps, { changePage, landMovies })(NavBar);






