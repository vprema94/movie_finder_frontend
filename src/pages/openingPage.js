import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import '../stylesheets/openingPage.css';
import { getAuthToken, getFavorites, getMovies } from '../sofetch/services'
import { setCurrentUser, setUserFavorites, landMovies } from '../actions/allActions'

class OpeningPage extends Component {
	handleDemo = () => {
		// getAuthToken({ username: "hello", password: "world"}).then(payload => {
			// if (payload.user) {
				// localStorage.setItem('token', payload.jwt)
				this.props.history.push('/cinepop')
				// this.props.setCurrentUser(payload.user.id)
				getMovies()
				.then((data) => {this.props.landMovies(data.results)})
				.then(() => this.props.history.push(`/welcome`))
				// getFavorites(payload.user.id.toString())
				// .then(data => {this.props.setUserFavorites(data.movies)})
			// } 
      // })
	}

	render() {      
		return (
			<div className='ui inverted vertical center aligned segment'
				id='open-page'>
				<div id='buttons'>
					<h1 id='main-title'>CINEPOP</h1>				
					{/* <Button
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
					</Button> */}

					<Button
						id='demo-btn'
						color='red'
						onClick={this.handleDemo}>
						CLICK TO ENTER
					</Button>

				</div>
				{/* <div>
					<Button
						id='demo-btn'
						color='red'
						onClick={this.handleDemo}>
						CLICK TO ENTER
					</Button>
				</div> */}
			</div>
		)
	}
}

export default withRouter(connect(null, { setCurrentUser, setUserFavorites, landMovies })(OpeningPage));