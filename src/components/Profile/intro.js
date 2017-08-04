import React from 'react';
import {Button, Modal} from 'react-materialize';
// import helper from '../util/helper';
// import axios from 'axios'



class Intro extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			firstName: props.firstName,
   lastName: props.lastName,
   bio: props.bio
		}//close State
	}//close Constructor

	handleChange = (event) => {
		// console.log(this)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submit= (event) =>{
		event.preventDefault()
		this.props.editIntro(this.state.firstName, this.state.lastName, this.state.bio)
	}
	// componentWillMount(){
// axios.get to fetch Intro fields from Database
	// }

	resetInput = (event) =>{
		console.log("hit reset")
			this.setState({
			firstName: this.props.firstName,
   lastName: this.props.lastName,
   bio: this.props.bio
		})//
	}

	render() {
		return(

			<div>
				<div className="row">
					{/* PROFILE PIC */}
					<div className="col s4 center-align">
						<img src="assets/img/user-placeholder.jpg" alt="" className="circle responsive-img profile-pic z-depth-2" />
					</div>
					{/* END PROFILE PIC* /}
					{/* PROFILE INFO */}
					<div className="col s8">
					<br />
					
						<div className="row">
							{/* USER NAME */}
							<div className="col s8 left-align">

								<h4 className="username">{this.props.firstName} {this.props.lastName}</h4>  {/*Change First Lastname to this.state || this.props.firstname && lastname*/}
							</div>
							{/* END USER NAME */}

							{/* EDIT ICON */}
							<Modal
								header='Edit Profile Intro'
								fixedFooter
								trigger={
									<div className="col s4 right-align">
										<i onClick={this.resetInput} className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i>
									</div>
								}>
									
								<div className="row">
							    <form className="col s12">

							    	<div className="row">
							      	{/* PROFILE PICTURE UPLOAD */}
							        <div className="input-field col s12">
							          <div className="file-field input-field">
										      <div className="btn red lighten-1">
										        <span> &nbsp; &nbsp; &nbsp; &nbsp; Choose Profile Picture &nbsp; &nbsp; &nbsp; &nbsp; </span>
										        <input type="file" />
										      </div>
										      <div className="file-path-wrapper">
										        <input className="file-path validate" type="text" />
										      </div>
										    </div>
							        </div>
							        {/* END PROFILE PICTURE UPLOAD */}
							      </div>

							      <div className="row">
							      	{/* FIRST NAME FIELD */}
							        <div className="input-field col s6">
							          <input
								          id="first_name" 
								          type="text" 
								          className="validate" 
								          name="firstName"
								          value={this.state.firstName}
								          onChange={this.handleChange}
							          />
							          <label htmlFor="first_name">First Name</label>
							        </div>
							        {/* END FIRST NAME FIELD */}

							        {/* LAST NAME FIELD */}
							        <div className="input-field col s6">
							          <input
							           id="last_name"
							           type="text"
							           className="validate"
							           name="lastName"
							           value={this.state.lastName}
							           onChange={this.handleChange}
							            />
							          <label htmlFor="last_name">Last Name</label>
							        </div>
							        {/* END LAST NAME FIELD */}
							      </div>

							      <div className="row">
							      	{/* SUMMARY FIELD */}
							        <div className="input-field col s12">
							          <textarea
							           id="textarea1"
							           className="materialize-textarea"
							           name="bio"
							           value={this.state.bio}
							           onChange={this.handleChange}
							           ></textarea>
							          <label htmlFor="textarea1"
							          value={this.state.bio}></label>
							        </div>
							        {/* END SUMMARY FIELD */}
							      </div>

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large waves-effect waves-light modal-close" type="submit" name="action"
											onClick={this.submit}>
												Submit
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}

							    </form>	
								</div>


							</Modal>
							{/* END EDIT ICON */}

						
						</div>

						<div className="row">
							{/* USER BIO */}
							{/*Change Bio to this.props.bio or this.state.bio*/}
							<p className="profile-bio">{this.props.bio}</p>
						{/* END USER BIO */}
						</div>
					</div>
					{/* END PROFILE INFO */}	


				{/*
					<Modal
						header='Modal Header'
						fixedFooter
						trigger={
							<Button waves='light'>MODAL WITH FIXED FOOTER</Button>
						}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</Modal>
				*/}

				</div>

				<hr />
				<br />
			</div>

		);
	}
};

export default Intro;

  //~~~~~~~~~~~~~~~~~~~~~~~~~~\\
 // NON ESSENTIAL FRONT-END JS \\
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

//   constructor(){
//   super();

//   // Child has a state that follows the number of clicks
//   this.state = {
//     pic: null,
//     name: null,
//     location: null,
//     bio: null
//   };
// } //close Constructor