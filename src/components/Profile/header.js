import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';


class Header extends React.Component { 
	
	render() {
		return (

			<div>
			{/* HEADER NAVBAR */}
			<div className="navbar-fixed">
				<nav id="dyna-nav" role="navigation">
			    <div className="nav-wrapper container">
						
						<div className="row">

							{/* LOGO */}
							<div className="col s4">
					      <a id="logo" href="/" className="brand-logo">
					      NetDev.me</a>
							</div>
							{/* END LOGO */}

							{/* SEARCH BAR */}
							<div className="col s4">
								<div className="row">

									<div className="col s1">
										<i className="fa fa-search nav-search" aria-hidden="true"></i>
									</div>

									<div className="col s11">
										<form>
							        <div className="input-field">
							          <input id="search" type="search" required />
							          <label className="label-icon" for="search"></label>
							        </div>
							      </form>	
						      </div>

						    </div>
							</div>
							{/* END SEARCH BAR */}


							{/* USER ICONS */}
							<div className="col s4">
					      <ul className="right hide-on-med-and-down">
					      	<li><a href="#"><i className="fa fa-user nav-icon" aria-hidden="true"></i></a></li>


					      	<Modal
										header='INBOX'
										bottomSheet
										trigger={
											<li><a href="#"><i className="fa fa-envelope nav-icon" aria-hidden="true"></i></a></li>
										}>
										<div className="row">
											<div className="col s1">
											</div>

											<div className="col s10">
												
												<div className="row message-row">
													<div className="col s2 message-icon">
														<Chip>
															<img src='assets/img/network.jpg' alt='Contact Person' />
															Jane Doe
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>HEY, I Really Like Your Work! Ever Collaborate...</strong></p>
													</div>
												</div>

												<div className="row message-row">
													<div className="col s2 message-icon">
														<Chip>
															<img src='assets/img/network.jpg' alt='Contact Person' />
															John Smith
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>How You Doing Bud? It's been a while...</strong></p>
													</div>
												</div>

												<div className="row message-row">
													<div className="col s2 message-icon">
														<Chip>
															<img src='assets/img/network.jpg' alt='Contact Person' />
															X Corp
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>This is Todd from X Corp, We have a job offer...</strong></p>
													</div>
												</div>

											</div>

											<div className="col s1">
											</div>
										</div>
									</Modal>


					        <li><a href="#"><i className="fa fa-cog nav-icon" aria-hidden="true"></i></a></li>
					      </ul>
				      </div>
				    	{/* END USER ICONS */}

			      </div>
			    </div>
			  </nav>
		  </div>
			{/* END HEADER NAVBAR */}
			</div>
			
		);
	}
};
	

export default Header;