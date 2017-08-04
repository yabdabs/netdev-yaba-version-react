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
			redirectTo: null,

			//from MainForm
			email: "",
   password: "",
   firstName: "",
   lastName: "",
   signUpEmail:"",
   signUpPassword: "",
			//PROFILE STATES
			idPic: "",
			bio: "",
			location: "",
			skills: [],
			porfolio: [],
			friends: []
				

		};  //Close State

		
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

	// componentDidUpdate(){
	// 	axios.get('/auth/user').then(response => {
	// 		console.log("=========================\nCOMPONENT DID UPDATE RESPONSE")
	// 		console.log(response)
	// 	})
	// }

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
				console.log(response.data.user)

				if (response.status === 200) {	
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
						redirectTo: "/profile",
						firstName: response.data.user.firstName,
						lastName: response.data.user.lastName,
						bio: response.data.user.bio,
						location: response.data.user.location,
						idPic: response.data.user.idPic,
						porfolio: response.data.user.porfolio,
						friends: response.data.user.friends
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

// _getAfterDbUpdate() {
// 		axios.get("/auth/user").then(response => {
// 			console.log("RESPONSE IN _getAfterDbUpdate")
// 			console.log(response)
// 		})
// 	}

	handleChange = (event) => {
		// console.log(this)
		this.setState({
			[event.target.name]: event.target.value
		})
	}



		editIntro = (event) => {
		event.preventDefault()
		debugger
		console.log(this.state)
		axios.put('/auth/user', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			bio: this.state.bio,
			email: this.state.email
			// location: this.state.location
		}).then(response => {
			console.log(response.data)
			console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
			console.log("Intro Updated")
			console.log("_________________________________")
			console.log(response.data.user)

			if (response.status === 200) {
				axios.get("/auth/full-user", {
				params:{
					email: response.data.email
				}}
				).then(response2=> {
					console.log("RESPONSE IN _getAfterDbUpdate")
					console.log(response2)
				})
			}
			
			// if (response.status === 200) {
			// 	this.setState({
			// 		firstName: response.data.firstName,
			// 		lastName: response.data.lastName,
			// 		bio: response.data.bio,
			// 		redirectTo: '/profile'
			// 	})
			// }
		})
	}//Close editIntro function





	render() {
		
		if(this.state.redirectTo =="/profile") {
			console.log('redirecting to profile route')

			return <Main handleChange={this.handleChange} editIntro={this.editIntro} idPic={this.state.idPic} firstName={this.state.firstName} lastName={this.state.lastName}
			bio={this.state.bio} skills={this.state.skills} portfolio={this.state.portfolio} friends={this.state.friends}
			location={this.state.location}
			/>
		}
		
		return (
			<div className="App">
				{/* LINKS to our different 'pages' */}

				{/*  ROUTES */}
				<Route exact path="/" render={() => <MainForm _login={this._login} _handleRedirect = {this._handleRedirect}
					redirectTo={this.state.redirectTo} _handleHomeRedirect= {this._handleHomeRedirect}
					handleChange = {this.handleChange} 
					email={this.state.email} password={this.state.password} 
					signUpEmail={this.state.signUpEmail} signUpPassword={this.state.signUpPassword}
					firstName={this.state.firstName} lastName={this.state.lastName} />} />
			
			</div>
		)
	}
}

export default App
