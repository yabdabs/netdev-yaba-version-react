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
		
		// this.googleSignin = this.googleSignin.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
		// this.handleChange = this.handleChange.bind(this)
	}

	
	handleSubmit = (event) =>{
		// console.log(this)
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.props.email, this.props.password)
		console.log(this.props.email)
		console.log(this.props.password)
		this.props._handleHomeRedirect
	}

		handleSignUp = (event) => {
			event.preventDefault()
			// TODO - validate!
			axios
				.post('/auth/signup', {
					email: this.props.signUpEmail,
					password: this.props.signUpPassword,
					firstName: this.props.firstName,
					lastName: this.props.lastName
				})
				.then(response => {
					console.log(response)
					alert("CLEAR FORM LATER")
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
				<SignIn handleChange = {this.props.handleChange} handleSubmit = {this.handleSubmit} email={this.props.email} password={this.props.password}/>

				<SignUp handleChange ={this.props.handleChange} handleSignUp = {this.handleSignUp}  signUpEmail={this.props.signUpEmail} signUpPassword={this.props.signUpPassword}
				firstName= {this.props.firstName} lastName={this.props.lastName}/>
			</div>
			)
		}
	}

}

export default MainForm
