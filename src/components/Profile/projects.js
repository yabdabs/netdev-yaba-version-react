import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Projects extends React.Component {
	constructor(){
		super()

		this.state = {
			title_1: "Project 1 Name",
			img_1: "assets/img/project-placeholder.jpg",
			demo_link_1: "",
			github_link_1: ""
		}
	}

	onSubmit = (event) => {
		event.preventDefault()
		alert("Submitted Info")
		this.setState({
			title_1: "Marvel Trivia Game",
			img_1: "assets/img/screenshot.png",
			demo_link_1: "https://jerling1989.github.io/TriviaGame/",
			github_link_1: "https://github.com/Jerling1989/TriviaGame"
		})
	}

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

							{/* EDIT RECENT PROJECTS */}
							<div className="row">
							    <form className="col s12">

							    	{/* EDIT PROJECT ONE DIV */}
							    	<h6><strong>EDIT PROJECT</strong></h6>

							    	<div className="project-edit-div">
								      <div className="row">
								      	{/* PROJECT TITLE FIELD */}
								        <div className="input-field col s11">
								          <input id="project_title" type="text" className="validate" />
								          <label for="project_title">Project One Title</label>
								        </div>
								        {/* END PROJECT TITLE FIELD */}

								      	{/* DELETE PROJECT ICON */}
								        <div className="input-field col s1">
								          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
								        </div>
								      	{/* END DELETE PROJECT ICON */}
								        
								      </div>

								      <div className="row">
								      	{/* PROJECT SCREENSHOT UPLOAD */}
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
								        {/* END PROJECT SCREENSHOT UPLOAD */}
								      </div>

								      <div className="row">
								      	{/* DEMO LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="demo_link" type="text" className="validate" />
								          <label for="demo_link">Demo Link</label>
								        </div>
								        {/* END DEMO LINK FIELD */}

								        {/* GITHUB LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="github_link" type="text" className="validate" />
								          <label for="github_link">GitHub Link</label>
								        </div>
								        {/* END GITHUB LINK FIELD */}
								      </div>
							      </div>
							      {/* END EDIT PROJECT ONE DIV */}

							      <br />

							      {/* EDIT PROJECT TWO DIV */}
							      <h6><strong>EDIT PROJECT</strong></h6>

							    	<div className="project-edit-div">
								      <div className="row">
								      	{/* PROJECT TITLE FIELD */}
								        <div className="input-field col s11">
								          <input id="project_title" type="text" className="validate" />
								          <label for="project_title">Project Two Title</label>
								        </div>
								        {/* END PROJECT TITLE FIELD */}

								      	{/* DELETE PROJECT ICON */}
								        <div className="input-field col s1">
								          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
								        </div>
								      	{/* END DELETE PROJECT ICON */}
								        
								      </div>

								      <div className="row">
								      	{/* PROJECT SCREENSHOT UPLOAD */}
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
								        {/* END PROJECT SCREENSHOT UPLOAD */}
								      </div>

								      <div className="row">
								      	{/* DEMO LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="demo_link" type="text" className="validate" />
								          <label for="demo_link">Demo Link</label>
								        </div>
								        {/* END DEMO LINK FIELD */}

								        {/* GITHUB LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="github_link" type="text" className="validate" />
								          <label for="github_link">GitHub Link</label>
								        </div>
								        {/* END GITHUB LINK FIELD */}
								      </div>
							      </div>
							      {/* END EDIT PROJECT TWO DIV */}

							      <br />

							      {/* EDIT PROJECT THREE DIV */}
							      <h6><strong>EDIT PROJECT</strong></h6>

							    	<div className="project-edit-div">
								      <div className="row">
								      	{/* PROJECT TITLE FIELD */}
								        <div className="input-field col s11">
								          <input id="project_title" type="text" className="validate" />
								          <label for="project_title">Project Three Title</label>
								        </div>
								        {/* END PROJECT TITLE FIELD */}

								      	{/* DELETE PROJECT ICON */}
								        <div className="input-field col s1">
								          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
								        </div>
								      	{/* END DELETE PROJECT ICON */}
								        
								      </div>

								      <div className="row">
								      	{/* PROJECT SCREENSHOT UPLOAD */}
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
								        {/* END PROJECT SCREENSHOT UPLOAD */}
								      </div>

								      <div className="row">
								      	{/* DEMO LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="demo_link" type="text" className="validate" />
								          <label for="demo_link">Demo Link</label>
								        </div>
								        {/* END DEMO LINK FIELD */}

								        {/* GITHUB LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="github_link" type="text" className="validate" />
								          <label for="github_link">GitHub Link</label>
								        </div>
								        {/* END GITHUB LINK FIELD */}
								      </div>
							      </div>
							      {/* END EDIT PROJECT THREE DIV */}

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button 
											onClick={this.onSubmit} className="btn-large waves-effect waves-light" type="submit" name="action">
												EDIT PROJECTS
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}

							    </form>	
								</div>
								{/* END EDIT RECENT PROJECTS */}

								<hr />


								{/* EDIT RECENT PROJECTS */}
								<div className="row">
							    <form className="col s12">

							    	{/* ADD NEW PROJECT DIV */}
							    	<h6><strong>ADD PROJECT</strong></h6>

							    	<div className="project-edit-div">
								      <div className="row">
								      	{/* PROJECT TITLE FIELD */}
								        <div className="input-field col s12">
								          <input id="project_title" type="text" className="validate" />
								          <label for="project_title">New Project Title</label>
								        </div>
								        {/* END PROJECT TITLE FIELD */}
								      </div>

								      <div className="row">
								      	{/* PROJECT SCREENSHOT UPLOAD */}
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
								        {/* END PROJECT SCREENSHOT UPLOAD */}
								      </div>

								      <div className="row">
								      	{/* DEMO LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="demo_link" type="text" className="validate" />
								          <label for="demo_link">Demo Link</label>
								        </div>
								        {/* END DEMO LINK FIELD */}

								        {/* GITHUB LINK FIELD */}
								        <div className="input-field col s6">
								          <input id="github_link" type="text" className="validate" />
								          <label for="github_link">GitHub Link</label>
								        </div>
								        {/* END GITHUB LINK FIELD */}
								      </div>
							      </div>
							      {/* END ADD NEW PROJECT DIV */}

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large blue lighten-1 waves-effect waves-light" type="submit" name="action">
												ADD NEW PROJECT
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}

							    </form>	
								</div>
								{/* END EDIT RECENT PROJECTS */}

					</Modal>
					{/* END EDIT ICON */}

				</div>

				<div className="row">
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>{this.state.title_1}</h6>
						<img src={this.state.img_1} alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a target="_blank" href={this.state.demo_link_1}>DEMO</a> | <a target="_blank" href={this.state.github_link_1}>GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project 2 Name</h6>
						<img src="assets/img/project-placeholder.jpg" alt="" 
						className="responsive-img img-cell post-pic-gallery z-depth-3" />
						<p><a href="#">DEMO</a> | <a href="#">GitHub</a></p>
					</div>
					{/* END PROJECT DIV */}
					
					{/* PROJECT DIV */}
					<div className="col s4">
						<h6>Project 3 Name</h6>
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