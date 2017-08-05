import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Skills extends React.Component {

	render() {
		return (

			<div>
				<div>
					<div className="row">
						{/* SKILL SECTION TITLE */}
						<div className="col s8 left-align">
							<h5> SKILLS </h5>
						</div>
						{/* END SKILL SECTION TITLE */}

						{/* EDIT ICON */}
						<Modal
								header='Add/Edit Skills'
								fixedFooter
								trigger={
									<div className="col s4 right-align">
										<a href="#"><i className="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i></a>
									</div>
									
								}> 
								<p><strong>UPDATE SKILL NAME AND INPUT YOUR PROFICIENCY IN THAT SKILL (rounded up by five)</strong></p>

								{/* UPDATE SKILLS */}
								<div className="row">
							    <form className="col s12">

							    	{/* SKILL ONE ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s2">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Skill One</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p class="range-field">
										      <input type="range" id="test5" min="0" max="100" />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}

							        {/* SKILL DELETE ICON */}
							        <div className="input-field col s1">
							        	<br />
							          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
							        </div>
							        {/* END SKILL DELETE ICON */}
							      </div>
							    	{/* END SKILL ONE ROW */}


							    	{/* SKILL TWO ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s2">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Skill Two</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p className="range-field">
										      <input type="range" id="test5" min="0" max="100" />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}

							        {/* SKILL DELETE ICON */}
							        <div className="input-field col s1">
							        	<br />
							          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
							        </div>
							        {/* END SKILL DELETE ICON */}
							      </div>
							    	{/* END SKILL TWO ROW */}


							    	{/* SKILL THREE ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s2">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Skill Three</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p class="range-field">
										      <input type="range" id="test5" min="0" max="100" />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}

							        {/* SKILL DELETE ICON */}
							        <div className="input-field col s1">
							        	<br />
							          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
							        </div>
							        {/* END SKILL DELETE ICON */}
							      </div>
							    	{/* END SKILL THREE ROW */}


							    	{/* SKILL FOUR ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s2">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Skill Four</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p class="range-field">
										      <input type="range" id="test5" min="0" max="100" />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}

							        {/* SKILL DELETE ICON */}
							        <div className="input-field col s1">
							        	<br />
							          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
							        </div>
							        {/* END SKILL DELETE ICON */}
							      </div>
							    	{/* END SKILL FOUR ROW */}

							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large waves-effect waves-light" type="submit" name="action">
												UPDATE SKILLS
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}
							    </form>	
								</div>
								{/* END UPDATE SKILLS */}

								<hr />

								{/* ADD NEW SKILL */}
								<div className="row">
								<p><strong>ADD ANY ADDITIONAL SKILLS</strong></p>
							    <form className="col s12">

							    	{/* SKILL ONE ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s3">
							          <input id="skill_name" type="text" className="validate" />
							          <label for="skill_name">Add New Skill</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p class="range-field">
										      <input type="range" id="test5" min="0" max="100" />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}
							      </div>
							    	{/* END SKILL ONE ROW */}


							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large blue lighten-1 waves-effect waves-light" type="submit" name="action">
												ADD NEW SKILL
										  </button>
									  </div>
										{/* END SUBMIT BUTTON */}
							    </form>	
								</div>
								{/* END ADD NEW SKILL */}


						</Modal>
						{/* END EDIT ICON */}

					</div>

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>Skill 1</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-success fifty" role="progressbar" 
							  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">50% Complete (success)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>Skill 2</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-info fifty" role="progressbar" 
							  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">50% Complete</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>Skill 3</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-warning fifty" role="progressbar" 
							  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">50% Complete (warning)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6>Skill 4</h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-danger fifty" role="progressbar" 
							  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">50% Complete (danger)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}
				</div>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Skills;