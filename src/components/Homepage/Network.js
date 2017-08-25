import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
// import IconButton from 'material-ui/IconButton';


class Network extends React.Component {

	render() {
		return (

			<div>
				<div className="row">
					{/* NETWORK SECTION TITLE */}
					<div className="col s12 left-align">
						<h5><strong>NETWORK</strong></h5>
					</div>
					{/* END NETWORK SECTION TITLE */}
				</div>

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="circle newsfeed-img z-depth-3" src="assets/img/network-1.jpg"/>
						</div>
						<div className="col s9">
							<br />
							<br />
							<h5><strong>Jessica Madares</strong> changed her Profile Picture and Added a new Project!</h5>
							<br />
							<h6>Check out her profile to see her changes.</h6>
						</div>
					</div>
				</a>

				<br />

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="circle newsfeed-img z-depth-3" src="assets/img/network-9.jpeg"/>
						</div>
						<div className="col s9">
							<br />
							<br />
							<br />
							<h5><strong>Frank Schmidt</strong> Added some new Skills to his Profile!</h5>
							<br />
							<h6>He is now proficient in jQuery and PHP.</h6>
						</div>
					</div>
				</a>


				<hr />
				<br />
			</div>

		);
	}
};
	
export default Network;