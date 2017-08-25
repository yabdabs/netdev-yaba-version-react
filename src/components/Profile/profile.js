//Import Components
import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

import Intro from './intro';
import Skills from './skills';
import Projects from './projects';
import Network from './network';
import Contact from './contact';
//Import || Require packages

import axios from 'axios'

class Profile extends React.Component {

	constructor() {
		super()
	} //Close Constructor



	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Intro handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
					bio={this.props.bio} location={this.props.location} pic={this.props.pic}/>
				<Skills handleAddSkill= {this.props.handleAddSkill} skills= {this.props.skills} getInitialSkills= {this.props.getInitialSkills}/>
				<Projects handleChange={this.handleChange}/>
				<Network />
				<Contact handleChange={this.handleChange}/>
			</div>

		);
	}
};  //Close Component


export default Profile;


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
 // ALL THE JS THAT IS NOT ESSENTIAL FOR MY FRONT-END RIGHT NOW IS BELOW \\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\


// 	//CALLING HELPER FUNCTIONS HERE OR IN GRANDPARENT (MAIN.JS)
// componentDidMount(){
// console.log("Component Mounted!!!");
// //GET DEV NAME REQUEST
// helpers.getDevName().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// //GET DEV PIC REQUEST
// helpers.getDevPicture().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});


// //GET DEV BIO REQUEST
// helpers.getDevBio().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// //GET DEV LOC REQUEST
// helpers.getDevLocation().then(response => {
// // BLOCK OF CODE
// this.setState({name: response.data});

// }


// }

// //or Declare GET FUNCTIONS HERE AND PASS TO CHILDREN

// helpers.getDevName = event => {
// 	this.setState({name: this.state.name???})
// }

// helpers.getDevPicture = event => {
// 	this.setState({picture: this.state.name???})
// }

// helpers.getDevBio = event => {
// 	this.setState({bio: this.state.name???})
// }

// helpers.getDevLocation = event => {
// 	this.setState({location: this.state.name???})
// }

// 	render(){
// 		return (
// 			<Intro
// 			getDevName= {this.getDevName}
// 			getDevPicture= {this.getDevName}
// 			getDevBio= {this.getDevName}
// 			getDevLocation= {this.getDevName}
// 			/>
// 			<Skills />
// 			<Portfolio />
// 			<Network />
// 			<Contact />
// 			)//Close Return
// 	}//Close Render