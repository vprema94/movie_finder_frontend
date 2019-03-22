import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Input } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { connect } from 'react-redux';
import { handleNewUser } from '../sofetch/services'

class SignUpPage extends Component {
   constructor() {
		super()
		
		this.state = {
			newUsername: '',
			newPassword: ''
		}
	} 

   handleSignup = (event) => {
      event.preventDefault()
		handleNewUser(this.state.newUsername, this.state.newPassword);
		event.target.reset()
		this.props.history.push(`/login`)
      this.setState({
        newUsername: '',
        newPassword: ''
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
                     name='newUsername'
                     autoComplete='off'
                     onChange={this.handleChange}
                     icon='user' 
                     iconPosition='left'
                     />
               </Form.Field>
               
               <Form.Field>
                  <Input
                     placeholder='PASSWORD'
                     name='newPassword'
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
	  start: state.start,
	  end: state.end
   })
}

export default withRouter(connect(mapStatetoProps)(SignUpPage));