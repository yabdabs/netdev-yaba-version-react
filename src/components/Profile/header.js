import React from 'react';
import { Button, Modal, Chip, Dropdown, NavItem, Input } from 'react-materialize';


class Header extends React.Component { 
	constructor(props){
		super(props);
		this.state={
			background: this.props.background
		}
	}

	handleOptionChange = (event) => {
		this.setState({
			background: event.target.value
		})
	} //close

	//call @ onClick in Submit Button
	submitBackground =(event) => {
		event.preventDefault()
		console.log("submit hit")
		alert("submitBackground HIT!!!")
		this.props.handleBackgroundChange(this.state.background)
	}

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


							<div className="col s4">
					      <ul className="right hide-on-med-and-down">

					      	{/* PROFILE ICON */}
					      	<li><i className="fa fa-user nav-icon" aria-hidden="true" onClick ={this.props._handleProfileClick}></i></li>
					      	{/* PROFILE ICON */}

					      	{/* MESSAGE ICON */}
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
															<img src='assets/img/network-10.jpg' alt='Contact Person' onClick = {this.props._handleClickPerson}/>
															Sarah Anderson
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>HEY, I Really Like Your Work! I'm looking to collaborate with a 
														good Front-End Developer if you're interested. Hope to hear back from you 
														soon!</strong></p>
													</div>
												</div>

												<div className="row message-row">
													<div className="col s2 message-icon">
														<Chip>
															<img src='assets/img/network-9.jpeg' alt='Contact Person' />
															Frank Schmidt
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>How You Doing Bud? It's been a while, we should meet up soon and 
														catch up. There's a hackathon in the city next Saturday, you should totally
														join... unless you're scared I'll beat you AGAIN</strong></p>
													</div>
												</div>

												<div className="row message-row">
													<div className="col s2 message-icon">
														<Chip>
															<img src='assets/img/x-corp.jpg' alt='Contact Person' />
															X Corporation
														</Chip>
													</div>
													<div className="col s10 message-text">
														<p><strong>This is Todd from X Corp, We have a job offer you might be interested
														in. One of our top developers Frank Schmidt highly recommended you. We would 
														love a have a chat and tell you about the opening we have. Our office number is (646) 
														555-1234, feel free to call anytime, thanks.</strong></p>
													</div>
												</div>

											</div>

											<div className="col s1">
											</div>
										</div>
									</Modal>
									{/* END MESSAGE ICON */}


									{/* SETTINGS ICON */}
									<Dropdown trigger={
										<li><a href="#"><i className="fa fa-cog nav-icon" aria-hidden="true"></i></a></li>
										}>
										<NavItem divider />
										<i class="fa fa-sign-out nav-icon" aria-hidden="true"></i>
										<NavItem>Sign Out</NavItem>
										<NavItem divider />


										<Modal
											header='Edit Background Style'
											fixedFooter
											trigger={
												<NavItem>Edit Style</NavItem>
											}>
												
											<div className="row">
										    <form className="col s12">

										    	<div className="row">
										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
											    			<img src="assets/img/pattern-1.png" className="responsive-img" />
											    		</div>
											    		<Input name='group1'
											    		 type='radio'
											    		 value='pattern_1'
											    		 label='Pattern One'
											    		 checker={this.props.background === "pattern_1"}
											    		 onClick={this.handleOptionChange}

											    		  />
										    		</div>

										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
										    				<img src="assets/img/pattern-2.jpg" className="responsive-img" />
										    			</div>
											    		<Input name='group1' 
											    		type='radio' 
											    		value='pattern_2' 
											    		label='Pattern Two'
											    		checker={this.state.background === "pattern_2"}
											    		onClick={this.handleOptionChange}

											    	  />
										    		</div>

										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
										    				<img src="assets/img/pattern-3.png" className="responsive-img" />
										    			</div>
											    		<Input name='group1'
											    		 type='radio'
											    		  value='pattern_3'
											    		   label='Pattern Three'
											    		  checker={this.props.background === "pattern_3"}
											    		 onClick={this.handleOptionChange} />
										    		</div>										        
										      </div>

										      <div className="row">
										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
										    				<img src="assets/img/pattern-4.jpg" className="responsive-img" />
										    			</div>
											    		<Input name='group1'
											    		 type='radio'
											    		  value='pattern_4'
											    		   label='Pattern Four'
											    		   checker={this.props.background === "pattern_4"}
											    		 onClick={this.handleOptionChange} />
										    		</div>

										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
										    				<img src="assets/img/pattern-5.png" className="responsive-img" />
										    			</div>
											    		<Input name='group1' 
											    		type='radio'
											    		 value='pattern_5'
											    		  label='Pattern Five' 
											    		  checker={this.props.background === "pattern_5"}
											    		 onClick={this.handleOptionChange}/>
										    		</div>

										    		<div className="col s4 center-align">
										    			<div className="pattern-form z-depth-3">
										    				<img src="assets/img/pattern-6.jpg" className="responsive-img" />
										    			</div>
											    		<Input name='group1'
											    		 type='radio' 
											    		 value='pattern_6'
											    		  label='Pattern Six'
											    		  checker={this.props.background === "pattern_6"}
											    		  onClick={this.handleOptionChange} />
										    		</div>										        
										      </div>

										      <br />
													
													{/* SUBMIT BUTTON */}
													<div className="row">
														<button className="btn-large waves-effect waves-light"
														 type="submit" 
														 name="action"
														 onClick={this.submitBackground}
														 >
															Submit
													  </button>
												  </div>
													{/* END SUBMIT BUTTON */}

										    </form>	
											</div>
										</Modal>


									</Dropdown>
								{/* END SETTINGS ICON */}
      

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