import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage, landMovies } from './actions/allActions'
import { Menu, Input } from 'semantic-ui-react';
import { getSearch, getMovies } from './sofetch/services';

class NavBar extends Component {
   
   state = {
      activeItem: this.props.whichPage
   }

   handleClick = (letter) => {
      this.props.changePage(letter)
   }

   handleLogout = () => {
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
            name='home' 
            active={this.state.activeItem === 'a'} 
            onClick={() => this.handleClick('a')} />

            <Menu.Item
            name='Logout' 
            active={this.state.activeItem === 'o'} 
            onClick={this.handleLogout} />

            <Menu.Item
            name='favorites'
            // active={this.state.activeItem === 'messages'}
            // onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
               <Menu.Item>
                  <Input icon='search' placeholder='SEARCH MOVIES' onChange={this.handleSearch} />
               </Menu.Item>
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






