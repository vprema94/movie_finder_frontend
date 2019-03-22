import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { getAuthToken, getFavorites, getMovies } from '../sofetch/services'
import { setCurrentUser, setUserFavorites, landMovies } from '../actions/allActions'


class LoginPage extends Component {
   constructor() {
      super()

      this.state = {
         username: '',
			password: ''
      }
   }

   handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
   } 

   handleLogin = (event) => {
      event.preventDefault();
		getAuthToken({ username: this.state.username, password: this.state.password}).then(payload => {
			if (payload.user) {
				localStorage.setItem('token', payload.jwt)
				this.props.history.push('/loading')
				this.props.setCurrentUser(payload.user.id)
				getMovies()
				.then((data) => {this.props.landMovies(data.results)})
				.then(() => this.props.history.push(`/welcome`))
				getFavorites(payload.user.id.toString())
				.then(data => {this.props.setUserFavorites(data.movies)})
			} else {
				alert("INVALID LOGIN!")
			}
      })
	}

   render() {
      return(
         <div className='ui inverted vertical center aligned segment' id='open-page'>
            <Form
               id='login'
               onSubmit={this.handleLogin}
               >
            <h1 className='title'>LOGIN</h1>
               <Form.Field>
                  <Input
                     placeholder='USERNAME'
                     name='username'
                     autoComplete='off'
                     onChange={this.handleChange}
                     icon='user' 
                     iconPosition='left'
                     />
               </Form.Field>
               
               <Form.Field>
                  <Input
                     placeholder='PASSWORD'
                     name='password'
                     type='password'
                     autoComplete='off'
                     onChange={this.handleChange}
                     icon='lock' 
                     iconPosition='left'
                     />
               </Form.Field>
         
               <Button
                  className='submit-btn'
                  color='red'
                  type='submit'
                  fluid size='large'>
                  LOGIN
               </Button>
            </Form>        
         </div>
      )
   }
} 

export default withRouter(connect(null, { setCurrentUser, setUserFavorites, landMovies })(LoginPage));