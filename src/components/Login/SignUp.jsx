import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { Button, Toast } from 'react-materialize';

class SignUp extends React.Component{
	constructor(){
		super()

	}

	render(){
		return(
		<div id="login-page">
			{/*TOP MARGIN*/} 
			<div className="row">
			<br/><br/><br/><br/>
			</div>

			<div className="row">
				{/*<!-- SIDE MARGIN -->*/}
				<div className="col s4"></div>
				{/*<!-- END SIDE MARGIN -->
				<!-- SIGN UP FORM -->*/}
				<div className="col s4 signup-form z-depth-3">
					{/*<!-- DEV/COMPANY TAB SELECTION -->*/}
					<ul id="signup-selection" className="tabs">
						<li className="tab col s6"><a className="active"  href="#dev-signup">Developer</a></li>
						<li className="tab col s6"><a href="#comp-signup">Company</a></li>
					</ul>
					{/* <!-- END DEV/COMPANY TAB SELECTION -->

					<!-- DEVELOPER SIGN UP -->*/}
						<div id="dev-signup" className="col s12">
							<h5>DEVELOPER SIGN UP</h5>
							<div className="row">
								<form className="col s12">
									<div className="row">
										<div className="input-field col s12">
											<input 
												placeholder="First Name"
												id="first_name"
												type="text"
												name="firstName"
												className="validate"
												onChange={this.props.handleChange}
												value={this.props.firstName}
											/>
											<label htmlFor="first_name"></label>
										</div>
									</div>

									<div className="row">
										<div className="input-field col s12">
											<input
											placeholder="Last Name"
											id="last_name" 
											type="text"
											name="lastName"
											className="validate"
											onChange={this.props.handleChange}
											value={this.props.lastName}
											/>
											<label htmlFor="last_name"></label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input
												placeholder="Email"
												id="email"
												type="email"
												name="signUpEmail"
												className="validate"
												onChange={this.props.handleChange}
												value={this.props.signUpEmail}
											/>
											<label htmlFor="email"></label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input 
												placeholder="Password"
												id="password"
												type="password"
												className="validate"
												name="signUpPassword"
												onChange={this.props.handleChange}
												value={this.props.signUpPassword}
											/>
											<label htmlFor="password"></label>
										</div>
									</div>

									<div className="row center-align">

										<Toast toast="YOU CAN NOW SIGN IN">
										JOIN NOW
										</Toast>

										{/*<button id="toast" className="btn-large waves-effect waves-light" type="submit" name="action" id="join-now" onClick={this.props.handleSignUp}>
											Join Now									
										</button>*/}
										

									</div>
								</form>   
							</div>
						</div>
					{/*<!-- END DEVELOPER SIGN UP -->*/}

					{/*<!-- COMPANY SIGN UP -->*/}
					  <div id="comp-signup" class="col s12">

					  	<h5>COMPANY SIGN UP</h5>

							<div className="row">
						    <form className="col s12">

						      <div className="row">
						        <div className="input-field col s12">
						          <input placeholder="Company Name" id="company_name" type="text" className="validate" />
						          <label for="company_name"></label>
						        </div>
						      </div>

						      <div className="row">
						        <div className="input-field col s12">
						          <input placeholder="Email" id="email" type="email" className="validate" />
						          <label for="email"></label>
						        </div>
						      </div>
					
						      <div className="row">
						        <div className="input-field col s12">
						          <input placeholder="Password" id="password" type="password" className="validate" />
						          <label for="password"></label>
						        </div>
						      </div>
									
									<div className="row center-align">
										<button className="btn waves-effect waves-light" type="submit" name="action">
											Join Now
									  </button>
								  </div>

						    </form>	
							</div>
					  </div>
					{/*<!-- END COMPANY SIGN UP -->*/}
					<br/>
					<br/>
				</div>
			</div>
			<br /><br /><br /><br /><br /><br /><br /><br /><br />
		</div>
		)
	}
}

export default SignUp