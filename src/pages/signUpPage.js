import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { connect } from 'react-redux';
import { handleNewUser, getAuthToken, getFavorites, getMovies } from '../sofetch/services'
import { setCurrentUser, setUserFavorites, landMovies } from '../actions/allActions'

class SignUpPage extends Component {
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

   handleSignup = (event) => {
      event.preventDefault()
      handleNewUser(this.state.username, this.state.password)
      .then(res => {
         if (res.errors) {
            alert("sorry, username has already been taken") 
         } else {
            getAuthToken({ username: this.state.username, password: this.state.password})
            .then(payload => {
               localStorage.setItem('token', payload.jwt)
               this.props.history.push('/cinepop')
               this.props.setCurrentUser(payload.user.id)
               getMovies()
               .then((data) => {this.props.landMovies(data.results)})
               .then(() => this.props.history.push(`/welcome`))
               getFavorites(payload.user.id.toString())
               .then(data => {this.props.setUserFavorites(data.movies)})
               })
            .then(this.setState({
               username: '',
               password: ''
            }))
         }
      })
   } 
   
   render() {
      return(
         <div className='ui inverted vertical center aligned segment'
         id='open-page'>
            <Form id='signup' onSubmit={this.handleSignup}>
			      <h1 className='title'>SIGN UP</h1>
				
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
                  SIGN UP
               </Button>
			   </Form>
         </div>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
	  start: state.start
   })
}

export default withRouter(connect(mapStatetoProps, { setCurrentUser, setUserFavorites, landMovies })(SignUpPage));