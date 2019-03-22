import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';

class OpeningPage extends Component {
	render() {      
		return (
			<div className='ui inverted vertical center aligned segment'
				id='open-page'>
				<div id='buttons'>
					<h1 id='main-title'>CINEPOP</h1>				
					<Button
						color='black'
						id='login-btn'
						onClick={() => this.props.history.push(`/login`)}>
						LOGIN
					</Button>

					<Button
						id='signup-btn'
						color='red'
						onClick={() => this.props.history.push(`/signup`)}>
						SIGN UP
					</Button>
				</div>
			</div>
		)
	}
}

export default withRouter(OpeningPage);