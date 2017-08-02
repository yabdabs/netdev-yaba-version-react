import {Button, Modal} from 'react-materialize'
import React from 'react';
// import helper from '../util/helper';


class Projects extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROJECT SECTION TITLE */}
					<div className="col s8 left-align">
						<h5>RECENT PROJECTS</h5>
					</div>
					{/* END PROJECT SECTION TITLE */}

					{/* EDIT ICON */}
					<Modal
							header='Add/Edit Recent Projects'
							fixedFooter
							trigger={
								<div className="col s4 right-align">
									<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
								</div>
								
							}> 

							<div className="row">
								<form className="col s12">

									

								  <div className="row">
									{/* SUMMARY FIELD */}
									<div className="input-field col s12">
									  <input id="project_title" type="text" className="validate" />
									  <label htmlFor="project_title">Project Title</label>
									</div>
									{/* END SUMMARY FIELD */}
								  </div>

								  <div className="row">
									{/* PROFILE PICTURE UPLOAD */}
									<div className="input-field col s12">
									  <div className="file-field input-field">
											  <div className="btn red lighten-1">
												<span> &nbsp; &nbsp; &nbsp; Add Project Screenshot &nbsp; &nbsp; &nbsp; </span>
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
									  <input id="demo_link" type="text" className="validate" />
									  <label htmlFor="demo_link">Demo Link</label>
									</div>
									{/* END FIRST NAME FIELD */}

									{/* LAST NAME FIELD */}
									<div className="input-field col s6">
									  <input id="github_link" type="text" className="validate" />
									  <label htmlFor="github_link">GitHub Link</label>
									</div>
									{/* END LAST NAME FIELD */}
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
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
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