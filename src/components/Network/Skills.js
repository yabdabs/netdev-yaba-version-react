import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

class Skills extends React.Component {

	render() {
		return (

			<div>
				<div>
					<div className="row">
						{/* SKILL SECTION TITLE */}
						<div className="col s8 left-align">
							<h5><strong> SKILLS </strong></h5>
						</div>
						{/* END SKILL SECTION TITLE */}

						{/* EDIT ICON */}
						<div className="col s4 right-align">

						</div>
						{/* END EDIT ICON */}

					</div>

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6><strong>MySQL</strong></h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-success hundred" role="progressbar" 
							  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">100% Complete (success)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6><strong>MongoDB</strong></h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-info eighty-five" role="progressbar" 
							  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">85% Complete</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6><strong>Node.js</strong></h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-warning ninety-five" role="progressbar" 
							  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">95% Complete (warning)</span>
							  </div>
							</div>
						</div>
					</div>
					{/* END SKILL PROGRESS BAR */}

					{/* SKILL PROGRESS BAR*/}
					<div className="row skill-div">
						<div className="col s1">
							<h6><strong>Express</strong></h6>
						</div>
						<div className="col s11">
							<div className="progress">
							  <div className="progress-bar progress-bar-danger eighty" role="progressbar" 
							  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
							    <span className="sr-only">80% Complete (danger)</span>
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