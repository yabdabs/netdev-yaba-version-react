import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Projects extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROJECT SECTION TITLE */}
					<div className="col s8 left-align">
						<h5><strong>RECENT PROJECTS</strong></h5>
					</div>
					{/* END PROJECT SECTION TITLE */}

					{/* EDIT ICON */}
					<div className="col s4 right-align">

					</div>
					{/* END EDIT ICON */}

				</div>

				<div className="row">
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6><strong>JediMindFlix</strong></h6>
						<img src="assets/img/project-1.png" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><strong><a href="#">DEMO</a> | <a href="#">GitHub</a></strong></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6><strong>Train Scheduler</strong></h6>
						<img src="assets/img/project-2.png" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><strong><a href="#">DEMO</a> | <a href="#">GitHub</a></strong></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6><strong>Pawsome</strong></h6>
						<img src="assets/img/project-3.png" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><strong><a href="#">DEMO</a> | <a href="#">GitHub</a></strong></p>
					</div>
					{/* END PROJECT DIV */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Projects;