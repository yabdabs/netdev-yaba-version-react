import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

import Feed from './Feed';

class Background extends React.Component { 

	render() {
		return (

			<div id="pattern_6">

				{/* TOP MARGIN */}
				<div className="row">
					<br /><br />
				</div>
				{/* END TOP MARGIN */}


				{/* CONTENT ROW */}
				<div className="row">

					{/* SIDE MARGIN */}
					<div className="col s2">
					</div>
					{/* END SIDE MARGIN */}


					<Feed firstName={this.props.firstName} lastName={this.props.lastName} />


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