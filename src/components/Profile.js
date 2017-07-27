import React from 'react';

import helpers from '../utils/helpers';

class Profile extends React.Component {
	constructor() {
		super();

		this.state ={
			picture: null,
			name: null,
			bio: null,
			location: null,
			skills: null,
			porfolio: [],
			collabs: [null]
			

		};

		this.getDevName = this.state.getDevName.bind(this);
		this.getDevPicture = this.state.getDevPicture.bind(this);
		this.getDevBio = this.state.getDevBio.bind(this);
		this.getDevLocation = this.state.getDevLocation.bind(this);
	} //Close Constructor

//CALLING HELPER FUNCTIONS HERE OR IN GRANDPARENT (MAIN.JS)
componentDidMount(){
console.log("Component Mounted!!!");
//GET DEV NAME REQUEST
helpers.getDevName(this.state.name???).then(response => {
// BLOCK OF CODE
this.setState({name: response.data});

//GET DEV PIC REQUEST
helpers.getDevPicture().then(response => {
// BLOCK OF CODE
this.setState({picture: response.data});


//GET DEV BIO REQUEST
helpers.getDevBio().then(response => {
// BLOCK OF CODE
this.setState({bio: response.data});

//GET DEV LOC REQUEST
helpers.getDevLocation().then(response => {
// BLOCK OF CODE
this.setState({location: response.data});




}




}

//or Declare GET FUNCTIONS HERE AND PASS TO CHILDREN
// 									??????????    
// 									?????????? 
// 									?????????? 
// 									?????????? 
helpers.getDevName = event => {
	this.setState({name: this.state.name???})
}

helpers.getDevPicture = event => {
	this.setState({picture: this.state.picture???})
}

helpers.getDevBio = event => {
	this.setState({bio: this.state.bio???})
}

helpers.getDevLocation = event => {
	this.setState({location: this.state.location???})
}

	render(){
		return (
			<Intro
			getDevName= {this.getDevName}
			getDevPicture= {this.getDevName}
			getDevBio= {this.getDevName}
			getDevLocation= {this.getDevName}
			/>
			<Skills />
			<Portfolio />
			<Network />
			<Contact />
			)//Close Return
	}//Close Render
};//Close Profile Component




export default Profile