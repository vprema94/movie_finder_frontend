import React, { Component } from 'react';
import { Container, Header, Input, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landMovies } from '../actions/allActions'
import { getSearch } from '../sofetch/services';


class LandingBar extends Component {
   
   handleSearch = (event) => {
      getSearch(event.target.value)
      .then((data) => {this.props.landMovies(data.results)})
   }
   
   render() {
      return(
         <Container id='landing-container'>
            <Header id='landing-header'>WELCOME</Header>
            <Container id='filter-container'>
               <Input icon='search' placeholder='SEARCH MOVIES' onChange={this.handleSearch} /> 
               <Dropdown id='dropdown' placeholder='FILTER MOVIES' icon='filter' floating labeled button className='icon'>
                  <Dropdown.Menu placeholder='FILTER MOVIES'>
                     <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Important' />
                     <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} text='Announcement' />
                     <Dropdown.Item label={{ color: 'black', empty: true, circular: true }} text='Discussion' />
                  </Dropdown.Menu>
               </Dropdown>
            </Container>
         </Container>
      )
   }
} 

export default connect(null, { landMovies })(LandingBar);