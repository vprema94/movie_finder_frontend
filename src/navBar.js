import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, landMovies } from './actions/allActions'
import { Menu, Input } from 'semantic-ui-react';
import { getSearch, getMovies } from './sofetch/services';

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
   
   render() {
      return(
         <Menu pointing secondary id='nav-bar'>
            <Menu.Item
            name='HOME' 
            active={this.state.activeItem === 'a'} 
            onClick={() => this.handleClick('a')} />

            <Menu.Item
            name='FAVORITES'
            // active={this.state.activeItem === 'messages'}
            // onClick={this.handleItemClick}
            />

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






