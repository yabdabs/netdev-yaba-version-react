import React from 'react';
// import helper from '../util/helper';

import Profile from './profile';

class Background extends React.Component { 

	render() {
		return (

			<div>
				{/* TOP MARGIN */}
				<div className="row">
					<br /><br /><br /><br />
				</div>
				{/* END TOP MARGIN */}

				{/* CONTENT ROW */}
				<div className="row">

					{/* SIDE MARGIN */}
					<div className="col s2">
					</div>
					{/* END SIDE MARGIN */}


					<Profile handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
			bio={this.props.bio} skills={this.props.skills} portfolio={this.props.portfolio} friends={this.props.friends}
			location={this.props.location} handleAddSkill= {this.props.handleAddSkill}/>


					{/* SIDE MARGIN */}
					<div className="col s2">
					</div>
					{/* END SIDE MARGIN */}

				</div>
				{/* END CONTENT ROW */}

				{/* BOTTOM MARGIN */}
				<div className="row">
					<br /><br /><br /><br />
				</div>
				{/* END BOTTOM MARGIN */}
			</div>

		);
	}
};
	
export default Background;