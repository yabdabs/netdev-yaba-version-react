import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Intro extends React.Component {

	render() {
		return(

			<div>
				<div className="row">
					{/* PROFILE PIC */}
					<div className="col s4 center-align">
						<img src="assets/img/network-10.jpg" alt="" className="circle responsive-img profile-pic z-depth-2" />
					</div>
					{/* END PROFILE PIC* /}
					{/* PROFILE INFO */}
					<div className="col s8">
					<br />
						<div className="row">
							{/* USER NAME */}
							<div className="col s8 left-align">
								<h4 className="username"><strong>Sarah Anderson</strong></h4>
							</div>
							{/* END USER NAME */}

							{/* EDIT ICON */}
							<div className="col s4 right-align">

							</div>
							{/* END EDIT ICON*/}


						
						</div>

						<div className="row">
							{/* USER BIO */}
							<p className="profile-bio"><strong> A Passionate Back-End Developer that loves to code! Your go-to girl
							for database work with a ton of experience working with Sequelize and MySQL. I personally believe
							Node.js is the best thing invented since sliced bread and I am very comfortable trying out and working
							with new node packages to make any web app project more functional and dynamic. Currently looking to
							collaborate with a Front-End Dev to build something awesome!</strong></p>
							{/* END USER BIO */}
						</div>
					</div>
					{/* END PROFILE INFO */}	
				</div>

				<hr />
				<br />
			</div>

		);
	}
};

export default Intro;

  //~~~~~~~~~~~~~~~~~~~~~~~~~~\\
 // NON ESSENTIAL FRONT-END JS \\
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

//   constructor(){
//   super();

//   // Child has a state that follows the number of clicks
//   this.state = {
//     pic: null,
//     name: null,
//     location: null,
//     bio: null
//   };
// } //close Constructor