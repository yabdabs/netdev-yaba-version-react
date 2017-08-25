import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Network from './Network';
import Contact from './Contact';



class Profile extends React.Component {

	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Intro />
				<Skills />
				<Projects />
				<Network />
				<Contact />
			</div>

		);
	}
};


export default Profile;