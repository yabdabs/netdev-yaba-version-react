import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
import SignIn from './SignIn'
import SignUp from './SignUp'

class MainForm extends Component {
	constructor() {
		super()
		this.state = {
			email: "",
      password: "",
      firstName: "",
      lastName: "",
      signUpEmail:"",
      signUpPassword: "",
      // redirectTo: ""
      // loggedIn: false,
		}
		// this.googleSignin = this.googleSignin.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
		// this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (event) => {
		console.log(this)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) =>{
		console.log(this)
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		console.log(this.state.email)
		console.log(this.state.password)
		this.props._handleHomeRedirect
	}

		handleSignUp = (event) => {
			event.preventDefault()
			// TODO - validate!
			axios
				.post('/auth/signup', {
					email: this.state.signUpEmail,
					password: this.state.signUpPassword,
					firstName: this.state.firstName,
					lastName: this.state.lastName
				})
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log('youre good')
						this.props._handleRedirect
						// debugger
					} else {
						console.log('duplicate')
					}
				})
		}

	render() {
		if (this.props.redirectTo) {
			console.log('redirecting')
			return <Redirect to={{ pathname: this.props.redirectTo }} />
		} else {
			return (

			<div>
				<SignIn handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} email={this.state.email} password={this.state.password}/>

				<SignUp handleChange ={this.handleChange} handleSignUp = {this.handleSignUp}  signUpEmail={this.state.signUpEmail} signUpPassword={this.state.signUpPassword}
				firstName= {this.state.firstName} lastName={this.state.lastName}/>
			</div>
			)
		}
	}

}

export default MainForm
