import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { connect } from 'react-redux';
import { changeForm, changePage, setCurrentUser, setUserFavorites, landMovies } from '../actions/allActions'
import { handleNewUser, getAuthToken, getFavorites, getMovies } from '../sofetch/services'

class OpeningPage extends Component {
	constructor() {
		super()
		
		this.state = {
			username: '',
			password: '',
			newUsername: '',
			newPassword: ''
		}
	} 

   handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
   } 

   handleSignup = (event) => {
      event.preventDefault()
		handleNewUser(this.state.newUsername, this.state.newPassword);
		event.target.reset()
		this.props.changeForm('l')
      this.setState({
        newUsername: '',
        newPassword: ''
		})
	} 
	
	handleLogin = () => {
		getAuthToken({ username: this.state.username, password: this.state.password}).then(payload => {
			if (payload.user) {
				localStorage.setItem('token', payload.jwt)
				this.props.changePage('l')
				this.props.setCurrentUser(payload.user.id)
				getMovies()
				.then((data) => {this.props.landMovies(data.results)})
				getFavorites(payload.user.id.toString())
				.then(data => {
					this.props.setUserFavorites(data.movies);
				})
			} else {
				alert("INVALID LOGIN!")
			}
		})
	}

	render() {
		const login = 
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
      
      const signup = 
			<Form
				id='signup'
				onSubmit={this.handleSignup}>
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

		const buttons = 
			<div id='buttons'>
				<h1 id='main-title'>CINEPOP</h1>				
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
     whichForm: state.whichForm
   })
}

export default connect(mapStatetoProps, { changePage, changeForm, setCurrentUser, setUserFavorites, landMovies })(OpeningPage);