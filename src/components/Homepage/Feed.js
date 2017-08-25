import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

import Welcome from './Welcome';
import Tech from './Tech';
import Network from './Network';
import Companies from './Companies';



class Feed extends React.Component {

	render() {
		return (

			<div className="col s8 profile-content z-depth-3">
				<Welcome firstName={this.props.firstName} lastName={this.props.lastName}/>
				<Tech />
				<Network />
				<Companies />
			</div>

		);
	}
};


export default Feed;