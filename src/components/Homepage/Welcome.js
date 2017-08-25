import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Welcome extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					<h3><strong> Welcome Back, {this.props.firstName}</strong></h3>
				</div>

				<hr />
				
			</div>

		);
	}
};

export default Welcome;