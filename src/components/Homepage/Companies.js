import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

class Companies extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					<div className="col s12 left-align">
						<h5><strong>COMPANIES</strong></h5>
					</div>
				</div>


				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="newsfeed-img z-depth-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Highsmithmaycompanywilshire.jpg/250px-Highsmithmaycompanywilshire.jpg"/>
						</div>
						<div className="col s9">
							<br />
							<h5>X Corporation is looking to hire new developers</h5>
							<br />
							<h6>They added that they are looking for Front-End Developers on thier Profile.</h6>
						</div>
					</div>
				</a>

				<br />

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="newsfeed-img z-depth-3" src="http://dissertationwriting-help.co.uk/wp-content/uploads/2017/06/yak-viznachiti-stil-kerivnictva.jpg"/>
						</div>
						<div className="col s9">
							<br />
							<h5>POP Marketing is opening a new office in near your location</h5>
							<br />
							<h6>A new address has been added to thier Profile's Company Location Section.</h6>
						</div>
					</div>
				</a>
				<hr />
				<br />
				<div className="row center-align">
					<button className="btn waves-effect blue lighten-1 waves-light">Refresh Feed</button>
				</div>
			</div>
		);
	}
};
	
export default Companies;