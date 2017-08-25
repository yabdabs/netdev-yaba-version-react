import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import MainForm from './components/Login/MainForm'
import Main from './components/Profile/main'

import MainHomePage from './components/Homepage/Main.js'
import SarahNetworkProfile from './components/Network/Main.js'

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
			pic: "",
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
						redirectTo: "/home",
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
			// redirectTo: "/profile"
			redirectTo: "/home"
		})
	}
	
	handleChange = (event) => {	
		// console.log(this)
		this.setState({
			[event.target.name]: event.target.value
		})
	}


		editIntro = (firstName, lastName, bio) => {
		// event.preventDefault()
			
			console.log(this.state)
			axios.put('/auth/user', {
				firstName: firstName,
				lastName: lastName,
				bio: bio,
				email: this.state.email
				// location: this.state.location
			}).then(response => {
				console.log(response)
				console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
				console.log("Intro Updated")
				console.log("_________________________________")

				axios.get("/auth/fulluser", {
				params:{
					email: this.state.email
				}}
				).then(response2 => {
					console.log("RESPONSE IN _getAfterDbUpdate")
					console.log(response2)

					this.setState({
							firstName: firstName,
							lastName: lastName,
							bio: bio
					})
				})
		})
	}//Close editIntro function

	_getSkills = () =>{
		return axios.get("/auth/skills", {params: {email: this.state.email}
		})
	}


	handleAddSkill = (skillName, skillValue) => {
		alert("hit client side handleAddSkill function")
		// var skillArray = []

		// skillArray.push({skillName: skillName, skillValue: skillValue})
		// var name = skillArray[0].skillName
		// var value = skillArray[0].skillArray
		// var email = this.state.email

		alert(skillName)
		alert(skillValue)


		axios.put('/auth/skills', {
	    skillName: skillName,
	    value: skillValue,
	    email: this.state.email
    } //end post DATA
		).then(response => {
			console.log(response.data)
			console.log("DATA POSTED")

			this._getSkills()
				.then(res => {
					console.log("RESPONSE IN _getSkills")
					console.log(res)

					var newSkillsArray = []
 
					for(var i=0; i< res.data.skills.length; i++){
						newSkillsArray.push(res.data.skills[i])
					}

					this.setState({
						skills: newSkillsArray
					})
			})
		})
	}

	_getInitialSkills = () =>{
		console.log("before getting inital database skills")
		const email = this.state.email

		axios.get('auth/skills', {params: {email}
		}).then(res =>{
			console.log("response from initial database skills")
			console.log(res)

			var newSkillsArray = []
 
					for(var i=0; i< res.data.skills.length; i++){
						newSkillsArray.push(res.data.skills[i])
					}

					this.setState({
						skills: newSkillsArray
					})
		})
	}

	_handleProfileClick = () => {
		this.setState({
			redirectTo: '/profile'
		})
	}

	_handleClickPerson = () => {
		this.setState({
			redirectTo: '/sarah'
		})
	}



	render() {
		

		//TO IMPROVE THIS WE CAN USE A SWITCH

		if(this.state.redirectTo =="/profile") {
			console.log('redirecting to profile route')

			return <Main handleChange={this.handleChange} editIntro={this.editIntro} idPic={this.state.idPic}
			firstName={this.state.firstName} lastName={this.state.lastName} pic = {this.state.pic}
			bio={this.state.bio} skills={this.state.skills} portfolio={this.state.portfolio} friends={this.state.friends}
			location={this.state.location} handleAddSkill = {this.handleAddSkill} skills= {this.state.skills} 
			getInitialSkills= {this._getInitialSkills} _handleProfileClick={this._handleProfileClick}
			_handleClickPerson= {this._handleClickPerson}
			/>
		}

		if(this.state.redirectTo == "/home"){
			return <MainHomePage firstName={this.state.firstName} lastName={this.state.lastName} _handleProfileClick={this._handleProfileClick}/>
		}

		if(this.state.redirectTo == "/sarah"){
			return <SarahNetworkProfile />
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