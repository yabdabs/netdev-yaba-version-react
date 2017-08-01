import React from 'react';
import {Button, Modal} from 'react-materialize';
// import helper from '../util/helper';



class Intro extends React.Component {

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
								<h4 className="username">First Lastname</h4>
							</div>
							{/* END USER NAME */}

							{/* EDIT ICON */}
							<Modal
								header='Edit Profile Intro'
								fixedFooter
								trigger={
									<div className="col s4 right-align">
										<i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i>
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
							          <input id="first_name" type="text" className="validate" />
							          <label for="first_name">First Name</label>
							        </div>
							        {/* END FIRST NAME FIELD */}

							        {/* LAST NAME FIELD */}
							        <div className="input-field col s6">
							          <input id="last_name" type="text" className="validate" />
							          <label for="last_name">Last Name</label>
							        </div>
							        {/* END LAST NAME FIELD */}
							      </div>

							      <div className="row">
							      	{/* SUMMARY FIELD */}
							        <div className="input-field col s12">
							          <textarea id="textarea1" className="materialize-textarea"></textarea>
							          <label for="textarea1">Summary (Give a Brief Description of Who You Are)</label>
							        </div>
							        {/* END SUMMARY FIELD */}
							      </div>

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large waves-effect waves-light" type="submit" name="action">
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
							<p className="profile-bio">Full Stack Web Developer with a passion for technology and a love of 
							coding. Dedicated to adapting and learning new languages and frameworks with disciplines in 
							HTML5, CSS3, JavaScript, jQuery, Node, SQL, and MongoDB. A natural knack for Front-End design 
							with an artistic approach and an eye for detail. Familiar with Front-End framworks like 
							Bootstrap, Materialize, React, Angular, and more.</p>
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