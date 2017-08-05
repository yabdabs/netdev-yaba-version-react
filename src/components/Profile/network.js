import React from 'react';
import helper from '../../util/helper';
import { Button, Modal, Chip } from 'react-materialize';
import IconButton from 'material-ui/IconButton';


class Network extends React.Component {

	render() {
		return (

			<div>
				<div className="row">
					{/* NETWORK SECTION TITLE */}
					<div className="col s12 left-align">
						<h5>NETWORK</h5>
					</div>
					{/* END NETWORK SECTION TITLE */}
				</div>

				<div className="row">
					{/* LEFT ARROW */}
					<div className="col s1 center-align valign-wrapper">
						<a href="#"><i className="fa fa-chevron-left arrow" aria-hidden="true"></i></a>
					</div>
					{/* END LEFT ARROW */}

					<div className="col s1">
						<img src="assets/img/network-1.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Nico Santa Ana"
							tooltip="top-center" tooltipPosition="top-center" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-2.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Mike Russo" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-3.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Joseph Adames" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-4.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Jeff Easley" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-5.png" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Varun Asimilli" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-6.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Mike Yingling" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-7.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Alan Chu" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-8.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Franklin Dawes" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-9.jpeg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="James Dalton" />
					</div>

					<div className="col s1">
						<img src="assets/img/network-10.jpg" alt="" 
							className="responsive-img z-depth-3 network-thumbnail" title="Eric Williams" />
					</div>

					{/* RIGHT ARROW */}
					<div className="col s1 center-align valign-wrapper">
							<a href="#"><i className="fa fa-chevron-right arrow" aria-hidden="true"></i></a>
					</div>
					{/* END RIGHT ARROW */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Network;