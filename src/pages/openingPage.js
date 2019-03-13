import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { connect } from 'react-redux';
import { changeForm, changePage } from '../actions/changingRenders'
import { handleNewUser } from '../sofetch/services'

class OpeningPage extends Component {

   state = {
      username: '',
      password: ''
   }

   handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
   } 

   handleSubmit = event => {
      event.preventDefault()
      handleNewUser(this.state.username, this.state.password);
      this.setState({
        username: '',
        password: ''
      })
      this.props.changeForm('l')
   }

	render() {
		const login = 
			<Form
				id='login'
				onSubmit={() => this.props.changePage('a')}
            >
			<h1 className='title'>LOGIN</h1>
				<Form.Field>
					<Input
						placeholder='USERNAME'
						name='username'
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
      
      const signup = 
			<Form
				id='signup'
				onSubmit={(event) => this.handleSubmit(event)}>
			<h1 className='title'>SIGN UP</h1>
				
				<Form.Field>
					<Input
						placeholder='USERNAME'
						name='username'
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

		const buttons = 
			<div id='buttons'>
				<h1 className='title'>MOVIE FINDER</h1>				
				<Button
               color='black'
					id='login-btn'
					onClick={() => this.props.changeForm('l')}>
					LOGIN
				</Button>

				<Button
					id='signup-btn'
               color='red'
					onClick={() => this.props.changeForm('s')}>
					SIGN UP
				</Button>
			</div>

		const goBackBtn =
			<div>
				<Button
					id='back-btn'
               color='black'
					onClick={() => this.props.changeForm('b')}>
					GO BACK
				</Button>
			</div>
		
		let whichForm;
		let goBack;

		if (this.props.whichForm === 'b') {
			whichForm = buttons
			goBack = null
		} else if (this.props.whichForm === 'l') {
			whichForm = login
			goBack = goBackBtn
		} else if (this.props.whichForm === 's') {
			whichForm = signup
			goBack = goBackBtn
		}
 		
		return (
			<div className='ui inverted vertical center aligned segment'
				id='open-page'>
				{whichForm}
				{goBack}
			</div>
		)
	}
}

const mapStatetoProps = state => {
   return ({
     whichForm: state.changingRenders.whichForm
   })
}

export default connect(mapStatetoProps, { changePage, changeForm })(OpeningPage);