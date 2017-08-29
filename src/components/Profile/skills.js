import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Skills extends React.Component {
		constructor(){
		super();

		this.state = {
			skillName: "",
			skillValue: ""
		}//close State
	}//close Constructor

	componentWillMount(){
		this.props.getInitialSkills()
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			[event.target.name]: event.target.value
		})
	}

	addSkillSubmit = (event) =>{
		event.preventDefault()

		console.log("clicked")
		console.log(this.props)
		this.props.handleAddSkill(this.state.skillName, this.state.skillValue)
	}
	
	render() {
		// skill is the value of the current element
  	// 	i is the array index of the current element
  	var percentage = "%"

		var renderSkills = this.props.skills.map((skill, i) => {
			var skillValue = skill.value.toString()
			var Style= {
				width: skillValue.concat(percentage)
			}
			return (
				<div className="row skill-div" id={i} key={i}>
					<div className="col s1">
						<h6>{skill.skillName}</h6>
					</div>
					<div className="col s11">
						<div className="progress">
						  <div className="progress-bar progress-bar-success" role="progressbar" 
						  aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100" style ={Style}>
						    <span className="sr-only"></span>
						  </div>
						</div>
					</div>
				</div>
			)
		})//close map function

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

								{/* ADD NEW SKILL */}
								<div className="row">
								<p><strong>ADD ANY ADDITIONAL SKILLS</strong></p>
							    <form className="col s12">

							    	{/* SKILL ONE ROW */}
							      <div className="row">
							      	{/* SKILL NAME FIELD */}
							        <div className="input-field col s3">
							          <input
							           id="skill_name" 
							           type="text"
							           className="validate" 
							           onChange={this.handleChange}
							           value = {this.state.skillName}
							           name = "skillName"
							          />
							          <label htmlFor="skill_name">Add New Skill</label>
							        </div>
							        {/* END SKILL NAME FIELD */}

							        {/* SKILL EFFICIENCY INPUT */}
							        <div className="input-field col s9">
							        	<br />
							          <p class="range-field">
										      <input type="range"
										       id="test5"
										       min="0" 
										       max="100"
										       onChange={this.handleChange}
										       name ="skillValue" 
										       value ={this.state.skillValue}
										       />
										    </p>
							        </div>
							        {/* END SKILL EFFICIENCY INPUT */}
							      </div>
							    	{/* END SKILL ONE ROW */}


							      <br />
										
										{/* SUBMIT BUTTON */}
										<div className="row">
											<button className="btn-large blue lighten-1 waves-effect waves-light" type="submit" name="action" onClick= {this.addSkillSubmit}>
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


				</div>

				{renderSkills}
				
				<hr />
				<br />
			</div>

		);
	}
};
	
export default Skills;


//put this after line 83 when the time comes
// <p><strong>UPDATE SKILL NAME AND INPUT YOUR PROFICIENCY IN THAT SKILL (rounded up by five)</strong></p>

{/* UPDATE SKILLS */}
								// <div className="row">
							 //    <form className="col s12">

							 //    	{/* SKILL ONE ROW */}
							 //      <div className="row">
							 //      	{/* SKILL NAME FIELD */}
							 //        <div className="input-field col s2">
							 //          <input id="skill_name" type="text" className="validate" />
							 //          <label htmlFor="skill_name">Skill One</label>
							 //        </div>
							 //        {/* END SKILL NAME FIELD */}

							 //        {/* SKILL EFFICIENCY INPUT */}
							 //        <div className="input-field col s9">
							 //        	<br />
							 //          <p class="range-field">
								// 		      <input type="range" id="test5" min="0" max="100" />
								// 		    </p>
							 //        </div>
							 //        {/* END SKILL EFFICIENCY INPUT */}

							 //        {/* SKILL DELETE ICON */}
							 //        <div className="input-field col s1">
							 //        	<br />
							 //          <a href="#"><i className="fa fa-times delete-icon" aria-hidden="true"></i></a>
							 //        </div>
							 //        {/* END SKILL DELETE ICON */}
							 //      </div>
							 //    	{/* END SKILL ONE ROW */}


							    
							 //      <br />
										
								// 		{/* SUBMIT BUTTON */}
								// 		<div className="row">
								// 			<button className="btn-large waves-effect waves-light" type="submit" name="action">
								// 				UPDATE SKILLS
								// 		  </button>
								// 	  </div>
								// 		{/* END SUBMIT BUTTON */}
							 //    </form>	
								// </div>
								// {/* END UPDATE SKILLS */}


								// <hr />