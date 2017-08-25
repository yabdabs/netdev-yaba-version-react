import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Contact extends React.Component {

	render() {
		return (
			
			<div className="contact-div">
				<div className="row">
					{/* CONTACT SECTION TITLE */}
					<div className="col s8 left-align">
						<h5>CONTACT</h5>
					</div>
					{/* END CONTACT SECTION TITLE */}
				</div>

				<div className="row">
			    <form className="col s12">

			      <div className="row">
			      	{/* NAME FIELD */}
			        <div className="input-field col s6">
			          <input id="last_name" type="text" className="validate" />
			          <label for="last_name">Name (required)</label>
			        </div>
			        {/* END NAME FIELD */}

			        {/* EMAIL FIELD */}
			        <div className="input-field col s6">
			          <input id="email" type="email" className="validate" />
			          <label for="email">Email (required)</label>
			        </div>
			        {/* END EMAIL FIELD */}
			      </div>

			      <div className="row">
			      	{/* COMPANY FIELD */}
			        <div className="input-field col s6">
			          <input id="last_name" type="text" className="validate" />
			          <label for="last_name">Company</label>
			        </div>
			        {/* END COMPANY FIELD */}

			        {/* PHONE FIELD */}
			        <div className="input-field col s6">
			          <input id="email" type="email" className="validate" />
			          <label for="email">Phone</label>
			        </div>
			        {/* END PHONE FIELD */}
			      </div>

			      <div className="row">
			      	{/* MESSAGE FIELD */}
			        <div className="input-field col s12">
			          <textarea id="textarea1" className="materialize-textarea"></textarea>
			          <label for="textarea1">Message (required)</label>
			        </div>
			        {/* END MESSAGE FIELD */}
			      </div>
						
						{/* SUBMIT BUTTON */}
						<button className="btn waves-effect waves-light">
							Submit
					  </button>
						{/* END SUBMIT BUTTON */}

			    </form>	
				</div>

		    <br />
		    <br />
			</div>

		);
	}
};
	
export default Contact;