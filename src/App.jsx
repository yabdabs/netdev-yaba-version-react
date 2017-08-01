import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import MainForm from './components/Login/MainForm'
import Main from './components/Profile/main'
// import SignupForm from './components/SignupForm'
/*import Header from './components/Header'*/
/*import Home from './components/Home'*/

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			redirectTo: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(email, password) {
		axios
			.post('/auth/login', {
				email: email,
				password:password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
						redirectTo: "/profile"
					})
				}
			})
	}

	_handleRedirect(){
		this.setState({
			redirectTo: '/'
		})
	}

	_handleHomeRedirect(){
		this.setState({
			redirectTo: "/profile"
		})
	}

	render() {
		
		if(this.state.redirectTo =="/profile") {
			console.log('redirecting to profile route')

			return <Main />
		}
		
		return (
			<div className="App">
				{/* LINKS to our different 'pages' */}

				{/*  ROUTES */}
				<Route exact path="/" render={() => <MainForm _login={this._login} _handleRedirect = {this._handleRedirect}
					redirectTo={this.state.redirectTo} _handleHomeRedirect= {this._handleHomeRedirect}/>} />
			
			</div>
		)
	}
}

export default App
