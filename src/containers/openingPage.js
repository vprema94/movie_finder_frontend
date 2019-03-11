import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';

class OpeningPage extends Component {
	constructor() {
		super()

		this.state = {
			whichForm: 'b'
		}
	}

	handleShow = (event) => {
		event.preventDefault()
		this.setState({
			whichForm: 'l'
		})
		event.target.reset()
		// this.props.handleSignup(event)
	}

	render() {
		const signup = 
			<Form
				id='signup'
				onSubmit={(event) => this.handleShow(event)}>
			<h1 className='title'>SIGN UP</h1>
				
				<Form.Field>
					<input
						placeholder='USERNAME'
						name='newName'
						// onChange={(event) => this.props.handleChange(event)}
                  />
				</Form.Field>
				
				<Form.Field>
					<input
						placeholder='PASSWORD'
						name='newPassword'
						type='password'
						// onChange={(event) => this.props.handleChange(event)}
                  />
				</Form.Field>
		
				<Button
					className='submit-btn'
					color='red'
					type='submit'>
					SIGN UP
				</Button>
			</Form>
			
		
		const login = 
			<Form
				id='login'
				// onSubmit={this.props.handleLogin}
            >
			<h1 className='title'>LOGIN TO PLAY!</h1>
				<Form.Field>
					<input
						placeholder='NAME'
						name='name'
						// onChange={(event) => this.props.handleChange(event)}
                  />
				</Form.Field>
				
				<Form.Field>
					<input
						placeholder='PASSWORD'
						name='password'
						type='password'
						// onChange={(event) => this.props.handleChange(event)} 
                  />
				</Form.Field>
		
				<Button
					className='submit-btn'
					color='red'
					type='submit'>
					LOGIN
				</Button>
			</Form>
		

		const buttons = 
			<div id='buttons'>
				<h1 className='title'>MOVIE FINDER</h1>

				<br />
				
				<Button
					id='login-btn'
					inverted
					onClick={() => this.setState({whichForm: 'l'})}>
					LOGIN
				</Button>

				<Button
					id='signup-btn'
					color='red'
					onClick={() => this.setState({whichForm: 's'})}>
					SIGN UP
				</Button>
			</div>

		const goBackBtn =
			<div>
				<Button
					id='back-btn'
					inverted
					onClick={() => this.setState({whichForm: 'b'})}>
					GO BACK
				</Button>
			</div>
		
		let whichForm;
		let goBack;

		if (this.state.whichForm === 'b') {
			whichForm = buttons
			goBack = null
		} else if (this.state.whichForm === 'l') {
			whichForm = login
			goBack = goBackBtn
		} else if (this.state.whichForm === 's') {
			whichForm = signup
			goBack = goBackBtn
		}
 		
		return (
			<Grid
				id='open-page'>
				{whichForm}
				{goBack}
			</Grid>
		)
	}
}

export default OpeningPage;